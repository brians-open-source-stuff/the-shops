const gulp = require("gulp")
const typescript = require("gulp-typescript")

gulp.task("typescript", function() {
	const tsProject = typescript.createProject("tsconfig.json")
	const tsResult = gulp.src("./src/**/*.ts")
		.pipe(tsProject())
		
	return tsResult.js.pipe(gulp.dest("./dist"))
})

gulp.task("dev", function(done) {
	gulp.watch(["./src/**/*.ts"], { ignoreInitial: false }, typescript)
	done()
})