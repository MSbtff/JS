## Javascript 란?

- javascript란 웹페이지 상에서 동적으로 요소를 변경하고, 사용자 인터페이스를 지원하기 위해 고안된 스크립트 언어
- 넷스케이프 커뮤니케이션 사에서 개발하였으며, 본래의 이름 '모카(Mocha)', 그리고 '라이브스크립트' 였으나 당시 JAVA 언어가 인기를 끔에 따라, 관련이 없음에도 'Javascript'라고 명명하였음



## ECMAScript

- 넷스케이프사에 대응하기 위해, 이후 MS사에서도 JScript라는 javascript와 호환되는 언어를 개발
- 이에 넷스케이프사가 표준화 기구인 Ecma international에 javascript 표준화를 요청화였고, 1996년 11월 ECMA-262라는 표준화 명세서 작업이 시작됨
- 표준화를 통해, 이름을 지어야 하는 상황에서, 이미 Sun마이크로시스템즈 사가 'JAVA'라는 상표 등록을 해놓았기에 javascript라는 이름으로 표준화를 이름을 쓸수 없는 상황ㅇ ㅣ됨
- 그래서 표준화된 언어의 공식 이름은 ECMAScript(에크마스크립트)이고, 대외적으로 사용되는 이름은 javascript가 됨





## Javascript 엔진

- javscript 는 웹브라우저 상에서 동작하며, 다양한 업체에서 만들기 때문에, 각기 다른 javscript 엔진 구현 또는 채용 중
  - javascript 엔진이란, javscript 코드를 이해하고, 실행하는 프로그램 이라고 이해하면됨
- 최근 사용중인 javascript 엔진
  - V8: 구글에서 만들었으며, 크롬에 먼저 채택되었고, 이후 Electron, node.js 에서 사용중
  - spiderMonkey:Fifrefox 브라우저에서 사용
  - javscriptCore: 오픈소스로 apple 과 Safari 브라우저에서 사용중





## 최근 javscript 동향

- 기존에는 웹페이지 상에서 동적으로 요소를 변경하고, 사용자 인터페이스를 지원하기 위한 프론트에만 사용되었음
- 서버 백엔드 기술인 Node.js가 javascript 기반으로 동작함에 따라, 프론트엔드 뿐만 아니라, 백엔드에도 활용 중
- 최근에는 Electron 을 사용해서, 데스크탑 프로그램도 만들 수 있고, react-native, NativeScript 등을 사용해서 모바일 앱도 만들 수 있음
- javascript는 처음부터 잘 고안된 언어가 아님에도 불구하고, 인터넷 환경에서 많이 사용하다보니, 갈수록 사용범위가 넓어지고 있음
- 현재는 크로스 브라우징 문제로 ES6 기준으로 사용중
  - 잘 고안된 언어가 아니다보니, 매년마다 새로운 문법이 추가되고있지만, ECMAScript 2015가 공식 명칭 임





## 1. 테스트 환경 구축

- VSCode 등을 사용하면 된다.
- Vanilla JS는 javascript 기반의 다양한 라이브러니보다 javascript 자체의 기능만 쓰겠다는 의미
- 라이브러리가 무겁고, 디버깅시 라이브러리 내부 코드까지 들어야하는 경우가 있어서 디버깅이 매우 어려웠음
- 따라서 최근에는 라이브러리를 최소로 사용하고, javascript 자체만을 쓰자는 운동이 있고, 이를 표현하기 VanillaJS라는 명칭을 씀





## 2. 미리 알고 시작하면 편한 이야기

- 파이썬과 마찬가지로, javascript도 변수, 조건문, 반복문이 기본
- naming rule
  - 변수 이름을 어떻게 짓느냐에 대해 각 언어별 추천 naming rule 이 존재함
    - 안써도 되지만, 자꾸 보게 되는 코드들이 유사한 naming rule을 가지고 있으므로 가볍게만 알아두면 좋다.
  - 파이썬 naming rule
  - javascript namig rule
    - camelCase (단봉 낙타 기법: 낙타처럼 구불구불, 두 단어를 붙일 때 맨 앞에는 소문자, 뒤에 나오는 단어마다 앞글자는 대문자로)을 추천
      - 변수, 함수등은 camelCase로 명명함
        - boolean 변수는 isVasriable, hasData, areEqual과 같이 is,has, are와 같은 동사를 써서, boolean 변수임을 나타내면 좋다고 함
      - class 명은 PascaleCase(쌍봉 낙타 기법: ClassName 과 같이 두 단어를 붙일 때, 맨 앞의 단어의 앞글자도 대문자, 뒤의 단어의 앞글자도 매누자)
        - class 내부의 method, 또는 외부의 함수등은 모두 camelCase를 사용
          - getName과 같이 함수/ method 는 동사로 시작하면 좋음



