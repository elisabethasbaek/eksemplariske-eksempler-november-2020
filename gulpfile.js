var { watch, task, parallel} = require("gulp");
var { server } = require("gulp-connect");

var processHTML = require("./processHTML");
var processSass = require("./processSass");
var processJS = require("./processJS");
var processImages = require("./processImages");

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

function serve(){
    return server({
        root: "dist",
		livereload: true,
		port: 80
    });
};

task("default", parallel(serve, watchEmAll));
