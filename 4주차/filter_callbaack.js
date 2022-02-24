let numbers = [273,25,75,52,103,32,57,24,76]

numbers= numbers.filter( (x) => x%2 === 1 )
console.log(`1. 홀수만 추출 : `, numbers)

numbers= numbers.filter( (x) => x <= 100 )
console.log(`2. 100 이하의 수만 추출 : `, numbers)

numbers= numbers.filter( (x) => x % 5 ===0 )
console.log(`3. 5로 나눈 나머지가 0인 수만 추출 : `, numbers)

console.log(numbers)