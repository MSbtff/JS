## 함수(Function)



### function

특정 기능을 처리하는 자바스크립트 코드 묶음

함수 형태

```js
function book(){
	var title = "js 책";
}

var point = function(one, two){
	var total = one + two;
	var bonus = total + 100;
};
```



### 함수 구성요소

function 키워드

함수 이름

파라미터(Parameter)

- 매개변수, 인자, 아규먼트로도 부름
- 파라미터 작성은 선택

함수 body

- 중괄호{} 안에 작성코드
- 함수 코드, 소스 텍스트로도 부름
- 함수 코드 작성은 선택

함수 형태

```js
function book(){
	var title = "js 책";
};

var point = function(one, two){
	var total = one + two;
	var bonus = total + 100;
};
```



### 함수 이름 규칙

첫 문자 

영문자, $, 언더바(_) 사용가능

숫자, &, *, @, + 사용불가

함수이름 작명 권장

- 함수 코드를 읽지 않더라도
- 함수이름과 파라미터로 기능을 알 수 있도록
- 시맨틱(의미, 뜻)을 부여하여 작명

```js
function setBookTile(){
	var title = "js 책";
};

var calculatePoint = function(one, two){
	var total = one + two;
	var bonus = total + 100;
};
```



함수 이름 관례

calculatepoint() 처럼 동사로 시작 동적으로작성

- 포인트를 계산한다.

두 개 이상의 단어를 사용할 때

- 두 번째 단어부터 명사 사용
- 명사의 첫 문자를 명사 사용
- 명사의 첫 문자를 대문자로 사용
- Camelcase 형태라고 부름

동사 + 명사 현태로 동적인 모습





## 함수 호출



### 호출받는 함수

함수는 호출되어야 실행된다.

호출받는 함수

1. 함수가 호출되었을 때 실행되는 함수
2. 함수라고 하면 호출 받는 함수를 지칭

파라미터

- 호출한 함수에서 넘겨준 값을 받음
- (one, two) 처럼 소괄호() 안에 파라미터 이름 작성

```js
function setValue(one, two){
	var total =one + two;
};
setValue(10, 20);
```



### 함수 호출

setValue() 형태로 호출

- 함수 이름과 소괄호 작성
- setValue만 작성하면 호출되지 않음

```js
function setValue(one, two) {
	var total = one + two;
};

setValue(10, 20);
```

호출 받는 함수 작성(선언)

setValue(10, 20) 형태로 함수 호출 파라미터 값으로 10과 20을 넘겨 줍니다.

호출된 함수에서 10을 one에 20을 two에 설정한다. 즉 왼쪽에서 오른쪽으로 설정

setValue() 함수의 함수 코드 실행

일반적으로 호출받는 함수를 소스 파일 위에 작성하고 함수 호출을 아래에 작성



- 파라미터
  - 호출된 함수에 넘겨줄 값 작성
  - setValue(10, 20) 처럼 소괄호() 안에 작성
  - js에서 지원하는 타입 작성
  - 콤마(,)로 구분하여 다수 작성 가능

### return

형태:

return 표현식 opt;

표현식의 평가 결과 반환

```js
function getPoint(){
	return 10 * 30;
};
var result = getPoint();
log(result);
실행결과
300
```

실행순서

getPoint() 함수 호출

retrun의 오른쪽 표현식(10 * 30) 을 평가

평가 결과 300을 반환

300을 갖고 getPoint()로 돌아감

300을 result 변수에 할당



return 또는 표현식을 작성하지 않으면 undefinde 반환

```js
function getPoint(){
};
var result = getPoint();
log(typeof result);
실행결과
undefined
```

return을 작성하지 않으면

값을 반환하지 않는 것이 아니라 undefined 값을 반환





return과 표현식을 한 줄에 작성

```js
function getPoint(){
	return
	10 * 30;
};
var result = getPoint();
log(result);
실행결과
undefined
```

 return 끝에 세미콜론을 자동으로 첨부한다.

return 문에서 return하므로 10 * 30을 수행하지 않게 된다.

그러므로 return 줄에 작성해야 한다.





### 주석 작성 목적

코드가 목적을 달성하기 위한 기능, 시나리오 등을 **생각하고 정리하는것**

이것을 문법에 맞추어 작성한 것이 코드

코드를 작성하기 전에 **우선 먼저 정리한 생각을 주석으로 작성**

어렵지만 처음 배울 때부터 습관화

주석 작성 기준 **코드의 목적, 결과가 미치는 영향을 작성**

다른 사람이 알 수 있도록 자세하게 작성



#### 주석 사례

```js
/**
* @function calclateAmount
* 1. 파라미터로 받은 수량에 단가를 곱해 금액을 계산하고 결과 값을 반환한다.
* 2. 수량과 단가의 0체크는 함수를 호출하기 전에 하므로 체크하지 않는다.
* @param{Number} quantity, 수량
* @param{Number} price, 단가
* @param{Number} 계산 결과
*/
function calculateAmount(quantity, price){
	//주석을 자세하게 작성하기 위해
	//함수 코드를 분리하는 경우도 있다.(심플할수록 좋다.)
}
```

