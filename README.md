# E-Learning Course Sitemap

온라인 교육 과정을 한눈에 볼 수 있는 사이트맵 페이지입니다.

## 🎯 주요 기능

- 📚 코스 카테고리별 필터링
- 🔍 실시간 검색 (제목, 설명, 태그)
- 🎨 반응형 그리드 레이아웃
- 🏷️ 태그 기반 코스 분류
- 📱 모바일 친화적 디자인

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
pnpm install

# 또는
npm install
```

### 개발 서버 실행

```bash
# 개발 모드로 실행
pnpm dev

# 또는
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
pnpm build

# 또는
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

## 📦 기술 스택

- **React 18** - UI 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **Vite** - 빌드 도구
- **Radix UI** - 접근성 좋은 UI 컴포넌트
- **Lucide React** - 아이콘

## 📂 프로젝트 구조

```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── PageCard.tsx       # 코스 카드 컴포넌트
│   │   │   ├── PageGrid.tsx       # 그리드 레이아웃
│   │   │   ├── SearchAndFilter.tsx # 검색/필터 컴포넌트
│   │   │   └── ui/                # UI 기본 컴포넌트
│   │   └── App.tsx                # 메인 앱 컴포넌트
│   ├── styles/
│   │   ├── fonts.css
│   │   └── theme.css
│   └── main.tsx                   # 진입점
├── index.html
├── package.json
└── vite.config.ts
```

## 🎨 커스터마이징

### 코스 데이터 수정

`src/app/App.tsx` 파일의 `MOCK_PAGES` 배열을 수정하여 코스 정보를 변경할 수 있습니다:

```typescript
const MOCK_PAGES: Page[] = [
  {
    id: "1",
    title: "코스 제목",
    category: "카테고리",
    thumbnail: "이미지 URL",
    description: "코스 설명",
    url: "/courses/course-url",
    tags: ["태그1", "태그2"]
  },
  // ...
];
```

### 스타일 수정

- `src/styles/theme.css` - 색상, 폰트 등 전역 테마 설정
- Tailwind CSS 클래스로 컴포넌트별 스타일 조정

## 🌐 배포

자세한 배포 방법은 [DEPLOYMENT.md](./DEPLOYMENT.md)를 참조하세요.

### 빠른 배포

**Vercel (추천)**
1. GitHub에 코드 푸시
2. [vercel.com](https://vercel.com)에서 Import
3. 자동 배포 완료!

**Netlify**
1. GitHub에 코드 푸시
2. [netlify.com](https://netlify.com)에서 Import
3. Build command: `pnpm build`
4. Publish directory: `dist`

## 📝 라이선스

MIT

## 🤝 기여

이슈와 PR은 언제나 환영합니다!
