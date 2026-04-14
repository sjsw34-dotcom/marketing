// Upload a weekly schedule.json to Buffer.
// Default mode: DRY RUN (no API calls). Pass `--live` to actually send.
// Usage:
//   node schedule.js <week-folder>            # dry run (default)
//   node schedule.js <week-folder> --live     # real upload (requires API verification)

'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { CONFIG, schedulePost, scheduleThread } = require('./buffer-client');

async function main() {
  const folder = process.argv[2];
  const live = process.argv.includes('--live');
  if (!folder) {
    console.error('Usage: node schedule.js <week-folder> [--live]');
    process.exit(2);
  }

  if (live) {
    CONFIG.DRY_RUN = false;
    console.log('⚠️  LIVE MODE — real Buffer calls will be attempted.');
    console.log('   (buffer-client currently throws on live calls until endpoint is verified.)');
  } else {
    console.log('🧪 DRY RUN — no network calls.');
  }

  const jsonPath = path.resolve(folder, 'schedule.json');
  const schedule = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const results = [];

  for (const p of schedule.posts) {
    const main = {
      body: p.body,
      scheduledAt: p.scheduled_at,
      slotId: p.slot_id,
    };
    try {
      const res = p.replies?.length
        ? await scheduleThread(main, p.replies.map((r, i) => ({
            body: r.body,
            scheduledAt: r.scheduled_at || p.scheduled_at,
            slotId: `${p.slot_id}-r${i + 1}`,
          })))
        : [await schedulePost(main)];
      results.push({ slot: p.slot_id, ok: true, res });
    } catch (e) {
      results.push({ slot: p.slot_id, ok: false, error: e.message });
    }
  }

  const okCount = results.filter((r) => r.ok).length;
  const failCount = results.length - okCount;
  console.log(`---\n${results.length} posts: ${okCount} ok, ${failCount} fail`);
  if (failCount) {
    for (const r of results.filter((x) => !x.ok)) console.log(` ✗ ${r.slot}: ${r.error}`);
    process.exit(1);
  }
  if (CONFIG.DRY_RUN) console.log('First payload preview:\n', JSON.stringify(results[0]?.res?.[0]?.payload, null, 2));
}

if (require.main === module) main();
