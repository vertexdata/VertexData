const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const LOGOS_DIR = path.resolve(__dirname, 'public/images/logos');
const files = fs.readdirSync(LOGOS_DIR).filter(f => f.endsWith('.png'));

(async () => {
  for (const file of files) {
    const fp = path.join(LOGOS_DIR, file);
    let img = sharp(fp);

    // 1) For ServiceTitan: invert dark pixels to white (logo is black artwork)
    if (file === 'servicetitan.png') {
      const { data, info } = await img.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
      const { width, height, channels } = info;
      const out = Buffer.alloc(data.length);
      for (let i = 0; i < data.length; i += channels) {
        const r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
        if (a < 30) {
          // already transparent — keep
          out[i] = r; out[i+1] = g; out[i+2] = b; out[i+3] = a;
        } else {
          // invert luminance: dark → white, white → black (then we'll trust alpha)
          out[i] = 255 - r;
          out[i+1] = 255 - g;
          out[i+2] = 255 - b;
          out[i+3] = a;
        }
      }
      img = sharp(out, { raw: { width, height, channels } });
      console.log(`${file}: inverted dark→white`);
    }

    // 2) Trim transparent padding so content fills the image
    const trimmed = await img
      .trim({ threshold: 10, background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    const trimmedMeta = await sharp(trimmed).metadata();
    await sharp(trimmed).png({ compressionLevel: 9 }).toFile(fp);
    console.log(`${file}: trimmed → ${trimmedMeta.width}x${trimmedMeta.height}`);
  }
})();
