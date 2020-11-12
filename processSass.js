function processSass(){
    return src("./src/scss/**/*.scss")
		.pipe(sourcemap.init())
        .pipe(sass())
		.pipe(cleanCSS({ compatibility: "ie9" }))
		.pipe(sourcemap.write(".")) //sourcemap mappen skal lægges i samme mappe som vores destination fil
        .pipe(dest("./dist/css"))
        .pipe(connect.reload());
}