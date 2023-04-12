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

personData.size()