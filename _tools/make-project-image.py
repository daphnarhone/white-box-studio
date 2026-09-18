"""Crop + encode a project photo to the jpg/webp pair the site expects.

Usage:
    python _tools/make-project-image.py <source> <out-stem> [options]

Options:
    --ratio W:H     target aspect (default 3:2). Use 4:5 for the studio column.
    --width N       output width in px (default 1200)
    --focus X,Y     crop centre as fractions of the source, 0-1 (default 0.5,0.5)
    --zoom F        1.0 = largest box that fits; >1 crops tighter (default 1.0)
    --quality N     jpeg/webp quality (default 82)
    --preview       write to _tools/_preview/ instead of assets/images/

Writes assets/images/<out-stem>.{jpg,webp}. The <picture> element in the page
takes the webp first and falls back to the jpg, matching the hero pair built by
make-hero-image.py.

Phone photos are portrait and off-centre far more often than not, so --focus is
the flag you actually reach for: it picks WHICH slice survives the crop rather
than defaulting to the middle. Run with --preview first, look at the result,
then re-run without it.
"""
import sys
from pathlib import Path

from PIL import Image

REPO = Path(__file__).resolve().parent.parent
OUT_DIR = REPO / "assets" / "images"
PREVIEW_DIR = Path(__file__).resolve().parent / "_preview"


def arg(flag, default=None):
    if flag in sys.argv:
        return sys.argv[sys.argv.index(flag) + 1]
    return default


def main() -> int:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    # strip values that belong to flags
    flag_values = set()
    for flag in ("--ratio", "--width", "--focus", "--zoom", "--quality"):
        if flag in sys.argv:
            flag_values.add(sys.argv[sys.argv.index(flag) + 1])
    args = [a for a in args if a not in flag_values]

    if len(args) < 2:
        print(__doc__)
        return 1

    src_path, stem = Path(args[0]), args[1]
    if not src_path.exists():
        print(f"error: no such file: {src_path}")
        return 1

    rw, rh = (int(v) for v in arg("--ratio", "3:2").split(":"))
    ratio = rw / rh
    out_w = int(arg("--width", 1200))
    out_h = int(round(out_w / ratio))
    fx, fy = (float(v) for v in arg("--focus", "0.5,0.5").split(","))
    zoom = float(arg("--zoom", 1.0))
    quality = int(arg("--quality", 82))

    img = Image.open(src_path).convert("RGB")
    w, h = img.size
    print(f"source: {w}x{h}  ratio {w / h:.3f}  ->  target {out_w}x{out_h} ({rw}:{rh})")

    # Largest box of the target ratio that fits inside the source, then --zoom in.
    if w / h > ratio:
        crop_h = h
        crop_w = int(round(crop_h * ratio))
    else:
        crop_w = w
        crop_h = int(round(crop_w / ratio))
    crop_w, crop_h = int(crop_w / zoom), int(crop_h / zoom)

    # Place the box around the focus point, clamped inside the source.
    left = int(round(fx * w - crop_w / 2))
    top = int(round(fy * h - crop_h / 2))
    left = max(0, min(left, w - crop_w))
    top = max(0, min(top, h - crop_h))
    print(f"crop:   {crop_w}x{crop_h} at ({left},{top})  focus {fx},{fy}  zoom {zoom}")

    out = img.crop((left, top, left + crop_w, top + crop_h))
    out = out.resize((out_w, out_h), Image.LANCZOS)

    dest_dir = PREVIEW_DIR if "--preview" in sys.argv else OUT_DIR
    dest_dir.mkdir(parents=True, exist_ok=True)

    jpg, webp = dest_dir / f"{stem}.jpg", dest_dir / f"{stem}.webp"
    out.save(jpg, "JPEG", quality=quality, optimize=True, progressive=True)
    out.save(webp, "WEBP", quality=quality, method=6)
    for p in (jpg, webp):
        print(f"wrote:  {p.relative_to(REPO)}  {p.stat().st_size / 1024:.0f}KB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
