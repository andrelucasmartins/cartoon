var gulp = require("gulp"),
    sass = require("gulp-sass"),
    uglify = require("gulp-uglify"),
    clean = require("gulp-clean"),
    cleanCSS = require("gulp-clean-css"),
    browserSync = require("browser-sync").create();

    var reload = browserSync.reload;

    gulp.task("server", function(){
        browserSync.init({
            server: "./",
            browser: "firefox",
            host: "localhost",
            port: "4000",
            open: true,
            tunnel: true

        });
    });

    gulp.task('clean', function(){
        return gulp.src('dist/')
                .pipe(clean());
    });

    gulp.task("sass", function(){
        return gulp.src("src/sass/**/*.scss")
                .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
                .pipe(cleanCSS())
                .pipe(gulp.dest("dist/css"))
                .pipe(browserSync.stream());
            
    });

    gulp.task("js", function(){
        return gulp.src("src/js/**/*.js")                
                .pipe(uglify())
                .pipe(gulp.dest("dist/js"))
                .pipe(browserSync.stream());
    });


    gulp.task("default", ['sass','js', 'server'], function(){
        gulp.watch("src/sass/**/*.scss", ['sass']);
        gulp.watch("src/js/**/*.js", ['js']);
        gulp.watch("*.html").on("change", reload);
    });

   