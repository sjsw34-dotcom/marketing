// SajuMuse 사업소개서 — 크림·세리프·타이포그래피 중심 에디토리얼 덱 (이미지 無)
// 참조: _templates/ppt-template.md + _context/*
const PptxGenJS = require('pptxgenjs');
const pptx = new PptxGenJS();

pptx.layout = 'LAYOUT_WIDE'; // 13.333" x 7.5"
pptx.title = 'SajuMuse 사업소개서';
pptx.company = 'SajuMuse';

// Design tokens
const C = {
  bg:      'F5F1EC',
  surface: 'EDE7DF',
  ink:     '1F1B16',
  muted:   '7A726A',
  faint:   'B5AEA4',
  purple:  '7C3AED',
  gold:    'B8924A',
  hair:    'C9C0B5'
};
const F = { serif: 'Georgia', sans: 'Calibri' };

// Master
pptx.defineSlideMaster({
  title: 'MASTER',
  background: { color: C.bg },
  slideNumber: {
    x: 12.55, y: 7.05, w: 0.5, h: 0.3,
    fontFace: F.sans, fontSize: 9, color: C.muted, align: 'right', charSpacing: 2
  },
  objects: [
    { text: { text: 'SAJUMUSE   ·   BUSINESS DECK', options: {
      x: 0.6, y: 0.32, w: 7, h: 0.3,
      fontFace: F.sans, fontSize: 9, color: C.muted, charSpacing: 5
    }}},
    { text: { text: '2026  SPRING  EDITION', options: {
      x: 6.0, y: 0.32, w: 6.4, h: 0.3,
      fontFace: F.sans, fontSize: 9, color: C.muted, align: 'right', charSpacing: 5
    }}},
    { line: { x: 0.6, y: 0.72, w: 12.13, h: 0, line: { color: C.hair, width: 0.5 } } },
    { line: { x: 0.6, y: 6.95, w: 12.13, h: 0, line: { color: C.hair, width: 0.5 } } },
    { text: { text: 'sajumuse.com', options: {
      x: 0.6, y: 7.05, w: 6, h: 0.3,
      fontFace: F.sans, fontSize: 9, color: C.muted, charSpacing: 3
    }}}
  ]
});

// Helpers
const hair = (s, x, y, w, color = C.hair, weight = 0.5) =>
  s.addShape(pptx.ShapeType.line, { x, y, w, h: 0, line: { color, width: weight } });
const vhair = (s, x, y, h, color = C.hair, weight = 0.5) =>
  s.addShape(pptx.ShapeType.line, { x, y, w: 0, h, line: { color, width: weight } });

