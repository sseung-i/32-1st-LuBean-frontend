# 32기 1차 프로젝트

## 팀명 : LuBean

- LUSH 코리아 사이트 클론 프로젝트
- 2주라는 짧은 기간안에 개발을 해야하기에 전체적인 UI적 틀과 기획부분만 클론하였습니다.

<br>

## 팀원 및 프로젝트 기간

- 백엔드 : 윤진섭, 임수연
- 프론트 : 김귀아, 양재원, 이현정, 최승이
- 프로젝트 기간 : 2022.04.25 (월) ~ 2022.05.06 (금) (2주)

<br>

## 기술 스택
<img src="https://user-images.githubusercontent.com/78680486/158049033-6a7836e9-da4a-4333-8f80-ea7972b2f922.svg"> <img src="https://user-images.githubusercontent.com/78680486/158049035-1b7122ad-cc99-477c-8d94-98ce48944d92.svg"> <img src= "https://user-images.githubusercontent.com/78680486/158049032-6368747a-c353-491c-8d22-63cdc1c525b1.svg"> <img src= "https://user-images.githubusercontent.com/78680486/158049036-4c7371ab-443d-4db9-baa0-6877a4528034.svg" >

### backend
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white">

### front
<img src="https://user-images.githubusercontent.com/78680486/158049034-cc1a893a-bc48-463f-811d-72e57853121d.svg" alt ="github"> <img src="https://user-images.githubusercontent.com/78680486/158049038-9c0dd825-e9c8-4e9d-aa60-f66deb56178d.svg" /> <img src="https://user-images.githubusercontent.com/78680486/158049039-55093258-f377-468f-bcf0-d4e7474b7e84.svg" />

<br>

## 구현기능

### Login / Join

- Login / Join_intro / Join / Join_done 페이지 분할 생성
- 유효성 검사를 적용하여 input 에 입력 이벤트가 발생할때마다 pass여부를 알림
- fetch로 back과 서버 통신 완료

### Main

- 슬라이드 캐러셀 fade in-out 전환
- setLnterval 4초마다 자동전환
- 상품리스트 버튼 클릭 시 4개씩 이동
- 그리드 사용 영상 첨가

### List

- nav메뉴 클릭시 해당 리스트 데이터 불러옴
- 싱글 오리진만 fiter사용하여 country(count) 버튼 생성
- 제품 클릭 시 디테일페이지에서 path parameter로 받을 수 있도록 :id 전달
- 싱글오리진 submenu = 이미지 상수데이터 활용하여 제품별 이미지 filter

### Detail

- LIST 페이지에 Params :id 사용
- 데이터에 없는 부분은 목데이터를 사용
- 캐러셀
- 리뷰작성/삭제기능
- 메뉴 탭 클릭시 스크롤 이동
- 수량 증가시 가격변경
- 장바구니 > 계속쇼핑하기 > 리스트 페이지 이동

### Nav

- 원두/상품만 드롭다운 메뉴 생성
- 카테고리 마다 삼각형 생성 / 드롭메뉴 내용 변경
- 리스트 페이지 이동

### Footer

- 구독하기 버튼 클릭 시 조건에 따라 다른 메세지 alert창 팝업
- 아이콘 클릭 시 깃헙 링크로 연결

<br>

## 상세 화면

### Login & Join
![로그인_조인](https://user-images.githubusercontent.com/93138130/167325212-791ddac1-7f49-46e5-b8cc-419be50bea47.gif)

### Main
![메인-캐러셀](https://user-images.githubusercontent.com/93138130/167324691-6ce7c97f-0ff3-435f-8822-1b557761b635.gif)

### Nav & List
![상품리스트](https://user-images.githubusercontent.com/93138130/167326263-471873cb-07e2-4603-b184-98aeac1b4bb5.gif)

### Detail

![상세페이지](https://user-images.githubusercontent.com/93138130/167326572-2bce6916-f8bb-41e1-97f0-d6e74907c3ca.gif)

### Footer

![메인-푸터](https://user-images.githubusercontent.com/93138130/167324866-86de910c-eb5a-4c65-948e-d4b21f4fd72a.gif)
