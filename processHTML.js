var { src, dest } = require("gulp");
var { reload } = require("gulp-connect");
var { init, write } = require("gulp-sourcemaps");
var htmlmin = require("gulp-htmlmin");

function processHTML(){
	return src("./src/html/**/*.html") //hvilke filer vi skal have fat i
		.pipe(init())
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(write(".")) //sourcemap mappen skal lægges i samme mappe som vores destination fil
        .pipe(dest("./dist/")) //hvilken mappe filerne ender i
        .pipe(reload());
}

module.exports = processHTML;