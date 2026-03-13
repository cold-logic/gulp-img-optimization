const { task, src, dest, parallel } = require('gulp')
const sharpResponsive = require('gulp-sharp-responsive')

// Converts images into an optimized WebP version
task('default', () => {
  return src('images/*.{jpg,jpeg,png,gif}', { encoding: false })
    .pipe(sharpResponsive({
      formats: [
        {
          format: 'webp',
          sharp: {
            quality: 75
          }
        }
      ]
    }))
    .pipe(dest('output'))
})
