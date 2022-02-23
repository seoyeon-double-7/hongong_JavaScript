const input = prompt('숫자를 입력해주세요.','')
const n = Number(input)

if (n % 2 === 0){
    alert(`${input}은 짝수입니다.`)
}else {
    alert(`${input}은 홀수입니다.`)
}