- 주석

```javascript
한 줄 주석: //주석
여러 줄에 걸친 주석 :
/*
주석
*/
```



- 파이썬에서 변수등을 출력하기 위해 반드시 필요했던 print() 함수와 같은 기능을 하는 javascript 함수는 console.log()임
- 파이썬과 마찬가지로 문자열을 나타내기 위한 따옴표 표시는 홑따옴표나, 쌍따옴표 둘다 사용 가능(매칭만 되면 됨)



## 3. 테스트 환경 테스트

모든 코드는 해당 프로젝트에서 index.js의 기본코드를 삭제한 후, 작성하고 console 창에서 확인





### console.log()로 시작하는 테스트 환경 테스트와 javascript

- 다음과 같이 작성
  - console.log() 는 파이썬의 print()  함수와 동일한 기능을 함 (문법도 거의 유사함)
  - javascript 는 코드 한 라인이 끝날때 세미콜론(;)을 붙여줘야 함
    - 실행 환경에 따라 세미콜론(;)을 안 붙여도 실행되는 경우도 많음
    - 코드를 작성할 때 마다, 실시간으로 실행이 되므로, 여러번 출력되거나, 에러 메세지를 볼 수도 있음
    - console 에서 filiter 옆의 아이콘을 누르고, 한번에 코드를 다시 복사/ 붙여넣기로 넣고, 저장하기 또는 코드에 한글자라도 변화를 주면 깔끔하게 출력결과를 얻을 수도 있음

```javascript
console.log("test");
```



> **javascript를 익힐때 마인드셋**
>
> javascript는 파이썬과 같이 잘 고안된 언어가 아니므로, 안되야할 것 같은 케이스도 정상 진행되는 경우도 많음(물론 반대도 많음)
>
> 따라서 , 어느정도는 융통성을 가지고, 비정상 동작을 할 경우, 코드를 변경해보며 실행해보는 것이 좋음





## 4. 변수



### 변수 선언

- 파이썬과 달리 변수 선언 키워드(let)를 넣어줘야 함
  - 초기값을 넣을 수도 있고, 변수만 선언할 수 도 있음

```javascript
let 변수명;
let 변수명 = 변수값;
```



- 파이썬과 마찬가지로 console.log()의 인자로 변수명을 넣으면, 변수값이 출력됨

```javascript
let testValue;
testValue = 1;
console.log(testValue)
```

1



- 변수는 변할 수 있는 수로 , 일종의 저장공간을 만들고, 특별한 이름을 붙이는 것임(일반적인 프로그래밍과 동일)
  - 한번 선언한 변수에 다른 변수 값을 넣을 수도 있음

```javascript
let testValue;
testValue = 1;
console.log(testValue);
testValue = 10;
console.log(tetsValue)
```

1

10



- 한번 선언한 변수를 다시 선언할 수 없음 (다음 코드는 에러)
- let 변수를 선언하면 같은 이름의 변수로 선언이 불가능

```javascript
let testValue = 1;
console.log(testValue);
let testValue = 10;
```

SyntaxError: ~~~~~





- 에러 메시지도 확인 해보세요
  - 어느 코드 라인에서 에러가 났는지, 에러 메세지는 무엇인지 확인해보세요

```javascript
let testValue;
testValue = 1;
console.log(testValue);
testValue = 10;
console.log(tetsValue)
let testValue
```





### 상수 선언(const라고 선언한 변수의 값을 변경할수 없다)

- 파이썬과 달리 특정 상수를 저장하는 변수를 선언할 수 있음
- 한번 상수로 선언된 변수에는 새로운 값을 넣을 수 없음
- 선언 할 때, 특정 상수값까지 넣어서 선언해야 함
- 가능 케이스
  - 상수라고 반드시 정수만 되는 것은 아님

```javascript
const testValue = 2;
const tetsValue = 'test';
const testValue = ''; //일종의 null(없음)을 나타내는 값을 넣을 수도 있음
```



읽기 전용의 변수를 만든다고 생각하면 된다.



## 5. javascript 데이터 타입

상수선언에 이어서, javascript 데이터 타입을 설명해야 함

1.  Number
2.  String
3.  Boolean
4.  null
5.  undefined
6.  object
7.  symbo



### 5.1 Number

- 파이썬은 int, float 로 정수와 부동소숫점을 구분하지만, javascript는 정수/ 부동소숫점을 통째로 Number 데이터 타입으로 처리함
  - 64비트 부동소숫점형 (-(2<sup>53</sup>-1)~2<sup>53</sup>-1) 사이의 값





### typeof

- 변수의 데이터 타입을 확인하기 위한 문법
  - typeof 후 한칸 띄고 변수명을 써야 함(특이한 문법)

