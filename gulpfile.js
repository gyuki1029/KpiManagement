'use strict'

const gulp = require('gulp');
const fs = require('fs');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const gutil = require('gulp-util');
const gulpif = require('gulp-if');

const gulp_conf = JSON.parse(fs.readFileSync('./work/gulp_conf.json'));
const pages_conf = JSON.parse(fs.readFileSync(gulp_conf.pages_conf_path));

gulp.task('ejs', function () {

    for (let i = 0; i < pages_conf.pages.length; i++) {
        var page_conf = pages_conf.pages[i];

        gulp.src(gulp_conf.template_path)
            .pipe(ejs({
                "page_conf": page_conf
            })).on('error', gutil.log)
            .pipe(rename(page_conf.output))
            .pipe(gulpif(page_conf.output.indexOf('.html') !== -1 ,gulp.dest(gulp_conf.html_dist)))
            .pipe(gulpif(page_conf.output.indexOf('.ejs') !== -1 ,gulp.dest(gulp_conf.ejs_dist)));
        
        console.log("[gulp_log] created page : " + page_conf.output);
    }

});

gulp.task('default', ['ejs']);