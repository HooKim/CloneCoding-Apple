## Why?

해당 프로젝트는 Looper로 가기 위한 마지막 연습. 미니 프로젝트로 무엇을 보완해야할지 깨달았고 클론코딩으로 결정했다. 클론 코딩을 통해 스타일을 위한 설계를 학습하고 디자인에 대한 이해도를 높이는 시간을 갖는다.

## 요구사항

1. 마감일 : 22.7.23(토)
2. 레퍼런스 (22. 7. 17 (일) 기준) ⇒ 따로 아카이브 저장함. 
    
    [Apple (대한민국)](https://www.apple.com/kr/?afid=p238%7CsO8L3jewZ-dc_mtid_18707vxu38484_pcrid_602210348851_pgrid_16348496961_pntwk_g_pchan__pexid__&cid=aos-kr-kwgo-Brand--slid---product-)
    
3. 메인페이지만 구현하기. 버튼을 누르면 들어가지는 페이지들은 구현할 필요 없음. 대신 해당 링크를 참조하도록하기.

## 분석

1. 디스플레이적인 요소
    1. 맨 위의 메뉴바
    2. 그 아래 작은 프로모션 홍보 파
    3. 그 아래부터 제품 홍보 파트
        1. 2가지 종류로 나뉨. 전체페이지를 차지하는 경우.
        2. 페이지의 절반만을 차지하는 경우.
    4. 홍보파트가 끝나면 약관사항 작게
    5. 그 아래는 더 세세한 메뉴바 (이 부분은 전부 쓰지 말고 약간의 이스터 에그로)
    6. 그리고 footer 파트.
2. 기능적인 요소
    1. 프로모션 홍보바는 스크롤을 하면 사라지고 꼭대기에 도달했을때만 존재한다.
    2. 절반만을 차지하는 홍보파트 그리드는 화면이 일정 수준이하로 줄면 전체를 차지하게 된다. 

## 컴포넌트 설계

1. Header
    1. Menus
    2. Promotion
2. Body
    1. ProductWrapper
        1. ProductText
        2. ProductImage
3. Footer
    1. Footnote
    2. Roadmap
    3. Articles

## 스타일 설계

1. Header와 Footer의 경우 폰트 같은 디자인 요소를 공유한다. 그러나 Body는 별개.
2. 여러개의 컴포넌트가 생성되는 경우는 className으로 묶고 단일한 컴포넌트는 id를 사용한다. 여기서 Header, Body, Footer같은 애들은 Id로 써도 무방. 그러나 여러개가 생성되는 Product Wrapper는 className.
3. value의 규칙은 AbcDef의 경우 className, id 을 abc-def.

## 구현

1. 컴포넌트 이름과 동일하도록 props 구성하기. 단 카멜케이스를 따를것.
2. props로 전달되는 값들은 컴포넌트의 구조를 따라서. 
3. 각 터미널 컴포넌트별로 필요한 정보들을 한번 나열해보자.
    1. Header → Menus : 메뉴리스트 [ 메뉴이름, 메뉴링크 ]
    2. Header → Promotion : 프로모션 내용
    3. Body → ProductWrapper → ProductText : 프로덕트 설명 텍스트
    4. Body → ProductWrapper → ProductImage : 프로덕트 이미지 링크
    5. Footer → Footnote : 각주 텍스트
    6. Footer → Roadmap : [카테고리, 리스트 [메뉴이름, 메뉴링크]]
    7. Footer → Articles : 조항 내용

## 에디터 페이지 구상 및 설계

1. 좀 더 페이지를 동적으로 꾸미기 위함.
2. state를 시각화 하도록 구상.
3. 그러기 위해서는 id를 활용해보자.    
4. 컴포넌트 구조는 다음과 같다.
    1. Editor
        1. EditorForHead 
        2. EditorForBody 
        3. EditorForFooter

## 버그이슈

1. Editor에서 버튼을 두번 눌러야 변화가 반영됨. (22.07.21)
2. 기본 상태가 한글로 들어가면 깨지는 현상이 발생. (22.07.21)
3. href가 현재 url을 기준으로 추가되는 문제 (22.07.22)
    
    [HREF="" automatically adds to current page URL (in PHP). Can't figure it out](https://stackoverflow.com/questions/8764288/href-automatically-adds-to-current-page-url-in-php-cant-figure-it-out)
    
    앞에 “http://”를 추가했다. 바로 해결