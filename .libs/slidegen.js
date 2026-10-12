const slidegenlicense = "copyrights mGeek.in and Dr. Prateek Raj Gautam, soon to be released under Apache 2.0";
const slidegenversion = `v1.2.4`;

const setSlidegenTitle = () =>{
    setTimeout(()=>{
        try{ 
          var slideTitle = grab("sideroot h3,h2,h1")[0].innerText
          document.title = slideTitle;
          grab("title[0]").innerText = slideTitle;
        }  
        catch (e) {}
        },1000
    );
}; 

//STYLE
var slideScss = `

/* main.js/slideScss*/

@import url("https://fonts.googleapis.com/css2?family=Cantarell&display=swap");

:root {
    --hue: 276;
    --sat: 70%;
    --light: 10%;
    --hueAscent: 234;
    --lightAscent: 67%;
    --fontFamily: "Exo Roboto";
    --blockCountColor: #fff;
    --fontScale: 1;
    --fontsize: 1.3rem;
    --linkColor: hsl(var(--hue), 50%, 60%);
}

::selection {
    background: hsl(var(--hueAscent),
            var(--satAscent),
            calc(calc(var(--light) + var(--lightAscent)) / 2));
}

#app {
    position: relative;
}

#header {
    position: relative;

    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &:hover {
        opacity: 1;
    }
}

:fullscreen {
    background-color: hsl(var(--h), var(--s), var(--l));

    .slideroot {
        height: 100vh;
    }
}

.slideroot {
    position: sticky;
    top: var(--headerHeight, 60px);
    scroll-snap-type: y mandatory;
    height: calc(100vh - var(--headerHeight, 60px));

    overflow: scroll;
    background-color: hsla(0, 0%, 100%, 0.1);
}

.slide {
    position: relative;
    --padding: clamp(1em, 15vw, 2em);
    width: calc(100%);
    // height:calc(100vh - var(--headerHeight,60px));
    height: 100%;
    padding-inline: clamp(2em, 10vw, 10vw);
    padding-block: var(--padding);
    box-sizing: border-box;
    font-size: clamp(calc(0.8rem * var(--fontScale, 1)),
            3vw,
            calc(1.5rem * var(--fontScale, 1)));
    // background-color:hsla(0,0%,100%,.1);
    overflow-y: auto;
    scroll-snap-align: start;
    scroll-padding: var(--headerHeight, 60px);
    scroll-snap-stop: always;
    scroll-behavior: smooth;

    .slideCount {
        display: inline-block;
        position: absolute;
        top: 1em;
        right: 4em;
        font-size: calc(0.8rem * var(--fontScale, 1));
        color: var(--textColor);
        cursor: pointer;
        padding: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: hsl(var(--hueAscent, 30),
                var(--satAscent, 70%),
                var(--lightAscent, 50%));
        padding-block: 0.4em;
    }


    b,
    strong {
        color: hsl(var(--hue, 30),
                calc(var(--satAscent, 70%) * .9),
                calc(var(--lightAscent, 50%) * .8));
    }

    i,
    em {
        color: hsl(var(--hueAscent, 30),
                calc(var(--satAscent, 70%) * .9),
                calc(var(--lightAscent, 50%) * .8));
    }

    h1 {
        font-size: 1.5em;

        &:first-child {
            padding-top: 0px !important;
        }
    }

    h2 {
        font-size: 1.3em;
    }

    a {
        color: var(--linkColor, hsl(0, 0%, 100%));
    }

    &:nth-child(odd) {
        background-color: hsla(0, 60%, 40%, 0.05);
    }

    ol,
    ul,
    p,
    img {
        padding: clamp(0.5em, 10vw, 1em);
    }

    ol,
    ul {
        margin-left: 2em;
        padding-left: 1em;
    }

    li {
        padding-block: 0.2em;

        &:first-child {
            padding-top: 0px;
        }

        &:last-child {
            padding-bottom: 0px;
        }
    }

    img {
        max-width: 80vw;
        // max-height:80vh;
        aspect-ratio: prefer-content;
        padding: 1em;
    }

    blockquote {
        padding-block: 0.1em;
        padding-inline: 1em;
        font-style: italic;
        text-shadow: 0.05em 0.05em 0 hsla(var(--hueAscent), 70%, 40%, 0.4);
    }

    p {
        padding: 0px;
        padding-block: .5em;

        &:empty {
            display: none;
        }
    }
}

table {
    position: relative;
    display: block;
    width: 90%;
    padding: 0.5em;
    margin: 2em;
    margin-inline: auto;
    box-shadow: 0 0 5px var(--testShadow, black);
    overflow: auto;

    thead,
    td:nth-child(1) {
        position: relative;
    }

    thead,
    tbody {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    tr {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        padding: 0.2em;

        td {
            display:flex;
            width: 100%;
            padding: 0.2em;
            background: red;
            background-color: hsla(var(--hue, 0), 60%, 5%, 0.1);

            &:nth-child(even) {
                background-color: hsla(var(--hue, 0), 60%, 5%, 0.1);
            }

            &:hover {
                background-color: hsla(var(--hue, 0), 60%, 45%, 0.2);
            }
        }

        .left {
            justify-content: left;
        }

        .right {
            justify-content: right;
        }

        .justify {
            justify-content: justify;
        }

        .center {
            justify-content: center;
        }

        &:nth-child(even) {
            background-color: hsla(var(--hue, 0), 40%, 35%, 0.15);
        }

        &:hover {
            background-color: hsla(var(--hue, 0), 60%, 45%, 0.2);
        }
    }
}

#sideBar {
    display: block;
    position: fixed;
    top: 0;
    height: 100vh;
    padding: 1em;
    margin-inline: auto;
    z-index: 100;
    left: 0;
    width: clamp(150px, 5vw, 10vw);
    transition: all 0.1s ease-in-out;
    background-color: hsla(var(--hue), 70%, 5%, 1);
    opacity: 0;

    transform: translateX(calc(-100% + 2em));

    &:hover {
        opacity: 1;
        border-right: 1px solid hsla(var(--hueAscent), 50%, 10%, 1);
        box-shadow: 1em 0 0.5em hsla(0, 0%, 0%, 0.2);
        transform: translateX(0);
    }

    #slidenav {
        position: relative;
        height: 100%;
        padding-block: 1em;
        width: 100%;

        .sideBarSearchInput{
          position: relative;
          max-width:100%;
          padding:.2em;
          margin-top: .5em;
          border:2px solid var(--textColor);
          border-radius:.5em;
         }



        #slidenavlist {
            position: relative;
            height: calc(90vh - 2em);
            overflow-y: auto;
            margin-top: 1em;
            padding: 5px;
            list-style-type: none;
            font-size: 0.8em;

            li {
                margin-block: .5em;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-inline:.5em;
                cursor: hand;

                a, .slideNavLink {
                    background-color: hsl(var(--hue), 50%, 95%);
                    color: var(--accentColor, hsl(var(--hueAscent), 80%, 20%));
                    border-radius: 5px;
                    font-weight: bold;
                    box-shadow: 0.1em 0.1em 5px hsla(0, 0%, 0%, 0.2);

                    display: flex;
                    flex-direction:column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    min-width: 6em;
                    height: 100%;
                    min-height: 2em;
                    text-decoration: none;

                    &:hover,
                    .active {
                        outline: 2px solid aqua;
                    }

                    p{
                    font-weight: normal;
                    font-size:.8em;
                    padding-inline:.5;
                    
                    }
                }

                &:nth-last-child(1) {
                    margin-bottom: 40vh;
                }

                &:nth-first-child(1) {
                    margin-top: 2em;
                }
            }
        }
    }
}

.blockroot {
    position: sticky;
    top: 0;
    height: 100vh;
    padding-block: 2em;
    padding-inline: clamp(2em, 10vw, 30vw);
    margin-block: 0em;
    overflow: scroll;
    background-color: hsla(0, 0%, 100%, 0.1);
    overflow-y: auto;

    scroll-snap-type: y mandatory;
    scroll-snap-align: start;
    scroll-padding: var(--headerHeight, 60px);
    scroll-snap-stop: always;
    scroll-behavior: smooth;

    .block {
        margin-inline: auto;
        margin-block: 2em;
        word-break: break-word;
        width: 100%;
        padding: 0.5em;
        // background-color:hsla(0,0%,100%,.1);

        box-shadow: 1px 1px 0.5em hsla(0, 0%, 0%, 0.2);

        pre {
            // display:block;
            // margin-block:1em;
            padding: 0;
            margin: 0;
            box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.2);

            code {
                display: block;
                margin: 0;
                padding: 0.5em;
                margin-inline: 0.2em;
                padding-inline: 0.2em;

                span {
                    padding: 0;
                    margin: 0;
                }
            }
        }

        &:last-child {
            margin-bottom: 10em;
        }

        .execution_count {
            font-weight: 300;
            font-size: 0.6em;
            // padding:.1em;
            // margin:.1em;
        }
    }

    .input {
        display: block;
        margin-inline: auto;
        margin-block: 1em;
        // background-color:hsla(0,0%,0%,.1);
        font-family: "consoles", "terminal", "monospace";
        overflow-x: auto;
    }

    .output {
        display: block;
        font-family: "consoles", "terminal", "monospace";
        background-color: hsla(0, 0%, 0%, 0.05);

        // overflow-x:auto;
        // outline:1px solid black;
        img {
            margin-inline: auto;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        .success {
            color: green;
        }

        .fail {
            color: red;
        }
    }
}

.needs-background-light {
    background: hsla(0, 0%, 100%, 0.9) !important;
    padding-block: 1em;
}

.code {
    background-color: hsla(0, 0%, 100%, 0.8);
//    color: #333;
    padding: 1em;
}

#app{
  user-select: none;
  code{
    user-select:text;
    &:selection{
        background: gray;
    }
  }
}

#titleheading {
    a {
        link-style: none;
        text-style: none;
    }
}

#fullscreenTitle {
    display: grid;
    place-items: center;
    margin: 0 auto;
    padding: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 2em;
    z-index: 1000;
}




.cross {
    position: absolute;
    top: 1em;
    display: inline-block;
    right: 1em;
    height: 1em;
    width: 1em;
    cursor: pointer;

    &:before {
        content: "";
        background-color: white;
        display: inline-block;
        position: absolute;
        width: 15%;
        height: 100%;
        transform: rotate(-45deg);
    }

    &:after {
        content: "";
        background-color: white;
        display: inline-block;
        position: absolute;
        width: 15%;
        height: 100%;
        transform: rotate(45deg);
    }
}



.MathJax {
    padding: 2px 5px;
    cursor: pointer;
}



`;




