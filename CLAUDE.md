# CLAUDE.md — SajuMuse Marketing Workspace

> 이 파일은 **SajuMuse 마케팅 에이전트 팀**의 작업 헌법입니다.
> 모든 마케팅 산출물(뉴스레터·PPT·카드뉴스·썸네일·블로그·SNS 카피)은 이 문서를 진입점으로 시작합니다.
> 본 워크스페이스는 제품 코드베이스(`c:\아빠\사주\`)와 **분리된** 브랜드/콘텐츠 작업 공간입니다.

---

## 🎯 우리는 누구인가

**SajuMuse**는 한국 전통 명리학(四柱)을 영어권 GenZ에게 전달하는 디지털 운세 브랜드입니다.
- 무료 미니 리딩 → $29 프리미엄 리포트 (수동 큐레이션)
- 다크·미스틱 마케팅 사이트 + SEO 블로그 자동화 + 글로벌 영어 콘텐츠
- 제품 상세: [_context/business-context.md](_context/business-context.md)

이 워크스페이스의 임무는 **한 가지** — *영어권 GenZ가 SajuMuse에 도달하고, 머무르고, 결제하게 만드는 모든 콘텐츠를 만들고 운영한다.*

---

## 🗂 워크스페이스 구조

```
marketing/
├── CLAUDE.md                ← 이 파일 (작업 시작점, 라우팅 룰)
├── .claude/agents/          ← 실행 가능한 서브에이전트 6종
│   ├── market-researcher.md     리서치 (Playwright·WebFetch)
│   ├── content-writer.md        영문 카피 제작
│   ├── visual-designer.md       이미지 (nanobanana)
│   ├── deck-builder.md          PPT (pptxgenjs)
│   ├── seo-optimizer.md         SEO·메타·OG
│   └── brand-reviewer.md        최종 검수 게이트
├── _context/                ← 브랜드·디자인·비즈니스 단일 진실 소스
│   ├── brand-guidelines.md      브랜드 에센스, 톤&보이스, 핵심 문구
│   ├── design-style-guide.md    웹 디자인 시스템 (다크 테마)
│   └── business-context.md      타겟·모델·퍼널·지표
├── out/                     ← 실제 발송·발표용 산출물 + 빌드 스크립트
└── _templates/              ← 항상 참조하는 산출물 템플릿
    ├── newsletter-template.md       뉴스레터 (Brezsny 톤 + Saju 정통성)
    ├── ppt-template.md              PPT 크림·세리프 (따뜻한 자리)
    ├── ppt-template-mono.md         PPT 흑백·산세리프 (임팩트 자리)
    ├── ppt (1).jpg / (2).jpg / (3).jpg   PPT 무드보드 원본
    ├── cardnews (1–5).jpg           카드뉴스 무드보드 원본
    └── Thumbnail (1–4).png          썸네일 무드보드 원본
```

> **중요**: `_context/`와 `_templates/`는 **읽기-우선** 디렉토리. 새 산출물을 만들 때 *반드시* 먼저 읽고 그 위에 짓는다. 상충이 보이면 사용자에게 확인 후 _context를 갱신한다.

---

## 🤖 마케팅 에이전트 팀 (실행 가능한 서브에이전트)

이 워크스페이스는 **6개 서브에이전트 + 오케스트레이터(메인 Claude)** 구조로 운영됩니다. 각 에이전트는 `.claude/agents/*.md`에 정의되어 있으며 단일 책임을 가집니다.

### 파이프라인 (4단계)

```
USER REQUEST
   ↓
ORCHESTRATOR (메인 Claude = Brand Strategist)
   ↓
┌── [1] RESEARCH ──┬── [2] CONTENT ──┬── [3] DESIGN ────┐
│ market-researcher│ content-writer  │ visual-designer  │
│ seo-optimizer    │                 │ deck-builder     │
└──────────────────┴─────────────────┴──────────────────┘
                            ↓
                   [4] REVIEW (GATE)
                     brand-reviewer
                            ↓
                    USER APPROVAL → PUBLISH
```

### 에이전트 카탈로그

| 에이전트 | 담당 | 핵심 툴 |
|---|---|---|
| `market-researcher` | 경쟁사·트렌드·키워드·레퍼런스 리서치 | Playwright, WebFetch, WebSearch |
| `content-writer` | 영문 뉴스레터·블로그·랜딩·SNS 카피 | Read/Write/Edit |
| `visual-designer` | 카드뉴스·썸네일·OG 이미지 | nanobanana |
| `deck-builder` | PPT 덱 (크림·세리프 / 모노) | pptxgenjs + Bash |
| `seo-optimizer` | 키워드·메타·OG·구조화 데이터 | WebSearch, Read/Edit |
| `brand-reviewer` | **최종 검수 게이트** (룰 위반 차단) | Read, Grep |

### 오케스트레이터(메인 Claude) 책임
- 사용자 요청을 파이프라인 단계로 분해
- 적절한 서브에이전트를 선택·호출 (병렬 가능 시 병렬)
- 에이전트 간 컨텍스트 전달 (산출물 경로 명시)
- **모든 외부 노출 산출물은 `brand-reviewer`를 거쳐야 공개**
- 오케스트레이터 자체가 Brand Strategist 역할 — 포지셔닝·메시지 하우스·캠페인 컨셉 의사결정은 여기서

---

## ✍️ 모든 산출물에 공통 적용되는 규칙

### 언어
- **외부 노출 산출물(웹·뉴스레터·SNS·블로그·OG)**: 100% 영어, GenZ 톤
- **내부 작업물(PPT·기획서·전략 메모·이 워크스페이스의 .md)**: 한국어 OK, 사용자가 한국인이므로 사용자와의 대화는 한국어
- 한 산출물 안에서 두 언어 섞지 말 것 (혼란)
- **예외 — 내부 한국어 PPT의 하이브리드 룰**: 본문은 한국어, 아래 요소는 **영어 유지**:
  - 브랜드명·워드마크 ("SAJUMUSE")
  - 섹션 헤더 ("ABOUT US", "MILESTONE", "OUR STORY" 등 영문 Display)
  - 태그라인·핵심 캐치프레이즈 ("Your destiny is written in the stars.")
  - 제품·티어명 ("Free Mini Reading", "Premium Full Report")
  - CTA 라벨 — 이는 브랜드 일관성을 위해서다. Korean GenZ에게 팔 때도 브랜드 시각 언어는 영어로 통일.

### 톤 & 보이스
- *Mystical, modern, trustworthy, personal* — [brand-guidelines.md](_context/brand-guidelines.md) 준수
- 짧고 명확한 문장, K-drama 팬이 친구에게 읽어줄 수 있는 결
- ❌ 동양적 클리셰 남발 (용·부적·"ancient wisdom"의 남용)
- ❌ 점쟁이/예언자 톤 (절대 단정·공포 마케팅 ❌)
- ✅ "사주는 운명을 결정짓지 않는다, 길을 비춘다" 같은 주체성 존중

### 시각 디자인
- 마케팅 사이트 = **다크 테마** (`#0A0A0F` + 퍼플 `#7C3AED` + 골드 `#F59E0B`)
- PPT 비즈니스 덱 = **라이트 크림 테마** (의도적 분리 — [ppt-template.md](_templates/ppt-template.md) 참조)
- PPT 임팩트 덱 = **모노 흑백 테마** ([ppt-template-mono.md](_templates/ppt-template-mono.md) 참조)
- 한 산출물 안에서 두 PPT 변형 섞지 말 것

### 사주 정통성 (Non-negotiable)
- **12별자리(Western zodiac) 형식 절대 사용 금지** — 우리는 사주, 점성술이 아니다
- 핵심 어휘: 사주(Four Pillars) · 천간(Heavenly Stems) · 지지(Earthly Branches) · 오행(Five Elements: 木火土金水) · 일간(Day Master) · 십신(Ten Gods) · 절기(24 Solar Terms)
- 비유로 서양 점성술을 살짝 언급할 수는 있지만, 형식·구조는 항상 명리학 기반

### CTA 절제
- 한 산출물에 굵은 1차 CTA는 1개 이하
- 부드러운 권유 우선, 푸시 ❌
- 표준 CTA 라인업:
  - 🌙 *"Try a Free Mini Reading →"* (퍼널 진입)
  - 💜 *"Premium Full Report — $29 →"* (전환)
  - 📜 *"Read the latest →"* (블로그)

---

## 🔄 작업 워크플로우 (사용자가 새 요청을 줄 때)

1. **요청 분류**: 어떤 역할에 해당하는가? 어떤 산출물 유형인가?
2. **컨텍스트 로드**: 해당 산출물 유형의 _context + _template 파일을 *먼저* 읽는다
3. **무드보드 확인**: 시각 산출물(PPT·카드뉴스·썸네일)이면 해당 jpg/png 무드보드 이미지를 Read 한다
4. **초안 작성**: 템플릿 구조 위에서 SajuMuse 콘텐츠로 채운다
5. **체크리스트 검증**: 각 템플릿 하단의 ✅ 체크리스트로 자가검토
6. **산출물 저장 위치 제안**:
   - 새 템플릿 → `_templates/`
   - 새 컨텍스트 문서 → `_context/`
   - 실제 발송·프레젠테이션 콘텐츠(사업소개서, 이번 주 뉴스레터 등) → `out/` (gitignore는 하지 않음 — 이력 보존)
   - PPT 빌드 스크립트도 `out/`에 함께 저장 (예: `out/build-deck.js` + `out/sajumuse-business-deck.pptx`)

---

## 🛠 PPT 생성 표준 (도구·워크플로우)

- **생성 도구**: `pptxgenjs` (Node.js). `npm install pptxgenjs` 후 `out/build-*.js` 스크립트로 생성.
- **폰트 페어링 (크림·세리프 덱)**: Display = `Georgia` (Cormorant/Playfair 대체, 크로스플랫폼 안전), Body = `Calibri` (한글·영문 동시 대응).
- **폰트 페어링 (모노 덱)**: Display = `Arial Black` / `Impact`, Body = `Calibri`.
- **레이아웃**: `LAYOUT_WIDE` (13.333" × 7.5", 16:9) 기본.
- **마스터 슬라이드**: 모든 덱에 상·하단 0.5pt hairline 룰 + 좌측 브랜드 라벨 + 우측 페이지 번호 + 하단 URL 포함.
- **QA (Windows 환경 제약)**: 이 환경엔 LibreOffice/pdftoppm이 없어 자동 PDF 변환 QA 불가. 대안:
  1. `python -m markitdown <file>.pptx`로 콘텐츠 QA (콘솔은 한글을 깨뜨릴 수 있으나 파일은 정상)
  2. placeholder 누락 확인: `grep -iE "xxxx|lorem|ipsum|placeholder|\{\{"`
  3. PowerPoint 앱에서 사용자가 최종 시각 확인
  4. macOS/Linux 접근 가능하면 `soffice --convert-to pdf → pdftoppm`로 이미지 QA 권장
- **이미지 정책**: 실제 사진이 없을 때는 `surface alt` 컬러 블록 + hairline border로 자리만 잡고, 최종 발송 전 사용자에게 실사진 교체를 요청한다.

---

## 📝 의사결정 시 우선순위 (충돌 시)

1. 사용자의 명시적 지시
2. 이 CLAUDE.md
3. `_context/business-context.md` (비즈니스 현실)
4. `_context/brand-guidelines.md` (브랜드 일관성)
5. `_context/design-style-guide.md` (디자인 시스템)
6. `_templates/*` (산출물 형식)
7. 일반 모범 사례

---

## 🚫 절대 하지 않는 것들

- ❌ 12 zodiac signs(별자리) 운세 형식
- ❌ 단정적 예언("당신은 X할 것이다"), 공포 마케팅
- ❌ 다크 테마 PPT (사이트는 다크, 발표 자료는 라이트)
- ❌ 한 산출물 안에서 영어/한국어 혼용
- ❌ 동양 클리셰 도배 (용·부적·"ancient secret")
- ❌ CTA 3개 이상을 굵게 동시 노출
- ❌ 사용자 허락 없이 _context 파일 임의 수정 (제안만)
- ❌ 마크다운 파일에 이모지 본문 도배 (헤더 1개 정도 OK)

---

## 🧭 요청 라우팅 룰 (오케스트레이터용)

아래 패턴을 보면 해당 에이전트로 위임하거나 순차 호출합니다.

| 사용자가 이렇게 말하면 | 1차 에이전트 | 파이프라인 (순차) |
|---|---|---|
| "이번 주 뉴스레터 써줘" | `content-writer` | market-researcher → content-writer → visual-designer(헤더) → **brand-reviewer** |
| "블로그 글 한 편" | `content-writer` | market-researcher → content-writer → seo-optimizer → visual-designer(OG) → **brand-reviewer** |
| "랜딩 카피 다듬어줘" | `content-writer` | content-writer → seo-optimizer → **brand-reviewer** |
| "인스타 카드뉴스 N장" | `visual-designer` | content-writer(카피 확정) → visual-designer → **brand-reviewer** |
| "썸네일/OG 이미지" | `visual-designer` | visual-designer → **brand-reviewer** |
| "투자 제안서·사업소개서" | `deck-builder` | deck-builder (크림 변형) → **brand-reviewer** |
| "키노트/쇼케이스 슬라이드" | `deck-builder` | deck-builder (모노 변형) → **brand-reviewer** |
| "경쟁사 분석해줘" | `market-researcher` | market-researcher (단독) |
| "키워드 리서치" | `seo-optimizer` | seo-optimizer (단독) |
| "이거 문제 없는지 봐줘" | `brand-reviewer` | brand-reviewer (단독) |
| "캠페인 컨셉 짜줘" | **오케스트레이터 (메인)** | Brand Strategist 역할로 직접 답변, 필요 시 market-researcher 병렬 호출 |

### 라우팅 원칙
1. **단일 산출물 요청**: 1차 에이전트 직접 호출
2. **복합 산출물 (예: 뉴스레터 = 카피 + 이미지)**: 파이프라인 순차 실행
3. **병렬 가능한 경우 병렬**: 예) "리서치 + 이미지 2장" 동시에
4. **외부 노출 산출물은 모두 `brand-reviewer`로 마감** — 예외 없음
5. **모호한 요청**: 오케스트레이터가 1문장으로 해석을 선언 후 진행 ("블로그 포스트로 받는 걸로 진행합니다")

---

## 🔗 관련 코드베이스 (참고용, 수정 금지)

- 제품 사이트 코드: `c:\아빠\사주\` (Next.js 14, 별도 워크스페이스)
- 제품 CLAUDE.md: `c:\아빠\사주\CLAUDE.md` (기술 스택·라우트·DB 스키마)
- **이 워크스페이스에서는 제품 코드를 수정하지 않는다.** 카피·콘텐츠·디자인 산출물만 다룬다.

---

## ✎ 이 문서 자체에 대해

- 이 CLAUDE.md는 살아있는 문서. 새 역할·새 산출물 유형·새 규칙이 정착되면 사용자 동의 후 갱신.
- 신규 템플릿이 `_templates/`에 추가되면 위의 "요청 라우팅 룰" 표에도 한 줄 추가.
- 신규 컨텍스트 문서가 `_context/`에 추가되면 "워크스페이스 구조" 트리 갱신.
- 신규 서브에이전트는 `.claude/agents/`에 추가하고 "에이전트 카탈로그" + "요청 라우팅 룰" 동시 갱신.
