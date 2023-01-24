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

## 3. Database

- method : form과 backend 사이의 정보 전송에 관한 방식
- form(method="GET") : 뭔가 검색을 할 때 사용
- form(method="POST") : 파일을 보내거나, database에 있는 값을 바꾸는 뭔가를 보낼 때 사용
- mongod: MongoDB 시스템의 기본 데몬 프로세서 (서버와 같은 느낌)
- mongo: MongoDB에 대한 쉘 인터페이스 (클라이언트 같은 느낌)
  => mongod로 서버를 키고 -> mongo로 인터페이스를 실행하여 mongoDB와 소통한다
- CRUD : Create, Read, Update, Delete
- async(비동기) -- await(수행될 때까지 기다려준다)
  => 데이터베이스가 데이터 찾을때까지 기다려준다(다음 것이 먼저 수행되는 것을 막음)
  => 에러는 try-catch문으로 잡는다.
- 홈페이지 보호를 위해서 pug에서도 속성을 설정하고 database에서도 속성을 설정해야함


### 3-1) schema
- schema : 형태를 정의
<details>
<summary>펼쳐보기</summary>
<strong>* 몽구스 스키마 타입 확인</strong><br>
Mongoose 스키마는 Mongoose 모델을 구성하기 위한 객체로 생각할 수 있습니다.
https://mongoosejs.com/docs/schematypes.html <br>
<strong>* 몽구스 스키마 타입 정의</strong><br>
몽구스의 모든 것은 스키마로 시작합니다. 각 스키마는 MongoDB 컬렉션에 매핑되고 해당 컬렉션 내 문서의 모양을 정의합니다.
https://mongoosejs.com/docs/guide.html
</details>
<br>

### 3-2) video detail
<details>
<summary>펼쳐보기</summary>
<strong>* 정규표현식</strong><br>
http://regexpal.com <br>
<strong>* 몽고DB Document</strong><br>
몽고DB는 ObjectID를 24바이트 16진 문자열 표현으로 반환한다.
https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html
https://docs.mongodb.com/manual/reference/method/ObjectId/ <br>
<strong>* 십육진법 (Hexadecimal)<br>
십육진법은 십육을 밑으로 하는 기수법이다. 보통 0부터 9까지의 수와 A에서 F까지의 로마 문자를 사용하고, 이때 대소문자는 구별하지 않는다.
Hexadecimal: 0~9까지의 숫자와 A-F까지의 알파벳이 조합된 string <br>
<strong>* findOne</strong><br>
해당 조건과 일치하는 document를 찾는다.
_id로 찾는 경우에는 findById()를 사용할 것을 권장
findById(id)는 거의* findOne({ _id: id })과 동일합니다.
https://mongoosejs.com/docs/api.html#model_Model.findOne <br>
<strong>* findById</strong><br>
https://mongoosejs.com/docs/api.html#model_Model.findById <br>
</details>
<br>

### 3-3) edit

<details>
<summary>펼쳐보기</summary>
<strong>* String.prototype.startsWith()</strong><br>
startsWith() 메소드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환합니다.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith <br>
<strong>* String.prototype.endsWith()</strong><br>
The endsWith() 메서드를 사용하여 어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환한다.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith <br>
<strong>* 십육진법 (Hexadecimal)<br>
십육진법은 십육을 밑으로 하는 기수법이다. 보통 0부터 9까지의 수와 A에서 F까지의 로마 문자를 사용하고, 이때 대소문자는 구별하지 않는다.
Hexadecimal: 0~9까지의 숫자와 A-F까지의 알파벳이 조합된 string <br>
</details>
<br>

### 3-4) middleware, 몽고 사용 키워드
Middleware
미들웨어(pre또는 post훅이라고도 불림)는 비동기 함수를 실행하는 동안 제어가 전달되는 함수입니다.
몽구스는 document middleware, model middleware, aggregate middleware, query middleware 4가지 미들웨어가 있습니다.
https://mongoosejs.com/docs/middleware.html#middleware

<details>
<summary>펼쳐보기</summary>
- mongo : 몽고 사용
<br>- show dbs : 내가 가진 db보기
<br>- db : 현재 사용중인 db 확인
<br>- use dbName : 사용할 db 선택하기
<br>- show collections : db 컬렉션 보기
<br>- db.collectionName.find() : db 컬렉션 안에 documents 보기
<br>- db.collectionName.remove({}) : db 컬렉션 안에 documents 내용 모두 제거하기
</details>
<br>


### 3-5) statics
모델에 static 함수를 추가할 수도 있습니다.
스키마에서 컴파일된 모델에 정적 "class" 메서드를 추가합니다.
##### Static 사용하는 두 가지 방법
```
// Assign a function to the "statics" object of our animalSchema
animalSchema.statics.findByName = function(name) {
return this.find({ name: new RegExp(name, 'i') });
};
// Or, equivalently, you can call `animalSchema.static()`.
animalSchema.static('findByBreed', function(breed) { return this.find({ breed }); });
```
https://mongoosejs.com/docs/guide.html#statics

### 3-6) delete
findByIdAndDelete()
document의 _id 필드로 MongoDB findOneAndDelete() 명령을 실행합니다.
findByIdAndDelete(id)는 findOneAndDelete({ _id: id })의 줄임말입니다.
https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete

### 3-7) search

- 라우터로 지정한 :id -> req.params
- pug파일에서 input으로 받은 내용 -> req.body(form이 POST일 때)
- pug파일에서 input으로 받은 url내용 -> req.query (form이 GET일 때)

<details>
<summary>펼쳐보기</summary>
<strong>* Query.prototype.sort()</strong><br>
정렬 순서를 설정합니다. 개체가 전달되면 허용되는 값은 asc, desc, 오름차순, 내림차순, 1 및 -1입니다.
https://mongoosejs.com/docs/api.html#query_Query-sort <br>
<strong>* req.query</strong><br>
라우트 안에 query string parameter를 포함하고 있는 객체로, URL에서 데이터를 가져올 때 주로 사용한다.
예) ?keyword="food" => {keyword: "food"}
query parse가 비활성화로 설정되면 빈 객체 {}이고, 그렇지 않으면 구성된 query parse의 결과입니다.
https://expressjs.com/ko/api.html#req.query <br>
<strong>* Model.find()<br>
documents를 찾습니다. (findOne과 다르게 전체 document를 찾습니다.)
Mongoose는 명령이 전송되기 전에 모델의 스키마와 일치하도록 필터를 캐스팅합니다.
https://mongoosejs.com/docs/api.html#model_Model.find <br>
<strong>* 몽고DB regex ($regex)<br>
몽고DB에서 정규표현식을 사용하기 위해 사용하는 키워드
쿼리의 패턴 일치 문자열에 대한 정규식 기능을 제공합니다.
https://docs.mongodb.com/manual/reference/operator/query/regex <br>
<strong>* RegExp mdn<br>
RegExp 생성자는 패턴을 사용해 텍스트를 판별할 때 사용합니다.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp <br>
<strong>* RegExp 사용 방법<br>
RegExp 객체는 리터럴 표기법과 생성자로써 생성할 수 있습니다.
리터럴 표기법의 매개변수는 두 빗금으로 감싸야 하며 따옴표를 사용하지 않습니다.
생성자 함수의 매개변수는 빗금으로 감싸지 않으나 따옴표를 사용합니다.
```
/ab+c/i 를 아래 RegExp 생성자를 이용해서 만들 수 있습니다.
new RegExp(/ab+c/, 'i') // 리터럴 표기법
new RegExp('ab+c', 'i') // 생성자 함수
```
<br>
</details>
<br>
