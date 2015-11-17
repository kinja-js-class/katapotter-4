var gulp = require("gulp");
var babel = require("gulp-babel");
var jasmine = require("gulp-jasmine");

gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

// Jasmine is dumb and does not understand gulp streams (line 21)
gulp.task("testtoes5", function () {
	return gulp.src("spec/test.js")
		.pipe(babel())
		.pipe(gulp.dest("spec/es5"))
});

gulp.task("test", ["testtoes5"], function () {
    return gulp.src('spec/es5/test.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it 
        .pipe(jasmine());
});
