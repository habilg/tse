//بررسی سوابق معاملات
var data = {
    firstrows:[],
    secondrows:[],
    thirdrows: [],
    tradeVolume:[]
}
BestLimitData.forEach((item, index, arr) => {
    switch (item[1]) {
        case "1":
            data.firstrows.push(item)
            break;
        case "2":
            data.secondrows.push(item)
            break;
        case "3":
            data.thirdrows.push(item)
            break;
        default:
            break;
    }
})


ClosingPriceData.forEach(item => {
    data.tradeVolume.push(item[9])
})

