// SajuMuse — Campaign AX Deck Builder
// Cream-serif template (business/sales). 16:9 wide.
// Run: node build-deck.js

const pptxgen = require("pptxgenjs");
const path = require("path");

const p = new pptxgen();
p.layout = "LAYOUT_WIDE"; // 13.333 × 7.5 in
p.title = "SajuMuse — AX Diagnosis";
p.company = "SajuMuse";

// Palette
const C = {
  cream: "F5F1E8",
  paper: "FAF7EF",
  ink: "1A1A1F",
  muted: "6B6458",
  gold: "B8860B",
  purple: "5B3AA8",
  rule: "C9C0AE",
  red: "B4321E",
};

// Fonts
const F = { display: "Georgia", body: "Calibri" };

// Master slide: hairlines + brand label + page number + URL
p.defineSlideMaster({
  title: "MASTER_CREAM",
  background: { color: C.cream },
  objects: [
    { line: { x: 0.5, y: 0.45, w: 12.333, h: 0, line: { color: C.rule, width: 0.5 } } },
    { line: { x: 0.5, y: 7.05, w: 12.333, h: 0, line: { color: C.rule, width: 0.5 } } },
    { text: { text: "SAJUMUSE", options: { x: 0.5, y: 0.15, w: 3, h: 0.25, fontFace: F.body, fontSize: 9, color: C.muted, charSpacing: 4 } } },
    { text: { text: "sajumuse.com", options: { x: 0.5, y: 7.15, w: 3, h: 0.25, fontFace: F.body, fontSize: 9, color: C.muted } } },
    { text: { options: { x: 11.8, y: 7.15, w: 1, h: 0.25, fontFace: F.body, fontSize: 9, color: C.muted, align: "right" }, text: [{ text: "", options: { pageNumber: true } }] } },
  ],
});

const MASTER = "MASTER_CREAM";

// Helpers
const addSectionTag = (s, label) =>
  s.addText(label, { x: 0.5, y: 0.7, w: 4, h: 0.3, fontFace: F.body, fontSize: 10, color: C.gold, bold: true, charSpacing: 6 });

// ───── Slide 1: Cover ─────
let s = p.addSlide({ masterName: MASTER });
s.addText("AX DIAGNOSIS", { x: 0.5, y: 2.5, w: 12, h: 0.4, fontFace: F.body, fontSize: 11, color: C.gold, charSpacing: 8, bold: true });
s.addText("Your horoscope app\nis guessing.", { x: 0.5, y: 2.9, w: 12, h: 2.2, fontFace: F.display, fontSize: 72, color: C.ink, italic: false, lineSpacingMultiple: 1.0 });
s.addText("A SajuMuse campaign brief on GenZ astrology-app UX, the structural gap we found, and the Four Pillars thesis that closes it.", { x: 0.5, y: 5.1, w: 9, h: 1, fontFace: F.display, fontSize: 18, color: C.muted, italic: true });
s.addText("April 2026  ·  Internal + Partner Share", { x: 0.5, y: 6.3, w: 6, h: 0.3, fontFace: F.body, fontSize: 10, color: C.muted, charSpacing: 4 });

// ───── Slide 2: The thesis ─────
s = p.addSlide({ masterName: MASTER });
addSectionTag(s, "01  ·  THESIS");
s.addText("GenZ astrology is saturated with AI output,\nand starved for interpretive structure.", { x: 0.5, y: 1.4, w: 12.3, h: 2.2, fontFace: F.display, fontSize: 36, color: C.ink, lineSpacingMultiple: 1.15 });
s.addText([
  { text: "Every app can generate a sentence.\n", options: { fontFace: F.body, fontSize: 16, color: C.ink } },
  { text: "Almost none can explain ", options: { fontFace: F.body, fontSize: 16, color: C.ink } },
  { text: "why", options: { fontFace: F.body, fontSize: 16, color: C.ink, italic: true, bold: true } },
  { text: " that sentence applies to you.\nSajuMuse is built on the one astrology tradition that treats ", options: { fontFace: F.body, fontSize: 16, color: C.ink } },
  { text: "why", options: { fontFace: F.body, fontSize: 16, color: C.ink, italic: true, bold: true } },
  { text: " as a first-class output: Four Pillars (Saju).", options: { fontFace: F.body, fontSize: 16, color: C.ink } },
], { x: 0.5, y: 4.2, w: 11, h: 2 });

// ───── Slide 3: Competitor landscape ─────
s = p.addSlide({ masterName: MASTER });
addSectionTag(s, "02  ·  COMPETITOR AX LANDSCAPE");
s.addText("What the six biggest apps actually deliver", { x: 0.5, y: 1.05, w: 12, h: 0.6, fontFace: F.display, fontSize: 28, color: C.ink });

