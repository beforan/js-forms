const gulp = require('gulp');
const browserify = require('browserify');
const del = require('del');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

//Chuck all Gulp built files
gulp.task("clean", () => {
    del.sync("dist/");
});

// compile and concatenate js
gulp.task("js", () =>
browserify({
    entries: './src/js-forms.js',
    standalone: 'jsForms'
  })
  .transform('babelify', { presets: [['env', { targets: { browsers: ["last 2 versions"] } }]] })
  .bundle()
  .pipe(source('js-forms.js'))
  .pipe(buffer())
  .pipe(gulp.dest('dist')));

gulp.task("default", ["clean", "js"]);