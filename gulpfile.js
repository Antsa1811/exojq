const gulp =require ('gulp');
const less=require('gulp-less');
const imagemin=require('gulp-imagemin');
const minjs=require('gulp-uglify');

//const sourcemaps=require('gulp-sourcemaps');
const connect=require('gulp-connect');
const mincss=require('gulp-cssmin');



gulp.task('less',function (){
    return gulp.src('src/css/*.less')
    .pipe(less())
    .pipe(mincss())
    .pipe(gulp.dest('dist/css'));
})


gulp.task('uglify',function (){

   return gulp.src('src/js/app.js')
    .pipe(minjs())
    .pipe(gulp.dest('dist/js'));

});




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

gulp.task('connect',function(){

    connect.server({
        root:'dist/vue',livereload:true
    });

});

gulp.task('html',function(){
    gulp.src('vue/*.html')
    .pipe(gulp.dest('vue'))
    .pipe(connect.reload());
});

gulp.task('runserver',function(){

    connect.server({
        port:8888
    });
    
    connect.serverClose();

});


gulp.task('imagemin',function(){
gulp.src('src/img/*')
.pipe(imagemin())
.pipe(gulp.dest('dist/img'));

});

gulp.task('src',gulp.parallel(['less'],['uglify'],['imagemin']));


gulp.task('watch',function(){

    gulp.watch('src/css/*.less',gulp.parallel(['less']));
    gulp.watch('src/js/*.js', gulp.parallel(['uglify']));
    gulp.watch('src/img/*.jpg', gulp.parallel(['imagemin']));
    gulp.watch('vue/*.html', gulp.parallel(['html']));

});

gulp.task('default',gulp.parallel(['watch']));
