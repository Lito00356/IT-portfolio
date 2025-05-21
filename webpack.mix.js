let mix = require("laravel-mix");

mix.js("src/scripts/main.js", "build").setPublicPath("build");
mix.css("src/styles/main.css", "build");
