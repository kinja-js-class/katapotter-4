import gulp from "gulp";
import babel from "gulp-babel";
import jasmine from "gulp-jasmine";

gulp.task("default", () => {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

// Jasmine is dumb and does not understand gulp streams (line 21)
gulp.task("testtoes5", () => {
	return gulp.src("spec/test.js")
		.pipe(babel())
		.pipe(gulp.dest("spec/es5"))
});

gulp.task("test", ["default", "testtoes5"], () => {
    return gulp.src('spec/es5/test.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine());
});
