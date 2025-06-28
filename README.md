# 스타일로그 모바일 앱 프로젝트 설명

## 1. 프로젝트 정보

### 1-1. 운영체제별 정보

- 안드로이드 패키지명: com.stylelog
- iOS Bundle ID: 미설정 => 위 안드로이드 패키지 명과 동일하게(아니면 원하는 명칭으로) 변경 필요

### 1-2. 버전 정보

- React Native: 0.79.2
  - [신형 아키텍처](https://reactnative.dev/architecture/landing-page) 기본 적용
- React: 19.0.0

### 1-3. 설정 완료 사항

- [x] Rest API 실행 코드
- [x] React Navigation 기본 구조
- [ ] 테스트 환경 구축
  - [ ] E2E 테스트 설정
    > 참고  
    > Android는 정상적으로 실행되지만, iOS의 경우 개발용 인증서와 프로파일이 필요할 수 있습니다.  
    > (E2E 테스트를 위한 IPA 빌드가 이뤄져야 하기 때문입니다.)
  - [x] 유닛 테스트 설정
    > 유닛테스트는 가급적 유틸함수에 한해서만 사용하시기 바랍니다!!!  
    > 컴포넌트 단위 테스트가 불가능한건 아니지만, 상태관리 라이브러리, 네비게이션 연결 관련 모킹 설정이 너무 번거로워 E2E 테스트에서 실행하는게 좋습니다.
- [x] env 파일 관련 설정
- [ ] 상태관리(기본: Redux)  
       -> 미들웨어가 필요한 경우 별도로 개발 필요!!!!
- [x] Context 연결 설정

### 1-4. 프로젝트 기본 폴더 및 파일 구조

> ### 참고사항
>
> - `확장자` 표시가 되어있는 경우 => `파일명`  
>   확장자 표시가 안되어 있으면 폴더명
> - 폴더명에 `@` 표시가 되어 있으면??
>   - `절대경로` 설정이 되어있다는 의미!!!
>   - 절대경로명은 폴더명과 동일!!
> - 폴더 구조가 변경되는 경우 아래 폴더 구조를 갱신할 것!!!

```bash
├── src
│   ├── @components
│   │   ├── common # 앱 전체에서 공통적으로 사용되는 컴포넌트
│   │   └── pages # 각 페이지 별 자식 컴포넌트 관리
│   │      ├── mainStack # MainStackNavigator에 속하는 페이지(자식 컴포넌트)
│   │      ├── mainTab #MainTabNavigator에 속하는 페이지(자식 컴포넌트)
│   │      └── {...}
│   ├── @config # env 파일에서 import한 변수 또는 화면 크기 변수 등을 관리
│   ├── @constants # config 폴더 외에 앱 전역에서 사용되는 상수 값 등을 저장한 모든 파일을 관리
│   ├── @contexts # 각 기능별 context 관리
│   ├── @hooks # 별도로 개발한 모든 custom Hook들을 관리
│   ├── @pages
│   │   ├── mainStack # MainStackNavigator에 속하는 페이지
│   │   ├── mainTab # MainTabNavigator에 속하는 페이지
│   │   ├── AuthStack # AuthStackNavigator에 속하는 페이지
│   │   ├── navigation
│   │   │   ├── AuthStackNavigator # AuthStackNavigator 실제 선언 영역
│   │   │   ├── MainStackNavigator # MainStackNavigator 실제 선언 영역
│   │   │   ├── MainTabNavigator # MainTabNavigator 실제 선언 영역
│   │   │   └── RootStackNavigator # RootStackNavigator 실제 선언 영역
│   │   │       ├── index.tsx
│   │   │       └── types.ts
│   │   └── root
│   ├── @themes # 앱 테마와 관련된 모든 상수 선언 파일들을 관리
│   ├── @utils # 정규표현식, 공통함수 등 공통적으로 사용되는 유틸 파일들을 관리
│   └── App.tsx
└── index.js
```

## 2. 프로젝트 초기 설정 절차(프로젝트 클론 기준)

### 2-1. 초기 설정 전 유의사항

- JDK 버전 확인 필요!! => 최소 17 이상
- node 버전: 최소 20 이상
  - **<u>Xcode 실행과도 관련이 있기 때문에</u>** 가급적 컴퓨터 기본 node 버전을 20 이상으로 올리는 것을 권장!!!

### 2-2. 초기 설정 절차

1. 프로젝트 클론
2. env 파일 추가  
   src > config 폴더 내에 추가하면 됨!!!
3. 패키지 일괄 설치
   ```bash
   yarn install
   ```
4. Android
   - Keystore 파일 연결
5. iOS 실행 설정
   - 애플 인증서 또는 Provisioning Profile 연결(필요시)
   - cocoapod 패키지 설치
     ```bash
     cd ios
     pod deintegrate
     pod install
     ```
6. 프로젝트 실행
   - Android
     ```bash
     yarn android
     ```
   - iOS
     ```bash
     # =======================================================
     # ==================== 기본 실행 명령어 =====================
     # 시뮬레이터(default): iPhone SE
     yarn ios
     ```

#### 참고) iOS 시뮬레이터를 변경하고 싶은 경우

```bash
yarn ios:devices # 설치된 운영체제 별 모든 시뮬레이터 목록 조회
# 원하는 디바이스명과 운영체제를 찾은 경우
# ex) 단말기: iPhone 16 Pro, 운영체제: iOS 18.0
yarn ios --simulator='iPhone 16 Pro (18.0)'
```

## 3. Git(형상관리) 관련정보

### 3-1. Branch 정보(프로젝트 생성 후 이 명칭으로 별도 분기 필요)

> 나중에 프로젝트 형식에 따라 작성해두세요!!


