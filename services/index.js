const axios = require('axios').default;
const sharp = require('sharp');
const streamToBuffer = require('stream-to-buffer');
const util = require('util');

const streamToBufferPromise = util.promisify(streamToBuffer);
const imagesFormats = ['jpeg', 'png', 'webp', 'gif'];

const readImage = async (url) => axios
  .get(url, {
    responseType: 'stream',
  });

const sharpImage = async (args) => {
  const {
    imageUrl,
    toBuffer = false,
    imageFormat = 'png',
    imageWidth = null,
    imageHeight = null,
  } = args;
  const resizeOptions = {};
  if (imageFormat && !imagesFormats.includes(imageFormat)) {
    throw new Error('Error');
  }
  if (imageWidth) {
    resizeOptions.width = +imageWidth;
  }

  if (imageHeight) {
    resizeOptions.height = +imageHeight;
  }

  // contentType
  const { data } = await readImage(imageUrl);

  const buffer = await streamToBufferPromise(data);

  if (toBuffer) {
    return sharp(buffer)
      .toFormat(imageFormat)
      .resize(resizeOptions)
      .toBuffer();
  }

  return sharp(buffer)
    .resize(resizeOptions)
    .toFormat(imageFormat);
};

const processImageAsBase64 = async (args) => {
  const image = await sharpImage({ ...args, toBuffer: true });
  return image.toString('base64');
};

const processImageAsStream = async (args) => sharpImage(args);

module.exports = { processImageAsBase64, processImageAsStream };
