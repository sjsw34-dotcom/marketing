---
template: presentation_deck
brand: SajuMuse
style: minimalist · editorial · magazine-like
inspired_by: _templates/ppt (1).jpg (Minimalist beige/cream editorial deck)
aspect_ratio: 4:3 또는 16:9
slide_count: 10 (확장 가능)
purpose: 브랜드 소개·제안서·인베스터 덱·강의자료 공통 베이스
---

# SajuMuse — PPT 템플릿 (마스터 레퍼런스)

> 항상 이 파일을 참조해서 슬라이드 덱을 만든다.
> 미니멀·에디토리얼·매거진 톤. 여백이 곧 디자인.
> **주의**: 마케팅 사이트는 다크 테마이지만, **이 PPT 덱은 라이트(크림) 테마**다 — 인쇄/투사/제안서 가독성을 위해.

---

## 🎨 디자인 시스템 (Deck-Specific)

### Color Palette
| Role | Hex | Usage |
|---|---|---|
| Background | `#F5F1EC` | 메인 크림 배경 (살짝 따뜻한 오프화이트) |
| Surface Alt | `#EDE7DF` | 강조 블록, 사이드 패널 |
| Ink Primary | `#1F1B16` | 헤드라인, 본문 |
| Ink Muted | `#7A726A` | 캡션, 메타, 보조 텍스트 |
| Accent (Saju Purple) | `#7C3AED` | **아주 절제해서** 한 슬라이드 1포인트만 |
| Accent (Gold) | `#B8924A` | 디바이더, 숫자, 작은 강조 |
| Hairline | `#C9C0B5` | 1px 구분선 |

### Typography
- **Display (Serif)**: Cormorant Garamond / Playfair Display — All Caps, letter-spacing 넓게 (`tracking: 0.2em`)
- **Body (Sans)**: Inter — 14–16pt, 줄간격 1.6
- **Caption**: Inter, 10pt, uppercase, ink-muted

### Layout Principles
- **여백 60% 룰**: 슬라이드의 60% 이상은 비워둔다
- **2-컬럼 그리드** 기본 (이미지 | 텍스트, 또는 텍스트 | 이미지)
- **이미지는 항상 정사각 또는 세로 비율**, 둥근 모서리 없음 (편집 매거진 느낌)
- **장식 금지**: 그림자, 그라디언트, 이모지 (덱 본문 내), 3D 효과 모두 ❌
- **Hairline divider**: 섹션 구분은 0.5pt 가는 선
- **숫자/통계는 Serif Display** 로 크게 (Editorial 임팩트)

---

## 📐 슬라이드 구조 (10-slide 기본 시퀀스)

이미지에서 확인된 10 슬라이드 패턴을 SajuMuse 맥락으로 매핑.

---

### Slide 01 — COVER
```
[좌측 1/3]                    [우측 2/3]
                              ┌──────────────┐
   SAJUMUSE                   │              │
   ─────                      │   (텍스처/   │
   {{ subtitle }}             │   천 이미지) │
                              │              │
                              └──────────────┘
```
- **콘텐츠**: 브랜드명 (Display, All Caps), 한 줄 부제, 발표일/버전
- **이미지**: 부드러운 천·실크·자연 텍스처 (원본의 "MINIMALIST" 슬라이드와 동일 무드)
- **여백**: 상하 좌우 모두 넉넉하게

---

### Slide 02 — WELCOME / HERO
```
[좌측 50%]                    [우측 50%]
┌──────────┐                  WELCOME
│  사진    │                  ──────
│ (제품/   │                  {{ 인사 본문 — 3–4 문단 }}
│  공간)   │
└──────────┘                  — {{ 사인 / 작성자 }}
```
- **목적**: 청중에게 첫 인사, 덱의 톤 셋업
- **이미지**: 단정한 정물·인테리어·손글씨 디테일

---

### Slide 03 — ABOUT US
```
[작은 이미지 좌측]    ABOUT US
                      ──────
                      {{ 회사/브랜드 소개 본문 }}

                      {{ 한 줄 미션 — 이탤릭 강조 }}
```
- **콘텐츠**: SajuMuse가 누구인지, 왜 시작했는지 (150–200 단어)
- **참조**: [_context/business-context.md](../_context/business-context.md)

---

### Slide 04 — MILESTONE / TIMELINE
```
MILESTONE
─────────

  ●────────●────────●────────●
  2023    2024    2025    2026
  founded  MVP    launch  global

  {{ 각 마일스톤 1–2 줄 캡션 }}
```
- **레이아웃**: 가로 타임라인, 작은 도트 + 연도 + 짧은 캡션
- **숫자**: Serif Display, 충분히 크게

---

### Slide 05 — VALUES (2-Column with vertical text)
```
[좌측 2 컬럼 텍스트]              [우측 세로 빅 타이포]
Company Vision   Company Mission

{{ vision 본문 }}  {{ mission 본문 }}    O U R
                                        V A L U E S
                                        (세로로 흘림)
```
- **특징**: 우측에 세로 방향 Display 타이포 — 매거진의 시그니처 무드
- **콘텐츠**: 3–5개 핵심 가치 (예: Authenticity / Accessibility / Wonder / Care)