var pdfdialogscss=`


.pdfdialog{
   position: absolute;
   top:10%;
   left:10%;
   width:80%;
   height: 80%;
   border-radius: 2em;
   border:1px solid var(--ascentColor);
   background-color: hsla(var(--hue),var(--sat),var(--light),.3);
   display: flex;
   flex-direction: column;
   overflow: auto;
   box-shadow: 2px 5px 15px gray;
   backdrop-filter:blur(4px);

  
  .download {
    max-width: 15em;
    padding:1em;
    margin: 2em 0;
    display:flex;
    align-self:center;
    
  }
  
  .mainpdf{
    height: 100%;  
  }
  
    &:modal{    
    backdrop-filter: blur(10px);
    box-shadow: 1px 1px 1em white;
  }
  

  .closedialog{
    position: absolute;
    top:1em;
    right:1em;
    transform: translateY(50%) rotate(45deg); 
    padding:2em;
    cursor:pointer;
    &:after{
      
      content:"";
      position: absolute;
      top:0;
      left:0;
      background-color: white;
      width:1.5em;
      height: 2px; 
      transform: translateY(50%) rotate(90deg); 
    }

    &:before{
      content:"";
      position: absolute;
      top:0;
      left:0;
      background-color: white;
      width:1.5em;
      height: 2px; 
   
  }
}
  
  
}
`
//loadscss(slideScss)

function openFile() {
  var fileObj = grab("#open")[0].files[0];
  var fileName = fileObj.name;
  var fileType = fileObj.type;
  var fileUrl = URL.createObjectURL(fileObj);
  ext = fileName.split(".").pop();
  if (fileType == "text/markdown" || ext == "md" || ext == "markdown") {
    parseSlide(fileUrl, mathjaxHljsCopyIcon);
  }
  if (fileType == "application/x-ipynb+json" || ext == "ipynb") {
    parseNotebook(fileUrl,mathjaxHljsCopyIcon);
  }
  // updateFiledropEventListeners()
}

function cloneView() {
  var url = window.location.href;
  // window.open(url, '_blank');
  window.open(url, "newwindow", "width=600,height=400");
  gen(a, "clone", "Open Clone Window", "hide", {
    href: window.location.href,
    target: "_blank",
  }).click();
}

function toggleHints() { }

