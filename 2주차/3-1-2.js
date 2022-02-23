    const date=new Date()
    const hour=date.getHours()

    if(hour < 12){
        alert('오전입니다.')
    }
    if(hour >= 12){
        alert('오후입니다.')
    }