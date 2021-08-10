import {
    paths
} from "../gulpfile.babel";
import gulp from "gulp";
import ttf2woff2 from "gulp-ttf2woff2";
import newer from "gulp-newer";

gulp.task("woff2", function () {
    return gulp.src(["./src/fonts/*.ttf"])
        .pipe(newer(paths.fonts.dist))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(paths.fonts.dist));

});