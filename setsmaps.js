const ids = new Set([1, 2, 3]);
ids.add(2);
if (ids.has(1)) {
    ids.delete(1)
}

console.log(ids);
//set은 모든 값이 한 번밖에 저장되지 않기에 어떤값이 저장되어있는지 찾음

for (const entry of ids.entries()) {
    console.log(entry);
}
//값이 두개씩 있는데 entries가 반환하는것  왜냐하면 map메서드도 값을 두개 반환하여 쉽게 바꾸기 위해