const rows = [
  [{ text: "App", options: { bold: true, color: C.ink } }, { text: "AX Strength", options: { bold: true, color: C.ink } }, { text: "GenZ Friction", options: { bold: true, color: C.ink } }],
  ["Co-Star", "Iconic UI, sharp copy voice", "Recycled AI one-liners, no reasoning"],
  ["The Pattern", "Relationship compatibility visuals", "Answers locked behind paywall"],
  ["Nebula", "Live human readers", "$3–$9 per minute, aggressive checkout"],
  ["Sanctuary / Chani", "Brand warmth, voice-led UX", "Generic daily horoscope, weak personalization"],
  ["Manse (KR)", "Accurate Saju data", "1990s UI, Korean-only, no GenZ hook"],
  ["ChatGPT DIY", "Free, instant", "Hallucinates, no lineage, no trust"],
];
s.addTable(rows, {
  x: 0.5, y: 1.9, w: 12.3, colW: [2.3, 4.5, 5.5],
  fontFace: F.body, fontSize: 13, color: C.ink,
  border: { type: "solid", pt: 0.5, color: C.rule },
  rowH: 0.55,
});

// ───── Slide 4: The five gaps ─────
s = p.addSlide({ masterName: MASTER });
addSectionTag(s, "03  ·  THE FIVE GAPS");
s.addText("Where GenZ is quietly dissatisfied", { x: 0.5, y: 1.05, w: 12, h: 0.6, fontFace: F.display, fontSize: 28, color: C.ink });

const gaps = [
  ["No ‘why’", "AI sentences without interpretive backbone."],
  ["12-sign oversimplification", "Western astrology stretched over 8B people."],
  ["Pricing mismatch", "Per-minute meters or $15/mo subscriptions that outlast the curiosity."],
  ["Shallow personalization", "Birth time collected, rarely honored."],
  ["Invisible authorship", "No curator, no face, no accountability."],
];
gaps.forEach(([h, b], i) => {
  const col = i % 2, row = Math.floor(i / 2);
  const x = 0.5 + col * 6.2;
  const y = 1.9 + row * 1.55;
  s.addText(String(i + 1).padStart(2, "0"), { x, y, w: 0.6, h: 0.4, fontFace: F.display, fontSize: 18, color: C.gold, italic: true });
  s.addText(h, { x: x + 0.7, y, w: 5, h: 0.4, fontFace: F.display, fontSize: 20, color: C.ink, bold: true });
  s.addText(b, { x: x + 0.7, y: y + 0.45, w: 5, h: 0.9, fontFace: F.body, fontSize: 13, color: C.muted });
});

// ───── Slide 5: Our answer ─────
s = p.addSlide({ masterName: MASTER });
addSectionTag(s, "04  ·  OUR ANSWER");
s.addText("Four Pillars, GenZ native.", { x: 0.5, y: 1.1, w: 12, h: 1, fontFace: F.display, fontSize: 44, color: C.ink });
s.addText("1,200 years of structure. Designed for a 2026 feed.", { x: 0.5, y: 2.1, w: 12, h: 0.6, fontFace: F.display, fontSize: 20, color: C.muted, italic: true });

const pillars = [
  ["年", "YEAR", "The context you were born into."],
  ["月", "MONTH", "The season of your chart."],
  ["日", "DAY", "Your Day Master — who you are."],
  ["時", "HOUR", "The hidden engine of your chart."],
];
pillars.forEach(([h, label, body], i) => {
  const x = 0.5 + i * 3.15;
  s.addShape(p.shapes.RECTANGLE, { x, y: 3.2, w: 2.9, h: 3.3, fill: { color: C.paper }, line: { color: C.rule, width: 0.5 } });
  s.addText(h, { x, y: 3.35, w: 2.9, h: 1.4, fontFace: F.display, fontSize: 72, color: C.gold, align: "center" });
  s.addText(label, { x, y: 4.75, w: 2.9, h: 0.35, fontFace: F.body, fontSize: 11, color: C.ink, align: "center", charSpacing: 6, bold: true });
  s.addText(body, { x: x + 0.2, y: 5.15, w: 2.5, h: 1.2, fontFace: F.body, fontSize: 12, color: C.muted, align: "center", italic: true });
});

// ───── Slide 6: Product tiers ─────
s = p.addSlide({ masterName: MASTER });
addSectionTag(s, "05  ·  PRODUCT");
s.addText("A free door. A paid room.", { x: 0.5, y: 1.1, w: 12, h: 0.9, fontFace: F.display, fontSize: 36, color: C.ink });

