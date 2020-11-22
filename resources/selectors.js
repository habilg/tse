// %:

let corp_buy = parseFloat(document.querySelector("#e1 > div:nth-child(2)").getAttribute('title'));
let corp_sell = parseFloat(document.querySelector("#e4 > div:nth-child(2)").getAttribute('title'));
let real_buy = parseFloat(document.querySelector("#e0 > div:nth-child(2)").getAttribute('title'));
let real_sell = parseFloat(document.querySelector("#e3 > div:nth-child(2)").getAttribute('title'));

//volume:
(ct).Buy_N_Volume
let corp_buy = parseFloat(document.querySelector("#e1 > div:nth-child(1)").getAttribute('title'));
(ct).Sell_N_Volume
let corp_sell = parseFloat(document.querySelector("#e4 > div:nth-child(1)").getAttribute('title'));

(ct).Buy_I_Volume
let real_buy = parseFloat(document.querySelector("#e0 > div:nth-child(1)").getAttribute('title'));
(ct).Sell_I_Volume
let real_sell = parseFloat(document.querySelector("#e3 > div:nth-child(1)").getAttribute('title'));


//numbers
(ct).Buy_CountI
let real_buy_n = parseInt(document.querySelector("#e5").textContent)
(ct).Sell_CountI
let real_sell_n = parseInt(document.querySelector("#e8").textContent)

(ct).Buy_CountN
let corp_buy = parseInt(document.querySelector("#e6").textContent)
(ct).Sell_CountN
let corp_sell = parseInt(document.querySelector("#e9").textContent)


tval = parsInt(document.querySelector("#d10 > div").getAttribute('title'))
tno = parseInt(document.querySelector("#d08").textContent)
tvol = parseInt(document.querySelector("#d09 > div").getAttribute('title'))



let prices = []
for (let index = 0; index < 60; index++) {
 
    prices.push([ih][index].PClosing)
}

prices.sort()

let max = prices[0]
let min = prices[prices.length - 1]
let randeman = (100 * max / min).toFixed(2)

