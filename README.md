# 32기 1차 프로젝트

## 팀명 : LuBean

- LUSH 코리아 사이트 클론 프로젝트
- 2주라는 짧은 기간안에 개발을 해야하기에 전체적인 UI적 틀과 기획부분만 클론하였습니다.

## 팀원 및 프로젝트 기간

- 백엔드 : 윤진섭, 임수연
- 프론트 : 김귀아, 양재원, 이현정, 최승이
- 프로젝트 기간 : 2022.04.25 (월) ~ 2022.05.06 (금) (2주)

## 기술 스택

- Back-End : Python, Django
- Front-End : React, sass

## 구현기능

- Login / Join
  - Login / Join_intro / Join / Join_done 페이지 분할 생성
  - 유효성 검사를 적용하여 input 에 입력 이벤트가 발생할때마다 pass여부를 알림
  - fetch로 back과 서버 통신 완료
- Main
  - 슬라이드 캐러셀 fade in-out 전환
  - setLnterval 4초마다 자동전환
  - 상품리스트 버튼 클릭 시 4개씩 이동
  - 그리드 사용 영상 첨가
- Detail
  - LIST 페이지에 Params :id 사용
  - 데이터에 없는 부분은 목데이터를 사용
  - 캐러셀
  - 리뷰작성/삭제기능
  - 메뉴 탭 클릭시 스크롤 이동
  - 수량 증가시 가격변경
  - 장바구니 > 계속쇼핑하기 > 리스트 페이지 이동
- List
  - nav메뉴 클릭시 해당 리스트 데이터 불러옴
  - 싱글 오리진만 fiter>country 버튼 생성
  - 제품 클릭 시 디테일에 :id 전달
  - 이미지 상수데이터 활용하여 제품별 &&
- Nav
  - 원두/상품만 드롭다운 메뉴 생성
  - 카테고리 마다 삼각형 생성 / 드롭메뉴 내용 변경
  - 리스트 페이지 이동
- Footer
  - 구독하기 버튼 클릭 시 조건에 따라 다른 메세지 alert창 팝업
  - 아이콘 클릭 시 깃헙 링크로 연결

## 화면

- Login
  ![](https://velog.velcdn.com/images/hnmpot/post/271680a9-7509-464b-a8db-692c8617cec5/image.png)

- Join
  ![](https://velog.velcdn.com/images/hnmpot/post/796a41d0-681f-4260-8686-342c6e076de5/image.png)
  ![](https://velog.velcdn.com/images/hnmpot/post/44dc21a1-00d7-419a-b1b8-6da4cb7b7a0f/image.png)
  ![](https://velog.velcdn.com/images/hnmpot/post/4d65406e-4a99-4e71-a773-abdd710e9824/image.png)

- Main
- Detail
- List

- Nav
- Footer
