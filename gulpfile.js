const gulp = require("gulp"),
  concat = require("gulp-concat"),
  autoprefixer = require("gulp-autoprefixer"),
  cleanCSS = require("gulp-clean-css"),
  uglify = require("gulp-uglify"),
  del = require("del"),
  browserSync = require("browser-sync").create(),
  pug = require("gulp-pug"),
  sass = require("gulp-sass"),
  imagemin = require("gulp-imagemin"),
  babel = require("gulp-babel");

const cssFiles = [
  "./node_modules/normalize.css/normalize.css",
  "./src/css/style.sass",
  "./src/css/media.sass",
];

const jsFiles = [
  "./src/js/main.js",
  "./src/js/sliders.js",
  "./src/js/modalRequest.js",
];

const libs = [
  "./node_modules/jquery/dist/jquery.min.js",
  "./node_modules/wowjs/dist/wow.min.js",
  "./node_modules/slick-carousel/slick/slick.js",
];
const libsCss = ["./node_modules/slick-carousel/slick/slick.css"];

const img = ["./src/img/*"];

const fonts = ["./src/fonts/*"];

function Html() {
  return gulp
    .src("./src/*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("./build"))
    .pipe(browserSync.stream());
}

function Styles() {
  return gulp
    .src(cssFiles)
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(concat("all_style.css"))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 0,
      })
    )
    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.stream());
}

function Script() {
  return (
    gulp
      .src(jsFiles)
      .pipe(concat("all_js.js"))
      .pipe(
        babel({
          presets: ["@babel/env"],
        })
      )
      // .pipe(uglify({
      // 	toplevel: true
      // }))
      .pipe(gulp.dest("./build/js"))
      .pipe(browserSync.stream())
  );
}

function Libs() {
  return gulp
    .src(libs)
    .pipe(concat("all_libs.js"))
    .pipe(gulp.dest("./build/js"))
    .pipe(browserSync.stream());
}
function LibsCss() {
  return gulp
    .src(libsCss)
    .pipe(concat("all_libs.css"))
    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.stream());
}

function ImgMIn() {
  return (
    gulp
      .src(img)
      // .pipe(imagemin())
      .pipe(gulp.dest("./build/img"))
      .pipe(browserSync.stream())
  );
}
function Fonts() {
  return (
    gulp
      .src(fonts)
      // .pipe(imagemin())
      .pipe(gulp.dest("./build/fonts"))
      .pipe(browserSync.stream())
  );
}

function Watch() {
  browserSync.init({
    server: {
      baseDir: "./build",
    },
  });
  gulp.watch("./src/**/*.pug", Html);
  gulp.watch("./src/css/**/*.sass", Styles);
  gulp.watch("./src/js/**/*.js", Script);
  gulp.watch("./src/img/**/*", ImgMIn);
  gulp.watch("./src/img/*", Fonts);
}

function Clean() {
  return del(["build/*"]);
}

gulp.task("Html", Html);
// gulp.task('Php', Php);
gulp.task("Styles", Styles);
gulp.task("Script", Script);
gulp.task("ImgMIn", ImgMIn);
gulp.task("Fonts", Fonts);
gulp.task("Libs", Libs);
gulp.task("LibsCss", LibsCss);
gulp.task("Watch", Watch);

gulp.task(
  "build",
  gulp.series(
    Clean,
    gulp.parallel(Styles, Script, ImgMIn, Html, Libs, LibsCss, ImgMIn, Fonts)
  )
);
gulp.task("dev", gulp.series("build", Watch));
