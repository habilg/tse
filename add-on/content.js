$(document).ready(function () {

    preaparePanels();
    showWidgetPanel();
    appendRealCorpProportions()
    addDargula()
    providers("providers")
    dealProportions('dealProportion')
});


function addDargula() {
    var t1 = document.createElement('script')
    t1.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/dragula/3.6.2/dragula.min.js')
    document.body.appendChild(t1)
    setTimeout(() => {
        var t2 = document.createElement('script')
        t2.innerHTML = "dragula([document.querySelector('#widgetPanel')])"
        document.body.appendChild(t2)

    }, 2000);
}

let showWidgetPanel = () => {
    var _innerHtml = `
    <div class="card">
        <div class="card-header">
            <h4 dir="rtl">آخرین پیام ناظر</h4>
        </div>
        <div class="card-body">
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h4 dir="rtl">وضعیت نماد</h4>
        </div>
        <div class="card-body">
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h4 dir="rtl">قدرت خریدار : ${buyerPower()}</h4>
        </div>
    </div>
	 <div class="card">
        <div class="card-header">
            <h4 dir="rtl">نسبت معاملات امروز به ...</h4>
        </div>
        <div id="dealProportion"></div>
    </div>

    <div class="card">
        <div class="card-header">
            <h4 dir="rtl">جریان نقدینگی</h4>
        </div>
        <div class="card-body" dir="rtl">
        <h3>${moneyFlow()}</h3>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h4 dir="rtl"> تامین کننده </h4>
        </div>
        <div id="providers"></div>
    </div>

   
    <!-- <div class="card">
        <div class="card-header">
            <h3>نسبت معاملات به میانگین یک ماهه</h3>
        </div>
        <div class="card-body">
            <p>${dealToMean()}</p>
        </div>
    </div> -->
    `
    var widgetPanel = document.createElement('div')
    widgetPanel.id = 'widgetPanel'
    // widgetPanel.style.width = "20%"
    // widgetPanel.style.height = "1000px"
    // widgetPanel.style.backgroundColor = "blue"
    // widgetPanel.style.float = "left"
    widgetPanel.innerHTML = _innerHtml
    var target = document.querySelector("#MainBox")
    target.insertAdjacentElement("afterend", widgetPanel)
}

let showFundamentalPanel = () => {
    var fundamentalPanel = document.createElement('div')
    fundamentalPanel.style.width = "20%"
    fundamentalPanel.style.height = "1000px"
    fundamentalPanel.style.backgroundColor = "yellow"
    fundamentalPanel.style.float = "right"
    var target = document.querySelector("#form1")
    target.insertAdjacentElement("beforeend", fundamentalPanel)
}

let preaparePanels = () => {
    document.querySelector("#tabs").style.float = "right"
    document.querySelector("#tabs").style.width = "7%"
    document.querySelector("#MainBox").style.width = "73%"
    document.querySelector("#MainBox").style.float = "right"

}

var buyerPower = () => {
    return ((parseFloat(document.querySelector("#e0").textContent) * parseFloat(document.querySelector("#e8").textContent)) / (parseFloat(document.querySelector("#e3").textContent) * parseFloat(document.querySelector("#e5").textContent))).toFixed(2)
}

var corpSupply = () => {
    var corpSellPortion = parseFloat(document.querySelector("#e4").textContent) / (parseFloat(document.querySelector("#e4").textContent) + parseFloat(document.querySelector("#e3").textContent))
    var realBuyPortion = parseFloat(document.querySelector("#e0").textContent) / (parseFloat(document.querySelector("#e0").textContent) + parseFloat(document.querySelector("#e1").textContent))
    return parseFloat((corpSellPortion * realBuyPortion * 100).toFixed(2))
}

var realSupply = () => {
    var corpBuyPortion = parseFloat(document.querySelector("#e1 > div:nth-child(1)").getAttribute('title')) / (parseFloat(document.querySelector("#e1 > div:nth-child(1)").getAttribute('title')) + parseFloat(document.querySelector("#e0 > div:nth-child(1)").getAttribute('title')));
    var realSellPortion = parseFloat(document.querySelector("#e3 > div:nth-child(1)").getAttribute('title')) / (parseFloat(document.querySelector("#e3 > div:nth-child(1)").getAttribute('title')) + parseFloat(document.querySelector("#e4 > div:nth-child(1)").getAttribute('title')));
    return parseFloat((corpBuyPortion * realSellPortion * 100).toFixed(2))

}

var dealBasePortion = () => {

    return parseFloat((parseInt(document.querySelector("#d09 > div").getAttribute('title')) / parseInt(document.querySelector("#TopBox > div.box2.zi1 > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(2) > div").getAttribute('title'))).toFixed(2))
}

var dealToMean = () => {
    return parseFloat((parseInt(document.querySelector("#d09 > div").getAttribute('title')) / parseInt(document.querySelector("#TopBox > div.box2.zi1 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(2) > div").getAttribute('title'))).toFixed(2))
}

//cahnge box 6 style / 
var changeStyleOfBox6 = () => {
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(6)") //blue
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(2)") // blue
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2)")//green
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(3)")//red
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(2)")//green
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(3)")//red
}

