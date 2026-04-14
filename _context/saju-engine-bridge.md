# Saju Engine Bridge

> How the marketing workspace calls the `pdf_sell` Saju calculation engine to produce real, deterministic Four-Pillars data for English-facing content.

---

## 1. Why this exists
Anonymous chart reads and couple-compatibility posts are our most differentiated content (1–2 per week). Every one of them must be built on **real, computed Saju data** — never invented. This doc is the single interface between our content pipeline and the engine living in `c:\아빠\사주\강의\코딩\pdf_sell`.

All narrative output stays **100% English** (per root `CLAUDE.md`). The raw engine JSON is Korean-labeled — translation happens in the interpreter layer, not in the engine.

---

## 2. Engine location
- Source: `pdf_sell/src/lib/saju/calculator.ts`
- Entry: `calculateSaju(input: SajuInput): RawSajuJson`
- Types: `pdf_sell/src/lib/types/saju.ts`
- Runner script (marketing-owned): `pdf_sell/scripts/marketing-sample.ts`

Deterministic: same input always yields same JSON. Safe to cache.

---

## 3. Input schema
```ts
interface SajuInput {
  name: string;              // pseudonym for anonymous reads
  gender: '남' | '여';       // 남 = male, 여 = female
  birthYear: number;         // 4-digit
  birthMonth: number;        // 1–12
  birthDay: number;          // 1–31
  birthHour: number;         // 0–23 (KST local)
  birthMinute: number;       // 0–59
  isLunar?: boolean;         // default false (solar)
  isLeapMonth?: boolean;     // only when isLunar=true
}
```

Engine auto-applies: Korean longitude correction (−30 min), Ja-time (子時) handling, leap-month resolution.

---

## 4. Output schema — `RawSajuJson`
Ten tabs. Each tab is `{ tab_name, tab_type, column_headers, row_headers, data: string[][] }`.

| Tab | What it is | Marketing use |
|---|---|---|
| `info` | Birth metadata, solar/lunar conversion, nearest solar terms | Opening line of a chart read |
| `pillar` | The 4 pillars: 천간/지지, Ten Gods, 12 Stages, hidden stems, 納音, strength | **Core** — Day Master, element balance, Ten Gods |
| `yongsin` | Yongsin (useful god) analysis | "What this chart needs" framing |
| `yinyang` | Element counts and Ten God group counts | Infographics, bar charts |
| `shinsal` | Auspicious/inauspicious stars | Color, narrative hooks |
| `hyungchung` | Clash / punishment / harm relationships | Relationship tension stories |
| `daeun` | 10-year luck pillars | Life-stage timing content |
| `nyunun` | Yearly luck (running decade) | "This year for you" posts |
| `wolun` | Monthly luck (current year) | Solar-term / month-transition drops |
| `wolun2` | Monthly luck (next year) | Forward-looking annual previews |

All tab data is Korean/hanja. The interpreter layer translates.

---

## 5. How to call it (standard runner)

**From the `pdf_sell` directory** (it owns `lunar-typescript`):

```bash
cd c:/아빠/사주/강의/코딩/pdf_sell
npx tsx scripts/marketing-sample.ts
```

The runner imports `calculateSaju`, writes JSON to `marketing/_context/engine-samples/*.json`. Copy this script and edit the input block per chart read.

**Convention**: one JSON per reader/chart, filename = pseudonym slug. Store under:
- `marketing/_context/engine-samples/` — reference/reusable personas
- `marketing/out/chart-reads/<slug>/chart.json` — actual published post's data

---

## 6. English translation layer (interpreter rules)

When `saju-interpreter` (or content-writer) reads the JSON, apply these mappings. **Never ship hanja or Korean without the English equivalent.**

