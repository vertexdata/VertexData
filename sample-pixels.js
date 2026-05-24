const sharp = require('sharp');
(async () => {
  const img = sharp('/Users/bradleyweber/VertexData/public/images/hero-receptionist.png');
  const { data, info } = await img.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  console.log('Image:', info.width, 'x', info.height, 'channels:', info.channels);
  // Sample top-left corner, top-center, bottom-right, center
  const samplePixel = (x, y) => {
    const idx = (y * info.width + x) * info.channels;
    return [data[idx], data[idx+1], data[idx+2], data[idx+3]];
  };
  console.log('top-left (10,10):', samplePixel(10, 10));
  console.log('top-center (768,10):', samplePixel(768, 10));
  console.log('bottom-left (10,2030):', samplePixel(10, 2030));
  console.log('center (768,1024):', samplePixel(768, 1024));
  console.log('subject area (768,700):', samplePixel(768, 700));
})();
