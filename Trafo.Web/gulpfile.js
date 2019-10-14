/// <binding AfterBuild='default' />
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger')
var paths = {
    wwwroot: {
        styles: "wwwroot/styles",
        html: "wwwroot"
    },
    src: {
        html: {
            dev: "src/html/dev/index.html",
            pages: "src/html/pages/**/*"
        }

    }
}

gulp.task("sass", function () {
    return gulp.src('src/sass/*')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))

});
gulp.task('watch:sass', function () {
    return gulp.watch('src/sass/**/*.scss', gulp.series(['sass', 'autoprefixes']));
});
gulp.task('watch:html', function () {
    return gulp.watch('src/html/**/*', gulp.series('htmldev:build'));
});


gulp.task('autoprefixes', function () {
    return gulp.src("./src/css/style.css")
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest(paths.wwwroot.styles));
});

gulp.task('htmldev:build', function () {
    return gulp.src([paths.src.html.dev, paths.src.html.pages])
        .pipe(rigger())
        .pipe(gulp.dest(paths.wwwroot.html))
});

gulp.task('default', function () {
    gulp.parallel([gulp.series('htmldev:build', 'sass', 'autoprefixes'), gulp.parallel('watch:sass', 'watch:html')]);
})