## 📦 패키지 매니저
Linty는 **npm**을 사용합니다. 다른 패키지 매니저(yarn, pnpm 등)는 사용을 지향해주시길 바랍니다.

```bash
npm install
```

위 명령어를 실행하여 package.json에 있는 패키지들을 받아와 주시길 바랍니다.

## 🕸️ 서버 주소 설정
서버 주소는 최상단에서 **.env** 파일에서 설정하며, Git에 절대 포함시키지 않습니다.

변수명은 다음과 같이 지정합니다.
```env
NEXT_PUBLIC_SERVER_URL=http://hello-world.com
```

사용 예시
```typescript
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
```


.env는 반드시 .gitignore에 추가해야 하며, 필요시 git rm --cached .env로 추적을 제거해주세요.

## 🔧 실행 방법
1. 의존성 설치
```bash
npm install
```

2. 개발 서버 실행
```bash
npm run dev
```
접속 주소 : <a>http://localhost:3000</a>

3. 프로덕션 빌드 및 실행
```bash
npm run build
npm start
```

#### ⚠️ 캐시 초기화가 필요할 경우
```bash
rm -rf .next
(실행 명령어)
```

## 🎨 스타일링
- 컴포넌트별 스타일은 스타일링을 할 폴더에 style.ts를 생성하여 작성해주세요.
- 하드코딩 대신 theme 기반 디자인 토큰을 사용합니다.
ex)
```typescript
export const Wrapper = styled.p`
    ${({theme}) => theme.typography.Title2_Bold};
    color: ${({theme}) => theme.sementic.Primary.Normal};
`;
```

## 🧾 이슈 작성 규칙
이슈 작성 규칙은 다음과 같습니다.
	1.	Issue 템플릿을 선택합니다.
	2.	제목은 작업 내용을 간결히 작성합니다.
	3.	본문에는 작업 목적과 내용을 적습니다.
	4.	Label에서 Feature, Bug, Task 중 하나를 선택합니다.

## 🌿 브랜치 네이밍 규칙
```bash
<타입> / <기능> / <이슈 번호>
```
ex)
- feature/auth/#12
- fix/login/#3
- docs/readme/#7


## ✍️ Commit Convention
커밋 컨벤션은 다음을 준수하여 주시길 바랍니다.
| 유형               | 설명                                                                            |
|--------------------|--------------------------------------------------------------------------------|
| **Feat**          | 새로운 기능을 추가할 때 사용합니다.                                              |
| **Fix**           | 버그를 수정할 때 사용합니다.                                                    |
| **Design**        | CSS 등 사용자 UI 디자인을 변경할 때 사용합니다.                                  |
| **!BREAKING CHANGE** | 커다란 API 변경이 발생했을 때 사용합니다.                                      |
| **!HOTFIX**       | 급하게 치명적인 버그를 고쳐야 할 때 사용합니다.                                  |
| **Style**         | 코드 포맷 변경, 세미콜론 누락 등 코드 로직에 영향을 미치지 않는 경우 사용합니다. |
| **Refactor**      | 프로덕션 코드의 리팩토링 작업 시 사용합니다.                                    |
| **Comment**       | 필요한 주석을 추가하거나 변경할 때 사용합니다.                                   |
| **Docs**          | 문서를 수정할 때 사용합니다.                                                    |
| **Test**          | 테스트 코드 추가 및 리팩토링 작업 시 사용하며, 프로덕션 코드는 변경되지 않습니다. |
| **Chore**         | 빌드 업무 수정, 패키지 매니저 설정 수정 등과 같이 프로덕션 코드와 관련 없는 작업에 사용합니다. |
| **Rename**        | 파일 또는 폴더명을 수정하거나 이동하는 작업만 수행한 경우 사용합니다.            |
| **Remove**        | 파일을 삭제하는 작업만 수행한 경우 사용합니다.                                 |

### 커밋 예시
- `Feat: 로그인 기능 추가`
- `Fix: 로그인 시 비밀번호 검증 버그 수정`
- `Docs: Readme.md 업데이트`
- `!HOTFIX: Vercel 오류 수정`

## 🔁 Pull Request 가이드
1. 기능 구현 후 템플릿에 맞춰 PR을 생성합니다.
2.	팀원에게 멘션하여 리뷰를 요청합니다.
3.	다른 팀원의 Approve 이후에만 머지합니다.
4.	관련 이슈가 있다면 Closes #이슈번호를 본문에 포함합니다.

