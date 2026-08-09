#!/usr/bin/env python3
"""Validate the generated public preview before it is published."""

from __future__ import annotations

import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
PREVIEW = ROOT / "preview"
REQUIRED_PAGES = {
    "index.html",
    "research.html",
    "members.html",
    "publications.html",
    "publications_all.html",
    "access.html",
    "project.html",
    "research_visual_test.html",
}


class RefParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.refs: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        for name, value in attrs:
            if name in {"href", "src"} and value:
                self.refs.append(value)


def local_target(page: Path, ref: str) -> Path | None:
    parts = urlsplit(ref)
    if parts.scheme or parts.netloc or ref.startswith(("#", "mailto:", "tel:")):
        return None
    path = unquote(parts.path)
    if not path:
        return None
    target = (page.parent / path).resolve()
    if target.is_dir():
        target /= "index.html"
    return target


def main() -> None:
    pages = {path.name for path in PREVIEW.glob("*.html")}
    missing_pages = REQUIRED_PAGES - pages
    if missing_pages:
        raise SystemExit(f"Missing preview pages: {sorted(missing_pages)}")

    checked_refs = 0
    failures: list[str] = []

    for page in sorted(PREVIEW.glob("*.html")):
        source = page.read_text(encoding="utf-8")
        if 'content="noindex, nofollow, noarchive, nosnippet"' not in source:
            failures.append(f"{page}: missing robots exclusion")
        if 'class="preview-banner"' not in source:
            failures.append(f"{page}: missing preview banner")
        if "googletagmanager" in source or "gtag(" in source:
            failures.append(f"{page}: analytics must be disabled")

        parser = RefParser()
        parser.feed(source)
        for ref in parser.refs:
            target = local_target(page, ref)
            if target is None:
                continue
            checked_refs += 1
            if not target.exists():
                failures.append(f"{page}: missing {ref} -> {target}")

    content = (PREVIEW / "data" / "content.js").read_text(encoding="utf-8")
    for ref in re.findall(r'image:\s*"([^\"]+)"', content):
        target = (PREVIEW / ref).resolve()
        checked_refs += 1
        if not target.exists():
            failures.append(f"preview/data/content.js: missing {ref} -> {target}")

    for page in sorted(ROOT.glob("*.html")):
        if page.name == "research_visual_test.html":
            continue
        source = page.read_text(encoding="utf-8")
        if re.search(r'(?:href|src)=["\'][^"\']*preview/', source):
            failures.append(f"{page}: production page links to preview")

    if failures:
        raise SystemExit("\n".join(failures))

    print(f"Preview OK: {len(pages)} pages, {checked_refs} local references")


if __name__ == "__main__":
    main()
