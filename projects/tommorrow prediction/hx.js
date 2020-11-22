// ازاین اسکریپت جهت استخراج داده برای تغییرات قیمت روزانه استفاده میکنم.
// هدفم این است که ببینم آیا میتوان بر اساس متغیرهایی مثل طول صف در ساعت 12:30 و الگوهای پیش گشایش 
// میتوان رابطه ای برای پیش بینی فردا پیدا کرد یا خیر

let rawData = {
    "date": "",
    "basePrice": 0,
    "lastPrice": 0,
    "closePrice": 0,
    "max": 0,
    "min": 0,
    "openPrice":0,
    "tradeVolume": 0,
    "baseVol": 0,
    "volBuyer": 0,
    "buyers": 0,
    "volSeller": 0,
    "sellers": 0,
    "qbuyers": 0,
    "qvol": 0,
    "corpSell": 0,
    "corpBuy": 0,
    "convertToNum": (input) => {
        return parseFloat((Number(input.replaceAll(',', ''))).toFixed(2))
    }
}
let calculatedData = {
    "dailySwing": 0,
    "volPerBuyer": 0,
    "buyerPower": 0,
    "qperbuyer": 0,
    "corpTrade": 0,
    "ctp": 0,
    "cpp": 0,
    "openPricePercent": 0,
    "lastPricePercent":0
}
var convertToNum = (input) => {
    return parseFloat((Number(input.replaceAll(',', ''))).toFixed(2))
}


var setValues = () => {
    rawData['basePrice'] = document.querySelector('#d05').textContent;
    rawData['min'] = document.querySelector('#d07').textContent;
    rawData['max'] = document.querySelector('#d06').textContent;
    rawData['openPrice'] = document.querySelector('#d04').textContent;
    rawData['closePrice'] = document.querySelector('#d03').firstChild.textContent.trim();
    rawData['lastPrice'] = document.querySelector('#d02').firstChild.textContent;
    rawData['tradeVolume'] = document.querySelector('#d09').textContent;
    rawData['baseVol'] = document.querySelector('#d19 div').getAttribute('title');
    calculatedData['dailySwing'] = 100 * (convertToNum(rawData.max) - convertToNum(rawData.min)) / convertToNum(rawData.basePrice)
    rawData['volBuyer'] = document.querySelector('#ct4 div').getAttribute('title');
    rawData['buyers'] = document.querySelector('#ct0').textContent
    rawData['volSeller'] = document.querySelector('#ct6 div').getAttribute('title');
    rawData['sellers'] = document.querySelector('#ct2').textContent
    calculatedData['volPerBuyer'] = convertToNum(rawData.volBuyer) / convertToNum(rawData.buyers)
    calculatedData['buyerPower'] = calculatedData.volPerBuyer * convertToNum(rawData.sellers) / convertToNum(rawData.volSeller)
    rawData['qbuyers'] = document.querySelector('#blhb tr :nth-child(2)').textContent
    rawData['qvol'] = document.querySelector('#blhb tr :nth-child(3)').textContent
    calculatedData['qperbuyer'] = convertToNum(rawData.qvol) / convertToNum(rawData.qbuyers)
    rawData['corpSell'] = document.querySelector('#ct7 div').getAttribute('title')
    rawData['corpBuy'] = document.querySelector('#ct5 div').getAttribute('title')
    calculatedData['corpTrade'] = convertToNum(rawData.corpSell) - convertToNum(rawData.corpBuy)
    calculatedData['cpp'] = 100*((convertToNum(rawData.closePrice)/ convertToNum(rawData.basePrice)) - 1)
    calculatedData['ctp'] = 100 * calculatedData.corpTrade / convertToNum(rawData.tradeVolume);
    calculatedData['openPricePercent']=100*((convertToNum(rawData.openPrice)/convertToNum(rawData.basePrice))-1)
    calculatedData['lastPricePercent']=100*((convertToNum(rawData.lastPrice)/convertToNum(rawData.basePrice))-1)


}



var drawTable = () => {
    setValues();
    var tabl =
        `
  <tbody>
    <tr>
      <td>${rawData.closePrice}</td> //
      <td>${(calculatedData.cpp).toFixed(2).replaceAll('.', '/')}</td>
      <td>${rawData.tradeVolume}</td>
      <td> </td>
      <td>${rawData.qvol}</td>
      <td> </td>
      <td>${(calculatedData.qperbuyer).toFixed(2).replaceAll('.', '/')}</td>
      <td>${(calculatedData.volPerBuyer).toFixed(2).replaceAll('.', '/')}</td>
      <td>${(calculatedData.buyerPower).toFixed(2).replaceAll('.', '/')}</td>
      <td>${(calculatedData.dailySwing).toFixed(2).replaceAll('.', '/')}</td>
      <td>${(calculatedData.lastPricePercent).toFixed(2).replaceAll('.', '/')}</td>
      <td>${(calculatedData.openPricePercent).toFixed(2).replaceAll('.', '/')}</td>
      <td>${(calculatedData.ctp).toFixed(2).replaceAll('.','/')}</td>
    </tr>
  </tbody>
      `
    var tbl = document.createElement('table')
    tbl.innerHTML = tabl;
    document.body.insertAdjacentElement("afterbegin", tbl)
}
drawTable()