// Fullscreen
function toggleFullscreen() {
  if (document.fullscreenElement) {
    // append(fullscreenTitle, "", 'replace')
    document.exitFullscreen();
  } else {
    // document.documentElement.requestFullscreen();
    grab(`#main`)[0].requestFullscreen();
    var titlestr =
      document.title +
      router.pathname.replaceAll("/", " | ") +
      grab("h1")[0].innerHTML;
    // append(main, gen(div, "fullscreenTitle", titlestr), 'before')
  }
}

document.addEventListener("dblclick", (e) => {
  if (document.activeElement.tagName.toLowerCase() === "input") {
    return; // Do nothing if the user is typing in a search input
  }
  e.preventDefault();
  toggleFullscreen();
});

// ScrollControl

function scrollAction(direction = "down", scrollState) {
  var end =
    grab(`#slideroot`)[0].scrollHeight - grab(`#slideroot`)[0].offsetHeight;
  var offsetHeight = grab(`#slideroot`)[0].offsetHeight;

  if (!scrollState)
    scrollState = grab(`#slideroot`)[0].scrollTop / offsetHeight;
  var endState = end / offsetHeight;

  if (direction == "home") {
    grab(`#slideroot`)[0].scrollTop = 0;
  }
  if (direction == "end") {
    grab(`#slideroot`)[0].scrollTop = endState * offsetHeight;
  }
  if (direction == "up") {
    // grab(`#slideroot`)[0].scrollTop -= offsetHeight
    scrollState += 1;
    grab(`#slideroot`)[0].scrollTop = scrollState * offsetHeight;
  }
  if (direction == "down") {
    scrollState -= 1;
    grab(`#slideroot`)[0].scrollTop = scrollState * offsetHeight;
  }
}

// Keyboard Control
function keyPressHandler(e) {

  if (document.activeElement.tagName.toLowerCase() === "input") {
    return; // Do nothing if the user is typing in a search input
  }

  // e.preventDefault()
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
  } else {
    var key = e.key.toLowerCase();
    // log(key)
    if (key == "arrowdown" || key == "pagedown" || key == "arrowright") {
      e.preventDefault();
      scrollAction("up");
    }
    if (key == "arrowup" || key == "arrowleft" || key == "pageup") {
      e.preventDefault();
      scrollAction("down");
    }
    if (key == "home") {
      e.preventDefault();
      scrollAction("home");
    }
    if (key == "end") {
      e.preventDefault();
      scrollAction("end");
    }
    if (key == "f") {
      e.preventDefault();
      toggleFullscreen();
    }
    if (key == "o") {
      e.preventDefault();
      openFile();
    }
    if (key == "c") {
      e.preventDefault();
      cloneView();
    }
    if (key == "h") {
      e.preventDefault();
      toggleHints();
    }
    if (key == "r") {
      e.preventDefault();
      reloadPage();
    }
    if (key == "enter") {
      e.preventDefault();
      if (document.activeElement != document.body) {
        document.activeElement.click();
      }
    }
    if (key == "backspace") {
      e.preventDefault();
      grab(".pathNavigator")[grab(".pathNavigator").length - 1].click();
    }
    if (key == "escape") {
      e.preventDefault();
      //closeModal may interfere with fullscreenmode
    }
  }
  if (e.ctrlKey && e.key.toLowerCase() == "o") {
    e.preventDefault();
    grab("#open")[0].click();
  }
  e.stopPropagation();
}



document.addEventListener("keydown",keyPressHandler,false);

const hashChannel = new BroadcastChannel("hashChannel");

window.addEventListener("hashchange", (e) => {
  hashChannel.postMessage({
    dir: router.dir.substring(1),
    file: router.file,
  });
});

hashChannel.addEventListener("message", (e) => {
  var dir = e.data.dir;
  var file = e.data.file;
  // var router = new Router()
  // if ((router.dir != dir) || (router.file != file)) {
  //     router.setdirpath(dir, file)
  // }
});

const convertLocalLinks = () => {
  // var router = new Router(); xxx
  setTimeout(() => {
    // document.body.innerHTML = document.body.innerHTML.replaceAll(
    //   "./",
    //   router.dirpath
    // );
    
    //replace selectively only in a tag href script src, picture image or video
    "a,script,picture,image,video,object".split(",").forEach(tagname => {
      grab(tagname).forEach(a => {
        try {
          a.href = a.href.replaceAll("./",router.dirpath)
        } catch(e){}
        try{
        a.src = a.src.replaceAll("./",router.dirpath)
        }catch(e){}
        try{
        a.source = a.source.replaceAll("./",router.dirpath)
        }catch(e){}
      })
      
    })

  }, 2000);


// setTimeout(()=>{
//   try{ 
//       document.title = grab("h1,h2,h3,h4,h5,h6,p")[0].innerHTML;
//   }  catch (e) { }
// },1000)

setSlidegenTitle();
};

function loadBasicSkeleton(title = "Home") {
  load("/style.scss");
  //your app logic
  append(app, "", "over"); /* reset app */
  append(app, gen(header, "header", "", "header"));
  append(header, gen(h3, "heading", gen(a, "", title, "title", "/")));
  // append(app, gen(main, "main", "", 'main', { "draggable": "true" }));
  append(app, gen(main, "main", "", "main", { tabindex: 20 }));
  append(main, gen(div, "appmain", "", "appmain container"));
  append(app, gen(footer, "appfooter", "", "footer"));
  append(appmain, gen(section, "hero", "", "hero"));
}

function dict2hash(dict) {
  var hash = "";
  Object.keys(dict).forEach((key) => {
    if (hash.length == 0) {
      hash = key + "=" + dict[key];
    } else {
      hash += "&" + key + "=" + dict[key];
    }
  });
  return hash;
}

function hash2dict(hash) {
  var dict = {};
  hash
    .substring(1)
    .split("&")
    .forEach((row) => {
      // var keyval = ""
      keyval = row.split("=");
      dict[keyval[0]] = keyval[1];
    });
  return dict;
}

// class Router { ... } // (Redundant class removed)




// ============================================================================
// ROUTER CLASS - Hash-based Navigation System
// ============================================================================

/**
 * Router class for managing application navigation and URL state
 * 
 * Architecture:
 * - Uses URL hash for storing directory and file paths
 * - Format: #dir=/path/to/folder/&file=filename.md
 * - Automatically updates URL when navigation changes
 * - Provides computed properties for full file paths
 * 
 * Properties:
 * - dir: Current directory path
 * - file: Current filename
 * - filepath: Full path to current file
 * - dirpath: Path to current directory
 * - hash: Current URL hash
 * - hashDict: Parsed hash as object
 * 
 * @debug Log router instance to inspect current navigation state
 */
