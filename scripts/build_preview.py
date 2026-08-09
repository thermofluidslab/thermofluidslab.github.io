#!/usr/bin/env python3
"""Build the public, unlinked preview site under /preview/.

The working-tree root is treated as the draft source. Generated preview pages
use preview-local HTML/CSS/JavaScript/content data, while unchanged production
images are referenced from ../images/ to avoid duplicating large assets.
"""

from __future__ import annotations

import re
import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PREVIEW = ROOT / "preview"

HTML_FILES = (
    "index.html",
    "research.html",
    "members.html",
    "publications.html",
    "publications_all.html",
    "access.html",
    "project.html",
    "research_visual_test.html",
)

PREVIEW_BANNER = """  <aside class="preview-banner" aria-label="プレビュー版のお知らせ">
    <strong>PREVIEW / 確認用</strong>
    <span class="preview-banner__note">正式公開前の内容です</span>
    <nav aria-label="プレビュー操作">
      <a href="index.html">確認用トップ</a>
      <a href="research_visual_test.html">研究画像候補</a>
      <a href="../index.html">公開中サイト</a>
    </nav>
  </aside>"""

PREVIEW_CSS = """/* Generated preview-only presentation. */
:root {
  --preview-banner-h: 48px;
}

html {
  scroll-padding-top: calc(var(--header-h) + var(--preview-banner-h));
}

.preview-banner {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  height: var(--preview-banner-h);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0 18px;
  color: #fff;
  background: #9a3412;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.22);
  font-size: 0.82rem;
  line-height: 1.2;
}

.preview-banner strong {
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.preview-banner nav {
  display: flex;
  gap: 12px;
}

.preview-banner a {
  color: #fff;
  font-weight: 700;
  text-decoration: underline;
  white-space: nowrap;
}

body.preview-site header {
  top: var(--preview-banner-h);
}

body.preview-site .slideshow-wrap {
  margin-top: calc(var(--header-h) + var(--preview-banner-h));
}

body.preview-site .page-main {
  padding-top: calc(var(--header-h) + var(--preview-banner-h) + 56px);
}

@media (max-width: 700px) {
  .preview-banner {
    justify-content: space-between;
    gap: 8px;
    padding: 0 10px;
    font-size: 0.72rem;
  }

  .preview-banner__note,
  .preview-banner a:nth-child(2) {
    display: none;
  }

  .preview-banner nav {
    gap: 9px;
  }

  body.preview-site .page-main {
    padding-top: calc(var(--header-h) + var(--preview-banner-h) + 32px);
  }
}
"""

GOOGLE_TAG_RE = re.compile(
    r"\n  <!-- Google tag \(gtag\.js\) -->"
    r"\n  <script async src=\"https://www\.googletagmanager\.com/gtag/js\?id=[^\"]+\"></script>"
    r"\n  <script>.*?</script>",
    re.DOTALL,
)


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def transform_html(source: str) -> str:
    result = GOOGLE_TAG_RE.sub("", source)

    robots = '<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">'
    if re.search(r'<meta name="robots"[^>]*>', result):
        result = re.sub(r'<meta name="robots"[^>]*>', robots, result, count=1)
    else:
        viewport = '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
        if viewport not in result:
            raise ValueError("viewport meta tag not found")
        result = result.replace(viewport, viewport + "\n  " + robots, 1)

    stylesheet = '<link rel="stylesheet" href="css/style.css">'
    if stylesheet not in result:
        raise ValueError("main stylesheet link not found")
    result = result.replace(
        stylesheet,
        stylesheet + '\n  <link rel="stylesheet" href="css/preview.css">',
        1,
    )

    if "<body>" not in result:
        raise ValueError("body tag not found")
    result = result.replace(
        "<body>",
        '<body class="preview-site">\n' + PREVIEW_BANNER,
        1,
    )

    # Production images remain shared. Draft-only research test images are
    # copied into preview/images below and therefore stay preview-local.
    result = result.replace('src="images/', 'src="../images/')
    result = result.replace(
        'src="../images/test-research-visuals/',
        'src="images/test-research-visuals/',
    )
    return result


def build() -> None:
    for name in HTML_FILES:
        source = (ROOT / name).read_text(encoding="utf-8")
        write_text(PREVIEW / name, transform_html(source))

    (PREVIEW / "css").mkdir(parents=True, exist_ok=True)
    shutil.copy2(ROOT / "css" / "style.css", PREVIEW / "css" / "style.css")
    write_text(PREVIEW / "css" / "preview.css", PREVIEW_CSS)

    for script in sorted((ROOT / "js").glob("*.js")):
        destination = PREVIEW / "js" / script.name
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(script, destination)

    content = (ROOT / "data" / "content.js").read_text(encoding="utf-8")
    content = content.replace('image: "images/', 'image: "../images/')
    content = content.replace(
        'image: "../images/research-concepts/',
        'image: "images/research-concepts/',
    )
    write_text(PREVIEW / "data" / "content.js", content)

    concept_images = ROOT / "images" / "research-concepts"
    preview_concepts = PREVIEW / "images" / "research-concepts"
    preview_concepts.mkdir(parents=True, exist_ok=True)
    for image in sorted(concept_images.glob("*.webp")):
        shutil.copy2(image, preview_concepts / image.name)

    source_images = ROOT / "images" / "test-research-visuals" / "vmd_rendered"
    preview_images = PREVIEW / "images" / "test-research-visuals" / "vmd_rendered"
    preview_images.mkdir(parents=True, exist_ok=True)
    for image in sorted(source_images.glob("*_web.webp")):
        shutil.copy2(image, preview_images / image.name)

    print(f"Preview generated: {PREVIEW}")


if __name__ == "__main__":
    build()
