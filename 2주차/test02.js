// 홀짝
// const a = Number(prompt('숫자를 입력해주세요.'))
//
// if (a%2 == 1){
//     alert('홀수입니다.')
// }else{
//     alert('짝수입니다.')
// }

// 계절 구하기
const today_month = Number(prompt('월를 입력해주세요.'))
if(today_month>=3 && today_month<=5){
    alert('봄입니다.')
}else if (today_month>=6 && today_month<=8){
    alert('여름입니다..')
}else if (today_month>=9 && today_month<=114){
    alert('가을입니다..')
}else{
    alert('겨울입니다..')
}