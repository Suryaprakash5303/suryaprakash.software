import sharp from 'sharp';
import { mkdirSync, unlinkSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

export async function buildImages() {
  console.log('Generating True HDR High-Resolution Portrait from 2048x2048 source...');

  const { width, height } = await sharp('pic1.jpeg').metadata();
  const raw = await sharp('pic1.jpeg').raw().toBuffer();

  const rgba = Buffer.alloc(width * height * 4);

  // Precision mathematical color segmentation:
  // Studio background in pic1.jpeg: pure white (b >= 246, r >= 246, g >= 246)
  // Surya foreground: warm tones (b <= 230 everywhere, skin/hair/polo shirt)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x);
      const p3 = idx * 3;
      const p4 = idx * 4;

      const r = raw[p3];
      const g = raw[p3 + 1];
      const b = raw[p3 + 2];

      rgba[p4] = r;
      rgba[p4 + 1] = g;
      rgba[p4 + 2] = b;

      // Above hair level (y < 665), always pure background
      if (y < 665) {
        rgba[p4 + 3] = 0;
      } else if (b >= 246 && r >= 246 && g >= 246) {
        rgba[p4 + 3] = 0;
      } else if (b <= 230) {
        rgba[p4 + 3] = 255;
      } else {
        // Continuous anti-aliased edge interpolation
        const ramp = (246 - b) / (246 - 230);
        rgba[p4 + 3] = Math.round(ramp * 255);
      }
    }
  }

  // Crop to Surya with comfortable headroom (hair starts at y=672, top starts at y=620)
  // Dimensions: 1920 wide by 1428 high
  const cropped = await sharp(rgba, { raw: { width, height, channels: 4 } })
    .extract({ left: 60, top: 620, width: 1920, height: 1428 })
    .png()
    .toBuffer();

  // Apply HDR visual enhancements:
  // - Unsharp mask for high-frequency hair, sunglasses, and fabric details
  // - Modulate saturation (+15%) and subtle brightness (+2%) for rich cinematic tone
  const hdrImage = await sharp(cropped)
    .sharpen({ sigma: 1.1, m1: 0.8, m2: 2.2 })
    .modulate({ brightness: 1.02, saturation: 1.15 })
    .png()
    .toBuffer();

  // Output High-Res Responsive WebP Portraits
  for (const w of [1100, 720, 420]) {
    await sharp(hdrImage)
      .resize({ width: w })
      .webp({ quality: 95, alphaQuality: 100, effort: 6 })
      .toFile(`${OUT}/portrait-${w}.webp`);
  }

  // Social Share Card (1200x630)
  const ogPortrait = await sharp(hdrImage).resize({ height: 530 }).png().toBuffer();
  await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
    .composite([
      {
        input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
          <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
          <rect width="1200" height="630" fill="url(#g)"/>
        </svg>`),
      },
      { input: ogPortrait, left: 510, top: 100 },
      {
        input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
          <text x="72" y="290" font-family="Impact, 'Arial Narrow', sans-serif" font-size="104" fill="#f4f1ec" letter-spacing="4">SURYA PRAKASH</text>
          <text x="78" y="344" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
          <text x="78" y="415" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">AI DEVELOPER • ORACLE JDE • AGENTIC AI</text>
        </svg>`),
      },
    ])
    .jpeg({ quality: 90 })
    .toFile(`${OUT}/og-image.jpg`);

  // Clean up any temporary debug files
  const toDelete = [
    'analyze.mjs', 'color-analysis.json', 'direct-status.json',
    'portrait-probe.json', 'probe-portrait.mjs', 'probe.json',
    'step.json', 'test-direct.mjs', 'test-raw.mjs', 'test-step.mjs'
  ];
  for (const f of toDelete) {
    const p = join(__dirname, f);
    if (existsSync(p)) {
      try { unlinkSync(p); } catch {}
    }
  }

  console.log('HDR High-Resolution portraits generated successfully!');
}

buildImages().catch(console.error);
