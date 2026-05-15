"""
One-shot script: convert assets/images/03_sculpture_1.png from
"RGBA-but-actually-opaque-white-background" into genuinely transparent
around the figure, preserving the white marble of David himself.

Algorithm:
  1. Identify near-white pixels (RGB within `tolerance` of 255).
  2. Iterative numpy dilation from edge-seeded near-white pixels — only
     CONNECTED-to-edge whites count as "background". Isolated whites
     inside the figure (David's marble body) are left alone.
  3. Set alpha=0 for the connected background pixels.
  4. Light Gaussian blur on the alpha channel for soft-edge anti-aliasing.

Run from project root:
  python _tools/make_david_transparent.py
"""

from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "images" / "03_sculpture_1.png"

TOLERANCE = 5           # tight: any higher and the flood-fill leaks through
                        # near-white marble highlights into David's body, punching
                        # holes in the chest/thigh/base. 5 keeps him intact.
ALPHA_BLUR_RADIUS = 0.6 # px — softens jagged silhouette edges without bleeding


def flood_from_edges(near_white: np.ndarray) -> np.ndarray:
    """Return a boolean mask of near-white pixels connected to the image edge.

    Iteratively dilates a seed (the edge pixels that are near-white) by
    4-connectivity, constraining the expansion to the near-white set. Loop
    terminates when the mask no longer grows.
    """
    h, w = near_white.shape

    # Seed: the edge rows/columns that are themselves near-white.
    mask = np.zeros_like(near_white)
    mask[0, :]  = near_white[0, :]
    mask[-1, :] = near_white[-1, :]
    mask[:, 0]  = near_white[:, 0]
    mask[:, -1] = near_white[:, -1]

    # Iterative 4-connected dilation, clipped to the near-white universe.
    iterations = 0
    while True:
        iterations += 1
        prev_count = int(mask.sum())
        # Dilate by one pixel in each of four directions.
        grown = mask.copy()
        grown[1:, :]  |= mask[:-1, :]
        grown[:-1, :] |= mask[1:, :]
        grown[:, 1:]  |= mask[:, :-1]
        grown[:, :-1] |= mask[:, 1:]
        grown &= near_white
        if int(grown.sum()) == prev_count:
            break
        mask = grown
        if iterations > 4000:  # safety brake; 1080x1080 needs ~ a few hundred
            break

    print(f"  flood-fill converged in {iterations} iterations")
    return mask


def main() -> None:
    img = Image.open(SRC).convert("RGBA")
    w, h = img.size
    print(f"Loaded {SRC.name} ({w}x{h})")
    rgb = np.array(img.convert("RGB"))

    # Distance from pure white per pixel: 0 = white, larger = darker.
    white_dist = np.maximum.reduce([
        255 - rgb[:, :, 0],
        255 - rgb[:, :, 1],
        255 - rgb[:, :, 2],
    ])
    near_white = white_dist <= TOLERANCE
    print(f"  near-white pixels: {int(near_white.sum()):,}")

    background = flood_from_edges(near_white)
    print(f"  background pixels: {int(background.sum()):,} "
          f"({100 * background.sum() / (w*h):.1f}% of image)")

    # Apply alpha = 0 for background pixels.
    out = np.array(img)
    out[background, 3] = 0

    result = Image.fromarray(out, mode="RGBA")

    # Soft-edge: blur the alpha channel slightly so anti-aliased pixels at
    # the figure boundary fade smoothly rather than producing a hard cut.
    r, g, b, a = result.split()
    a = a.filter(ImageFilter.GaussianBlur(radius=ALPHA_BLUR_RADIUS))
    result = Image.merge("RGBA", (r, g, b, a))

    result.save(SRC, optimize=True)

    # Verify: re-read and report alpha at corners + center.
    check = Image.open(SRC).convert("RGBA")
    px = check.load()
    samples = {
        "top-left":     px[5, 5],
        "top-right":    px[w - 5, 5],
        "bottom-left":  px[5, h - 5],
        "bottom-right": px[w - 5, h - 5],
        "center":       px[w // 2, h // 2],
    }
    print(f"\nSaved: {SRC} ({SRC.stat().st_size:,} bytes)")
    for name, rgba in samples.items():
        print(f"  {name:14s} RGBA = {rgba}")


if __name__ == "__main__":
    main()
