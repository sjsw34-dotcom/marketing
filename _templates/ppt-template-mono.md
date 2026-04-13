---
template: presentation_deck
variant: mono-editorial
brand: SajuMuse
style: high-contrast · monochrome · bold sans · architectural
inspired_by: _templates/ppt (2).jpg ("DORTH" 스타일 — 흑백 에디토리얼)
aspect_ratio: 16:9
slide_count: 5 (확장 가능)
purpose: 브랜딩·제품 소개·포트폴리오·키노트 — 임팩트가 필요한 자리
companion_template: ppt-template.md (크림·세리프 버전 — 부드러운 자리용)
---

# SajuMuse — PPT 템플릿 · MONO 변형 (마스터 레퍼런스)

> 항상 이 파일을 참조해서 흑백 임팩트 덱을 만든다.
> 사진·여백·굵은 산세리프가 주인공. 장식은 헤어라인 1px이 전부.
> **언제 이 변형을 쓰나**: 브랜딩 발표, 제품 쇼케이스, 포트폴리오, 컨퍼런스 키노트.
> **언제 다른 변형을 쓰나**: 따뜻한 회사 소개·인베스터 덱은 [ppt-template.md](./ppt-template.md) (크림·세리프).

---

## 🎨 디자인 시스템 (Mono Variant)

### Color Palette
| Role | Hex | Usage |
|---|---|---|
| Background | `#FFFFFF` | 순백 (오프화이트 ❌, 진짜 white) |
| Ink Primary | `#0A0A0A` | 헤드라인·본문, 거의 검정 |
| Ink Muted | `#6B6B6B` | 캡션·메타·페이지 번호 |
| Hairline | `#0A0A0A` | 0.5–1pt 가는 선 (헤더·푸터 룰) |
| Photo Tone | grayscale | **모든 사진은 무조건 흑백** |
| Accent (Saju Purple) | `#7C3AED` | **전체 덱에서 1번만** 허용 (또는 0번) |

### Typography
- **Display Headline (Sans, Heavy)**: Inter Tight Black / Helvetica Neue Black / Söhne Breit Kräftig
  - All Caps 또는 첫글자만 대문자, **마침표(.)로 끝맺음** ("BRANDING PRODUCT.")
  - 자간 좁게 (`tracking: -0.02em`)
- **Body (Sans, Regular)**: Inter / Helvetica Neue, 11–13pt, 줄간격 1.5
- **Label (Sans, Uppercase, Tracked)**: 9pt, `tracking: 0.15em`, ink-muted — 헤더/푸터/카테고리 라벨용
- **세로 타이포 (Vertical Sidemark)**: 이미지 우측 가장자리에 브랜드명을 90° 회전해 작게 배치 ("DORTH" 스타일)

### Layout Principles
- **헤더 룰**: 모든 슬라이드 상단에 1pt 가로선 + 좌측 라벨("SAJUMUSE PRESENTATION") + 우측 페이지 번호
- **푸터 룰**: 하단에도 동일하게 1pt 가로선 + URL 또는 카피라이트
- **여백 50–60%**: 콘텐츠는 한쪽으로 몰고 반대쪽은 비운다
- **사진 = 헤로**: 한 슬라이드에 큰 사진 1장이 가장 강력한 무기. 가로로 길게 (panoramic strip) 자주 사용
- **모서리는 직각**: rounded corner ❌
- **그림자·그라디언트·이모지·아이콘 색상** 모두 ❌
- **숫자/통계도 산세리프 Heavy** (세리프 변형과 다른 점)

---

## 📐 슬라이드 구조 (5-슬라이드 기본 시퀀스 + 확장)

이미지에서 확인된 5 슬라이드 패턴을 SajuMuse 맥락으로 매핑.

---

