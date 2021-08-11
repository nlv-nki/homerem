import {
    paths
} from "../gulpfile.babel";
import gulp from "gulp";
import ttf2woff2 from "gulp-ttf2woff2";
import debug from "gulp-debug";
import newer from "gulp-newer";

gulp.task("woff2", function () {
    //return gulp.src(["./src/fonts/*.ttf"])
    return gulp.src(paths.woff2.src)
        .pipe(ttf2woff2())
        .pipe(newer(paths.woff2.dist))
        .pipe(gulp.dest(paths.woff2.dist))
        .pipe(debug({
            "title": "Woff2 fonts"
        }));

});