# Preview workflow

The public preview is generated at `/preview/` and is intentionally not linked
from the production pages.

1. Edit the draft files at the repository root.
2. Run `python3 scripts/build_preview.py`.
3. Run `python3 scripts/check_preview.py`.
4. Publish only `preview/` when review is needed.
5. Review `https://thermofluidslab.github.io/preview/`.
6. After approval, publish the reviewed root files to production.

The preview is public and uses `noindex`, `nofollow`, `noarchive`, and
`nosnippet`. These directives reduce search-engine exposure but are not access
control. Never place secrets or confidential material in the preview.
