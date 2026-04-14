# Reddit Hunting Kit — sajumuse.com

> 매일 10분, thread 찾아서 댓글 다는 루틴용 도구 모음.

---

## 1. F5bot 알림 세팅 (5분 셋업, 평생 사용)

**가입:** https://f5bot.com → 이메일 입력 → 키워드 등록 → 끝.
Reddit 전체에서 해당 단어 뜨면 1시간 내 이메일 옴.

### 등록할 키워드 (정확히 이대로, 대소문자 무관)

**필수 (높은 신호)**
- `saju`
- `four pillars`
- `korean astrology`
- `korean fortune telling`
- `bazi` ← 중국식이지만 비교 댓글 달 기회

**중간 신호 (트래픽 많음, 가끔만 매칭)**
- `day master`
- `birth chart korean`
- `사주`
- `사주팔자`

**한국 K-content 후킹용 (선택)**
- `kdrama marriage` ← 사주궁합 농담 기회
- `korean wedding tradition`

> **팁:** "astrology" 같은 광범위 키워드는 ❌ — 하루 100개 이메일 와서 지친다.

---

## 2. Reddit 검색 URL 북마크 세트

브라우저 북마크 폴더 "Saju Hunt" 만들고 아래 URL 전부 저장.
매일 아침 폴더 → "탭으로 모두 열기" 한 번이면 사냥터 오픈.

### 키워드별 (최신순 정렬)
- https://www.reddit.com/search/?q=saju&sort=new
- https://www.reddit.com/search/?q=%22four+pillars%22&sort=new
- https://www.reddit.com/search/?q=%22korean+astrology%22&sort=new
- https://www.reddit.com/search/?q=%22day+master%22&sort=new
- https://www.reddit.com/search/?q=bazi&sort=new
- https://www.reddit.com/search/?q=%22korean+fortune%22&sort=new

### 서브레딧별 Hot (댓글 기회 많은 곳)
- https://www.reddit.com/r/Kdrama/hot/
- https://www.reddit.com/r/kpop/hot/
- https://www.reddit.com/r/AskAstrologers/new/
- https://www.reddit.com/r/Astrology/new/
- https://www.reddit.com/r/Korean/new/
- https://www.reddit.com/r/AsianBeauty/hot/

### 서브레딧 내부 검색 (가장 정확함)
- https://www.reddit.com/r/Astrology/search/?q=korean&restrict_sr=1&sort=new
- https://www.reddit.com/r/Astrology/search/?q=saju&restrict_sr=1&sort=new
- https://www.reddit.com/r/AskAstrologers/search/?q=saju&restrict_sr=1&sort=new
- https://www.reddit.com/r/Kdrama/search/?q=marriage+chart&restrict_sr=1&sort=new
- https://www.reddit.com/r/kpop/search/?q=birth+chart&restrict_sr=1&sort=new

---

## 3. 매칭 → 템플릿 결정 빠른 표

알림/검색에서 thread 발견 시 → 본문 30초 훑고 → 표대로 템플릿 고르기.

| Thread 패턴 | 사용할 템플릿 | 추가 한 줄 |
|---|---|---|
| "is astrology real / fake?" | **D** (비교 톤) | 살짝 회의적 어조로 시작 |
| "what is saju?" / "explain korean astrology" | **B** (문화 설명) | 가장 안전, 링크 가능 |
| K-pop 멤버 생일/성격 thread | **C** (멤버 농담) | 멤버 이름·일간 정확히 |
| K-drama 결혼 / 부모 반대 plot | **B** 변형 | 사주궁합 1줄 + 문화 맥락 |
| "tried [astrology app], it said..." | **A** (친구 추천) | "I built X" 정직 톤 |
| Self-discovery / "who am I" | **E** (본인 경험) | 링크 ❌, 신뢰만 쌓기 |
| 이미 saju 언급된 thread | **A** | 링크 OK, 단 1회만 |

> 템플릿 본문은 [manual-growth-playbook.md](manual-growth-playbook.md) 1번 섹션 참조.

---

## 4. 데일리 루틴 (10분 버전)

```
[아침 5분]
1. F5bot 이메일 확인 → 매칭 thread 1–2개 클릭
2. 본문 + 기존 댓글 훑기 (이미 비슷한 댓글 있으면 패스)

[저녁 5분]
3. 북마크 폴더 한 번 열기 → 새 thread 1개 추가 발견
4. 표 보고 템플릿 골라 댓글 작성 (60–90초)
5. 카르마 변화는 일주일 뒤 점검 (다음날 보지 마라, 우울해짐)
```

---

## 5. 안전 룰 (반드시)

- 같은 템플릿을 **24시간 내 2번 이상** 쓰지 마라 (Reddit 스팸 필터 잡힘)
- 같은 서브레딧에 **하루 2 댓글까지**
- 링크 댓글은 **주 3회까지** (전체 채널 합산)
- 새 계정이면 첫 2주는 **링크 0회**, 댓글로만 카르마 100 만들기
- thread 올라온 지 **24시간 넘은 글엔 댓글 ❌** (아무도 안 봄)
- downvote 받으면 즉시 삭제 (계정 신호 보호)

---

## 6. 주간 점검 (일요일 5분)

- 이번 주 댓글 수: ___
- upvote 받은 댓글 BEST 1개: ___ → 그 톤으로 다음 주 강화
- 링크 클릭 들어온 트래픽: Vercel Analytics에서 referrer = reddit.com 확인
- 안 먹힌 템플릿 1개: ___ → 다음 주 폐기 or 수정
