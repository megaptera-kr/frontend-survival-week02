# frontend-survival-week02

프론트엔드 생존코스 2주차 과제

# JSX 없이 React 만들기

JSX의 정체를 파악하기 위해선 JSX 없이 React를 만들어보는 것만큼 좋은 훈련은 없습니다. 처음엔 다소 황당하지만 사실 JSX없이 React를 만들어보면 결국 우리의 상식 안에서 JavaScript 코드로 동작한다는 걸 알 수 있죠. JSX를 사용하는 이점을 JSX 없이 만들면서 생기는 고통으로 온전히 깨달아보세요!

## **요구사항 1**

<aside>
⚠️ JSX 대신 `React.createElement`를 사용하여 리액트 앱이 정상 작동하도록 만들어주세요.

</aside>

- 아래 테스트 방법을 통해 CI에서 동일하게 확인 됩니다. 각자 로컬에서 먼저 수행해보시기 바랍니다.
- 그리고 항상 작업할 때 각자 로컬에서 CI와 동일하게 진행하는 걸 습관화하시기 바랍니다.
- `tsconfig.json` 을 절대 수정하지 않고 해결해주세요.

### 로컬에서 E2E 테스트

- E2E 테스트는 앱이 요구사항대로 동작하는지 브라우저를 띄우고 자동으로 테스트합니다.

```bash
# 개발용 서버 실행
$ npm start

# E2E 테스트 실행
$ npm run codeceptjs
```

### CI에서 동일한 테스트 방법

```bash
$ npm run lint

$ npx tsc --noEmit

$ npm run test

$ npm run build

# 실제 빌드한 앱을 실행하고 E2E 테스트 진행
$ npm run ci
```

## 과제 진행 방법

Git과 GitHub을 활용한 Pull request에 익숙하지 않은 상태라면 아래의 Repository의 README를 따라 실습하며 Pull request 훈련을 반드시 여러번 하시기 바랍니다.

[데브로드 Git Training 가이드](https://www.notion.so/Git-Training-e76672aafcb04759b73146982153124a)

1. [2주차 과제](https://github.com/megaptera-kr/frontend-survival-week02)를 fork 한 후 과제를 진행합니다.
2. 과제가 끝나면 origin에 push하고 Pull request를 보냅니다.

```bash
git add .
git commit
git push origin <브랜치네임 - 깃헙유저네임>

# 예시)
git add .
git commit # 커밋 메세지 작성
git push origin bbhye1 # pull request 보내기
```
