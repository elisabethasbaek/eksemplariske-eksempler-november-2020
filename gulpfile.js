var gulp = require("gulp");
var sass = require("gulp-sass");
var connect = require("gulp-connect");
var sourcemap = require ("gulp-sourcemaps");
var htmlmin = require("gulp-htmlmin");
var cleanCSS = require("gulp-clean-css");
var resize = require("gulp-image-resize");
var babel = require("gulp-babel");
var concat = require("gulp-concat"); //alle javascriptfiler i src-mappen sættes sammen til én fil, så man behøver ikke import/export

function processHTML(){
	return gulp.src("./src/html/**/*.html") //hvilke filer vi skal have fat i
		.pipe(sourcemap.init())
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(sourcemap.write(".")) //sourcemap mappen skal lægges i samme mappe som vores destination fil
        .pipe(gulp.dest("./dist/")) //hvilken mappe filerne ender i
        .pipe(connect.reload());
}

function processSass(){
    return gulp.src("./src/scss/**/*.scss")
		.pipe(sourcemap.init())
        .pipe(sass())
		.pipe(cleanCSS({ compatibility: "ie9" }))
		.pipe(sourcemap.write(".")) //sourcemap mappen skal lægges i samme mappe som vores destination fil
        .pipe(gulp.dest("./dist/css"))
        .pipe(connect.reload());
}

function processJS(){
	return gulp.src("./src/js/**/*.js")
	.pipe(sourcemap.init())
	.pipe(babel({
		presets: ["@babel/env"]
	}))
	.pipe(concat("app.js"))
	.pipe(sourcemap.write(".")) //sourcemap mappen skal lægges i samme mappe som vores destination fil
	.pipe(gulp.dest("./dist/js"))
	.pipe(connect.reload());
}

function processImages(){
	return gulp.src("./src/images/**/*")
		.pipe(resize({
			width: 100,
			height: 0,
			crop: false,
      		upscale: false
		}))
        .pipe(gulp.dest("./dist/images"))
		.pipe(connect.reload());
}

function watchEmAll(){ //hvis der er ændringer i filerne i de respektive mapper, så tygger gulp dem igennem
    gulp.watch("./src/html/**/*.html",
    { ignoreInitial: false },
    processHTML);

    gulp.watch("./src/scss/**/*.scss",
	{ ignoreInitial: false },
    processSass);
    
    gulp.watch("./src/js/**/*.js",
	{ ignoreInitial: false },
	processJS);

    gulp.watch("./src/images/**/*",
	{ ignoreInitial: false },
	processImages);
}

function server(){
    return connect.server({
        root: "dist",
        livereload: true
    });
};

gulp.task("default", gulp.parallel(server, watchEmAll));
