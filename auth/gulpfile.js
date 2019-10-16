const gulp = require("gulp")
const ts = require("gulp-typescript")

const tsProject = ts.createProject("tsconfig.json")

const sources = {
	ts: "./src/**/*.ts"
}

function typescript(done) {
	const tsResult = gulp.src(sources.ts)
		.pipe(tsProject())
		
	return tsResult.js.pipe(gulp.dest("./dist"))
}

gulp.task("dev", function(done) {
	gulp.watch([sources.ts], { ignoreInitial: false }, typescript)
	done()
})