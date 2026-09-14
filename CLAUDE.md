@AGENTS.md

## 실행 방법

```bash
npm install       # 최초 1회
npm run dev        # 개발 서버 (기본 http://localhost:3000)
npm run build      # 프로덕션 빌드 확인
```

Node.js 24 이상이 필요합니다 (`node --version`으로 확인).

## 현재 페이지 (docs/홈페이지-기획.md 기반)

- 라우트: `/` (`src/app/page.tsx`), 원페이지. **상담 신청 페이지가 아니라 후기글을 그대로 옮긴 블로그 페이지**이며, 상담 폼은 없음(2026-09-13 삭제).
- 콘텐츠 출처: `src/data/review-content.ts` — [참고 네이버 블로그](https://blog.naver.com/make_it_good/224269250868)의 제목·본문을 원문 그대로 옮김 (대표 확정). 이미지는 `public/images/review/`에 원문에서 다운로드해 저장.
- **제외한 것**: 원문의 "(+ 추가 공지)" 단락(검증되지 않은 구 링크, 타사 비방 문구)은 옮기지 않고, 대신 확정된 자사몰 CTA 링크 하나로 대체함. 원문 이미지 중 상품명이 빨간펜으로 가려진 사진 1장(이미지_10)은 제품을 오히려 안 보이게 만들어 랜딩페이지 목적에 맞지 않아 제외함 — 필요 시 `public/images/review/review-09.jpeg`에서 확인 후 포함 여부 재검토 가능.
- 디자인: 자사몰 제품 색(딥그린 계열)을 `src/app/globals.css`의 `--primary` 등 토큰에 반영. 로고는 실제 로고 파일이 없어 텍스트 워드마크("에스트록스")로 임시 구현 — 실제 로고 확정되면 교체 필요.
- CTA: 콘텐츠 마지막에 자사몰 상품 상세페이지(`https://luxnlab.co.kr/product/detail.html?product_no=17`)로 연결되는 버튼 하나만 배치 (`src/app/page.tsx`). 이 CTA가 페이지의 유일한 상호작용 요소임 (상담 폼 없음).
- `/clone-website` 스킬을 실행하더라도 `docs/홈페이지-기획.md`가 원본(네이버 블로그) 그대로 재현하는 기본값보다 우선함 — 레이아웃 흐름만 참고하고 문구·로고·색은 이 기획을 따를 것.

## Vercel 배포 이슈 및 해결 (2026-09-13)
- Vercel 프로젝트의 Framework Preset이 "Other"로 잘못 설정돼 있어 빌드는 성공해도 실제 서빙이 404였음 → Next.js로 변경.
- Next.js 16 기본 빌드(Turbopack)가 Vercel이 필요로 하는 서버 추적 파일(`next-server.js.nft.json`)을 만들지 못해 빌드가 실패함 (`Collecting build traces ...` 단계 자체가 생략됨). `package.json`의 `build` 스크립트를 `next build --webpack`으로 변경해 해결. Turbopack의 프로덕션 빌드 NFT 트레이싱이 안정화되면 다시 기본값(`next build`)으로 되돌려도 됨.

## 구현 전 확인 필요 (미해결 항목)
자세한 내용은 `docs/홈페이지-기획.md`의 "구현 전 확인 필요" 참고 — 실제 로고 파일, 푸터 사업자 정보가 남아있음.

## 임시 자료 — 교체 예정 (2026-09-14)
- `public/images/review/브로콜리.jpg`, `public/images/review/양배추.jpg`: 대표가 새로 추가한 "상한 채소" 일화(review-content.ts의 `imagePair` 블록, 캡션 "결국 상해버린 브로콜리와 양배추")에 쓰인 **임시 사진**. 원본은 타인이 올린 네이버 카페 게시글(로그인 필요, 출처 불명확)에서 가져온 것이라 저작권 문제가 있을 수 있음 — 대표가 AI로 새로 생성한 이미지로 교체할 예정. 같은 파일명으로 덮어쓰면 코드 수정 없이 바로 반영됨.
