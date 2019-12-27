
/**
 * @author filter template 大写金额转换
 */
(function(window, vx) {'use strict';

	function amount() {
		return function(input) {
			if (input !== undefined) {
				var strOutput = "", strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';

				//修改输入零时大写报错
				var inputLength = input.length;
				for (var i = 0; i < inputLength; i++) {
					var num = input.substring(0, 1);

					if (num == '0') {
						input = input.substr(1);
					} else {
						break;
					}
				}

				input += "00";
				var intPos = input.indexOf('.');
				if (intPos >= 0) {
					input = input.substring(0, intPos) + input.substr(intPos + 1, 2);

				}

				strUnit = strUnit.substr(strUnit.length - input.length);
				for (var i = 0; i < input.length; i++) {
					strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(input.substr(i, 1), 1) + strUnit.substr(i, 1);
				}
				return strOutput.replace(/^零角零分$/, '').replace(/零角零分$/, '整').replace(/^零元零角/, '').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元").replace(/^零角/, '').replace(/零角/, '零').replace(/零元/, '').replace(/零分$/, "");
			} else if (input == "" || input == null || input == undefined) {
				input = "零元整";
			}
			return input;
		};
	}


	vx.module('ibsapp').filter('amountFilter', amount);

})(window, window.vx);


/**
 * 金额格式化
 * @author：
 */
(function (window, vx) {
	'use strict';
	var ibsapp = vx.module("ui.libraries");

	function limitFilter() {
		return function (input) {
			if (input !== undefined){
				if(input.indexOf(".")>-1){//金额有小数位有值则直接返回金额，否则取整数部分
					if(Number(input) === Number(input.substring(0,input.indexOf(".")))){
						input = input.substring(0,input.indexOf("."));
					}else{
						return input;
					}
				}
				if(input.length > 4){// 万元以上
					if(Number(input) % 10000 === 0){// 整x万元
						input = input.substring(0,input.length - 4) + "万";
					}
				}else if(input.length === 4){// 千元以上
					if(Number(input) % 1000 === 0){// 整x千元
						input = input.substring(0,input.length - 3) + "千";
					}
				}
			} else if (input == "" || input == null || input == undefined) {
				input = "0";
			}
			return input;
		};
	}


	ibsapp.filter('limitFilter', limitFilter);

})(window, window.vx);
