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
    nodePackages.parcel
    vim 
    curl     
    vscodium 
    firefox 
    cinnamon.nemo
  ];

  shellHook = ''
    cowsay ${message}
    npm run dev & echo "y" | codium . & firefox localhost:3000
    '';
}
