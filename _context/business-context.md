# SajuMuse — Business Context

## What We Do
SajuMuse는 한국 전통 명리학(사주·四柱)을 기반으로 한 **영어권 GenZ 대상 온라인 운세 분석 서비스**입니다. AI와 전문가 해석을 결합해 개인 맞춤형 운명 리포트를 제공합니다.

## Mission
전 세계 젊은 세대가 한국의 명리 지혜(Korean Saju Wisdom)를 쉽고 감각적으로 경험하도록 돕는다.

## Target Audience
- **1차 타겟**: 영어권 GenZ (18–28세), 특히 북미·유럽·동남아 K-culture 팬
- **관심사**: 점성술(astrology), MBTI, 자기 탐색, K-pop/K-drama, 스피리추얼 웰니스
- **특징**: TikTok/Instagram 네이티브, 짧은 체험 → 유료 전환에 익숙, 신비·로맨스 콘텐츠 선호

## Business Model
**Freemium + One-shot Paid Report**

| Tier | Price | Delivery |
|---|---|---|
| Free Mini Reading | $0 | AI 즉시 생성 (upsell 훅) |
| Love Reading | $19 | 연애 특화 리포트 |
| Premium Full Report | $29–$35 | 수동 큐레이션 리포트 (이메일 전송) |

- **Payment**: 토스페이먼츠 (글로벌 카드 결제)
- **Delivery**: Resend 이메일 발송, 프리미엄은 마스터(운영자)가 직접 검수·발송
- **Margin**: 디지털 상품, 변동비 극소 (AI API + 이메일 비용)

## Growth Strategy
1. **SEO Blog 자동화**
   - 매일 00:00 UTC Vercel Cron으로 블로그 자동 생성
   - Google Indexing API로 즉시 색인 요청
   - 주제: Saju 기초, 별자리 비교, K-culture 접점 콘텐츠
2. **Organic Traffic → Free Reading → Paid Upsell** 퍼널
3. **Social Proof**: 리뷰 섹션, UGC 리포스트
4. **OG Image 자동 생성** (@vercel/og)으로 SNS 공유 최적화

## Key Funnel
```
Blog/SEO 유입
  → 랜딩(/) 방문
  → Free Reading 입력(/free-reading)
  → AI 결과 + 업셀(/free-reading/result)
  → Order $29~$35(/order)
  → Toss 결제 → 이메일 리포트 수령
```

## Differentiation
- **한국 전통 명리학 정통성** (서양 점성술과 차별화)
- **GenZ 네이티브 디자인** (기존 운세 사이트의 촌스러움 탈피)
- **AI 즉시성 + 휴먼 큐레이션** 하이브리드
- **영어 전용** — 글로벌 시장 직공략

## Current Phase
- MVP 런칭 단계, 수동 배송 기반으로 운영 효율 검증 중
- 블로그 SEO로 organic 유입 빌드업
- 전환율·LTV 데이터 축적 후 자동화·상품 확장 예정

## Key Metrics to Watch
- Free Reading 완료율
- Free → Paid 전환율 (목표 2–5%)
- 블로그 포스트당 오가닉 세션
- 리포트 NPS / 리뷰 수집률
- CAC vs. $29–$35 ARPU

## Tech Foundation (요약)
Next.js 14 App Router · Vercel Postgres · Claude API · Toss Payments · Resend · Vercel Cron — 모두 서버리스 기반으로 운영 오버헤드 최소화.

## Risks / Constraints
- 프리미엄 리포트 수동 발송 → 주문량 증가 시 병목
- 영어권 사주 시장 인지도 낮음 → 콘텐츠 교육 필요
- AI 해석 품질이 브랜드 신뢰의 핵심 변수
