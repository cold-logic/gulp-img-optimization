# Gulp image optimizer

Takes images from the images folder, converts them into optimized WebP versions and saves into an output folder.

Initial configuration:

  - Targets JPEGs, PNGs, or GIFs
  - Quality: 75% of original
  - Output format: WebP

## Installation & Usage

- Install node (nodejs.org)
- Install the npm dependencies inside this directory
  - `npm install`
- Install Gulp CLI:
  - Using NPM: `npm i -g gulp-cli`
  - Using Yarn: `yarn global add gulp-cli`
- Run Gulp inside this directory: `gulp`
- The optimized images should appear in an "output" directory

## Warning: Be aware GIFs will lose their animation

This process will convert any animated GIFs into static images (using the first frame of the GIF).
