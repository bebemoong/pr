# GitHub에 올리는 방법

## 🎯 한 번에 따라하기

### 1단계: GitHub에서 새 저장소 만들기

1. [GitHub](https://github.com)에 로그인
2. 오른쪽 상단 `+` 클릭 → `New repository` 선택
3. 저장소 이름 입력 (예: `elearning-sitemap`)
4. Public 또는 Private 선택
5. **"Initialize this repository with a README" 체크 해제** (중요!)
6. `Create repository` 클릭

### 2단계: 터미널에서 명령어 실행

GitHub에서 저장소를 만들면 나오는 URL을 복사하세요.  
예: `https://github.com/your-username/elearning-sitemap.git`

그 다음 프로젝트 폴더에서 아래 명령어를 **순서대로** 실행:

```bash
# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: E-learning sitemap"

# 메인 브랜치로 변경 (필요시)
git branch -M main

# GitHub 저장소 연결 (your-username와 repo-name을 실제 값으로 변경!)
git remote add origin https://github.com/your-username/elearning-sitemap.git

# GitHub에 업로드
git push -u origin main
```

### 3단계: GitHub에서 확인

브라우저에서 GitHub 저장소 새로고침하면 모든 파일이 업로드된 것을 확인할 수 있습니다!

---

## 📋 복사용 명령어 (한 번에)

**⚠️ 주의: `your-username`과 `elearning-sitemap`을 실제 값으로 바꾸세요!**

```bash
git init
git add .
git commit -m "Initial commit: E-learning sitemap"
git branch -M main
git remote add origin https://github.com/your-username/elearning-sitemap.git
git push -u origin main
```

---

## 🔄 이미 GitHub에 올렸는데 수정한 경우

코드를 수정한 후 다시 업로드:

```bash
# 변경사항 확인
git status

# 모든 변경사항 추가
git add .

# 커밋 (메시지는 자유롭게 수정)
git commit -m "Update: 코스 데이터 추가"

# GitHub에 업로드
git push
```

---

## ❓ 자주 하는 실수

### 문제 1: "remote origin already exists"
```bash
# 기존 origin 삭제 후 다시 추가
git remote remove origin
git remote add origin https://github.com/your-username/elearning-sitemap.git
```

### 문제 2: GitHub 인증 요청
- Username: GitHub 아이디
- Password: Personal Access Token 사용 (GitHub 비밀번호 아님!)
- Token 만들기: GitHub Settings → Developer settings → Personal access tokens

### 문제 3: "failed to push some refs"
```bash
# 강제 푸시 (주의: 기존 내용 덮어씀)
git push -f origin main
```

---

## 🎉 완료 후 할 일

1. **README.md 확인**: GitHub에서 프로젝트 설명이 잘 보이는지 확인
2. **Vercel/Netlify 배포**: [DEPLOYMENT.md](./DEPLOYMENT.md) 참고
3. **Settings → Pages**: GitHub Pages로 무료 호스팅 (선택사항)

---

## 💡 팁

- `.gitignore` 파일이 자동으로 `node_modules`, `dist` 등을 제외시킵니다
- 처음 푸시할 때만 `-u` 옵션 필요, 이후엔 `git push`만 사용
- VSCode 사용시 Source Control 탭에서 GUI로도 가능합니다
