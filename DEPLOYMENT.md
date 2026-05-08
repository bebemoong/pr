# 배포 가이드 (Deployment Guide)

이 프로젝트를 실제 웹사이트에 배포하는 방법입니다.

## 방법 1: Vercel (가장 쉬운 방법 - 추천)

1. **GitHub에 코드 업로드**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

2. **Vercel 배포**
   - https://vercel.com 방문
   - "Import Project" 클릭
   - GitHub 저장소 선택
   - 자동으로 배포됩니다!

## 방법 2: Netlify

1. **GitHub에 코드 업로드** (위와 동일)

2. **Netlify 배포**
   - https://netlify.com 방문
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택
   - Build settings:
     - Build command: `pnpm build`
     - Publish directory: `dist`

## 방법 3: GitHub Pages

1. **package.json에 base 추가**
   ```json
   // vite.config.ts에 base 추가 필요
   ```

2. **GitHub Actions로 자동 배포**
   - `.github/workflows/deploy.yml` 파일 생성 (아래 참조)

3. **Settings → Pages에서 배포 활성화**

## 방법 4: 직접 호스팅 (자체 서버)

1. **프로젝트 빌드**
   ```bash
   pnpm install
   pnpm build
   ```

2. **dist 폴더를 서버에 업로드**
   - `dist` 폴더의 모든 파일을 웹서버의 public 폴더로 복사
   - Apache, Nginx 등 모든 웹서버 사용 가능

3. **웹서버 설정 예시 (Nginx)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /path/to/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

## 빠른 테스트

로컬에서 빌드 결과 미리보기:
```bash
pnpm build
npx serve dist
```

## 주의사항

- `node_modules` 폴더는 배포하지 마세요
- `.env` 파일에 API 키가 있다면 환경 변수로 설정하세요
- 이미지 최적화를 위해 CDN 사용을 권장합니다

## 추천 배포 서비스 비교

| 서비스 | 난이도 | 무료 플랜 | 속도 |
|--------|--------|-----------|------|
| Vercel | ⭐ 쉬움 | ✅ 충분함 | 🚀 빠름 |
| Netlify | ⭐ 쉬움 | ✅ 충분함 | 🚀 빠름 |
| GitHub Pages | ⭐⭐ 보통 | ✅ 무료 | ⚡ 보통 |
| 자체 서버 | ⭐⭐⭐ 어려움 | ❌ 비용 필요 | 설정에 따라 다름 |
