const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", function() {
    return gulp.src(["src/**/*.tsx","src/**/*.ts"])
        .pipe(tsProject())
        .on('error', function (error) {
            console.error(error);
       })
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["ts"]);
gulp.watch("src/**/*.tsx", ["ts"]);
gulp.watch("src/**/*.ts", ["ts"]);