const gulp =require ('gulp');
const less=require('gulp-less');
const imagemin=require('gulp-imagemin');
const minjs=require('gulp-uglify');

//const sourcemaps=require('gulp-sourcemaps');
const connect=require('gulp-connect');
const mincss=require('gulp-cssmin');

//Path
const PathStyle='src/css/*.less';
const PathUglify = 'src/js/app.js';
const PathHtml ='src/*.html';
const PathImage ='src/img/*';

function lessCss (done){
    return gulp.src(PathStyle)
    .pipe(less())
    .pipe(mincss())
    .pipe(gulp.dest('dist/css'));

    done();
};


function uglify (done){

   return gulp.src(PathUglify)
    .pipe(minjs())
    .pipe(gulp.dest('dist/js'));

    done();
};




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

function html(done){
    gulp.src(PathHtml)
    .pipe(gulp.dest('dist/vue'))
    done();
};

gulp.task('runserver',function(){

    connect.server({
        port:8888
    });
    
    connect.serverClose();

});


function imagemine (done){
gulp.src(PathImage)
.pipe(imagemin())
.pipe(gulp.dest('dist/img'));

done();
};

gulp.task('image', gulp.parallel(imagemine));

gulp.task('src',gulp.parallel(less,uglify,html,imagemine));


function watch (done){

    gulp.watch(PathStyle,gulp.parallel(lessCss));
    gulp.watch(PathUglify, gulp.parallel(uglify));
    gulp.watch(PathImage, gulp.parallel(imagemine));
    gulp.watch(PathHtml, gulp.parallel(html));

    done();
};

gulp.task('default',gulp.parallel(watch));