class Router {
    /**
     * Initializes router by reading URL and hash
     * Automatically sets up navigation state from current URL
     */
    constructor() {
        this.dir = ""
        this.file = ""
        this.page = ""
        this.hashlink = ""
        this.hashObj = {}
        this.filepath = ""
        this.readfromurl()
        this.readHash()

        this.updateroute()
        return this.hash
    }

    /**
     * Parses current window location into router properties
     * Extracts: host, protocol, pathname, root, origin
     */
    readfromurl() {
        this.host = window.location.host
        this.protocol = window.location.protocol + "//"
        this.pathname = window.location.pathname
        this.root = this.protocol + this.host + this.pathname
        this.origin = window.location.origin

    }

    /**
     * Parses URL hash into router state
     * Extracts directory and file from hash parameters
     * Updates internal hashObj with all key-value pairs
     */
    readHash() {
        this.hash = window.location.hash
        this.hashDict = hash2dict(this.hash)
        this.hash.substring(1,).split("&").forEach(row => {
            var keyval = row.split("=")
            var key = keyval[0]
            var val = keyval[1]

            if (key == "dir" || key == "d") { this.dir = val }
            if (key == "file" || key == "f") { this.file = val }
            if (key == "p") { this.page = val }
            if (key == "h") { this.hashlink = val }
            
            this.hashObj[key] = val
        })
        this.setdirpath(this.dir, this.file)
    }

    /**
     * Updates router state and URL hash
     * Ensures directory paths end with /
     * Constructs full filepath from components
     * Updates window.location.hash if changed
     * 
     * @debug Critical method - log before/after state to debug navigation issues
     */
    updateroute(updateHash = true) {
        this.filepath = this.root
        // this.hash = `d=${this.dir}&f=${this.file}&p=${this.page}&h=${this.hashlink}`
        // this.hash = `d=${this.dir}&f=${this.file}`
        this.hash ="";
        if (this.dir.length>1) this.hash+=`d=${this.dir}&`;
        if (this.file!="") this.hash+=`f=${this.file}&`;
        if (this.page) this.hash+=`p=${this.page}&`;
        if (this.hashlink) this.hash+=`h=${this.hashlink}`;
        if (this.hash[this.hash.length-1] == "&") this.hash=this.hash.substring(0,this.hash.length-1)



        if (this.dir.length == 0 || this.dir == "/") {
            this.dir = "/"
        }
        else {
            if (this.dir.substring(this.dir.length - 1) != "/") {
                this.dir += "/"
            }
            this.filepath += this.dir
        }

        this.dirpath = this.filepath
        if (this.file.length > 0) {
            this.filepath += this.file
        }

        var oldhash = window.location.hash
        if (updateHash && oldhash != "#" + this.hash) {
            window.location.hash = this.hash
        }
    }

    /**
     * Sets directory and file path, then updates route
     * 
     * @param {string} dir - Directory path
     * @param {string} file - Filename
     * @param {string} url - Base URL (default: current origin)
     */
    setdirpath(dir = "", file = "", url = window.location.origin) {
        // window.location.href = url
        this.dir = dir
        this.file = file
        this.updateroute()
    }
    
    /**
     * Getter: Returns full filepath to current view
     * @returns {string} Complete URL to current file
     */
    get view() {
        return this.filepath
    }

    /**
     * Setter: Updates current file and refreshes route
     * @param {string} file - New filename
     */
    set setfile(file) {
        this.file = file

        this.updateroute()
    }

    /**
     * Setter: Updates current directory and refreshes route
     * @param {string} dir - New directory path
     */
    set setdir(dir) {
        this.dir = dir

        this.updateroute()
    }



}

/**
 * Global router instance
 * Used throughout application for navigation state
 * 
 * @debug Access via browser console: window.router or just router
 */
const router = new Router()











function footerButtons() {
  if (grab(`#footerButtons`).length != 0) {
    append(`#footerButtons`, "", "replace");
  }
  append(`#appfooter`, gen(div, "footerButtons", ""), "before");
  append(
    `#footerButtons`,
    gen(span, "reload", "Reload", "button,reloadPage", {
      onclick: "reloadPage()",
      title:"Reload Page",
    })
  );
  append(
    `#footerButtons`,
    gen(span, "print", "Print Slides", "button,printSlides", {
      onclick: "printSlides()",
      title:"Suitable for converting in to PDF, try print with no margin and background color",
    })
  );
  append(
    `#footerButtons`,
    gen(span, "print", "Print Notes", "button,printSlides", {
      onclick: "printNotes()",
      title:"Suitable for actual printing notes in fewer pages",
    })
  );
  append(
    `#footerButtons`,
    gen(input, "open", "", "hide", {
      type: "file",
      accept: ".md,.markdown,.ipynb,png,jpg,mp4",
      onchange: "openFile()",
      multiple: "true",
    })
  );
  // append(`#footerButtons`, gen(input, "open", "Open", "button,openFile", { "type": "file", "onchange": "openFile()" }))
  append(
    `#footerButtons`,
    gen(label, "openbtn", "Open", "button,openFile", { for: "open",
      title:"Open local markdown(.md) or interactive python notebook(.ipynb)", })
  );
}

function generateView() {
  if (grab("#appmain").length != 0) {
    append("#appmain", "", "over");
  }
  // append(main, gen(main, "main", "", ",main"), "replace")
  
  var file = router.file;
  if (file.length == 0) {
    router.file = "list.txt";
    router.updateroute(false);
    file = "list.txt";
  }

  var ext = file.split(".").pop();
  const route = {
    txt: () => {
      parselist(router.view);
    },
    csv: () => {
      parseCsv(router.view);
    },
    md: () => {
      parseSlide(router.view, mathjaxHljsCopyIcon);
    },
    ipynb: () => {
      parseNotebook(router.view,mathjaxHljsCopyIcon);
    },
    pdf: () => {
      showPDF(router.view);
    },
  };
  try {
    route[ext]();
    updateFiledropEventListeners();
    imageFullscreenToggle();
  } catch (e) { }

  // updateFiledropEventListeners()
};





function downloadURL(
  fileListUrl = window.location.origin + window.location.pathname + "list.txt",
  target = "#main"
) {
  // log(fileListUrl)
  var f=fileListUrl.split("/")
  var FileName =f[f.length-1];
  // log(f[-1])
  append(main,gen(a,"tempdownload","Download " + FileName,"hide",{href:fileListUrl,target:"_blank",download:FileName}))
  setTimeout(() => {
    grab("#tempdownload[0]").click()
    append("#tempdownload","",'r');
  }, 1000);
  
}









