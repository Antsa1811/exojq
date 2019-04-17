const gulp =require ('gulp');
const less=require('gulp-less');
const imagemin=require('gulp-imagemin');
const minjs=require('gulp-uglify');
const concat =require('gulp-concat');
const sourcemaps=require('gulp-sourcemaps');

gulp.task('less',function (){
    return gulp.src('src/css/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
})


gulp.task('uglify',function (){

   return gulp.src('src/js/*.js')
    .pipe(minjs())
    .pipe(gulp.dest('dist/js'));

});

gulp.task('concat',function(){
    return gulp.src(['src/js/app.js','src/js/jquery.slim.min.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
})


/*gulp.task('concat', function(){
    return gulp.src(['src/js/app.js','src/js/jquery.slim.min.js'])
    .pipe(sourcemaps.init())
    .pipe(concat({
        "target":['app.js','jquery.slim.min.js'],
        "entry":"./main.js"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});*/


gulp.task('imagemin',function(){
gulp.src('src/img/*')
.pipe(imagemin())
.pipe(gulp.dest('dist/img'));

});

gulp.task('src',gulp.parallel(['less'],['uglify'],['imagemin']),['concat']);


gulp.task('watch',function(){

    gulp.watch('src/css/*.less',gulp.parallel(['less']));
    gulp.watch('src/js/*.js', gulp.parallel(['uglify']));
    gulp.watch('src/img/*.jpg', gulp.parallel(['imagemin']));
    gulp.watch('src/js/*.js', gulp.parallel(['concat']));

});

gulp.task('default',gulp.parallel(['watch']));
