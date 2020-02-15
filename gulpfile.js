const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();
const butternut = require("gulp-butternut");

//Copy HTML Files
function copyHtml(html) {
  gulp
    .src("src/*.html")
    .pipe(gulp.dest("dist"))
    //it will stream changes to all browsers
    .pipe(browserSync.stream());
  html();
}

// Compile Sass into CSS
function compileSass(scss) {
  gulp
    .src("src/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css"));
  scss();
}

// Minify and Concat JS Files
function concatJS(js) {
  gulp
    .src("src/js/*.js")
    .pipe(concat("main.js"))
    //uglify doesnt support for es6
    // .pipe(uglify())
    //butternut supports es6
    .pipe(butternut())
    .pipe(gulp.dest("dist/js"));
  js();
}

// Concat HTML Files
// function concatHTML(html) {
//   gulp
//     .src("src/app/*.html")
//     .pipe(concat("app"))
//     .pipe(gulp.dest("dist/index.html"));
//   html();
// }

//Check Whether Gulp is Running or not and Browser Sync Funct
function defaultTask(run) {
  console.log("Gulp is Running");
  run();
}

//watcher funtion
function watch() {
  browserSync.init({
    server: {
      baseDir: "dist/"
    }
  });
  gulp
    .watch("src/sass/*.scss", gulp.series(compileSass))
    .on("change", browserSync.reload);
  gulp
    .watch("src/js/*.js", gulp.series(concatJS))
    .on("change", browserSync.reload);
  gulp
    .watch("src/*.html", gulp.series(copyHtml))
    .on("change", browserSync.reload);
}

exports.default = gulp.parallel(defaultTask, copyHtml, concatJS, compileSass);
exports.watch = watch;

// gulp.task("default", gulp.series("watch", "sass"));