---

### Slide 06 — OUR STORY
```
OUR STORY
─────────                       [우측 전체 이미지]
{{ 본문 — 4–5 문단 }}            ┌──────────────┐
                                │              │
                                │   (분위기    │
                                │   사진)      │
                                └──────────────┘
```
- **목적**: 창업 스토리, 한국 명리학을 글로벌에 가져온 여정
- **톤**: 1인칭 narrative, 따뜻하게

---

### Slide 07 — OUR FOUNDER
```
[좌측 인물 사진]              Your Name Here
                              ──────────────
                              {{ founder bio — 3–4 문장 }}

                              {{ 한 줄 인용구 — 이탤릭 }}
                              — {{ name }}
```
- **이미지**: 흑백 또는 무채색 톤다운된 인물 사진, 정사각

---

### Slide 08 — OUR EXPERTS / TEAM
```
OUR EXPERTS
───────────

[사진]      [사진]      [사진]
Name 1      Name 2      Name 3
역할        역할         역할
{{ 1줄 }}   {{ 1줄 }}    {{ 1줄 }}
```
- **3-컬럼 균등** 그리드, 사진은 모두 같은 크기·톤
- 사주 명리학자, AI 엔지니어, 에디터 등

---

### Slide 09 — OUR SERVICES (Numbered List + Image)
```
[좌측 큰 이미지]              01.  Service One
                              ────────────────
                              {{ 서비스 설명 1줄 }}

                              02.  Service Two
                              ────────────────
                              {{ 서비스 설명 1줄 }}

                              03.  Service Three
                              ────────────────
                              {{ 서비스 설명 1줄 }}
```
- **숫자**: Serif, ink-muted, 큼직하게
- **콘텐츠 매핑**: Free Mini Reading / Love Reading / Premium Full Report

---

### Slide 10 — CLOSING / CTA
```
            ─────────────

            Thank you.
            {{ 한 줄 클로징 메시지 }}

            sajumuse.com
            hello@sajumuse.com

            ─────────────
```
- **여백 최대화**, 중앙 정렬
- 연락처 1–2개만, 링크는 작게

---

## 🧩 확장 슬라이드 (필요 시 추가)

| 슬라이드 | 용도 | 레이아웃 힌트 |
|---|---|---|
| Problem | 시장 페인포인트 | 좌측 굵은 통계 숫자 + 우측 본문 |
| Solution | 우리의 해법 | 3-컬럼 아이콘 (라인 아이콘만) |
| Market Size | TAM/SAM/SOM | Serif 빅 넘버 3개, 캡션 작게 |
| Traction | 지표 | 가로 막대, hairline 그리드, 숫자가 주인공 |
| Pricing | 3-tier | 원본 사이트의 가격 카드 라이트 버전 |
| Roadmap | 향후 계획 | Milestone과 동일 가로 타임라인 |
| Quote / Testimonial | 사용자 후기 | 큰 따옴표 1개, 우측 이름·캡션 |
| Q&A | 질의응답 | 거의 빈 슬라이드, "Q & A" Display만 |

---

## ✅ 사용 체크리스트 (덱 작성 전 항상 점검)

- [ ] 크림 배경 `#F5F1EC` 사용 (다크 테마 ❌ — 마케팅 사이트와 다름)
- [ ] Serif Display + Inter Sans 페어링
- [ ] 슬라이드당 텍스트 50단어 이하 (커버·클로징 제외)
- [ ] 여백 60% 이상 확보
- [ ] 이미지 톤 통일 (베이지·뉴트럴 무드, 채도 낮춤)
- [ ] 액센트 컬러는 슬라이드당 1포인트 이하
- [ ] 그림자·그라디언트·이모지 본문 사용 ❌
- [ ] All Caps Display는 letter-spacing 넓게
- [ ] 숫자/통계는 Serif Display로 크게
- [ ] 페이지 번호는 우측 하단 작게, ink-muted

---

## 🔗 관련 문서
- 브랜드 톤·메시지: [_context/brand-guidelines.md](../_context/brand-guidelines.md)
- 비즈니스 맥락 (소개·팀·서비스 본문 작성 시): [_context/business-context.md](../_context/business-context.md)
- 웹 디자인 시스템 (참고만 — PPT는 라이트 테마): [_context/design-style-guide.md](../_context/design-style-guide.md)
- 원본 무드보드: [ppt (1).jpg](./ppt%20(1).jpg)

---

## ✎ 작성 노트

- 이 템플릿은 **제안서·인베스터 덱·강의자료·내부 공유** 모두에 동일하게 쓴다.
- 마케팅 사이트(다크·미스틱)와 PPT(라이트·에디토리얼)는 의도적으로 톤을 분리한다 — 사이트는 GenZ에게 감성을 팔고, PPT는 어른에게 신뢰를 판다.
- 한국어 발표용으로 사용할 때도 **레이아웃·타이포·여백 규칙은 동일**. 본문만 한국어로.
