import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import uglify from 'gulp-uglify-es';
// import babel from 'gulp-babel';

// Theme Directory
const themeDirectory = 'src/css/',
    relativeThemeDirectory = './' + themeDirectory;

// Paths
const paths = {
    styles: {
        src: 'sass/**/*.+(scss|sass)',
        dist: 'dist/css/'
    }
};

// Styles
gulp.task('styles', () => {
    gulp.src(relativeThemeDirectory + paths.styles.src)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 6 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(relativeThemeDirectory + paths.styles.dist))
});

gulp.task('default', () => {
    gulp.watch(relativeThemeDirectory + paths.styles.src, ['styles']);
});