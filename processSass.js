var { src, dest } = require("gulp");
var { init, write } = require("gulp-sourcemaps");
var { reload } = require("gulp-connect");
var cleanCSS = require("gulp-clean-css");
var sass = require("gulp-sass");

function processSass(){
    return src("./src/scss/**/*.scss")
		.pipe(init())
        .pipe(sass())
		.pipe(cleanCSS({ compatibility: "ie9" }))
		.pipe(write(".")) //sourcemap mappen skal lægges i samme mappe som vores destination fil
        .pipe(dest("./dist/css"))
        .pipe(reload());
}

module.exports = processSass;