// ════════════════════════════════════════════════════════════
// SLIDE 1 — COVER (asymmetric typography poster)
// ════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide({ masterName: 'MASTER' });
  // left colophon strip
  vhair(s, 2.8, 1.5, 5);
  s.addText('EST.\n2 0 2 4', {
    x: 0.8, y: 1.5, w: 1.8, h: 1,
    fontFace: F.sans, fontSize: 10, color: C.muted, charSpacing: 4, lineSpacingMultiple: 1.6
  });
  s.addText('VOL.\nO N E', {
    x: 0.8, y: 2.8, w: 1.8, h: 1,
    fontFace: F.sans, fontSize: 10, color: C.muted, charSpacing: 4, lineSpacingMultiple: 1.6
  });
  s.addText('SEOUL\n·\nG L O B A L', {
    x: 0.8, y: 4.2, w: 1.8, h: 1.4,
    fontFace: F.sans, fontSize: 10, color: C.muted, charSpacing: 4, lineSpacingMultiple: 1.6
  });

  // massive wordmark
  s.addText('SAJU', {
    x: 3.2, y: 1.9, w: 9, h: 1.7,
    fontFace: F.serif, fontSize: 110, color: C.ink, charSpacing: 8, bold: false
  });
  s.addText('MUSE.', {
    x: 3.2, y: 3.3, w: 9, h: 1.7,
    fontFace: F.serif, fontSize: 110, italic: true, color: C.ink, charSpacing: 4
  });

  hair(s, 3.2, 5.3, 2.2, C.gold, 1);

  s.addText('Korean Saju Reading — The Four Pillars of Destiny.', {
    x: 3.2, y: 5.5, w: 9, h: 0.5,
    fontFace: F.serif, fontSize: 16, italic: true, color: C.ink
  });
  s.addText('사 업 소 개 서    ·    B U S I N E S S   D E C K', {
    x: 3.2, y: 6.1, w: 9, h: 0.4,
    fontFace: F.sans, fontSize: 10, color: C.muted, charSpacing: 6
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 2 — WELCOME (letter-form, asymmetric)
// ════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide({ masterName: 'MASTER' });

  s.addText('A', {
    x: 0.7, y: 1.2, w: 3, h: 3,
    fontFace: F.serif, fontSize: 260, color: C.surface, charSpacing: 0
  });

  s.addText('WELCOME', {
    x: 4.8, y: 1.4, w: 7.5, h: 0.5,
    fontFace: F.sans, fontSize: 11, color: C.gold, charSpacing: 8
  });
  s.addText('A letter to our reader.', {
    x: 4.8, y: 1.95, w: 7.5, h: 1,
    fontFace: F.serif, fontSize: 36, italic: true, color: C.ink
  });
  hair(s, 4.8, 3.2, 1);

  s.addText(
    '한국의 천 년 지혜, 사주(四柱)를 글로벌 GenZ의 언어로 다시 씁니다. ' +
    'SajuMuse는 AI의 즉시성과 명리학자의 해석을 결합해, 영어권 사용자가 ' +
    '자신의 운명 구조를 직관적으로 이해할 수 있도록 돕습니다.\n\n' +
    '이 문서는 우리가 누구이며, 왜 지금 이 일을 시작해야 하는지에 대한 ' +
    '이야기입니다. 찬찬히 읽어주십시오.',
    {
      x: 4.8, y: 3.5, w: 7.5, h: 2.5,
      fontFace: F.sans, fontSize: 13, color: C.ink, lineSpacingMultiple: 1.55
    }
  );
  s.addText('— SajuMuse  Team', {
    x: 4.8, y: 6.2, w: 7.5, h: 0.3,
    fontFace: F.serif, fontSize: 13, italic: true, color: C.muted
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 3 — ABOUT US (pull quote left, explanatory right)
// ════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide({ masterName: 'MASTER' });

  s.addText('ABOUT', {
    x: 0.8, y: 1.3, w: 5, h: 0.4,
    fontFace: F.sans, fontSize: 10, color: C.gold, charSpacing: 6
  });
  s.addText('"사주는 운명을\n결정짓지 않는다—\n길을 비춘다."', {
    x: 0.8, y: 1.8, w: 6.5, h: 4.2,
    fontFace: F.serif, fontSize: 40, italic: true, color: C.ink, lineSpacingMultiple: 1.15
  });
  hair(s, 0.8, 6.1, 0.6, C.gold, 1);
  s.addText('— SajuMuse manifesto', {
    x: 0.8, y: 6.25, w: 5, h: 0.3,
    fontFace: F.sans, fontSize: 10, color: C.muted, charSpacing: 3
  });

  vhair(s, 7.8, 1.4, 5.3);

  s.addText('WHAT WE DO', {
    x: 8.0, y: 1.4, w: 4.8, h: 0.3,
    fontFace: F.sans, fontSize: 10, color: C.gold, charSpacing: 4
  });
  s.addText(
    'SajuMuse는 한국 전통 명리학(四柱)을 기반으로, 영어권 GenZ에게 ' +
    '개인 맞춤 운명 분석 리포트를 제공하는 디지털 운세 브랜드입니다.',
    { x: 8.0, y: 1.85, w: 4.8, h: 1.8, fontFace: F.sans, fontSize: 12, color: C.ink, lineSpacingMultiple: 1.55 }
  );

  hair(s, 8.0, 3.7, 0.5);
  s.addText('HOW WE OPERATE', {
    x: 8.0, y: 3.85, w: 4.8, h: 0.3,
    fontFace: F.sans, fontSize: 10, color: C.gold, charSpacing: 4
  });
  s.addText(
    '무료 미니 리딩으로 진입한 사용자가 $29 프리미엄 리포트로 자연스럽게 ' +
    '연결되는 Freemium 구조. 다크·미스틱 톤의 사이트와 SEO 블로그 자동화로 ' +
    '글로벌 유기적 트래픽을 축적합니다.',
    { x: 8.0, y: 4.3, w: 4.8, h: 2.3, fontFace: F.sans, fontSize: 12, color: C.ink, lineSpacingMultiple: 1.55 }
  );
}

// ════════════════════════════════════════════════════════════
// SLIDE 4 — MILESTONE (ruled horizontal timeline, big years)
// ════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide({ masterName: 'MASTER' });

  s.addText('CHAPTER · 01', {
    x: 0.8, y: 1.3, w: 6, h: 0.3,
    fontFace: F.sans, fontSize: 10, color: C.gold, charSpacing: 4
  });
  s.addText('Milestone.', {
    x: 0.8, y: 1.7, w: 10, h: 1.1,
    fontFace: F.serif, fontSize: 54, italic: true, color: C.ink
  });

  const years = [
    { y: '2024', t: 'Founded', d: '서울에서 기획 시작.\n해석 데이터셋 수집.' },
    { y: '2025', t: 'MVP',     d: '무료 미니 리딩 런칭.\n초기 1,000 유저 달성.' },
    { y: '2026', t: 'Launch',  d: '프리미엄 리포트 출시.\nSEO 블로그 자동화 가동.' },
    { y: '2027', t: 'Global',  d: '북미·유럽 본격 확장.\n팀·상품 라인업 확대.' }
  ];
  const startX = 0.8, endX = 12.5, y0 = 4.5;
  hair(s, startX, y0, endX - startX);

  const step = (endX - startX) / years.length;
  years.forEach((m, i) => {
    const cx = startX + step * i + step / 2;
    s.addShape(pptx.ShapeType.ellipse, {
      x: cx - 0.08, y: y0 - 0.08, w: 0.16, h: 0.16,
      fill: { color: i === 2 ? C.gold : C.ink }, line: { type: 'none' }
    });
    s.addText(m.y, {
      x: cx - 1.2, y: y0 - 1.3, w: 2.4, h: 0.9,
      fontFace: F.serif, fontSize: 44, color: C.ink, align: 'center', charSpacing: 3
    });
    s.addText(m.t.toUpperCase(), {
      x: cx - 1.2, y: y0 + 0.2, w: 2.4, h: 0.3,
      fontFace: F.sans, fontSize: 10, color: C.gold, align: 'center', charSpacing: 5
    });
    s.addText(m.d, {
      x: cx - 1.3, y: y0 + 0.6, w: 2.6, h: 1.2,
      fontFace: F.sans, fontSize: 11, color: C.muted, align: 'center', lineSpacingMultiple: 1.45
    });
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 5 — VALUES (4 roman numerals, asymmetric column + vertical sidemark)
// ════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide({ masterName: 'MASTER' });

  s.addText('CHAPTER · 02', {
    x: 0.8, y: 1.3, w: 6, h: 0.3,
    fontFace: F.sans, fontSize: 10, color: C.gold, charSpacing: 4
  });
  s.addText('Vision, Mission,\n& Our Values.', {
    x: 0.8, y: 1.7, w: 7, h: 2,
    fontFace: F.serif, fontSize: 40, italic: true, color: C.ink, lineSpacingMultiple: 1.1
  });

  // vision/mission compact
  hair(s, 0.8, 4.15, 0.5);
  s.addText('VISION', {
    x: 0.8, y: 4.25, w: 5.5, h: 0.3,
    fontFace: F.sans, fontSize: 10, color: C.gold, charSpacing: 4
  });
  s.addText('전 세계 젊은 세대가 한국 명리 지혜를\n쉽고 감각적으로 경험하게 한다.', {
    x: 0.8, y: 4.6, w: 5.5, h: 1,
    fontFace: F.serif, fontSize: 14, color: C.ink, lineSpacingMultiple: 1.4
  });
  hair(s, 0.8, 5.7, 0.5);
  s.addText('MISSION', {
    x: 0.8, y: 5.8, w: 5.5, h: 0.3,
    fontFace: F.sans, fontSize: 10, color: C.gold, charSpacing: 4
  });
  s.addText('AI의 즉시성과 휴먼 큐레이션을 결합해,\n접근 가능한 정통 리딩을 제공한다.', {
    x: 0.8, y: 6.15, w: 5.5, h: 0.9,
    fontFace: F.serif, fontSize: 14, color: C.ink, lineSpacingMultiple: 1.4
  });

  // right column: 4 values w/ roman numerals
  vhair(s, 7.3, 1.3, 5.5);
  const vals = [
    ['I',   'Authenticity', '오행·천간·지지·절기의 언어에 타협하지 않는다.'],
    ['II',  'Accessibility','명리를 공부한 적 없는 사람도 단번에 이해하게.'],
    ['III', 'Wonder',       '신비로움은 장식이 아니라 태도다.'],
    ['IV',  'Care',         '모든 프리미엄 리포트는 사람이 검수한다.']
  ];
  vals.forEach(([n, t, d], i) => {
    const y = 1.4 + i * 1.35;
    s.addText(n, {
      x: 7.6, y, w: 0.9, h: 0.9,
      fontFace: F.serif, fontSize: 32, italic: true, color: C.gold
    });
    s.addText(t, {
      x: 8.6, y: y + 0.05, w: 4, h: 0.5,
      fontFace: F.serif, fontSize: 20, color: C.ink, charSpacing: 2
    });
    s.addText(d, {
      x: 8.6, y: y + 0.65, w: 4, h: 0.7,
      fontFace: F.sans, fontSize: 11, color: C.muted, lineSpacingMultiple: 1.4
    });
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 6 — OUR STORY (magazine 2-column with drop cap)
// ════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide({ masterName: 'MASTER' });

  s.addText('CHAPTER · 03', {
    x: 0.8, y: 1.3, w: 6, h: 0.3,
    fontFace: F.sans, fontSize: 10, color: C.gold, charSpacing: 4
  });
  s.addText('Our Story.', {
    x: 0.8, y: 1.7, w: 8, h: 1,
    fontFace: F.serif, fontSize: 44, italic: true, color: C.ink
  });
  hair(s, 0.8, 2.95, 0.6, C.gold, 1);

  // drop cap
  s.addText('W', {
    x: 0.7, y: 3.2, w: 1.5, h: 1.9,
    fontFace: F.serif, fontSize: 110, color: C.gold
  });

  // column 1
  s.addText(
    '서양 점성술과 MBTI의 세계적 유행을 지켜보며, ' +
    '우리는 한 가지 질문을 품었습니다 — 왜 한국의 사주는 ' +
    '글로벌 무대에 나서지 못했을까?\n\n' +
    '답은 간단했습니다. 너무 복잡했고, 너무 낡았고, ' +
    '너무 한국어였습니다.',
    {
      x: 2.2, y: 3.2, w: 4.9, h: 3.5,
      fontFace: F.sans, fontSize: 13, color: C.ink, lineSpacingMultiple: 1.6
    }
  );

  vhair(s, 7.4, 3.25, 3.4);

  // column 2
  s.addText(
    'SajuMuse는 그 세 가지를 바꿉니다.\n\n' +
    '천간·지지·오행을 GenZ의 시각적 문법으로 번역하고, ' +
    'AI로 진입 장벽을 낮추며, 모든 프리미엄 리딩은 명리학자가 ' +
    '직접 검수해 발송합니다. 정통성과 접근성 — 한쪽을 포기하지 ' +
    '않는 것이 우리의 고집입니다.',
    {
      x: 7.7, y: 3.2, w: 5.0, h: 3.5,
      fontFace: F.sans, fontSize: 13, color: C.ink, lineSpacingMultiple: 1.6
    }
  );
}

// ════════════════════════════════════════════════════════════
// SLIDE 7 — OUR FOUNDER (name huge, narrow bio column, quote sidebar)
// ════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide({ masterName: 'MASTER' });

  s.addText('CHAPTER · 04', {
    x: 0.8, y: 1.3, w: 6, h: 0.3,
    fontFace: F.sans, fontSize: 10, color: C.gold, charSpacing: 4
  });
  s.addText('The Founder.', {
    x: 0.8, y: 1.7, w: 10, h: 1,
    fontFace: F.serif, fontSize: 44, italic: true, color: C.ink
  });
  hair(s, 0.8, 2.95, 0.6, C.gold, 1);

  // name treatment
  s.addText('SEJIN', {
    x: 0.8, y: 3.4, w: 6, h: 1.1,
    fontFace: F.serif, fontSize: 64, color: C.ink, charSpacing: 4
  });
  s.addText('KIM.', {
    x: 0.8, y: 4.5, w: 6, h: 1.1,
    fontFace: F.serif, fontSize: 64, italic: true, color: C.ink
  });
  s.addText('FOUNDER   ·   CURATOR', {
    x: 0.8, y: 5.8, w: 6, h: 0.3,
    fontFace: F.sans, fontSize: 10, color: C.gold, charSpacing: 5
  });

  // vertical rule
  vhair(s, 7.3, 3.4, 3.3);

  // bio
  s.addText(
    '15년차 콘텐츠 기획자. K-culture와 동양 철학의 교차점에서 ' +
    '글로벌 제품을 만들어 왔습니다. 서울대 동양철학 수학, 5년간 ' +
    '명리학을 직접 공부했고, "정통성과 접근성은 양립할 수 있다"는 ' +
    '확신 위에 SajuMuse를 시작했습니다.',
    {
      x: 7.6, y: 3.4, w: 5.1, h: 2.2,
      fontFace: F.sans, fontSize: 12, color: C.ink, lineSpacingMultiple: 1.55
    }
  );

  hair(s, 7.6, 5.7, 0.5, C.gold, 1);
  s.addText('"사주는 점이 아니다 —\n구조를 읽는 언어다."', {
    x: 7.6, y: 5.85, w: 5.1, h: 1,
    fontFace: F.serif, fontSize: 18, italic: true, color: C.ink, lineSpacingMultiple: 1.3
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 8 — OUR EXPERTS (3 columns, no photos, names as typography)
// ════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide({ masterName: 'MASTER' });

  s.addText('CHAPTER · 05', {
    x: 0.8, y: 1.3, w: 6, h: 0.3,
    fontFace: F.sans, fontSize: 10, color: C.gold, charSpacing: 4
  });
  s.addText('The People\nBehind the Readings.', {
    x: 0.8, y: 1.7, w: 10, h: 1.8,
    fontFace: F.serif, fontSize: 36, italic: true, color: C.ink, lineSpacingMultiple: 1.15
  });

  hair(s, 0.8, 4.2, 12);

  const team = [
    { no:'01', name: 'Master\nHyun',   role: 'Saju Consultant',
      bio: '30년차 명리학자. 모든 프리미엄\n리포트 최종 검수.' },
    { no:'02', name: 'Daniel\nPark',   role: 'AI  /  Product',
      bio: 'Claude·GPT 기반 해석 엔진 설계.\n전 토스 프론트엔드 리드.' },
    { no:'03', name: 'Mina\nSeo',      role: 'Brand  /  Editorial',
      bio: 'Vogue Korea 출신 에디터.\n영어 카피·비주얼 톤 총괄.' }
  ];
  const cw = 3.8, gap = 0.3;
  const tw = cw * 3 + gap * 2;
  const sx = (13.333 - tw) / 2;
  team.forEach((p, i) => {
    const x = sx + i * (cw + gap);
    s.addText(p.no, {
      x, y: 4.5, w: 0.9, h: 0.4,
      fontFace: F.serif, fontSize: 16, italic: true, color: C.gold
    });
    s.addText(p.name, {
      x, y: 4.95, w: cw, h: 1.3,
      fontFace: F.serif, fontSize: 28, color: C.ink, lineSpacingMultiple: 1.05, charSpacing: 2
    });
    s.addText(p.role.toUpperCase(), {
      x, y: 6.05, w: cw, h: 0.3,
      fontFace: F.sans, fontSize: 9, color: C.gold, charSpacing: 5
    });
    s.addText(p.bio, {
      x, y: 6.4, w: cw, h: 0.7,
      fontFace: F.sans, fontSize: 10, color: C.muted, lineSpacingMultiple: 1.4
    });
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 9 — SERVICES (tier table, prices as typography)
// ════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide({ masterName: 'MASTER' });

  s.addText('CHAPTER · 06', {
    x: 0.8, y: 1.3, w: 6, h: 0.3,
    fontFace: F.sans, fontSize: 10, color: C.gold, charSpacing: 4
  });
  s.addText('Our Services.', {
    x: 0.8, y: 1.7, w: 10, h: 1,
    fontFace: F.serif, fontSize: 44, italic: true, color: C.ink
  });
  hair(s, 0.8, 2.95, 0.6, C.gold, 1);

  const services = [
    { no:'01', t:'Free Mini Reading',    p:'$0',  d:'AI 즉시 생성 — 퍼널 진입 훅.' },
    { no:'02', t:'Love Reading',         p:'$19', d:'연애·관계 특화 심층 리포트.' },
    { no:'03', t:'Premium Full Report',  p:'$29', d:'명리학자 수동 큐레이션. 48시간 내 이메일.' }
  ];
  const rowH = 1.15;
  const y0 = 3.5;
  hair(s, 0.8, y0, 12);
  services.forEach((sv, i) => {
    const y = y0 + 0.25 + i * rowH;
    const isPremium = i === 2;
    s.addText(sv.no, {
      x: 0.8, y, w: 0.9, h: 0.8,
      fontFace: F.serif, fontSize: 24, italic: true, color: C.gold
    });
    s.addText(sv.t, {
      x: 2.0, y: y + 0.1, w: 5.5, h: 0.5,
      fontFace: F.serif, fontSize: 22, color: C.ink, charSpacing: 2
    });
    s.addText(sv.d, {
      x: 2.0, y: y + 0.55, w: 7, h: 0.4,
      fontFace: F.sans, fontSize: 11, color: C.muted
    });
    s.addText(sv.p, {
      x: 9.5, y, w: 3.2, h: 0.8,
      fontFace: F.serif, fontSize: 38, italic: isPremium,
      color: isPremium ? C.purple : C.ink, align: 'right'
    });
    hair(s, 0.8, y + rowH - 0.05, 12);
  });

  s.addText('모든 가격은 USD · 토스페이먼츠 글로벌 카드 결제.', {
    x: 0.8, y: 6.8, w: 10, h: 0.3,
    fontFace: F.sans, fontSize: 9, italic: true, color: C.muted, charSpacing: 2
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 10 — CLOSING (minimal centered)
// ════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide({ masterName: 'MASTER' });

  s.addText('F I N .', {
    x: 0.8, y: 1.5, w: 12, h: 0.4,
    fontFace: F.sans, fontSize: 10, color: C.gold, align: 'center', charSpacing: 10
  });

  s.addText('Thank you', {
    x: 0.8, y: 2.7, w: 12, h: 1.4,
    fontFace: F.serif, fontSize: 80, italic: true, color: C.ink, align: 'center'
  });

  hair(s, 6.2, 4.3, 1, C.gold, 1);

  s.addText('Your destiny is written in the stars.', {
    x: 0.8, y: 4.55, w: 12, h: 0.5,
    fontFace: F.serif, fontSize: 18, italic: true, color: C.muted, align: 'center'
  });

  s.addText('sajumuse.com     ·     hello@sajumuse.com', {
    x: 0.8, y: 6.1, w: 12, h: 0.4,
    fontFace: F.sans, fontSize: 11, color: C.ink, align: 'center', charSpacing: 5
  });
}

pptx.writeFile({ fileName: 'out/sajumuse-business-deck.pptx' })
  .then(f => console.log('Saved:', f));
