// const ids = new Set([1, 2, 3]);
// ids.add(2);
// if (ids.has(1)) {
//     ids.delete(1)
// }

// console.log(ids);
// //set은 모든 값이 한 번밖에 저장되지 않기에 어떤값이 저장되어있는지 찾음

// for (const entry of ids.entries()) {
//     console.log(entry);
// }
// //값이 두개씩 있는데 entries가 반환하는것  왜냐하면 map메서드도 값을 두개 반환하여 쉽게 바꾸기 위해

// //id 추적할때 사용ㅎ가ㅣ 좋음  즉 데이터의 고유함이 필요할때 사용

//map

const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

const personData = new Map([[person1, [{ data: 'yesterday', price: 10 }]]])
//map은 무엇이든지 키로 사용할 수 있음 객체로든 

personData.set(person2, [{ date: 'two weeks age', price: 100 }]);

console.log(personData);
console.log(personData.get(person1)); //이렇게 사용하면 번거로움을 줄일 수 있음
//예를 들어 모든 객체에 별도 문자열 id를 추가하고 그 id를 키로 이용해서 정보를 가진 또 다른 객체id 사용

for (const [key, value] of personData.entries()) {
    console.log(key, value);
}

for (const key of personData.keys()) {
    console.log(key);
}

for (const key of personData.values()) {
    console.log(key);
}

// personData.size()

//map vs objects
/*
map은 어떤 자료형도 가능 섞여도 가능 큰 데이터 사용할경우 적합, 데이터를 자주 추가하거나 삭제할때
더 좋은 성능가짐 빠른 데이터 변화가 필요할때

obj은 자료형이 섞여도 되지만 문자열, 숫자, 심볼형만 사용가능 유연성이 떨어짐
키로 불리언 x 다른 객체나 배열을 키로 못가짐
객체는 작거나 중간 크기의 데이터 (30~40개)
더 쉽고 빠르게 {}를 사용하여 근데 대부분 array, 객체 사용할 것
*/

let person = { name: 'Max' };
const persons = new WeakSet(); //set에 저장한 객체 데이터중 사용하지 않게 된 일부를 내보내
//해당 데이터가 가비지 컬렉션으로 수집되게하는 옵션
persons.add(person);

// person = null;

console.log(person);

const personData1 = new WeakMap(); //규모가 클때 메모리 좀 더 효과적으로 관리

personData1.set(person, 'Extra info!');

person = null;

console.log(personData1);
