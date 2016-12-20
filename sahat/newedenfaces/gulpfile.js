var gulp = require('gulp'),
    gutil = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    gulpif = require('gulp-if'),
    cssmin = require('gulp-cssmin'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');


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
    ]).pipe(concat('vendor.js')
        .pipe(gulpif(production, uglify({mangle: false})))
        .pipe(gulp.dest('public/js')))
});


gulp.task('browserify-vendor', function(){
    return browserify()
        .require(dependencies)
        .bundle()
        .pipe(source('vendor bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(production, uglify({mangle: false})))
        .pipe(gulp.dest('public/js'));
});


gulp.task('browserify', ['browserify-vendor'], function(){
    return browserify({entries: 'app/main.js', debug:true})
        .external(dependencies)
        .transform(babelify, {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(gulpif(production, uglify({mangle: true})))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/js'));
});


gulp.task('browserify', ['browserify-vendor'], function(){
    return browserify({entries: 'app/main.js', debug:true})
        .external(dependencies)
        .transform(babelify, {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(gulpif(production, uglify({mangle: true})))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/js'));
});



gulp.task('browserify-watch', ['browserify-vendor'], function(){
    var bundler = watchify(browserify(
        {entries: 'app/main.js', debug: true}, watchify.args));
    bundler.external(dependencies)
        .transform(babelify, {presets: ['es2015', 'react']})
        .on('update', rebundle);
    return rebundle();

    function rebundle() {
        var start = Date.now();
        return bundler.buncle()
            .on('error', function(err){
                gutil.log(gutil.colors.red(err.toString()));
            })
            .on('end', function(err){
            gutil.log(gutil.colors.green('Finished rebundling in ' + (Date.now() - start) + 'msc'));
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/js'));
    }
});


gulp.task('styles', function() {
    return gulp.src('/app/stylesheets/main.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulpif(production, cssmin()))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
    gulp.watch('app/stylesheets/**/*.less', ['styles']);
});

gulp.task('default', ['styles', 'vendor', 'browserify-watch', 'watch']);
gulp.task('build', ['styles', 'vendor', 'browserify']);