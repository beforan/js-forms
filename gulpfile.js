const gulp = require("gulp"),
    babel = require("gulp-babel"),
    del = require("del")

//Chuck all Gulp built files
gulp.task("clean", () => {
    del.sync("dist/");
});

// compile and concatenate js
gulp.task("js", () =>
    gulp.src("src/js-forms.js")
    .pipe(babel({ presets: [["env", { targets: { browsers: ["last 2 versions"] } }]] }))
    .pipe(gulp.dest("dist")));

gulp.task("default", ["clean", "js"]);