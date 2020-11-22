var TradeHistory = [
    ['20200902', '17610.00', '18500.00', '17580.00', '18100.00', '47981', '320807603', '5648079863240.00'],
    ['20200901', '18500.00', '18720.00', '17790.00', '19450.00', '84980', '408200456', '7550155219100.00'],
    ['20200831', '18720.00', '17910.00', '17910.00', '18800.00', '114025', '836882421', '15668097021370.00'],
    ['20200826', '17910.00', '17060.00', '17910.00', '17910.00', '3110', '30151735', '540017573850.00'],
    ['20200825', '17060.00', '16250.00', '17060.00', '17060.00', '7302', '59129576', '1008750566560.00'],
    ['20200824', '16250.00', '16830.00', '15990.00', '17670.00', '100132', '650651559', '10573015247380.00'],
    ['20200823', '16830.00', '17570.00', '16700.00', '18000.00', '56036', '419529484', '7060284429280.00'],
    ['20200822', '17570.00', '17180.00', '16350.00', '18030.00', '82507', '369911387', '6500552570430.00'],
    ['20200819', '17180.00', '18080.00', '17180.00', '17180.00', '26576', '155213627', '2666570111860.00']
];
var RelatedCompanies = [
    ['35425587644337450', 'فملي', 'ملي‌ صنايع‌ مس‌ ايران‌'],
    ['46348559193224090', 'فولاد', 'فولاد مباركه اصفهان'],
    ['9211775239375291', 'ذوب', 'سهامي ذوب آهن  اصفهان'],
    ['28864540805361867', 'فخوز', 'فولاد  خوزستان'],
    ['60350996279289099', 'كاوه', 'فولاد كاوه جنوب كيش'],
    ['408934423224097', 'فرآور', 'فرآوري‌موادمعدني‌ايران‌'],
    ['66701874099226162', 'فاسمين', 'كالسيمين‌'],
    ['59266699437480384', 'ارفع', 'شركت آهن و فولاد ارفع'],
    ['14800142337291217', 'فولاي', 'صنايع فولاد آلياژي يزد'],
    ['8977441217024425', 'فسپا', 'گروه‌صنعتي‌سپاهان‌'],
    ['24018878640527909', 'ميدكو', 'هلدينگ صنايع  معدني خاورميانه'],
    ['47232550823972469', 'وتوكا', 'سرمايه‌گذاري‌توكافولاد(هلدينگ'],
    ['43545527030854340', 'كوير', 'توليدي فولاد سپيد فراب كوير'],
    ['68488673556087148', 'فپنتا', 'سپنتا'],
    ['56324206651661881', 'فنورد', 'نوردوقطعات‌ فولادي‌'],
    ['4733285133017464', 'فخاس', 'فولاد خراسان'],
    ['70498485598181604', 'هرمز', 'فولاد هرمزگان جنوب'],
    ['40808043719554948', 'فولاژ', 'فولاد آلياژي ايران'],
    ['41713045190742691', 'وسديد', 'گروه ‌صنعتي‌سديد'],
    ['66772024744156373', 'فباهنر', 'مس‌ شهيدباهنر'],
    ['57875847776839336', 'فنوال', 'نورد آلومينيوم‌'],
    ['41302553376174581', 'فجر', 'فولاد اميركبيركاشان'],
    ['54419429862704331', 'فروس', 'فروسيليس‌ ايران‌'],
    ['48623320733330408', 'فلوله', 'لوله‌وماشين‌سازي‌ايران‌'],
    ['54277068923045214', 'فسرب', 'ملي‌ سرب‌وروي‌ ايران‌'],
    ['44296315953738727', 'فاهواز', 'نورد و لوله اهواز'],
    ['65004959184388996', 'فايرا', 'آلومينيوم‌ايران‌'],
    ['29974853866926823', 'فروي', 'ذوب روي اصفهان'],
    ['27814844870305607', 'كيميا', 'معدني كيمياي زنجان گستران'],
    ['20966291817819448', 'فسديد', 'لوله‌وتجهيزات‌ سديد - ورشكسته'],
    ['18004480270695404', 'فمراد', 'آلومراد'],
    ['12874072841236826', 'فسازان', 'غلتك سازان سپاهان'],
    ['43716452378323683', 'فزرين', 'زرين معدن آسيا'],
    ['19367527798307032', 'فالوم', 'آلومتك‌'],
    ['66514709341259550', 'فوكا', 'فولاد كاويان'],
    ['66021783818850713', 'فافزا', 'فولاد افزا سپاهان'],
    ['35445515321658835', 'فماك', 'ماداكتو استيل كرد'],
    ['67170215467608124', 'زنگان', 'صنعت روي زنگان'],
    ['59342912854668427', 'فنفت', 'صنايع تجهيزات نفت'],
    ['42171673792069321', 'زيسكو', 'فولاد زرند ايرانيان'],
    ['26881786652328215', 'زرند', 'فولاد زرند'],
    ['48175603054578540', 'اسفراين', 'مجتمع صنعتي اسفراين'],
    ['357086043812735', 'فولاد تربت', 'فولاد تربت حيدريه'],
    ['41867071915439180', 'آلومينيوم جنوب', 'مجتمع آلومينيوم جنوب'],
    ['67535111875054076', 'پارس متال ', 'پارس متال'],
    ['58903026391426893', 'سيرجان', 'فولاد سيرجان'],
    ['40012411719639360', 'سيسكو', 'فولاد سيرجان ايرانيان'],
    ['68604686987554533', 'فماكح', 'ح . ماداكتو استيل كرد']
];
var RefPortfo = [];