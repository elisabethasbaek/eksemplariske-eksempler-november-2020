var { src, dest } = require("gulp");
var { reload } = require("gulp-connect");
var { init, write } = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat"); //alle javascriptfiler i src-mappen sættes sammen til én fil, så man behøver ikke import/export

function processJS(){
	return src("./src/js/**/*.js")
	.pipe(init())
	.pipe(babel({
		presets: ["@babel/env"]
	}))
	.pipe(concat("app.js"))
	.pipe(write(".")) //sourcemap mappen skal lægges i samme mappe som vores destination fil
	.pipe(dest("./dist/js"))
	.pipe(reload());
}

module.exports = processJS;