```javascript
const testValue = 1;
console.log(typeof testValue1);
const testValue2 = 'test';
console.log(typeof testValue2);
```







### 5.2 boolean

- true 와 false 두값을 가질 수 있음

> 파이썬은 true 와 False인데 반해서, javascript는 소문자 true 와 false임을 확인해주세요!



```javascript
let test = 1 > 2;
console.log(test);
console.log(typeof test);
```





- Boolean()로도 true 또는 false의 booean 타입의 값을 가져올 수 도 있음
  - 문자열의 경우는 문자열이 없는 경우 false, 있기만 하면 true

```javascript
let testBoolean1 = Boolean('hi');
console.log(testBoolean1);
let testBoolean2 = Boolean('');
consoloe.log(testBoolean2);
```



### 5.3 null 과 undefined

- null은 값이 없을을 나타내고, undefined는 값이 할당되지 않았음을 나나탬
- null은 null 이라는 이름의 값, 하나만 가질수 있음
- undefined 도 undefined 이라는 이름의 값, 하나만 가질 수 있음



```javascript
let testUndefined1; // 값을 할당하지 않았을 때 (초기화 하지 않았을 때)
console.log(typeof testUndefined1, testUndefined1);
let testNull = null;
console.log(typeof testNull1, testNull1); // null 의 값은 null 이지만, null의 데이터 타입은 object로 출력됨을 확인
```







### 5.4 object

- 객체 타입을 나타냄
- javascript 도 파이썬과 마찬가지로 결국 모든 기능을 객체로



### 5.5 Symbol

- ES6에서 추가된 타입
- Symbol은 unique 한 값을 만듬
- Symbol 문법

```javascript
Symbol([description])
```

- description은 문자열, 숫자등의 데이터가 될 수 있으며, 해당 심볼을 설명하기 위한 목적 이외에는 심볼생성, 접근등과 관련 없음



```javascript
let testSymbol1 = Symbol1('1');
let testSymbol2 = Symobl1('1');
console.log(testSymobol1, typeof testSymbol2);
console.log(testSymobol1 == testSymbol2);
console.log(testSymobol1 === testSymbol2);
```



> 파이썬은 깔끔한 문법을 제공하는 반면에, javascript, JAVA world 등에서는 매우 다양하고 때로는 일관되지 않은 문법을 제공함
>
> 다 속속들이 익히기 보다, 기본문법에 익숙해지는 것이 훨씬 중요함



### 데이터 타입 변환

1.  Number(): Number 타입으로 변환
   - console.log(typeof Number("1"), Number("1"));
2.  parseInt(): Number 타입으로 변환하되 정수로 만듬
   - console.log(typeof  parseInt("1.2"),  parseInt("1.2"));
3. parseFloat(): Number 타입 변환, 부동소숫점까지 그대로 데이터 변환
   - console.log(typeof parseFloat(1.2), parseFloat(1.2));
4. String(): String 타입으로 변환
   - console.log(typeof String(0), String(0));
5.  Boolean(): Boolean 타입으로 변환
   - console.log(typeof Boolean(0), Boolean(0));



## 6. 동등 연산자(==)와 일치 연산자(===)

> 위에서 동등 연산자와 일치 연산자가 나왔으므로, 주요 연산자 전에 먼저 동등 연산자와 일치 연산자를 다룸



- 동등 연산자(==, !=): **관대한** 연산자로 기본적으로 **값** 만 같은지 확인함
- 일치 연산자 (===, !==): **엄격한** 연산자로 기본적으로 **값**과 **데이터 타입** 둘 다 같은지를 확인함

> 일치 연산자만 쓰는게 좋음 일관성이 있기때문



**다음 예를 확인한 후, 이후부터는 javascript에서는 일치 연산자만 쓰기로 함**

- 일종의 타당성이 부족해보이는 동등 연산자 계산 결과



```javascript
console.log("" == '0'); //false
console.log(0 == ""); // true
console.log(0 == '0'); // true
console.log(false == 'false'); //false
console.log(false == '0'); //true
console.log(false == null); // false
console.log(null == undefined); //ture
console.log('\t\r\n' == 0); //true
```



- 일관성 있어 보이는 일치 연산자 계산 결과

```java
console.log("" === '0'); //false
console.log(0 === ""); // true
console.log(0 === '0'); // true
console.log(false === 'false'); //false
console.log(false === '0'); //true
console.log(false === null); // false
console.log(null === undefined); //ture
console.log('\t\r\n' === 0); //true
```





## 7. 주요 연산자

-  +: 덧셈
- -: 뺄셈
- *: 곱셈
- /:나눗셈

```javascript
console.log(100 + 100) - (10 / 2) * 4);
```





### ++연산자