### Heavenly Stems (天干)
| Hanja | Pinyin-ish | Element | English label |
|---|---|---|---|
| 甲 | Jiǎ | Yang Wood | Greater Wood · "the tall tree" |
| 乙 | Yǐ  | Yin Wood | Lesser Wood · "the vine" |
| 丙 | Bǐng | Yang Fire | Greater Fire · "the sun" |
| 丁 | Dīng | Yin Fire | Lesser Fire · "the candle" |
| 戊 | Wù  | Yang Earth | Greater Earth · "the mountain" |
| 己 | Jǐ  | Yin Earth | Lesser Earth · "the garden soil" |
| 庚 | Gēng | Yang Metal | Greater Metal · "the blade" |
| 辛 | Xīn | Yin Metal | Lesser Metal · "the jewel" |
| 壬 | Rén | Yang Water | Greater Water · "the ocean" |
| 癸 | Guǐ | Yin Water | Lesser Water · "the dew" |

### Earthly Branches (地支)
子 Rat · 丑 Ox · 寅 Tiger · 卯 Rabbit · 辰 Dragon · 巳 Snake · 午 Horse · 未 Goat · 申 Monkey · 酉 Rooster · 戌 Dog · 亥 Pig.
(Use animal name only as a readability bridge — never confuse with Western zodiac framing.)

### Ten Gods (十神)
| Korean | English (our canonical) |
|---|---|
| 비견 | Peer (Friend-Self) |
| 겁재 | Rival (Shadow-Self) |
| 식신 | Output (Creative Flow) |
| 상관 | Expression (Disruptive Voice) |
| 편재 | Wealth – Windfall |
| 정재 | Wealth – Steady |
| 편관 | Power – Pressure |
| 정관 | Power – Authority |
| 편인 | Resource – Unconventional |
| 정인 | Resource – Nurturing |

### Five Elements
木 Wood · 火 Fire · 土 Earth · 金 Metal · 水 Water. Always in this order for visualizations.

### Strength levels (일주 강약)
극신약 very weak · 신약 weak · 중신약 mid-weak · 강변약 tilting weak · 중화 balanced · 약변강 tilting strong · 신강 strong · 중신강 mid-strong · 극신강 very strong.

### Don'ts (style rules)
- ❌ Never use "zodiac sign" when describing a branch animal.
- ❌ Never use 12 Western zodiac frames (no Aries/Gemini metaphors).
- ❌ Never ship untranslated hanja/Korean on external channels.
- ✅ Always note the Day Master first when introducing a chart ("Her Day Master is 癸 Guǐ, Lesser Water — the dew at dawn…").

---

## 7. Content patterns the engine unlocks

| Pattern | Tabs used | Frequency |
|---|---|---|
| Anonymous chart read | info + pillar + yongsin + yinyang + shinsal | 1 / week |
| Couple compatibility | 2× pillar + hyungchung across both | 1 / 2 weeks |
| Solar-term drop | current wolun + active branch of term | every 15 days |
| Year-ahead preview | nyunun + wolun2 | quarterly |
| Life-stage timing | daeun | as-needed (life-event posts) |
| Issue/celeb chart | full JSON of public figure | reactive |

---

## 8. Privacy & ethics
- All public reads use a **pseudonym** ("Reader A", "Reader M"). Never expose real name or exact birth data unless the subject is a public figure or has given written consent.
- When running reader-submitted data, shift birth **day** by ±1 and **hour** by ±15 min for posts — the narrative still lands, the fingerprint is broken.
- Keep source submissions out of git. Only the redacted `chart.json` that was actually published goes in `out/chart-reads/`.

---

## 9. Sample
Live sample generated 2026-04-14: `_context/engine-samples/sample-anonymous-reader-a.json`
- Input: F, 1998-07-15 14:30 KST, solar
- Day Master (from `pillar.data[1][1]`): **癸 (Lesser Water)**
- Strength (`pillar.data[2-4][10]`): 신약 (weak) → yongsin logic looks for Metal/Water support

Use this sample when testing the interpreter agent and any new templates.

---

## 10. Open items
- [ ] Build `saju-interpreter` agent that consumes this JSON and emits English interpretive paragraphs.
- [ ] Translate `yongsin` narrative templates into English (currently Korean in the engine).
- [ ] Add a reusable persona library (Reader A, B, C, M, S…) with fixed inputs so recurring chart-read series share continuity.
- [ ] Decide on naming convention for pseudonyms — letter codes vs. first-name-only. Currently: letter codes.
