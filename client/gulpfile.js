(()=>{
  'use strict';
  const gulp = require('gulp'),
        gutil = require('gulp-util'),
        inject = require('gulp-inject'),
        ngfilesort = require('gulp-angular-filesort'),
        transform = require('gulp-transform'),
        concat = require('gulp-concat'),
        rename = require('gulp-rename'),
        uglify = require('gulp-uglify'),
        annotate = require('gulp-ng-annotate'),
        plumber = require('gulp-plumber'),
        del = require('del'),
        js = ['./src/app/modules/**/*.module.js',
             './src/app/modules/**/*.ctrl.js',
             './src/app/modules/**/*.service.js',
             './src/app/modules/**/*.filter.js'];

  gulp.task('clean', ['dist'], ()=>{
      return del(["./src/build"]);
  });

  gulp.task('dist', ()=>{
      return gulp.src(['./src/app/**/**/*.module.js',
                    './src/app/**/**/*.controller.js',
                    './src/app/**/**/*.service.js',
                  './src/app/**/*.filter.js'])
              .pipe(plumber())
              .pipe(concat('./src/build/concat.js'))
              .pipe(rename('./src.min.js'))
              .pipe(annotate())
              .pipe(uglify())
              .pipe(gulp.dest('./src/dist'));
  });

  gulp.task('inject-files', ['dist'], ()=>{
    let target = gulp.src('./views/index.ejs'),
        sources = gulp.src(['./src/dist/*.js']);

     return target
              .pipe(plumber())
              .pipe(inject(sources, {
                transform: function(filepath){
                  return '<script src="' + filepath.substring(5) + '"></script>'
                }}))
              .pipe(gulp.dest('./views'));
  });

  gulp.task('inject-dev', ()=>{
    let target = gulp.src('./views/index.ejs'),
        sources = gulp.src(js);
    return target
            .pipe(plumber())
            .pipe(inject(sources, {
              transform: function(filepath){
                return '<script src="' + filepath.substring(5) + '"></script>'
              }}))
            .pipe(gulp.dest('./views'));
  });

  gulp.task('production', ['dist', 'inject-files', 'clean']);
  gulp.task('default', ['watch'])

  gulp.task('watch', function () {
    //gulp.watch(js, ['dist', 'inject-files', 'clean']);
    gulp.watch(js, ['inject-dev'])
  });

})();
