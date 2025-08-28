#!/usr/bin/env python3
"""
JavaScript Minifier with Error Checking and Validation
Requires: pip install jsmin
"""

import os
import gzip
import argparse
import subprocess
import sys
from pathlib import Path
from jsmin import jsmin

def check_node_available():
    """Check if Node.js is available for syntax validation"""
    try:
        subprocess.run(['node', '--version'], capture_output=True, check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        return False

def validate_js_syntax(js_code, filename="temp.js"):
    """Validate JavaScript syntax using Node.js if available"""
    if not check_node_available():
        print("⚠️  Node.js not found - skipping syntax validation")
        return True, ""
    
    try:
        # Create a temporary file to test
        temp_file = f"/tmp/{filename}"
        with open(temp_file, 'w', encoding='utf-8') as f:
            f.write(js_code)
        
        # Try to parse with Node.js
        result = subprocess.run(
            ['node', '-c', temp_file], 
            capture_output=True, 
            text=True
        )
        
        # Clean up
        os.unlink(temp_file)
        
        if result.returncode == 0:
            return True, ""
        else:
            return False, result.stderr
            
    except Exception as e:
        print(f"⚠️  Syntax validation failed: {e}")
        return True, ""  # Assume valid if we can't check

def safe_minify(js_code, preserve_newlines=False):
    """Minify with different options if standard minification fails"""
    
    # Try standard minification first
    try:
        minified = jsmin(js_code)
        if minified.strip():  # Make sure we got output
            return minified, "standard"
    except Exception as e:
        print(f"⚠️  Standard minification failed: {e}")
    
    # Try with quote_chars option
    try:
        minified = jsmin(js_code, quote_chars="'\"`")
        if minified.strip():
            return minified, "quote_chars"
    except Exception as e:
        print(f"⚠️  Quote-chars minification failed: {e}")
    
    # Last resort - basic whitespace removal
    try:
        lines = js_code.split('\n')
        cleaned_lines = []
        
        for line in lines:
            # Remove leading/trailing whitespace but keep line structure
            line = line.strip()
            if line and not line.startswith('//'):  # Skip empty lines and comments
                cleaned_lines.append(line)
        
        if preserve_newlines:
            minified = '\n'.join(cleaned_lines)
        else:
            minified = ' '.join(cleaned_lines)
            
        return minified, "basic"
        
    except Exception as e:
        print(f"❌ All minification methods failed: {e}")
        return js_code, "none"  # Return original if all else fails

def minify_and_gzip(input_file, output_dir=None, validate=True, preserve_newlines=False):
    """
    Minify JavaScript file with error checking and validation
    """
    input_path = Path(input_file)
    
    if not input_path.exists():
        raise FileNotFoundError(f"Input file not found: {input_file}")
    
    # Set output directory
    if output_dir:
        output_path = Path(output_dir)
        output_path.mkdir(parents=True, exist_ok=True)
    else:
        output_path = input_path.parent
    
    # Read original JavaScript
    with open(input_path, 'r', encoding='utf-8') as f:
        original_js = f.read()
    
    print(f"Processing {input_path.name}...")
    
    # Validate original syntax
    if validate:
        print("🔍 Validating original file syntax...")
        is_valid, error = validate_js_syntax(original_js, f"original_{input_path.name}")
        if not is_valid:
            print(f"❌ Original file has syntax errors:")
            print(error)
            return False
        else:
            print("✅ Original file syntax is valid")
    
    # Minify JavaScript with fallback options
    print("🔧 Minifying JavaScript...")
    minified_js, method = safe_minify(original_js, preserve_newlines)
    print(f"✅ Minification completed using '{method}' method")
    
    # Validate minified syntax
    if validate and method != "none":
        print("🔍 Validating minified code syntax...")
        is_valid, error = validate_js_syntax(minified_js, f"minified_{input_path.name}")
        if not is_valid:
            print(f"⚠️  Minified code has syntax errors:")
            print(error)
            print("🔄 Trying with preserved newlines...")
            minified_js, method = safe_minify(original_js, preserve_newlines=True)
            print(f"✅ Re-minified using '{method}' method with newlines")
            
            # Test again
            is_valid, error = validate_js_syntax(minified_js, f"minified_safe_{input_path.name}")
            if not is_valid:
                print(f"❌ Still has syntax errors. Using original code.")
                minified_js = original_js
                method = "none"
        else:
            print("✅ Minified code syntax is valid")
    
    # Create output filenames
    base_name = input_path.stem
    minified_file = output_path / f"{base_name}.min.js"
    gzipped_file = output_path / f"{base_name}.min.js.gz"
    
    # Write minified version
    with open(minified_file, 'w', encoding='utf-8') as f:
        f.write(minified_js)
    
    # Write gzipped version
    with gzip.open(gzipped_file, 'wt', encoding='utf-8') as f:
        f.write(minified_js)
    
    # Calculate compression stats
    original_size = len(original_js.encode('utf-8'))
    minified_size = len(minified_js.encode('utf-8'))
    gzipped_size = os.path.getsize(gzipped_file)
    
    print(f"\n📊 Compression Results:")
    print(f"✓ Original size: {original_size:,} bytes")
    print(f"✓ Minified size: {minified_size:,} bytes ({(1-minified_size/original_size)*100:.1f}% reduction)")
    print(f"✓ Gzipped size: {gzipped_size:,} bytes ({(1-gzipped_size/original_size)*100:.1f}% reduction)")
    print(f"✓ Method used: {method}")
    print(f"✓ Files created:")
    print(f"  - {minified_file}")
    print(f"  - {gzipped_file}")
    
    # Show first few lines of minified code for verification
    print(f"\n📝 First 200 characters of minified code:")
    print(f"   {minified_js[:200]}{'...' if len(minified_js) > 200 else ''}")
    
    return True

def main():
    parser = argparse.ArgumentParser(description="Minify JavaScript files with error checking")
    parser.add_argument("input", help="Input JavaScript file")
    parser.add_argument("-o", "--output", help="Output directory (default: same as input)")
    parser.add_argument("--no-validate", action="store_true", help="Skip syntax validation")
    parser.add_argument("--preserve-newlines", action="store_true", help="Preserve line breaks in output")
    
    args = parser.parse_args()
    
    input_path = Path(args.input)
    
    if not input_path.exists():
        print(f"❌ Error: Input file {args.input} does not exist")
        return
        
    if not input_path.is_file():
        print(f"❌ Error: {args.input} is not a file")
        return
        
    if input_path.suffix != '.js':
        print(f"❌ Error: Input file must have .js extension")
        return
    
    success = minify_and_gzip(
        args.input, 
        args.output, 
        validate=not args.no_validate,
        preserve_newlines=args.preserve_newlines
    )
    
    if success:
        print(f"\n🎉 Successfully processed {args.input}")
        print(f"\n💡 Troubleshooting tips if minified file doesn't load:")
        print(f"   1. Check browser console for JavaScript errors")
        print(f"   2. Compare file sizes - if minified is much smaller, content may be missing")
        print(f"   3. Try with --preserve-newlines flag if you have complex code")
        print(f"   4. Validate that all required dependencies are loaded before your script")
    else:
        print(f"\n❌ Failed to process {args.input}")

if __name__ == "__main__":
    main()

# Example usage:
# python minify_js_debug.py script.js
# python minify_js_debug.py script.js --preserve-newlines
# python minify_js_debug.py script.js --no-validate -o dist/

# Example usage:
# python3 minify_js.py sevn.js
# python minify_js.py script.js
# python minify_js.py src/ -o dist/
# python minify_js.py src/ -r -o dist/