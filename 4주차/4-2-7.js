//let i = 0
//while(true){
//    alert(`${i}번째 반복입니다.`)
//    i++
//}


for (let i = 0; true; i++) {
        alert(i + '번째 반복문입니다.')
        const isContinue = confirm('계속 하시겠습니까?')
        if (!isContinue) {
                break;
        }
}