const express = require("express");
const fs = require("fs");
const Jimp = require("jimp");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/image.jpg", async (req, res) => {
  try {
    const { x, y, w, h } = req.query;
    if ((!x && !y && !w, !h)) {
      const realImageBuffer = fs.readFileSync("image.jpg");
      res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": realImageBuffer.length,
      });
      res.end(realImageBuffer);
    } else {
      const image = await Jimp.read("image.jpg");
      image
        .quality(60)
        .crop(parseInt(x), parseInt(y), parseInt(w), parseInt(h));

      const cropImageBuffer = await image.getBufferAsync(image._originalMime);

      res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": cropImageBuffer.length,
      });
      res.end(cropImageBuffer);
    }
  } catch (err) {
    console.error(err);
  }
});

try {
  app.listen(port, () => {
    console.log(`WorkWithMe API listening on port ${port}!`);
  });
} catch (error) {
  console.log(error);
}
