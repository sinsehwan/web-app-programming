# TypeScript 프로그래밍 연습

- Node.js

- VSCode 최신버전

- 실행

```bash
npm init -y
```

- package.json
```
"author": "<YOUR NAME>",
"license": "MIT"
```

author에 이름적고 license MIT로 바꾸기

## Node.js

V8엔진을 들고 와서 javascript를 실행하는 도구이다.
자바 스크립트 실행기

### package.json

node.js의 상태 및 환경 설정 값을 기록한 파일이다.

### 자바 스크립트의 맹점
자바스크립트는 무분별한 타입 변환을 수행한다. 따라서 런타임 시점에 체크 가능하기에 위험하다.

### TypeScript 및 관련 패키지 설치
npm install -D typescript jest ts-jest @types/jest @types/node

사용자가 몰라도 되는 패키지는 -D로 설치하자

### npx tsc --init
npx 노드 패키지 실행