async function filedetect() {
  // var router = new Router(); xxx
  var presentfile = "";
  var files = "slide.ipynb,slide.md".split(",");
  files.forEach((file) => {
    var testpath = router.root + router.dir.substring(1) + file;
    fetch(testpath).then((res) => {
      if (res.status == 200) {
        router.setfile = file;
      }
    });
  });
  return presentfile;
}






/**
 * Handles URL hash changes to update application state.
 * 
 * @debug Triggered on hashchange. 
 * Checks if directory has an index.html and redirects if so.
 * Reloads the page view.
 */
function updateOnHashChange() {
  window.removeEventListener("hashchange", updateOnHashChange);
  
  // Use global router instance
  if (router.dir != "/") {
    var indexpath = router.root + router.dir.substring(1) + "index.html";
    var newroot = router.root + router.dir.substring(1);
    var old_dir = router.dir;
    router.dir = "/";
    fetch(indexpath).then((res) => {
      if (res.status == 200) {
        window.location.href = newroot;
      }
    });
  }

  reloadPage();
};

function reloadPage() {
  sessionStorage.clear();
  localStorage.clear();
  paginationUpdate();
  generateView();
  footerButtons();
  window.scrollTo(0, 0);
  window.addEventListener("hashchange", updateOnHashChange);
  // convertLocalLinks()
}


function printSlides(){
  loadscss(printSlideStyle,"printSlideStyle");
  window.print()
}

function printNotes(){
  loadscss(printNotesStyle,"printNotesStyle");
  window.print()
}






function appendBackButton() {
  if (grab("#back").length != 0) {
    append("#back", "", "replace");
  }

  append(
    `#location`,
    gen(span, "back", "Back", "pathNavigator", {
      "data-path":router.dirpath,
      "data-dir":router.dir,
      onclick: "changepath(this)",
      tabindex: 20,
    })
  );
}




function changepath(thispath) {
  var dir = thispath.dataset.dir;
  
  // Use global router instance
  router.setfile = "";
  router.setdir = dir;
};



// navication links
function paginationUpdate(loc = "") {
  router.readHash();
  loc = router.pathname + router.dir;
  if (grab("#location").length != 0) {
    append("#location", "", "replace");
  }

  // try { append(`#location`, "", "replace") } catch { }
  append(`#header`, gen(nav, "location", ""));
  var root = router.protocol + router.host;
  var path = "/";

  var printLocation = loc.replaceAll("https://", "").replaceAll("http://", "");
  printLocation.split("/").forEach((l) => {
    if (l.length > 0) {
      l = l.replaceAll(/(\%20|\s)+/g," ")
      // log(l)
      path += l + "/";
      // append("#location", gen(a, '', l, 'pathNavigator', root + path, { "onclick": "updateOnHashChange()" }))
      append(
        "#location",
        gen(span, "", l, "pathNavigator", {
          "data-path": root + path,
          "data-dir":path,
          onclick: "changepath(this)",
          tabindex: 20,
        })
      );
      // append("#location", gen(span, '', "  ", 'spacer'))
    }
  });
  // generateView()
}

loadBasicSkeleton();







  const appendDir = (e) => {
    var newDir = router.dir + e.dataset.dir;
    newDir = newDir.replaceAll("//", "/").replaceAll("\\\\", "\\");
    router.setdirpath(newDir, "");
  }

  const appendfile = (e) => {
    router.setdirpath(router.dir, e.dataset.file);
  }




/*
 * Supported file types.
 * Each entry defines its HTML element, CSS classes, and click action.
 */
const fileTypes = {
  md: {
    tag: span,
    className: "slideLinks",
    action: "appendfile"
  },
  ipynb: {
    tag: span,
    className: "slideLinks,notebookLinks",
    action: "appendfile"
  },
  pdf: {
    tag: object,
    className: "pdfLinks",
    action: "parsePdf"
  },
  csv: {
    tag: object,
    className: "csvLinks Links",
    action: "parseCsv"
  },
  docx: { tag: span, className: "Links Downloadable", action: "downloadURL" },
  xlsx: { tag: span, className: "Links Downloadable", action: "downloadURL" },
  pptx: { tag: span, className: "Links Downloadable", action: "downloadURL" },
  odt:  { tag: span, className: "Links Downloadable", action: "downloadURL" },
  ods:  { tag: span, className: "Links Downloadable", action: "downloadURL" },
  odp:  { tag: span, className: "Links Downloadable", action: "downloadURL" }
};

