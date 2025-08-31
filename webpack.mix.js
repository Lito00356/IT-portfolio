let mix = require("laravel-mix");

mix.js("src/scripts/main.js", "build").setPublicPath("build");
mix.js("src/scripts/project.js", "build/js");
mix.css("src/styles/main.css", "build");
