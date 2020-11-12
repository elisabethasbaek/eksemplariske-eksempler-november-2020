var { src, dest } = require("gulp");
var { reload } = require("gulp-connect");
var resize = require("gulp-image-resize");

function processImages(){
	return src("./src/images/**/*")
		.pipe(resize({
			width: 100,
			height: 0,
			crop: false,
      		upscale: false
		}))
        .pipe(dest("./dist/images"))
		.pipe(reload());
}

module.exports = processImages;