//convert table to chart
function appendRealCorpProportions() {

    let chartElement = document.createElement('div')
    chartElement.id = "chartarea"
    chartElement.style.height = '100px'
    chartElement.style.width = '100%'
    var target = document.querySelector('.box2.zi2 .box6')
    // var target = document.getElementById('widgetPanel')
    target.insertAdjacentElement("beforeend", chartElement)
    let corp_buy = parseFloat(document.querySelector("#e1 > div:nth-child(2)").getAttribute('title'));
    let corp_sell = parseFloat(document.querySelector("#e4 > div:nth-child(2)").getAttribute('title'));
    let real_buy = parseFloat(document.querySelector("#e0 > div:nth-child(2)").getAttribute('title'));
    let real_sell = parseFloat(document.querySelector("#e3 > div:nth-child(2)").getAttribute('title'));


    let title = {
        text: ""
    }
    let xAxis = {
        visible: false
    }
    let yAxis = {
        visible: false
    }
    let chart = {
        type: 'bar'
    }
    let tooltip = {
        enabled: false
    }
    let legend = {
        enabled: false
    }
    let credits = {
        enabled: false
    }
    let series = [
        {
            name: 'real',
            data: [
                { y: real_buy, color: 'lightGreen' }, { y: real_sell, color: 'indianred' }
            ]
        }
        ,
        {
            name: 'corp',
            data: [
                { y: corp_buy, color: 'green' }, { y: corp_sell, color: '#FF0000' }
            ]
        }
    ]
    let plotOptions = {
        bar: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        },
        series: {
            stacking: 'percent',
            groupPadding: 0,
            // pointPadding: 0,
        }
    };
    let json = {};

    json.title = title;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.tooltip = tooltip;
    json.legend = legend;
    json.series = series;
    json.plotOptions = plotOptions;
    json.credits = credits;
    json.chart = chart

    Highcharts.chart('chartarea', json)
}

function providers(chartpalceid) {

    let initializers = {
        title: { text: "" },
        chart: { type: 'bar' },
        credits: { enabled: false },
        xAxis: { visible: false },
        yAxis: { visible: false },
        legend: { enabled: true },
        tooltip: { enabled: false },
        series: [
            {
                name: 'حقوقی',
                data: [corpSupply()]
            },
            {
                name: 'حقیقی',
                data: [realSupply()]
            }
        ],
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            },
            series: {
                groupPadding: 0,
                // pointPadding: 0,
            }
        }
    }

    Highcharts.chart(chartpalceid, initializers)

}
function dealProportions(chartpalceid) {

    let initializers = {
        title: { text: "" },
        chart: { type: 'bar' },
        credits: { enabled: false },
        xAxis: { visible: false },
        yAxis: { visible: false },
        legend: { enabled: true },
        tooltip: { enabled: false },
        series: [
            {
                name: 'میانگین یک ماهه',
                data: [dealToMean()]
            },
            {
                name: 'حجم مبنا',
                data: [dealBasePortion()]
            }
        ],
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            },
            series: {
                groupPadding: 0,
                // pointPadding: 0,
            }
        }
    }

    Highcharts.chart(chartpalceid, initializers)

}

// monitor changes in buy que volume
var volQueObserver = () => {
    var point = {
        s: 0,
        v: 0,
        b: 0,
    }

    var scope = document.querySelector("#bl > tr:nth-child(2) > td:nth-child(2)")// buyers que
    var observer = new MutationObserver(mutationRecord => {
        point.b = mutationRecord //?
        point.s = document.querySelector("#bl > tr:nth-child(2) > td:nth-child(5)").textContent;
        point.v = document.querySelector("#d09 > div").getAttribute('title');
        updateQVplot(point)
    })
    observer.observe(scope, {
        childList: true
    })
}

var updateQVplot = (point) => {
    var points = [];
    points.push(point);
    //setup highcharts and draw ...
}

let moneyFlow = () => {
    let tval = document.querySelector("#d10 > div").getAttribute('title');

    let real_buy = parseFloat(document.querySelector("#e0 > div:nth-child(2)").getAttribute('title'));
    let real_sell = parseFloat(document.querySelector("#e3 > div:nth-child(2)").getAttribute('title'));
    return volChange(Number(tval.replaceAll(',', ''))*(real_buy-real_sell)/100)
}
function volChange(vol) {
    let flag = 1;
    if (vol < 0) {
        flag = -1
        vol = -1*vol
    }

    var iVal = parseInt(vol, 10);
    var sVal;
    if (iVal > 1000000000) {
        sVal = addCommas(Math.round(iVal / 1000000) / 1000) + " میلیارد ریال " 
    } else {
        if (iVal > 1000000) {
            sVal = addCommas(Math.round(iVal / 1000) / 1000) + " میلیون ریال " 
        } else {
            sVal = addCommas(iVal)
        }
    }
    if (flag==-1) {
        sVal= "- " + sVal        
    }

    return sVal;
}
function addCommas(a, c) {
    if (typeof c == "undefined") {
        c = 2
    }
    a += "";
    x = a.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? (parseInt(x[1], 10) != 0 ? "." + x[1].substring(0, c) : "") : "";
    var b = /(\d+)(\d{3})/;
    while (b.test(x1)) {
        x1 = x1.replace(b, "$1,$2")
    }
    return x1 + x2
}

// let bullishTickpattern = () => {
//     (pl) >= (pf) && (pmin) < (pf)
//     let bearish pattern = (pl) <= (pf) && (pmax) > (pf)
// }

// let watchPattern = () => {
//     pc>1.03 
// }