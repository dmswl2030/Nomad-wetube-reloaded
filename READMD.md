## 1. Routers

- router와 controller를 같이 쓰는 건 좋지않다. 따로 작성한 뒤 export 해줄 것
- ./ 은 같은 폴더 안에서 다른 파일을 불러오고 ../ 은 다른 폴더 안에 있는 파일을 불러온다
- /:id => url에 변수값을 넣어 줄 수 있게 해준다 (id - 변수명)
- 여기서 /upload를 위에 쓴 이유 : respond 를 받아올때 /:id 의 변수 중 하나라고 인식하기 때문이다
- 정규표현식 : \w+: 모든 문자, 숫자 선택, \d+: 모든 숫자 선택

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit MY Profile
/users/delete -> Delete MY Profile

/videos/:id -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video

## 2. Pug

- 깔끔한 html을 작성하게 해줌 (html의 모듈화)
- html에 js를 포함시킬 수 있다
- 반복하지 않아도 되며 한개의 파일로 모든 템플릿을 업데이트 할 수 있다
- Iteration: 리스트를 보여주고 싶을 때 사용
- Mixins: 데이터를 받을 수 있는 Partial, 이미 만들어진 html 조각
