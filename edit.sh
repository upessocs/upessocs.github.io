NIXPKGS_ALLOW_UNFREE=1
#nix-shell --sandbox --pure -p vscodium firefox-devedition nodejs pkgs.nodePackages.nodemon pkgs.nodePackages.parcel --run "npm i && npm run dev & firefox 127.0.0.1:5501 && echo 'y' | codium . "

nix-shell -p vscodium firefox-devedition nodejs_21 pkgs.nodePackages.nodemon --run "npm run dev & firefox 127.0.0.1:5501 && echo 'y' | codium . "
