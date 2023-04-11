// // //배열 생성
// // const numbers = [1, 2, 3];
// // console.log(numbers);

// // // 고유의 생성자 함수 사용해서 배열 생성
// // const moreNumbers = new Array(5, 2); //[]
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 5);
// // console.log(yetMoreNumbers);

// // //iterable 이나 유사배열 객체(array-like obj)가 들어감 알파벳으로 분리 쉽게함
// // const moreNumbers1 = Array.from('안녕');
// // console.log(moreNumbers1);

// // const listItems = document.querySelector('li');
// // console.log(listItems);

// // const hobbies = ['cooking', 'sports'];
// // const personalData = [30, 'max', { moreDetail: [] }]; //배열의 길이는 3 인덱스는 2임 최대

// // const analyticsData = [[1, 1.6], [-5.4, 2.1]];


// // //다차원 배열도 가능 즉 배열안의 배열이 가능 또는 배열과 배열 혼합이 가능 즉 유연성을 가짐
// // for (const data of analyticsData) {
// //     for (const datapoints of data)
// //         console.log(datapoints);
// // }


// // console.log(personalData[1]);

// // const hobbies1 = ['sports', 'cooking'];
// // hobbies1.push('reading');
// // hobbies1.unshift('coding'); //모든 요소를 오른쪽으로 이동
// // const popvalue = hobbies1.pop(); // pop은 삭제된 요소를 반환
// // hobbies1.shift(); // 모든 요소를 왼쪽으로 이동
// // console.log(hobbies1);

// // hobbies1[1] = 'coding';
// // //hobbies1[5] = 'reading'; //흔치 않는 방식 안 씀
// // console.log(hobbies1, hobbies1[4]);


// // hobbies1.splice(0, 0, 'GOOD FOOD'); //0번 인덱스에 추가
// // console.log(hobbies1);

// // hobbies1.splice(0, 1); //0번 인덱스 삭제
// // console.log(hobbies1);

// // //hobbies1.splice(0) //다 삭제
// // //console.log(hobbies1);

// // const removedElements = hobbies1.splice(-1, 1); //-1 같은 음수는 오른쪽에서부터 확인함
// // console.log(hobbies1);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// //const storedResults = testResults.slice(2);
// //음수를 선택할려면 모두 음수 인덱스여야함
// const storedResults1 = testResults.concat([3.99, 2]); //중첩배열로 추가하는게 아닌 push와 같은 개념
// //.push([])

// // testResults.push(5.91);

// // console.log(storedResults1, testResults); //배열 복사
// // console.log(testResults.indexOf(1.5)); //indexOf는 설명과 일치하는 첫번째 요소를 찾으면 종료
// // console.log(testResults.lastIndexOf(1.5));

// // console.log(testResults.includes(10.99)); //배열의 일부인지 확인하는 메서드
// // console.log(testResults.indexOf(10.99) !== -1); //-1과 같으면 배열이 없는것이고
// // //더욱 간편하게 includes를 사용

// // const personData = [{ name: 'max' }, { name: 'manuel' }]
// // console.log(personData.indexOf({ name: 'manuel' })); //-1 값은 요소를 못찾아서 반환 한 값
// // //여기서 찾지 못하는 이유는 객체는 참조값으로 객체가 있으면 실행이 되지 않음

// // const manuel = personData.find((person, index, persons) => {
// //     return person.name === 'manuel';
// // }); //인수를 취하지만 다른함수를 취하는 인수 즉 익명함수 사용
// // //최대 3개의 인수 사용 가능, 찾으려는 값은 true 반환 나머지 요소는 false 반환
// // // find는 복사를 하지 않음
// // manuel.name = 'anna'

// // console.log(manuel, personData);

// // const maxIndex = personData.findIndex((person, idex, persons) => {
// //     return person.name === 'max'
// // });

// // console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// // const taxAdjustedprices = [];

// // for (const price of prices) {
// //     taxAdjustedprices.push(price * (1 + tax));
// // }

// //이것도 익명함수 사용하여 최대 3개 인수 사용
// // prices.forEach((price, idx, prices) => {//prices 위에 전역변수에서 사용해도되는이유는 새도잉이라서
// //     const priceObj = { index: idx, taxAdjustedprices: price * (1 + tax) };
// //     taxAdjustedprices.push(priceObj);
// // })
// // 유일한 장점은 for of 반복문을 사용하지 않는 것 그리고 객체로 만들어 인덱스에 쉽게 액세스 할 수 있음

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjustedprices: price * (1 + tax) }
//     return priceObj;
// });
// //map은 반환 값이 있어야함 그래서 map은 배열전환에 요소 변경이 쉽고
// //변경 요소를 기반으로 새로운 배열 얻기 쉬움


// console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// }); //아무것도 안했을때 문자열은 첫번째 문자만 비교 sort도 반환 갑 ㅅ필요

// // console.log(sortedPrices.reverse());
// console.log(sortedPrices);

// const filterdArray = prices.filter(price => price > 6); //filter는 true인 요소만 반환함);
// //애로우 함수를 더 줄여서 한 줄로

// console.log(filterdArray);

// // let sum = 0;

// // prices.forEach((price) => {
// //     sum += price;
// // });

// const sum = prices.reduce((preValue, curValue) => preValue + curValue, 0);
// //reduce는 배열의 값을 단일 값으로 결합할때 매우 유용
// //preValue는 이전값 curValue는 현재값 curIndex는 현재 인덱스 prices는 배열

// console.log(sum);

// const data = 'new york;10.99;2000'

// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ['max', 'schwarz'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copideNmaeFragements = [...nameFragments]; //...은 배열을 복사하는 방법 전개구문
// //함수 구문에서는 함수 리스트의 인자로 사용 여기서는 배열의 초기화와 같이 사용
// nameFragments.push('Mr');
// console.log(nameFragments, copideNmaeFragements); //복사본은 변하지 않음

// console.log(Math.min(prices)); //Math.min은 배열을 인수로 받지 않음 즉 Nan반환
// console.log(Math.min(...prices)); //...은 배열을 인수로 받음

// const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
// //이 객체들의 대한 배열은 메모리 공간에 대한 주소로 이루어짐(주소들을 복사하고 있음)
// const copidePersons = [...persons.map(person => ({
//     name: person.name,
//     age: person.age
// }))];
// // 즉 새로운 배열을 만든것이 아닌 객체를 만든 것
// // 객체를 편집할 경우 복사된 배열에도 영향을 미침

// persons.push({ name: 'Anna', age: 29 });
// //배열에 있는 객체의 참조 값은 복사 안됨 
// //배열의 모든 요소를 복사한다는 것은 이 객체들의 주소를 복사
// persons[0].age = 31;

// console.log(persons, copidePersons);

// //중첩 참조 값의 변화가 새로 만들어진 복사본 배열에 영향을 끼치지 않기

//배열 구조 분해

const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const firstName = nameData[0];
// const lastName = nameData[1]

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);
