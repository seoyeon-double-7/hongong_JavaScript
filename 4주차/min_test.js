function min(...items){
    let output = items
    for(const item of items){
        if(output > item){
            output = item
        }
    }
    return output
}


console.log('min(52, 273, 32, 103, 275, 24,57)')
console.log(`= ${min(52, 273, 32, 103, 275, 24,57)}`)
//
// function sample(...items){
//     console.log(items)
// }
//
// sample(1,2)
// sample(1,2,3)
// sample(1,2,3,4)