# Realtime Image Cropping using nodejs
## _Using [JIMP] library_

This is a REST API to test real time image cropping.

## Resources used
- Uses [JIMP] for image manipulation.
- [express] to create REST API.

## Features

- Send in query ``x, y, w, h``, here ``x, y`` are coordinates and ``w`` = width & ``h`` = height.
- See magic, image cropped instantly. Below mentioned example.

## Installation

Realtime Image Cropping using nodejs requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.
```sh
npm install
```

To run..
```sh
npm run start
```

## Example

Now hit [http://localhost:8000/image.jpg?x=50&y=75&w=400&h=600] to see the crop image. You can change ``x, y, w, h`` value according your need. To see original image [http://localhost:8000/image.jpg]

## License

ISC

**Free API, Hell Yeah!**

   [JIMP]: <https://www.npmjs.com/package/jimp>
   [git-repo-url]: <https://github.com/impin2rex/realtime-image-cropping-using-nodejs>
   [http://localhost:8000/image.jpg?x=50&y=75&w=400&h=600]: <http://localhost:8000/image.jpg?x=50&y=75&w=400&h=600>
   [http://localhost:8000/image.jpg]: <http://localhost:8000/image.jpg>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
