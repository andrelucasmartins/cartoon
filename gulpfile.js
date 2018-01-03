var gulp = require("gulp"),
    sass = require("gulp-sass"),
    uglify = require("gulp-uglify"),
    clean = require("gulp-clean"),
    cleanCSS = require("gulp-clean-css"),
    es = require("event-stream"),
    concat = require("gulp-concat"),
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
        return es.merge([
            gulp.src([
                'node_modules/materialize-css/dist/css/materialize.min.css'
            ]),
            gulp.src("src/sass/**/*.scss")
                .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
                .pipe(cleanCSS()).pipe(browserSync.stream())
        ])
        .pipe(concat("all.min.css"))
        .pipe(gulp.dest("dist/css"));
                
            
    });

    gulp.task("js", function(){
        return es.merge([
            gulp.src([                    
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/materialize-css/dist/js/materialize.min.js'
            ]),
            gulp.src([
                'src/js/**/*.js'
            ]).pipe(concat('scripts.js')).pipe(uglify())
            .pipe(browserSync.stream())
        ])              
        .pipe(concat("all.min.js"))              
        .pipe(gulp.dest("dist/js"));
    });


    gulp.task("default", ['sass','js', 'server'], function(){
        gulp.watch("src/sass/**/*.scss", ['sass']);
        gulp.watch("src/js/**/*.js", ['js']);
        gulp.watch("*.html").on("change", reload);
    });

   