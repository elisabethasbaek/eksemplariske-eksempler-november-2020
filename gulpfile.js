var { src, dest, watch, task, parallel} = require("gulp"); //destructuring
var sass = require("gulp-sass");
var connect = require("gulp-connect");
var sourcemap = require ("gulp-sourcemaps");
var htmlmin = require("gulp-htmlmin");
var cleanCSS = require("gulp-clean-css");
var resize = require("gulp-image-resize");
var babel = require("gulp-babel");
var concat = require("gulp-concat"); //alle javascriptfiler i src-mappen sættes sammen til én fil, så man behøver ikke import/export

var processHTML = require("./processeHTML");
var processSass = require(".processSass");

function watchEmAll(){ //hvis der er ændringer i filerne i de respektive mapper, så tygger gulp dem igennem
    watch("./src/html/**/*.html",
    { ignoreInitial: false },
    processHTML);

    watch("./src/scss/**/*.scss",
	{ ignoreInitial: false },
    processSass);
    
    watch("./src/js/**/*.js",
	{ ignoreInitial: false },
	processJS);

    watch("./src/images/**/*",
	{ ignoreInitial: false },
	processImages);
}

function server(){
    return connect.server({
        root: "dist",
		livereload: true,
		port: 80
    });
};

task("default", parallel(server, watchEmAll));
