const { task, src, dest, parallel } = require('gulp')
const responsive = require('gulp-responsive')

// Converts images into an optimized WebP version
task('default', () => {
  return src('images/*.{jpg,jpeg,png,gif}')
    .pipe(responsive({
      '*.{jpg,jpeg,png,gif}':{
        format: 'webp',
      }
    }, {
      // Global configuration for all images
      quality: 75,
    }))
    .pipe(dest('output'))
})
