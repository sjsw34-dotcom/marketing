# SajuMuse — Design Style Guide

## Theme
**Dark, mystical, premium** — 밤하늘·별·동양 전통의 신비감을 모던하게 표현.

## Color Palette
| Role | Hex | Usage |
|---|---|---|
| Background | `#0A0A0F` | 메인 배경 (딥 블랙) |
| Surface | `#1A1A2E` | 카드·섹션 배경 |
| Border | `#2A2A4A` | 구분선, 카드 테두리 |
| Primary (Purple) | `#7C3AED` | CTA 버튼, 강조 텍스트, 아이콘 |
| Accent (Gold) | `#F59E0B` | 포인트 강조, 프리미엄 요소 |
| Text Primary | `#FFFFFF` | 헤드라인 |
| Text Secondary | `#A1A1B5` | 본문, 설명 |

## Typography
- **Font Family**: Inter (Google Fonts)
- **Headline**: Bold, 대형 사이즈, 때때로 이탤릭/세리프 믹스로 신비감 강조 (예: "Four Pillars of *Destiny*")
- **Body**: Regular 16px, 줄간격 여유 있게
- **Mobile-first**, max-width 1280px

## Layout
- 세로 스크롤형 랜딩, 명확한 섹션 구분
- 섹션별 대비되는 배경(#0A0A0F ↔ #1A1A2E) 교차
- 중앙 정렬 히어로, 카드형 그리드(3-column desktop, stack on mobile)

## Components
### Buttons
- **Primary CTA**: 퍼플 그라디언트 배경, 라운드(rounded-full), 흰색 텍스트, "Try Free Reading →"
- **Secondary**: 아웃라인(보더 #2A2A4A), 다크 배경 투명

### Cards
- Surface 배경(#1A1A2E), 얇은 보더(#2A2A4A), rounded-2xl
- 호버 시 보더 퍼플 글로우
- 가격 카드: Premium Tier는 골드 강조/"Most Popular" 뱃지

### Pricing Tiers (from screenshot)
- **Free Mini Reading** — $0
- **Love Reading** — $19
- **Premium Full Report** — $29 (강조 카드, 골드 액센트)

## Imagery
- 한국 전통 건축(기와지붕), 밤하늘, 별자리, 달빛
- 다크 톤 필터 + 퍼플/골드 라이트 리크
- 아이콘: 미니멀 라인 스타일, 퍼플 단색

## Motion
- **Framer Motion** 기반 스크롤 애니메이션
- SectionWrapper 컴포넌트로 페이드인+업 effect
- 버튼 호버: subtle scale(1.02) + glow
- 과도한 애니메이션 지양 (로딩 저해 금지)

## Section Patterns
랜딩 페이지 순서:
1. Hero (타이틀 + CTA)
2. "Sound familiar?" — 공감 섹션 (페인포인트 3-card)
3. "What is Saju?" — 소개
4. "How It Works" — 3-step 플로우
5. "Real People, Real Readings" — 리뷰/소셜프루프
6. "Choose Your Path" — 가격 3-tier
7. "Saju Wisdom & Insights" — 블로그 미리보기
8. FAQ
9. Final CTA ("Your destiny is written in the stars")

## Accessibility
- 다크 배경 대비 WCAG AA 이상 유지
- 버튼 포커스 링 유지
- 이미지 alt 필수
