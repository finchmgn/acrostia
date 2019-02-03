var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglifyjs'),
    cssnano         = require('gulp-cssnano'),
    rename          = require('gulp-rename'),
    del             = require('del'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    cache           = require('gulp-cache'),
    autoprefixer    = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.+(sass|scss)')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7', {cascade: true}]))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

/*  сжатие css | добавление суффикса  */
gulp.task('css-libs', function() {
    return gulp.src('app/css/libs.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'));
});

/*  сжатие js  */
gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
        'app/libs/Scrollify/jquery.scrollify.js',
        'app/libs/bootstrap-4.2.1-dist/js/bootstrap.min.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('clean', async function() {
    return del.sync('dist');
});

gulp.task('clear', async function() {
    return cache.clearAll();
});

gulp.task('img', function() {
    return(gulp.src('app/img/**/*'))
    .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        une: [pngquant()]
    })))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.+(sass|scss)', gulp.parallel('sass'));
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('app/css/fonts.css').on('change', browserSync.reload);;
});

gulp.task('buildCode', async function() {
    var buildCss    = gulp.src([
        'app/css/main.css',
        'app/css/libs.min.css',
        'app/css/fonts.css',
    ])
    .pipe(gulp.dest('dist/css'));

    var buildFonts  = gulp.src([
        'app/fonts/**/*',
        '!app/fonts/icofont/icofont.css',
    ])
    .pipe(gulp.dest('dist/fonts'));

    var buildJs     = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));

    var buildHtml   = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('prod', gulp.parallel('clean', 'buildCode', 'img'));

gulp.task('default', gulp.parallel('browser-sync', 'sass', 'css-libs', 'scripts', 'watch'));