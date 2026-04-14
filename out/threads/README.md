# Threads Publishing Pipeline

> Weekly batch → human review → Buffer queue. **No posts go live without explicit user execution.**

## Folder layout

```
out/threads/
├── README.md                   ← this file
├── scripts/
│   ├── buffer-client.js        Thin Buffer API wrapper (no calls yet)
│   ├── schedule.js             Read weekly schedule.json → push to Buffer
│   └── validate.js             Lint a schedule.md/json before scheduling
└── YYYY-MM-DD-weekly/          One folder per production week
    ├── schedule.md             Human-reviewable draft (28 posts)
    └── schedule.json           Machine format consumed by schedule.js
```

## Weekly loop (target cadence)

1. **Fri 09:00 KST** — orchestrator invokes `threads-producer` agent
   → produces next-week `schedule.md` + `schedule.json`
2. **Fri afternoon** — user reviews, edits, approves
3. **Fri evening** — run `node scripts/validate.js <week-folder>`
4. **Fri evening** — run `node scripts/schedule.js <week-folder> --dry-run`
5. **Only after user confirms dry-run output** — run without `--dry-run`
6. Buffer queues the 28 posts; posts go live on their scheduled times

## Buffer integration status: **SCAFFOLDED, NOT WIRED**

- `buffer_api_key` is present in `.env` (gitignored)
- `buffer-client.js` loads the key but every POST is **gated behind a `DRY_RUN` flag** that defaults to `true`
- No real Buffer API calls are made until the user explicitly flips the flag and runs the script
- When ready to go live: verify current Buffer API endpoint + auth scheme (Buffer deprecated v1 in 2024; confirm current production API) before first real call

## Safety rails

- `.env` is gitignored — API key never committed
- `schedule.js` will refuse to run if:
  - `schedule.json` fails validation
  - any post body contains zodiac-sign names or banned phrases
  - any `slot_id` collision with the last 30 days of Buffer history
- Each post carries a unique `slot_id`; the uploader uses it as an idempotency key so re-running won't double-post

## Do / Don't

- ✅ Always dry-run first
- ✅ Review `schedule.md` with brand-reviewer agent before scheduling
- ✅ Keep `schedule.json` in git for audit
- ❌ Never hardcode the API key
- ❌ Never remove the `DRY_RUN` default
- ❌ Never schedule without running `validate.js`
