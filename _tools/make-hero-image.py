"""Crop + encode the homepage hero image to the 3:2 pair the page expects.

Usage:
    python _tools/make-hero-image.py <source-image> [--top 0.0] [--bottom 1.0]

Writes assets/images/three-busts-kintsugi.{jpg,webp} at 1200x800, matching the
width/height attributes in index.html and the .hero-image 3:2 frame in styles.css.

The source is a wide panorama (~2.4:1); 3:2 is taller, so the crop keeps the full
width and trims the vertical margins. --top/--bottom nudge which slice of the
height survives (fractions of source height) if the busts sit off-centre.
"""
import sys
from pathlib import Path

from PIL import Image

REPO = Path(__file__).resolve().parent.parent
OUT_DIR = REPO / "assets" / "images"
STEM = "three-busts-kintsugi"
TARGET_W, TARGET_H = 1200, 800
TARGET_RATIO = TARGET_W / TARGET_H  # 1.5


def main() -> int:
    if len(sys.argv) < 2:
        print(__doc__)
        return 1

    src_path = Path(sys.argv[1])
    if not src_path.exists():
        print(f"error: no such file: {src_path}")
        return 1

    top_f, bottom_f = 0.0, 1.0
    args = sys.argv[2:]
    for flag, setter in (("--top", "top"), ("--bottom", "bottom")):
        if flag in args:
            val = float(args[args.index(flag) + 1])
            if setter == "top":
                top_f = val
            else:
                bottom_f = val

    img = Image.open(src_path).convert("RGB")
    w, h = img.size
    print(f"source: {w}x{h}  ratio {w / h:.3f}")

    band_top, band_bottom = int(h * top_f), int(h * bottom_f)
    band_h = band_bottom - band_top

    # Fit the widest 3:2 box inside the selected band.
    if w / band_h > TARGET_RATIO:
        # wider than 3:2 -> full height of the band, trim the sides
        crop_h = band_h
        crop_w = int(round(crop_h * TARGET_RATIO))
    else:
        crop_w = w
        crop_h = int(round(crop_w / TARGET_RATIO))

    left = (w - crop_w) // 2
    top = band_top + (band_h - crop_h) // 2
    top = max(0, min(top, h - crop_h))

    box = (left, top, left + crop_w, top + crop_h)
    print(f"crop:   {box}  -> {crop_w}x{crop_h}  ratio {crop_w / crop_h:.3f}")

    out = img.crop(box).resize((TARGET_W, TARGET_H), Image.LANCZOS)

    jpg, webp = OUT_DIR / f"{STEM}.jpg", OUT_DIR / f"{STEM}.webp"
    out.save(jpg, quality=86, optimize=True, progressive=True)
    out.save(webp, quality=82, method=6)

    print(f"wrote {jpg.relative_to(REPO)}  ({jpg.stat().st_size / 1024:.0f} KB)")
    print(f"wrote {webp.relative_to(REPO)} ({webp.stat().st_size / 1024:.0f} KB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