- 변수++: 변수에서 먼저 값을 꺼내고, 그 다음에 1을 더함
- ++변수: 변수 값에 1을 더한 값을 꺼냄

```javascript
let value1 = 1;
console.log(value++ === 2);
console.log(++value1 === 3); //true
```



대입 연산자

- =으로 데이터 변수에 대입할 수 있음
- 다음과 같은 문법도 가능함

```javascript
let value10 = 1;
value10 += 1; //value10 + 1
console.log(value10);
value10 -= 1;
console.log(value10);
value10 *= 5;
console.log(value10);
value10 /= 5;
console.log(value10);
```





### 논리 연산자

- !:NOT
- && : AND
- || : OR
- 예제

```javascript
let value2 = false;
console.log(!value2);
let value3 = true && true;
let value4 = false && true;
console.log(value3, value4);
let value5 = true || true;
let value6 = false || true;
console.log(value5, value6);
```





### 문자열 연산

-  +로 문자열을 합칠 수 있음

```javascript
let string12 = "hello";
console.log(string12 + 'world');

```



## 8. 조건문

- 파이썬에는 탭으로 조건문 실행문을 구분했지만,  javascript는 {} 라는 코드 블록을 내부 실행문을 구분함

```javascript
if (조건) {
	코드;
}
```





- 조건문 코드 블록의 코드를 탭으로 indentaion을 할 필요는 없음
  - 다만, 코드 이해를 돕기 위해 일반적으로 함

```javascript
let age = 20;
if(age > 19) {
	console.log('어른입니다.');
}
```



- if-else 구문도 가능
  함

- ```javascript
  if (조건) {
  	코드;
  }else {
  	코드;
  }
  ```

  

- else를 다음 줄에 놓든, 코드 블록 닫기와 같은 라인에 놓든 관련 없음

```javascript
let age = 20;
if (age > 19) {
	console.log('어른입니다.');
}else {
	console.log('어른이 아닙니다.');
}
```



```javascript
let age = 20;
if (age > 19) {
	console.log('어른입니다.');
}
else
{
	console.log('어른이 아닙니다.');
}
```

- else if도 지원함

```javascript
let age = 10;
if (age > 19) {
	console.log('어른입니다.');
}else if (age > 15) {
	console.log('청소년입니다.');
}else {
	console.log('어린이입니다.');
}
```



switch/case 구문도 가능

- C언어나 JAVA 언어등의 언어에서 지원하는 switch/case 구문 지원

```javascript
let month =1;

switch (month) {
	case 1:
		console.log('jan')
		break;
	case 2:
		console.log('Feb');
		break;
	default:
		console.log('Not Matched');
}
```

- case 문에서 break를 해주지 않으면, 다음 case 문 및 default 문도 실행하게 됨

```javascript
let month = 2;

switch (month) {
	case 1:
		console.log('jan');
		break;
	case 2:
		console.log('Feb');
		break;
	default:
		console.log('Not Matched');
}
```



## 9. 함수

- 기본 문법

```javascript
function 함수이름(함수인자) {
	함수실행코드
}
```

- 예제

```javascript
function FunCoding(name) {
	console.log('Hi,' + name + '!');
}
FunCoding('fun-coding');
```

- return 키워드 사용

```javascript
function Funcoding(name) {
	return 'hi' + name + '!'
}
console.log(FunCoding('fun-coding'));
```



### ES6 화살표 함수 (Arrow function, '=>')선언

- 함수 선언을 보다 간단하게 하기 위해 고안된 문법
- 화살표 함수는 익명 함수임
  - 따라서, 익명 함수를 호출하기 위해, 변수에 대입하는 경우가 많음

```javascript
let func = (함수인자) => expression
let func = (함수인자) => {statements}

// 위 일반적인 화살표 함수 문법은 다음 함수 선언과 동일함
let func = function(함수인자) {
	return expression;
};
```

- 다음과 같은 세가지 단축 문법 지원
  - function 키워드 생략 가능
  - 함수 인자가 하나 뿐이면, 괄호() 생략 가능
  - 함수 코드가 한 라인이라면, 코드 블록 기호(중괄호) 및 return 키워드 생략 가능
- 예1: 다음 두 함수 선언은 동일한 선언임

```javascript
let f1 = function() {
	return "hello world!";
}
let f1 = () => "hello world!";
```



예2: 다음 두 함수 선언 동일한 선언임

```javascript
let f2 = function(age) {
	return age * 2;
}
```

```javascript
let f2 = age => * 2'
console.log(f2(1));
```



예3: 다음 두 함수 선언은 동일한 선언임

```javascript
let f3 = function(item1, item2) {
	return item1 * item2;
}
```

```javascript
let f3 = (item1, item2) => item1 * item2;
console.log(f3(1));
```