### Slide 01 — HERO / SECTION OPENER
```
─────────────────────────────────────────
SAJUMUSE PRESENTATION                  14
─────────────────────────────────────────

┌───────────────────────────────────┐ │
│                                   │ S
│   (panoramic photo — 도시·하늘·   │ A
│    사람·물 — 흑백)                │ J
│                                   │ U
└───────────────────────────────────┘ │

BRANDING                  {{ 본문 lorem 4–5 줄 }}
PRODUCT.                  Explore →

─────────────────────────────────────────
sajumuse.com
```
- **콘텐츠**: 큰 가로 사진 + 좌측 굵은 헤드라인(2단어, 마침표) + 우측 본문 + Explore CTA
- **세로 사이드마크**: 사진 우측에 브랜드명 90° 회전
- **목적**: 섹션 시작·표지·임팩트 개막

---

### Slide 02 — STUDIO / FEATURE BLOCK (좌 사진 + 우 텍스트)
```
─────────────────────────────────────────
SAJUMUSE PRESENTATION                  15
─────────────────────────────────────────

┌──────────┐    STUDIO
│          │    INSIDE?
│ (검은 정 │    ────────
│  사각형  │    {{ 본문 4–6 줄 }}
│  사진)   │
│          │    Don't have a heart?
└──────────┘    Let me tell you a really
                {{ tagline }}

─────────────────────────────────────────
sajumuse.com
```
- **목적**: 한 가지 제품·기능·공간을 깊게 소개
- **사진**: 정사각, 어두운 톤, 강한 콘트라스트
- **헤드라인**: 질문형 ("STUDIO INSIDE?")이 잘 어울림

---

### Slide 03 — THE TEAM
```
─────────────────────────────────────────
SAJUMUSE PRESENTATION                  16
─────────────────────────────────────────

THE TEAM.                  ┌─────┐
─────────                  │ 사진│  Name One
{{ 팀 소개 본문 3–4 줄 }}  └─────┘  역할
                                     {{ 1줄 }}
ABOUT
{{ 보조 본문 3–4 줄 }}     ┌─────┐
                           │ 사진│  Name Two
                           └─────┘  역할
                                     {{ 1줄 }}

─────────────────────────────────────────
sajumuse.com
```
- **레이아웃**: 좌측 팀 소개 카피 + 우측 흑백 인물 썸네일 리스트 (정사각, 동일 크기)
- **인물 사진**: 모두 같은 톤·크롭으로 통일

---

### Slide 04 — PRODUCT MATERIAL / GRID
```
─────────────────────────────────────────
SAJUMUSE PRODUCT                       17
─────────────────────────────────────────

       PRODUCT MATERIAL.

┌────┐  ┌────┐  ┌────┐  ┌────┐
│img │  │img │  │img │  │img │
└────┘  └────┘  └────┘  └────┘
MAT.01  MAT.02  MAT.03  MAT.04
{{cap}} {{cap}} {{cap}} {{cap}}

─────────────────────────────────────────
sajumuse.com
```
- **목적**: 4-아이템 그리드 (재료·기능·서비스·사례)
- **각 셀**: 정사각 흑백 이미지 + 라벨(MAT.01) + 1줄 캡션
- **콘텐츠 매핑**: Saju 4기둥(年月日時) 시각화, 또는 5요소(木火土金水), 또는 서비스 4종

---

### Slide 05 — TEXT-HEAVY MANIFESTO
```
─────────────────────────────────────────
SAJUMUSE PRESENTATION                  18
─────────────────────────────────────────

HELLO COME, LOREM IPSUM
DOLOR SIT AMET, CONSECTETUER          ┌────────┐
ADIPISCING ELIT. AENEAN               │        │
COMMODO LIGULA EGET DOLOR.            │ (검정  │
AENEAN MASSA. CUM SOCIIS              │  블록  │
NATOQUE PENATIBUS ET MAGNIS           │  사진) │
DIS PARTURIENT MONTES,                │        │
NASCETUR RIDICULUS MUS.               └────────┘

─────────────────────────────────────────                  ◼
sajumuse.com                                          DORTH
```
- **목적**: 매니페스토·선언·철학 진술
- **본문**: All Caps Display로 좌측 큰 블록 + 우측 보조 사진/검정 패널
- **서명**: 우측 하단에 작은 검정 사각형 + 브랜드명

