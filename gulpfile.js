const { task, src, dest, parallel } = require('gulp')
const responsive = require('gulp-responsive')

// Converts images into an optimized WebP version
task('default', () => {
  return src('images/*.{gif|jpg|jpeg|png}')
    .pipe(responsive({
      '*.jpg':{
        format: 'webp',
        quality: 75,
      }
    }))
    .pipe(dest('output'))
})
