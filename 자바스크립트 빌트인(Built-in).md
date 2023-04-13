## 빌트인(Built-in)



### 개요

#### Built-in이란?

값 타입, 연산자, 오브젝트를 사전에 만들어 놓은 것

js 코드를 처리하는 영역에

장점

- 사전 처리를 하지 않고 즉시사용
- 자바스크립트 특징



### 빌트인

#### 빌트인 값 타입

Undefined, Null, Boolean, Number, String, Object

빌트인 연산자

+, -, *, /, %, ++, --, new 등



### 빌트인 오브젝트 형태

#### 빌트인 Number 오브젝트

123과 같은 숫자, 상수, 지수를 처리하는 오브젝트

여기서 오브젝트는 소문자 object

대문자 Object는 문자열를 다루고 소문자 object는 숫자를 다루며 함수가 있다.

**Number 처리를 위한 프로퍼티의 집합**

JS에서 Number 처리를 위한 프로퍼티를 사전에 만들어 제공하여 개발하게 끔

Number.length로 1을 구할 수 있으며

Number.isNaN()로 함수를 호출할 수 있다.



개발자도구 열기 ctrl + shift + i

자바스크립트에는 name:value , key: value 형태로 구성되는 프로퍼티로

다수에 프로퍼티 집합이 빌트인 넘버 오브젝트, 빌트인 스트링 오브젝트



length 프로퍼티의 기능과 왜 1인지 알아보고 어떤 형태이고 값을 반환인지 앞으로 배우게 된다.



### 빌트인 오브젝트 유형

#### Number 123과 같은 숫자, 상수, 지수

#### String "abc"와 같은 문자열, 분리, 연결

#### Boolean  true, false

#### Object {key: value} 형태

#### Array [1, 2, "A", "가나다"]형태

#### Function function abc() {} 형태

#### Math, abs(), round() 등의 수학 계산

#### Date 연월일, 시분초

#### JSON [{"name": "value"}]형태, 서버와 데이터 송수신에 사용

#### RegExp ^,$와 같은 정규 표현식

#### Global 소스파일 전체에서 하나만 존재, 모든 코드에서 공유, 접근 가능,

#### 전역 객체라고도 하며, 뉘앙스에 차이가 있음 앞에는 오브젝트는 데이터를 다루지만 하나만 존재