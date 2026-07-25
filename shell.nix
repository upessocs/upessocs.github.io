{ pkgs ? import <nixpkgs> {} }:
# { pkgs ? import (fetchTarball  "https://github.com/NixOS/nixpkgs/tarball/nixos-23.11") {} }:
let
  message = "Lets Start Development";
in 
pkgs.mkShellNoCC {
  buildInputs = with pkgs; [ nodejs ];

  packages = with pkgs; [
    nodejs
    nodePackages.browser-sync 
    nodePackages.nodemon 
    vim 
    curl     
   # vscodium 
    firefox 
  ];

  shellHook = ''
    npm run dev & echo "y" | code . & firefox localhost:3000
    '';
}