// Remove whitespace and a leading "./" prefix.
function cleanPath(path) {
  return path.trim().replace(/^\.\//, "");
}

// Extract the extension from the filename, not its directory path.
function getExtension(path) {
  const filename = path.split("/").filter(Boolean).pop() || "";
  const dot = filename.lastIndexOf(".");

  return dot > 0 ? filename.slice(dot + 1).toLowerCase() : "";
}

// Create a readable label from a file or directory path.
function getDisplayName(path) {
  return path
    .replace(/\/$/, "")
    .replace(/\.[^.\/]+$/, "")
    .replaceAll("/", " / ")
    .replaceAll("-", " ")
    .replaceAll("_", " ");
}

// Determine whether an entry represents a directory.
// Change this if your list generator uses a different directory format.
function isDirectory(path) {
  return path.endsWith("/") || getExtension(path) === "";
}

// Create the appropriate element for one file.
function renderFile(path, currentLocation) {
  const ext = getExtension(path);
  const config = fileTypes[ext];

  // Ignore file types that have no configured renderer.
  if (!config) return;

  const file = cleanPath(path);
  const url = currentLocation + file;
  const name = getDisplayName(file);

  // Keep the original onclick-based integration with your existing handlers.
  const actions = {
    appendfile: `appendfile(this)`,
    parsePdf: `parsePdf(\`${url}\`)`,
    parseCsv: `parseCsv(\`${url}\`)`,
    downloadURL: `downloadURL(\`${url}\`)`
  };

  const attrs = {
    "data-ext": ext,
    "data-file": file,
    onclick: actions[config.action],
    tabindex: 10
  };

  // Preserve the original download title.
  if (config.action === "downloadURL") {
    attrs.title = `download ${ext}`;
  }

  append(
    directoryGrid,
    gen(config.tag, url, name, config.className, attrs)
  );
}

function parselist(
  fileListUrl = window.location.origin + window.location.pathname + "list.txt",
  target = "#main"
) {
  getfile(fileListUrl, (filelist) => {
    // Create the main containers once.
    append(target, "", "over");
    append(target, gen(div, "appmain", "", "appmain"), "over");
    append(appmain, gen(div, "directoryGrid", "", "dirGrid"));

    const currentLocation = router.dirpath;

    // Clean the entries before sorting and processing them.
    const links = filelist
      .split(/\r?\n/)
      .map(cleanPath)
      .filter(path => path && path !== "." && path !== "../")
      .sort();

    links.forEach((path) => {
      // Skip parent-directory traversal entries.
      if (path.startsWith("../")) return;
      if (path[0] == "." ) return;

      // Render directories separately from files.
      if (isDirectory(path)) {
        const dir = path.replace(/\/$/, "");
        const name = getDisplayName(dir);

        append(
          "#directoryGrid",
          gen(span, "", name, "folderLinks", {
            "data-dir": dir,
            onclick: "appendDir(this)",
            tabindex: 10
          })
        );

        return;
      }

      // All supported files share the same rendering logic.
      renderFile(path, currentLocation);
    });
  });
}




function mathjaxHljsCopyIcon() {
  console.info("mathjaxHljsCopyIcon");
  load(
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css"
  );
  load(
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"
  );

  setTimeout(() => {
    MathJax.startup.document.state(0);
    MathJax.texReset();
    MathJax.typesetClear();

    grab("code").forEach((c) => {
      c.innerHTML = c.innerHTML.replaceAll("<br>", "\n");
    });
    hljs.highlightAll();
    setTimeout(WebHelper().addCopyIcon(), 1000);
    MathJax.typesetPromise();
  }, 2000);
}



function filtertable(){
  var searchInput = grab(`#searchcsv[0]`).value;
  var rows = grab(`tbody .tablerow`);
  if (searchInput.length == 0){
    //show all rows
    rows.forEach(row=>{
      row.classList.add("hide");
    });
  }
  else{
    rows.forEach(row=>{
      row.classList.add("hide");
      if (row.innerText.toLowerCase().includes(searchInput.toLowerCase())){
        row.classList.remove("hide");
      };

    });
  };
};  

function parseCsv(link, callback) {
  var filename=link.split("/")[link.split("/").length-1]
  router.setfile=filename
  console.info("parsecsv");
  loadscss(slideScss);
  getfile(link, (csv) => {
    if (grab("#back").length != 0) {
      append("#back", "", "r");
    }


    appendBackButton()

    append(`main`, "", "over");
    updateFiledropEventListeners();


    var listrootscss=`
    .listroot{
      display:flex;
      flex-direction:column;
      min-height:40vh;
      padding-block: 2em;
      padding-inline:clamp(5em,5vw,1em);

      h1{
        text-transform: capitalize;

      }


      .listheader{
        padding-block:1em;
      }

      .search{
        display: block;
        margin: 0 auto;
        background-color: hsl(var(--hue,5%,5%));
        color:white;
        width: 90%;
        border-radius: .5em;
        border: 1px solid white;
        padding: .5em 1em;
        outline:none;
      }


    }
    
    `
    loadscss(listrootscss)


    
    
    append(`main`, gen(div, "listroot","", "listroot"));
    append(`#listroot`,gen(h1,filename,filename.replaceAll("%20"," ")))
    append(`#listroot`,gen(div,"listheader","","listheader"))
    append(`#listheader`,gen(input,"searchcsv","search","search",{title:"search","onkeydown":"filtertable()"}))
    
    
    var searchElement=grab("#searchcsv")[0]
    searchElement.addEventListener('focus', (e)=> {
      
      console.log("searchIn focus")
      document.removeEventListener("keydown",keyPressHandler)
      
    })

    searchElement.addEventListener('focusout',e=>{
      document.addEventListener("keydown",keyPressHandler) 
    })

    


    append(`#listroot`,gen(`table`,"tablemain","","listbody"))

    append(`#tablemain`,gen("thead","tablehead"))
    append(`#tablemain`,gen("tbody","tablebody"))
    // log(csv)

    var csvRows=csv.split("\n")
    for (var i = 0; i<csvRows.length; i++){
      var rowData=csvRows[i]
      // console.log(rowData)
      if (i==0) 
        {
          append("#tablehead",gen(`tr`,`tablerow${i}`,"","tablerow"))

        } 
      else
        {
          append("#tablebody",gen(`tr`, `tablerow${i}`, "", "tablerow"))
        }
      var colData = rowData.split(",")
      for (var j = 0; j<colData.length; j++){
        append(`#tablerow${i}`,gen(`td`, `tablecol${i}${j}`, colData[j]))
      }
    }




    
 
    //navigator Search 
    var searchElement=grab("#sideBarSearchInput")[0]
    searchElement.addEventListener('focus', (e)=> {
      // document.removeEventListener("keydown",keyPressHandler)
      e.stopPropagation()
      
    })






    convertLocalLinks();
    if (callback) {
      console.info("callback");
      callback();
    }
  });
}


































































// hide sidebar links on search
function handleSidebarSearch(){
  var allSlides=grab(".slide")
  var allSlidesNav=grab(".slideNavLink")
  var searchTerm=grab("#sideBarSearchInput")[0].value
  console.log(searchTerm)


  for(var i=0;i<allSlides.length;i++){
    allSlidesNav[i].parentElement.classList.add("hide")
    var s=allSlides[i]
    if (s.innerText.includes(searchTerm)){
      allSlidesNav[i].parentElement.classList.remove("hide")
    }
  }

  loadscss(`.hide{
    display: none !important;;
  }`,"hide")
}


function parseSlide(link, callback) {
  console.info("parseslide");
  // clear/reset dynamicScript
  append(`#dynamicScript`,"","r")
  var dynamicScript
  
  loadscss(slideScss);
  getfile(link, (md) => {
    appendBackButton()

    append(`main`, "", "over");
    updateFiledropEventListeners();
    append(`main`, gen(div, "slideroot", "", "slideroot"));
    append(slideroot, gen("aside", "sideBar", ""));
    append(sideBar, gen(div, "slidenav", gen(h3, "", "Navigator")));

    //add searchbar
    append(slidenav,gen(input,"sideBarSearchInput","","sideBarSearchInput",  {oninput:"handleSidebarSearch()"}))
    append(slidenav, gen(ul, "slidenavlist", "", "slidenavlist"));

    var html = md.split(/^---\s*?$/gm);

    for (var i = 0; i < html.length; i++) {
      var h = html[i];
      if (h.length > 0) {
        var x = parsemd(h, (H,S="") => {
          append(slideroot, gen(section, `slide${i}`, H, "slide"));
          // if (i != 0 && i != html.length) {
          if (i != 0) {
            append(
              grab(".slide")[i],
              gen(span, "", `${i + 1}/${html.length}`, "slideCount", {
                onclick: "mathjaxHljsCopyIcon()",
                title: "Re Render Math",
              })
            );
          }
          if(S!=""){
            // append("body",gen(script,"",S,"parsedmdScript"));
              //reset dynamicScript call at starting of parsemd
              // append(`#dynamicScript`,"","r")
              
              dynamicScript = gen(script,"dynamicScript",S,"dynamicScript");
              dynamicScript.textContent += S;
              append("body",dynamicScript);
          }
          append(
            slidenavlist,
            gen(
              li,
              "",
              gen(span, "", `Slide ${i + 1}`, "slideNavLink", {
                onclick: `slide${i}.scrollIntoView()`,
              })
            )
          );
        });
      }
      //update sidebar with slide headings
      var slideHeading=grab(".slide")[i].querySelectorAll("h1,h2,h3,h4,h5,h6,p")[0].innerText
      grab(".slideNavLink")[i].innerHTML+=`: ${gens(p,"",slideHeading,"sideNavLinkSummary")}`

    }
    append(
      slidenavlist,
      gen(
        li,
        "",
        gen(a, "src", `Source`, "slideNavLink", {
          onclick: `viewSourceFile('${link}')`,
          href: link,
          target: "_blank",
        })
      )
    );
    convertLocalLinks();
    if (callback) {
      console.info("callback");
      callback();
    }
  });
  
  setTimeout(() => {
    PageNavSelf.updatePageNavUl()
  },3000)



}

function parseNotebook(link, callback) {
  loadscss(slideScss);
  getfile(link, (nb) => {
    appendBackButton()

    if (grab("#main").length != 0) {
      append("#main", "", "over");

      updateFiledropEventListeners();
    }

    append(main, gen(div, "blockroot", "", "blockroot"));
    append(blockroot, gen("aside", "sideBar", ""));
    append(sideBar, gen(div, "slidenav", gen(h3, "", "Navigator")));
    append(slidenav, gen(ul, "slidenavlist", "", "slidenavlist"));

    var PrintFileName = link.split("/").pop().replaceAll(".ipynb", "").replaceAll("%20"," ");
    var nbmd = ``;

    append(
      blockroot,
      gen(h1, "Title", `Python Notebook: ${PrintFileName}`, "title")
    );
    nb = JSON.parse(nb);

    nb.cells.forEach((cell) => {
      if (cell.source.length > 0) {
        var cell_type = cell.cell_type;

        var ecount = cell.execution_count;

        if (cell_type == "markdown") {
          var src = cell.source;
          var md = src.join("\n");
          append(
            blockroot,
            gen(div, `Markdown${ecount}`, parsemd(md), "markdown block")
          );
        }
        if (cell_type == "code") {
          var count = cell.execution_count;

          var src = cell.source;
          var inputCode = src.join(""); //.replaceAll("<br>", "\r\n")
          append(blockroot, gen(div, `input${count}`, "", "input block"));
          append(
            `#input${count}`,
            gen(span, "", `In [${count}] :`, "execution_count")
          );
          append(
            `#input${count}`,
            gen(
              pre,
              "",
              gen(code, "", inputCode, "python language-python code")
            )
          );

          var outputs = cell.outputs;
          var status = "success";
          if (outputs.length > 0) {
            var status =
              outputs[0].output_type == "execute_result" ? "success" : "fail";
            append(
              blockroot,
              gen(
                div,
                `output${count}`,
                gen(span, "", `Out [${count}] :`, "execution_count"),
                `output block execution_count,${status}`
              )
            );
            outputs.forEach((output) => {
              // for (var j = 0; outputs.length; j++) {
              // var output = outputs[j]

              var output_type = output.output_type;
              if (output_type == "stream") {
                var text = output.text.join("");
                // append(`#output${count}`, gen(pre, "", text, `output ${output_type}`))
                append(
                  `#output${count}`,
                  gen("code", "", text, `${output_type}`)
                );
              }

              if (output_type == "display_data") {
                var data = output.data;
                if (data.hasOwnProperty("text/plain")) {
                  var text = data["text/plain"];
                  append(
                    `#output${count}`,
                    gen(
                      p,
                      "",
                      gen(code, "", text, `output ${output_type}`),
                      `output ${output_type}`
                    )
                  );
                  // append(`#output${count}`, gen(p, "", gen(code, "", text, `output ${output_type}`)))
                }

                if (data.hasOwnProperty("image/png")) {
                  var className = "";

                  var image = data["image/png"];
                  var src = `data:image/png;base64,${image}`;
                  if (output.metadata.hasOwnProperty("needs_background")) {
                    className = `needs-background-${output.metadata["needs_background"]}`;
                  }
                  append(
                    `#output${count}`,
                    gen(img, "", "", `output ${output_type} ${className}`, {
                      src: src,
                    })
                  );
                }
              }

              if (
                output_type == "execute_result" ||
                output_type == "display_data"
              ) {
                var data = output.data;
                if (data.hasOwnProperty("text/plain")) {
                  var text = data["text/plain"].join("");
                  // append(`#output${count}`, gen(pre, "", gen(code, "", text, `output ${output_type}`)))
                  append(
                    `#output${count}`,


                    gen("code", "", text, ` ${output_type}`)
                  );
                }
              }
            });
          }
        }
      }
    });
    // fill sidenav with data
    var noOfBlocks = grab(".block").length;
    for (var i = 0; i < noOfBlocks; i++) {
      append(
        grab(".block")[i],
        gen(span, "", `${i + 1}/${noOfBlocks}`, "slideCount hide", {
          onclick: "mathjaxHljsCopyIcon()",
          title: "Re Render Math",
        })
      );
      // append(slidenavlist, gen(li, "", gen(a, "", `Block ${i + 1}`, "slideNavLink", { "onclick": `block${i}.scrollIntoView()` })))
      append(
        slidenavlist,
        gen(
          li,
          "",
          gen(a, "", `Block ${i + 1}`, "slideNavLink", {
            onclick: `grab(".block")[${i}].scrollIntoView()`,
          })
        )
      );
    }
    // download source file
    var downloadFileName = `${link.split("/")[link.split("/").length - 2]}_${link.split("/")[link.split("/").length - 1]
      }`;
    append(
      slidenavlist,
      gen(
        li,
        "",
        gen(a, "src", `Source`, "slideNavLink", {
          onclick: `viewSourceFile('${link}')`,
          href: link,
          target: "_blank",
          download: downloadFileName,
        })
      )
    );
    append(
      blockroot,
      gen(
        span,
        "",
        gen(a, "src", `Download Source`, "button", {
          onclick: `viewSourceFile('${link}')`,
          href: link,
          target: "_blank",
          download: downloadFileName,
        })
      )
    );

    if (callback) {
      console.info("callback")
      callback()
    }
  });

  convertLocalLinks();
  updateFiledropEventListeners();
  mathjaxHljsCopyIcon();

  setTimeout(() => {
    PageNavSelf.updatePageNavUl()
  },3000)


    
}

function closeparent(e) {
  append(e.parentElement, "", "replace");
}

function parsePdf(link) {
  loadscss(slideScss);
  // router = New Router()
  link = link.replaceAll("./", router.dirpath);
  // log(link)

  // append(`main`, "", "over")
  append(`#main`, gen(dialog, "pdfdialog", "", "pdfdialog active modal"));
  append(pdfdialog,"","o")
  append(pdfdialog, gen(a, "", "Download PDF", "download button", link));
  append(
    pdfdialog,
    gen("object", "mainpdf", "", "mainpdf", {
      // width: "80%",
      // height: "80vh",
      data: link,
      type: "application/pdf",
    })
  );
  // pdfdialog.classList.add("showdialog");
  // pdfdialog.showModal();
  loadscss(pdfdialogscss,"pdfdialogscss");
  pdfdialog.showModal();
  grab(".pdfdialog")[0].addEventListener('click', (event) => event.stopPropagation());

  grab("#main")[0].addEventListener('click', () => {
    grab(".pdfdialog")[0].close()
    // log("click")
  });
  


  // pdfdialog.addEventListener("blur", () => {
  //   append(".pdfdialog","","o")
  //   // pdfdialog.classList.remove("showdialog");
  //   pdfdialog.close();
  //   log("blur")
  //   append(pdfdialog,"","r")
  // });


  append(
    pdfdialog,
    gen(span, "closedialog", "", "closedialog cross", {
      onclick: "closeparent(this)", title:"close pdf"
    })
  );
}

WebHelper().init();
if (window.location.href.includes("Gallery")) {
  // log("gallery")
  setTimeout(() => {
    load("/gallery.js");
  }, 1000);
}

reloadPage();

//
function updateFiledropEventListeners(target = grab("#main")[0]) {
  // e.preventDefault ();
  // e.stopPropagation ();
  // log("updateFiledropEventListeners")
  target.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  target.classList.remove("blur");

  target.removeEventListener("drop", ondrop);
  target.removeEventListener("dragleave", ondragleave);
  target.removeEventListener("dragenter", ondragenter);

  target.addEventListener("dragenter", ondragenter, true);
  target.addEventListener("drop", ondrop, true);
  target.addEventListener("dragleave", ondragleave, true);

  function ondragenter(e) {
    e.preventDefault();
    e.stopPropagation();
    target.classList.add("blur");
  }

  function ondragleave(e) {
    e.preventDefault();
    e.stopPropagation();
    target.classList.remove("blur");
  }

  function ondrop(e) {
    e.preventDefault();
    e.stopPropagation();
    target.classList.remove("blur");
    dropfilehandler(e);
  }

  function dropfilehandler(e) {
    target.classList.remove("blur");
    console.log(e);
    var files = e.dataTransfer.files;
    for (var i = 0; i < files.length; i++) {
      var f = files[i];
      var fileName = f.name;
      var fileType = f.type;
      var fileUrl = URL.createObjectURL(f);
      var ext = fileName.split(".").pop();
      if (fileType == "text/markdown" || ext == "md" || ext == "markdown") {
        parseSlide(fileUrl, mathjaxHljsCopyIcon);
      }
      if (fileType == "application/x-ipynb+json" || ext == "ipynb") {
        parseNotebook(fileUrl);
      }
      // getfile(fileUrl, fileName)
    }
    updateFiledropEventListeners();
  }
}

// updateFiledropEventListeners()

updateFiledropEventListeners();

setTimeout(() => {
  try {
    load(`${router.dirpath}script.js`)
  } catch (error) {
    console.log(error)    
  };
}, 2000);




var hidenodescss=`
[data-dir*="node_modules"]{
  display:none !important;
}
`
setTimeout(loadscss(hidenodescss),2000)

var printSlideStyle=`

@media print {
    @page {
        size: A4 landscape;
    }

    .slideroot,
    .blockroot {
        overflow: auto;
        height: auto;
        background-color: var(--bgColor);
    
    }

    .slide {
        page-break-after: always;
        break-inside: avoid;
        page-break-inside: avoid;
    }

    .block {
        break-inside: avoid;
        page-break-inside: avoid;
    }

    img {
        display: block;
        page-break-before: auto;
        page-break-after: auto;
        page-break-inside: avoid;
        break-inside: avoid;
    }
    
    video,
    #sideBar,
    #appfooter {
        display: none;
    }
    a::after{
      font-style: italic;
      font-size:.8em;
      content: " (" attr(href) ") ";
   }
}`


var printNotesStyle=`

@media print {
    @page {
        size: A4 portrait;
    }
    body{
    font-size:12px;
    --fontsize:12px;
    
    }
:root{
  --fontsize:12px;
  --fontScale:.7;


}

    .slideroot,
    .blockroot {
        overflow: auto;
        height: min-content;
        background-color: white;
padding:.5em;
    }

    .slide {
//        page-break-after: always;
//        break-inside: avoid;
//        page-break-inside: avoid;
    }

    .block {
//        break-inside: avoid;
//        page-break-inside: avoid;
    }

    img {
        display: block;
//        page-break-before: auto;
//        page-break-after: auto;
        page-break-inside: avoid;
        break-inside: avoid;
    }
    
    video,
    #sideBar,
    #appfooter {
        display: none;
    }
    a::after{
      font-style: italic;
      font-size:.8em;
      content: " (" attr(href) ") ";
   }
}`
//loadscss(printSlideStyle,"printSlideStyle")


//Disable Right Click
// if(!DEBUG){
// window.addEventListener("contextmenu",(e)=>{
// e.preventDefault() 
// e.stopImmediatePropagation()
// })
// }
console.info(`SlideGen version ${slidegenversion}\ Ready`);
console.info(`SlideGen copyrights ${slidegenlicense}\ Ready`);



// add event to double click to toggle class .showFullscreen to be updated
function imageFullscreenToggle() {
  var imagFullscreenStyle = `.showFullscreen{
  height: auto;
  transition: all .5s ease-in-out;
  transform: scale(1.1);
  width: 100% !important;
}
  `

  setTimeout(() => {
    var images = grab("main svg, main img");
  images.forEach((e) => {

    e.addEventListener("click", () => {
      e.classList.toggle("showFullscreen");
      loadscss(imagFullscreenStyle, "imagFullscreenStyle");
    });
  });

  }, 2000);
};