// Free card
s.addShape(p.shapes.RECTANGLE, { x: 0.5, y: 2.5, w: 6, h: 4, fill: { color: C.paper }, line: { color: C.rule, width: 0.5 } });
s.addText("FREE MINI READING", { x: 0.8, y: 2.8, w: 5.5, h: 0.3, fontFace: F.body, fontSize: 11, color: C.gold, charSpacing: 6, bold: true });
s.addText("Thirty seconds.\nOne honest paragraph.", { x: 0.8, y: 3.2, w: 5.5, h: 1.3, fontFace: F.display, fontSize: 26, color: C.ink });
s.addText("Day Master · dominant element · one structural insight. No email wall. AI-drafted, human-vetted.", { x: 0.8, y: 4.8, w: 5.5, h: 1.3, fontFace: F.body, fontSize: 13, color: C.muted, italic: true });

// Premium card
s.addShape(p.shapes.RECTANGLE, { x: 6.83, y: 2.5, w: 6, h: 4, fill: { color: C.ink }, line: { color: C.gold, width: 0.75 } });
s.addText("PREMIUM FULL REPORT", { x: 7.13, y: 2.8, w: 5.5, h: 0.3, fontFace: F.body, fontSize: 11, color: C.gold, charSpacing: 6, bold: true });
s.addText("$29, once. Human-signed.", { x: 7.13, y: 3.2, w: 5.5, h: 1.3, fontFace: F.display, fontSize: 26, color: C.cream });
s.addText("12 pages. Four Pillars deep read. Ten Gods, Luck Pillars, and an annotated reading a human curator signs. Delivered in 24 hours. No subscription.", { x: 7.13, y: 4.8, w: 5.5, h: 1.5, fontFace: F.body, fontSize: 13, color: C.rule, italic: true });

// ───── Slide 7: Campaign messages ─────
s = p.addSlide({ masterName: MASTER });
addSectionTag(s, "06  ·  CAMPAIGN MESSAGES");
s.addText("Five lines we're shipping", { x: 0.5, y: 1.05, w: 12, h: 0.6, fontFace: F.display, fontSize: 28, color: C.ink });

const lines = [
  "Your horoscope app is guessing. We're reading your Four Pillars.",
  "AI wrote your last reading. A human wrote this one.",
  "12 signs can't describe 8 billion people. Four Pillars can.",
  "Built on 1,200 years of Saju. Designed for your 2026 feed.",
  "One birth moment. Four pillars. $29 once — not $9.99 a month forever.",
];
lines.forEach((t, i) => {
  const y = 2 + i * 0.85;
  s.addText(String(i + 1).padStart(2, "0"), { x: 0.5, y, w: 0.6, h: 0.7, fontFace: F.display, fontSize: 22, color: C.gold, italic: true });
  s.addText(t, { x: 1.2, y, w: 11.3, h: 0.7, fontFace: F.display, fontSize: 20, color: C.ink, italic: true });
});

// ───── Slide 8: Rollout ─────
s = p.addSlide({ masterName: MASTER });
addSectionTag(s, "07  ·  ROLLOUT");
s.addText("Four channels, one week.", { x: 0.5, y: 1.05, w: 12, h: 0.9, fontFace: F.display, fontSize: 32, color: C.ink });

const plan = [
  ["MON", "Newsletter", "‘Your horoscope app is guessing.’ 900-word drop to list."],
  ["TUE", "IG Carousel", "5-slide diagnosis → CTA. Paid boost $200."],
  ["WED", "YouTube Short", "45s thumbnail hook → voiceover over Four Pillars reveal."],
  ["THU", "Blog + SEO", "Long-form ‘AX audit’ essay, indexed via Google API."],
  ["FRI", "Partner Share", "This deck to 3 creator partners for co-post."],
];
plan.forEach(([d, ch, detail], i) => {
  const y = 2 + i * 0.85;
  s.addText(d, { x: 0.5, y, w: 1.2, h: 0.5, fontFace: F.body, fontSize: 12, color: C.gold, bold: true, charSpacing: 4 });
  s.addText(ch, { x: 1.8, y, w: 3, h: 0.5, fontFace: F.display, fontSize: 18, color: C.ink, bold: true });
  s.addText(detail, { x: 4.9, y: y + 0.05, w: 7.8, h: 0.7, fontFace: F.body, fontSize: 13, color: C.muted, italic: true });
});

// ───── Slide 9: Closing ─────
s = p.addSlide({ masterName: MASTER });
s.addText("Your destiny is written in the stars.", { x: 0.5, y: 2.6, w: 12.3, h: 1.2, fontFace: F.display, fontSize: 44, color: C.ink, align: "center", italic: true });
s.addText("We just happen to read the Korean edition.", { x: 0.5, y: 3.9, w: 12.3, h: 0.8, fontFace: F.display, fontSize: 22, color: C.muted, align: "center", italic: true });
s.addText("sajumuse.com", { x: 0.5, y: 5.3, w: 12.3, h: 0.5, fontFace: F.body, fontSize: 14, color: C.gold, align: "center", charSpacing: 6, bold: true });

// Save
const out = path.join(__dirname, "sajumuse-ax-deck.pptx");
p.writeFile({ fileName: out }).then((f) => console.log("OK:", f));
