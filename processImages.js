function processImages(){
	return src("./src/images/**/*")
		.pipe(resize({
			width: 100,
			height: 0,
			crop: false,
      		upscale: false
		}))
        .pipe(dest("./dist/images"))
		.pipe(connect.reload());
}