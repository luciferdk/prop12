{pkgs}: {
  channel = "stable-23.11";
  packages = [ 
    #pkgs.nodejs_20 
  ];
  env = {};
        services.docker.enable = true;
  idx.extensions = [
    #"svelte.svelte-vscode"
    #"vue.volar"
  ];
  idx.previews = {
  };
}