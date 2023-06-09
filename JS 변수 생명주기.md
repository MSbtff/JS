## 변수 생명 주기

호이스팅은 스코프를 단위로 동작함

호이스팅은 변수 선언이 스코프의 선두로 끌어 올려진 것 처럼 동작한느 자바스크립트 고유의 특징을 말함

```javascript
var x = 'global'

function foo() {
	console.log(x)//1
	var x = 'local'
}

foo();
console.log(x); //global	
```



### 전역 변수의 생명주기

함수와 달리 전역 코드는 명시적인 호출 없이 실행된다. 

var 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 된다. 이는 전역 변수의 생명주기가 전역 객체의 생명 주기와 일치



> 전역 객체
>
> 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체
>
> 전역 객체는 클라이언트 사이드 환경에서는 window, 서버 사이드환경(Node.js)에서는 global 객체를 의미
>
> ES11 에서 globalThis로 통일
>
> 전역 객체는 표준 빌트인 객체(Object, String, Number, function, Array)와 환경에 따른 호스트 객체(클라이언트 Web API, Node.js의 호스트 API) 그리고 var 키워드로 선언한 전역 변수와 전역함수를 프로퍼티로 갖는다.



### 전역 변수의 문제점

전역 변수를 선언한 의도는 어디서든 참조하고 할당하는 변수를 사용하겠다는 것인데

이는 암묵적 결합을 허용하는 것 변수의 유효 범위가 커지면 가독성이 나빠짐

그래서 전역변수는 생명주기가 길고, 검색 속도가 가장 느리며 네임스페이스를 오염시킨다.

네임스페이스는 다른 파일이 분리되어 있어도 하나의 전역 스코프를 공유하는 것이다 따라서 다른 파일 내에서 동일한 이름으로 명명된 전역 변수나 전역 함수가 같은 스코프내에 존재할 경우 예상치 못한 결과를 가져올 수 있음



### 전역 변수 사용 억제하는 방법

지역변수 사용 지양 변수의 스코프는 좁을수록 좋다



#### 즉시 실행 함수

함수 정의와 동시에 호출되는 즉시 실행 함수는 단 한 번만 호출된다. 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.

```javascript
(function () {
	var foo = 10;
	// ...
}());
console.log(foo) 
```

이 방법을 사용하면 전역 변수를 생성하지 않으므로 라이브러리 등에 자주 사용된다.



#### 네임스페이스 객체

전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수 처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법

```javascript
var MTAPP ={};
MAYPP.name = 'Lee';
console.log(MYAPP.name); //Lee
```

네임스페이스 객체에 또 다른 네임스페이스 객체를 프로퍼티로 추가해서 네임스페이스를 계층적으로 구성할 수 있음



```javascript
var MTAPP ={};
MAYPP.person = {
	name: 'Lee',
	address: 'Seoul'
};
console.log(MYAPP.person.name); //Lee
```



#### 모듈 패턴

모듈 패턴은 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다.

모듈패턴은 자바스크립트의 강력한 기능인 클로저를 기반으로 동작한다. 모듈패턴의 특징은 전역 변수의 억제는 물론 캡슐화까지 구현할 수 있음

캡슐화는 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것을 말한다.

캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는 이를 정보 은닉이라 한다.



public으로 선언된 데이터 또는 메서드는 외부에서 접근이 간으하지만 private으로 선언된 경우는 외부에서 접근할 수 없고 내부에서만 사용된다. 이것은 클래스 외부에는 제한된 접근 권한을 제공하며 원하지 않는 외부의 접근으로부터 내부를 보호하는 기능을 한다.

하지만 자바스크립트는 접근 제한자를 제공하지 않는다. 는 이제 #으로 제공한다.