---

## 🧩 확장 슬라이드 (필요 시 추가)

| 슬라이드 | 용도 | 레이아웃 힌트 |
|---|---|---|
| Index / TOC | 목차 | 좌측 큰 숫자(01–05) + 우측 챕터명, 모두 산세리프 |
| Big Quote | 인용 | 슬라이드 중앙 큰 따옴표 1개 + 작은 attribution |
| Big Number | 통계 | 화면의 60% 차지하는 거대한 숫자 + 작은 캡션 |
| Before / After | 비교 | 좌우 2장 흑백 사진 + 라벨 |
| Process | 단계 | 가로 4–5 단계, 화살표는 굵은 직선 1pt |
| Closing | 마무리 | 거의 빈 슬라이드, 중앙 "Thank you." (마침표) + URL |

---

## ✅ 사용 체크리스트 (덱 작성 전 항상 점검)

- [ ] 배경은 순백 `#FFFFFF` (크림 ❌ — 그건 다른 변형)
- [ ] **모든 사진을 흑백 처리** (예외 없음)
- [ ] Heavy Sans Display + Inter Body
- [ ] 모든 슬라이드에 헤더/푸터 1pt 룰 + 페이지 번호
- [ ] 헤드라인은 마침표(.)로 끝맺음
- [ ] 가로 panoramic 이미지 1장은 거의 모든 덱에 1번 등장
- [ ] 컬러 액센트는 전체 덱에서 1번 또는 0번
- [ ] 그림자·그라디언트·rounded corner·이모지 ❌
- [ ] 슬라이드당 50단어 이하 (매니페스토 슬라이드 제외)
- [ ] 세로 사이드마크(브랜드명 90°)를 표지·섹션 오프너에 사용

---

## 🎯 두 PPT 변형 사용 가이드

| 상황 | 사용할 템플릿 |
|---|---|
| 인베스터 덱·회사 소개·따뜻한 제안서 | [ppt-template.md](./ppt-template.md) (크림·세리프) |
| 브랜딩 발표·제품 쇼케이스·키노트 | **이 파일** (mono 변형) |
| 강의 자료 (긴 호흡, 텍스트 多) | 크림 변형 |
| 컨퍼런스 라이트닝 토크 | mono 변형 |
| 고객 친화 마케팅 자료 | 크림 변형 |
| 디자이너·아티스트 대상 발표 | mono 변형 |

**섞지 말 것**: 한 덱 안에서 두 변형을 섞으면 톤이 깨진다. 처음에 하나 골라 끝까지 간다.

---

## 🔗 관련 문서
- 자매 템플릿 (크림·세리프): [ppt-template.md](./ppt-template.md)
- 브랜드 톤·메시지: [_context/brand-guidelines.md](../_context/brand-guidelines.md)
- 비즈니스 맥락: [_context/business-context.md](../_context/business-context.md)
- 웹 디자인 시스템 (참고만): [_context/design-style-guide.md](../_context/design-style-guide.md)
- 원본 무드보드: [ppt (2).jpg](./ppt%20(2).jpg)

---

## ✎ 작성 노트

- 이 변형은 **"덜어내기의 미학"** — 채울수록 망가진다.
- SajuMuse의 신비·동양적 정서는 사진 선택(달·물·돌·여백)과 카피의 깊이로 표현하지, 장식으로 표현하지 않는다.
- 한국어 발표 시에도 **레이아웃·룰·페이지 번호 위치는 동일**. 본문만 한국어로, Display 폰트는 한국어 Heavy Sans (Pretendard Black, Spoqa Han Sans Neo Bold)로 대체.
