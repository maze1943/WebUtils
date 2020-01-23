const dateUtils = {};
export {dateUtils}
//Date ==> yyyyMMddHHmmssms
dateUtils['dateToFullDateStr'] = function(input:Date):string{
    input = input ? input : new Date();
    let fullDateStr = '',
        yyyy = input.getFullYear(),
        MM = input.getMonth() + 1,
        dd = input.getDate(),
        HH = input.getHours(),
        mm = input.getMinutes(),
        ss = input.getSeconds(),
        ms = input.getMilliseconds();
    fullDateStr = yyyy.toString() + (MM<10 ? ("0" + MM.toString()) : MM.toString());
    fullDateStr = fullDateStr + (dd<10 ? ("0" + dd.toString()) : dd.toString());
    fullDateStr = fullDateStr + (HH<10 ? ("0" + HH.toString()) : HH.toString());
    fullDateStr = fullDateStr + (mm<10 ? ("0" + mm.toString()) : mm.toString());
    fullDateStr = fullDateStr + (ss<10 ? ("0" + ss.toString()) : ss.toString());
    fullDateStr = fullDateStr + (ms<10 ? ("00" + ms.toString()) : (ms<100 ? ("0" + ms.toString()) : ms.toString()));
    return fullDateStr;
};

//yyyyMMdd ==> yyyy-MM-dd
dateUtils['dateStrConvert1'] = function(input:string):string {
    if (/^\d{8}$/g.test(input) === true) {
        input = input.substring(0, 4) + '-' + input.substring(4, 6) + '-' + input.substring(6, input.length);
    }
    return input;
}

// yyyy.MM.dd ==> yyyy-MM-dd
dateUtils['dateStrConvert2'] = function(input:string):string {
    input = input.substring(0, 4) + '-' + input.substring(5, 7) + '-' + input.substring(8, 10);
    return input;
};

//yyyyMMdd ==>yyyy/MM/dd
dateUtils['dateStrConvert3'] = function(input:string):string {
    if (/^\d{8}$/g.test(input) === true) {
        input = input.substring(0, 4) + '/' + input.substring(4, 6) + '/' + input.substring(6, 9);
    }
    return input;
};