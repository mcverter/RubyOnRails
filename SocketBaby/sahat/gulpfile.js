var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    babelify = require('vavelify'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-souremaps');

var production = process.env.NODE_ENV === 'production';

var dependencies = [
    'alt',
    'react',
    'react-dom',
    'react-router',
    'underscore'
];

gulp.task('vendor', function(){
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
        'bower_components/toastr/toastr.js'

    ]).pipe(concat('vendor.js'))
        .pipe(gulpif(production, uglify({mangle: false})))
        .pipe(gulp.dest('public/js'))
});


gulp.task('browserify-vendor', function(){
    return browserify()
        .require(dependencies)
        .bundle()
        .pipe(source('vendor.bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(production, uglify({mangle: false})))
        .pipe(gulp.dest('public/js'))
});


gulp.task('browserify', ['browserify-vendor'], function(){
    return browserify({entries: 'app/main.js', debug: true})
        .external(dependencies)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(gulpif(production, uglify({mangle: false})))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/js'))
});


gulp.task('browserify', ['browserify-vendor'], function(){
    var bundler = browserify({entries: 'app/main.js', debug: true}, watchify.arg);
    bundler.external(dependencies);
    bundler.transform(babelify, {presets: ['es2015', 'react']});
    bundler.on('update', rebundle);
    return rebundle();
    function rebundle() {
        var start = Date.now();
        return  bundler.bundle()
            .on('error', function(err){
                gutil.log(gutil.colors.red(err.toString()))
            })
            .on('end', function(){
                gutil.log(gutil.colors.green('Finished rebundling in', (Date.now() - start) + 'ms.'));
            })
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('public/js/'))
    }
});



gulp.task('styles', function(){
    return gulp.src('app/stylesheets/main.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulpif(production, cssmin()))
        .pipe(gulp.dest('public/js'))
});

gulp.task('watch', function() {
    gulp.watch('app/stylesheets/**/*.less', ['styles']);
});

gulp.task('default', ['styles', 'vendor', 'browserify-watch', 'watch']);
gulp.task('build', ['styles', 'vendor', 'browserify']);