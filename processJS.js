function processJS(){
	return src("./src/js/**/*.js")
	.pipe(sourcemap.init())
	.pipe(babel({
		presets: ["@babel/env"]
	}))
	.pipe(concat("app.js"))
	.pipe(sourcemap.write(".")) //sourcemap mappen skal lægges i samme mappe som vores destination fil
	.pipe(dest("./dist/js"))
	.pipe(connect.reload());
}