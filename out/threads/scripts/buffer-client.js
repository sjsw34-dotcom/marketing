// Thin Buffer API wrapper for SajuMuse Threads pipeline.
// Intentionally minimal. No calls are made until DRY_RUN=false is passed.
//
// IMPORTANT: Before first real run, verify the current Buffer API:
//   - Buffer deprecated the v1 "Updates" API in 2024.
//   - Confirm the active endpoint + auth (OAuth token vs API key vs GraphQL).
//   - Update `API_BASE` and `schedulePost()` body to the current spec.

'use strict';

const fs = require('node:fs');
const path = require('node:path');

// ── Load .env from workspace root (two levels up from scripts/) ───
function loadEnv() {
  const envPath = path.resolve(__dirname, '../../../.env');
  if (!fs.existsSync(envPath)) return {};
  const out = {};
  for (const line of fs.readFileSync(envPath, 'utf-8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  return out;
}

const env = loadEnv();

const CONFIG = {
  API_BASE: 'https://api.bufferapp.com/1',   // verify before live use
  API_KEY: env.buffer_api_key || '',
  DRY_RUN: true,                             // never remove this default
  DEFAULT_PROFILE_ID: env.buffer_threads_profile_id || '',
};

function assertKey() {
  if (!CONFIG.API_KEY) throw new Error('buffer_api_key missing in .env');
}

/**
 * Schedule a single post. Returns { ok, dryRun, payload, response? }.
 * When DRY_RUN is true, the payload is returned and no network call occurs.
 */
async function schedulePost({ body, scheduledAt, slotId, profileId }) {
  if (!body) throw new Error('body required');
  if (!scheduledAt) throw new Error('scheduledAt (ISO) required');
  if (!slotId) throw new Error('slotId required');

  const payload = {
    profile_ids: [profileId || CONFIG.DEFAULT_PROFILE_ID],
    text: body,
    scheduled_at: Math.floor(new Date(scheduledAt).getTime() / 1000),
    client_slot_id: slotId,  // idempotency hint (field name varies by API)
  };

  if (CONFIG.DRY_RUN) {
    return { ok: true, dryRun: true, payload };
  }

  assertKey();
  // LIVE CALL PATH — intentionally left un-implemented until endpoint is verified.
  throw new Error(
    'Live Buffer call not wired. Verify current Buffer API (endpoint, auth, body schema) and implement here before flipping DRY_RUN.',
  );
}

/**
 * Schedule a reply thread (main post + N replies).
 * Returns [{ok, ...}, {ok, ...}, ...] in order.
 */
async function scheduleThread(main, replies = []) {
  const results = [await schedulePost(main)];
  for (const r of replies) results.push(await schedulePost(r));
  return results;
}

module.exports = { CONFIG, schedulePost, scheduleThread };
