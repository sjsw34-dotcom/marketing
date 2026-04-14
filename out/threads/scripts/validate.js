// Validate a weekly schedule.json before it reaches Buffer.
// Usage: node validate.js <week-folder>

'use strict';
const fs = require('node:fs');
const path = require('node:path');

const BANNED_PHRASES = [
  // Western zodiac fingerprints
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra',
  'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces',
  'zodiac sign', 'sun sign', 'rising sign', 'moon sign',
  // fortune-teller voice
  'you will definitely', 'guaranteed to', 'destined to fail',
  // cliche
  'ancient secret', 'ancient wisdom unlocked',
];

const CANONICAL_TEN_GODS = [
  'Peer', 'Rival', 'Output', 'Expression',
  'Wealth–Windfall', 'Wealth-Windfall',
  'Wealth–Steady', 'Wealth-Steady',
  'Power–Pressure', 'Power-Pressure',
  'Power–Authority', 'Power-Authority',
  'Resource–Unconventional', 'Resource-Unconventional',
  'Resource–Nurturing', 'Resource-Nurturing',
];

function err(msg) { return { level: 'error', msg }; }
function warn(msg) { return { level: 'warn', msg }; }

function validatePost(p, i) {
  const issues = [];
  if (!p.slot_id) issues.push(err(`post[${i}]: missing slot_id`));
  if (!p.scheduled_at) issues.push(err(`post[${i}]: missing scheduled_at`));
  if (!p.body || !p.body.trim()) issues.push(err(`post[${i}]: empty body`));

  const body = (p.body || '').toLowerCase();
  for (const bad of BANNED_PHRASES) {
    if (body.includes(bad)) issues.push(err(`post[${i}] "${p.slot_id}": banned phrase "${bad}"`));
  }

  // Links in body (reserved for replies only)
  if (/https?:\/\//.test(p.body)) {
    issues.push(err(`post[${i}] "${p.slot_id}": body contains a link (links go in replies only)`));
  }

  // Length sanity
  if (p.body.length > 500) issues.push(warn(`post[${i}] "${p.slot_id}": >500 chars, may truncate on Threads`));

  return issues;
}

function main() {
  const folder = process.argv[2];
  if (!folder) {
    console.error('Usage: node validate.js <week-folder>');
    process.exit(2);
  }
  const jsonPath = path.resolve(folder, 'schedule.json');
  if (!fs.existsSync(jsonPath)) {
    console.error(`Not found: ${jsonPath}`);
    process.exit(2);
  }
  const schedule = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const issues = [];

  if (!Array.isArray(schedule.posts)) issues.push(err('posts array missing'));

  const ids = new Set();
  (schedule.posts || []).forEach((p, i) => {
    if (ids.has(p.slot_id)) issues.push(err(`duplicate slot_id: ${p.slot_id}`));
    ids.add(p.slot_id);
    issues.push(...validatePost(p, i));
  });

  const errors = issues.filter((x) => x.level === 'error');
  const warns = issues.filter((x) => x.level === 'warn');

  for (const x of issues) console.log(`[${x.level}] ${x.msg}`);

  console.log(`---\n${schedule.posts?.length ?? 0} posts, ${errors.length} errors, ${warns.length} warnings`);
  process.exit(errors.length ? 1 : 0);
}

if (require.main === module) main();
