const gulp = require('gulp');
const sass = require('gulp-sass');
const run = require('gulp-run');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var sass_input = './css/*.scss';
var less_input = './css/*.less';
var output = './css';

gulp.task('sass', function () {
    return gulp
        // Find all `.scss` files from the `stylesheets/` folder
        .src(sass_input)
        // Run Sass on those files
        .pipe(sass())
        // Write the resulting CSS in the output folder
        .pipe(gulp.dest(output));
});

gulp.task('less', function () {
    return gulp
        .src(less_input)
        .pipe(less())
        .pipe(gulp.dest(output));
});	

gulp.task('server', function () {
    run('sudo python -m SimpleHTTPServer 80').exec();
});

gulp.task('optimise-images', function () {
    return gulp
        .src('img/*.jpg')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./img/optimised'));
});

gulp.task('minify-css', function () {
    return gulp.src(['css/*.css', '!css/*.min.css'])
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('minify-js', function () {
    return gulp.src(['js/*.js', '!js/*.min.js'])
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./js'));
});

gulp.task('default', ['watch']);

gulp.task('watch', function () {
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('css/*.less', ['less']);
    gulp.watch('img/*.*', ['optimise-images']);
});
