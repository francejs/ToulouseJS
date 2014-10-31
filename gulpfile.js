var gulp = require("gulp")

var ghPages = require("gulp-gh-pages")

/**
* publish task
*
* publish build in the gh-pages branch
*/
gulp.task("deploy", function() {
  // https://github.com/rowoot/gulp-gh-pages/issues/26
  return gulp.src([
    "output/**/*",
    "CNAME"
  ])
    .pipe(ghPages({
      remoteUrl: "https://" + (process.env.GH_TOKEN ? process.env.GH_TOKEN + "@" : "") + "github.com/francejs/ToulouseJS.git",
      branch: "gh-pages",
      cacheDir: __dirname + "/.publish"
    }))
})
