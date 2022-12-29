## 1. Routers
- router와 controller를 같이 쓰는 건 좋지않다. 따로 작성한 뒤 export 해줄 것
- ./ 은 같은 폴더 안에서 다른 파일을 불러오고  ../ 은 다른 폴더 안에 있는 파일을 불러온다
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