var filters = {
    bullishTick: (pl) >= (pf) && (pmin) < (pf),
    bearishTick,
    clock: (pl)>=1.03*(pc),
    maximalGrowsPotential,// فاصله قیمت امروز تا حداکثر سابقه
    // بیشترین قیمت در دو ماه گذشته:
    dailySwing: (cfield0) = parseFloat(((100 * ((pmax) - (pmin)) / (py)).toFixed(2))),
    buyerpower: parseFloat((((ct).Buy_I_Volume / (ct).Buy_CountI) / ((ct).Sell_I_Volume / (ct).Sell_CountI)).toFixed(2)),
    corpSell: parseFloat(100*(ct).Sell_N_Volume / ((ct).Sell_I_Volume + (ct).Sell_N_Volume)),
    corpBuy: parseFloat((100 * (ct).Buy_N_Volume / ((ct).Buy_N_Volume + (ct).Buy_I_Volume)).toFixed(2)),

    

}

var indicators = {
    rsi,
    macd,
    mfi,
    stochastic,

}

var candelsPattern= {
    hammer: true == function () {

        var uppershadow = 0;
        var lowershadow = 0;
        var candelbody = Math.abs((pl) - (pf))

        if (((pf) > (pl))) {
            uppershadow = (pmax) - (pf)
            lowershadow = (pl) - (pmin)
        } else {
            uppershadow = (pmax) - (pl)
            lowershadow = (pf) - (pmin)
        }
        if (((uppershadow > 2 * candelbody && lowershadow < 0.1 * uppershadow) ||
            (lowershadow > 2 * candelbody && uppershadow < 0.1 * lowershadow)) &&
            (candelbody > 0.1 * ((pmax) - (pmin)))) {
            return true;
        } else {
            return false;
        }
    }()
}








let prices = []
var pricesLength = 0;

    for (let index = 0; index < 60; index++) {
        prices.push([ih][index].PriceMax)
}
var direction = 1;
var oldPrice = 0;
var currentPrice = 0;
if (prices[1]>prices[0]) {
    direction = 1;
    currentPrice = prices[1]

} else {
    
}  

var today =(pmax)
var max = prices.sort((a,b)=>{return b-a})[0]
var target = 100 * (max - today / today)
var pivots=[]

if (prices.length>=3) {
    for (let index = 1; index < prices.length - 1; index++) {
        if (prices[index - 1] + prices[index + 1] < 2 * prices[index]) { //max
            if (pivots.length > 1 && prices[index] > pivots[pivots.length - 1]  ) {
               
            } else {
                pivots.push(prices[index])
            }
        }
        if (prices[index - 1] + prices[index + 1] > 2 * prices[index]) { //min
            pivots.push(prices[index])
        }
    }
}


