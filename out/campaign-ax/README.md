# Campaign AX — Index
_Generated 2026-04-14 · SajuMuse_

Campaign core: **Competitor AX diagnosis → SajuMuse Four Pillars differentiation.**

## Files
- [research/competitor-ax-diagnosis.md](research/competitor-ax-diagnosis.md) — 6-app landscape, 5 gaps, positioning, 5 message candidates.
- [newsletter/newsletter-ax-diagnosis.md](newsletter/newsletter-ax-diagnosis.md) — Monday drop, ~900 words.
- [cardnews/cardnews-copy.md](cardnews/cardnews-copy.md) — 5-slide IG carousel with producer notes.
- [thumbnail/thumbnail-brief.md](thumbnail/thumbnail-brief.md) — YouTube 1280×720 brief + image-gen prompt.
- [deck/build-deck.js](deck/build-deck.js) — pptxgenjs script (9 slides, cream-serif).
- [deck/sajumuse-ax-deck.pptx](deck/sajumuse-ax-deck.pptx) — generated deck.
- [BRAND-REVIEW.md](BRAND-REVIEW.md) — gate verdict: **PASS**.

## Rebuild deck
```bash
cd out/campaign-ax/deck && node build-deck.js
```

## Notes
- Subagent calls were rejected during this run; orchestrator (main Claude) produced all artifacts directly using the agent role prompts as reference.
- Visual assets (carousel PNGs, thumbnail PNG) are specified as briefs, not rendered — run visual-designer / nanobanana when available.
