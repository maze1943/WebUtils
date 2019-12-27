/**
 * @author 2017-01-01 00:00:00==>2017.01.01 00:00:00
 * @author：
 */
(function(window, vx) {'use strict';

	function dottolineFilter() {
		return function(input) {
			if (input) {
				input = input.replace(/\./g, "-");
			}
			return input;
		};
	}


	vx.module('ui.libraries').filter('dottolineFilter', dottolineFilter);

})(window, window.vx);
/**
 * @author 2017-01-01 00:00:00==>2017.01.01 00:00:00
 * @author：
 */
(function(window, vx) {'use strict';

	function linetodotFilter() {
		return function(input) {
			if (input) {
				input = input.replace(/-/g, ".");
			}
			return input;
		};
	}


	vx.module('ui.libraries').filter('linetodotFilter', linetodotFilter);

})(window, window.vx);
/**
 * @author 2017-01-01 00:00:00==>2017-01-01
 * @author：
 */
(function(window, vx) {'use strict';

	function dateFilter() {
		return function(input) {
			if (input) {
				input = input.substring(0, 10);
			}
			return input;
		};
	}


	vx.module('ui.libraries').filter('dateFilter', dateFilter);

})(window, window.vx);
/**
 * @author 2017-01-01 00:00:00==>20170101
 * @author：
 */
(function(window, vx) {'use strict';

	function dateNumFilter() {
		return function(input) {
			if (input) {
				input = input.substring(0, 4) + input.substring(5, 7) + input.substring(8, 10);
			}
			return input;
		};
	}


	vx.module('ui.libraries').filter('dateNumFilter', dateNumFilter);

})(window, window.vx);
/**
 * @author 2017-01-01 00:00:00==>2017-01-01
 * @author：
 */
(function(window, vx) {'use strict';

	function dateFilter() {
		return function(input) {
			if (input) {
				input = input.substring(0, 10);
			}
			return input;
		};
	}


	vx.module('ui.libraries').filter('dateFilter', dateFilter);

})(window, window.vx);
/**
 * @author 日期yyyyMMdd转换成yyyy-MM-dd
 * @author：tian
 */
(function(window, vx) {'use strict';

	// accountNo.$inject = ['$locale'];
	function dateConvertFilter() {
		return function(input) {
			if (input !== undefined) {
				if (/^\d{8}$/g.test(input) == true) {
					input = input.substring(0, 4) + '-' + input.substring(4, 6) + '-' + input.substring(6, input.length);
				}

			}
			return input;
		};
	}


	vx.module('ui.libraries').filter('dateConvertFilter', dateConvertFilter);

})(window, window.vx);
/**
 * @author 2010-12-12  2010
  		2010-12-12	12-12
 * @author：WY
 */
(function(window, vx) {'use strict';

	// accountNo.$inject = ['$locale'];
	function dateYandMDFilter() {
		return function(input, f) {
			if (input !== undefined) {
				if (/^\d{8}$/g.test(input) == true) {
					if(f==='y'){
						input = input.substring(0, 4);
					}else if(f==='md'){
						input = input.substring(4, 6) + '-' + input.substring(6, input.length);
					}else{
						input = input.substring(0, 4) + '-' + input.substring(4, 6) + '-' + input.substring(6, input.length);
					}
				}
			}
			return input;
		};
	}


	vx.module('ui.libraries').filter('dateYandMDFilter', dateYandMDFilter);

})(window, window.vx);
/**
 * @author 时分秒yyyyMMdd转换成yyyy-MM-dd
 * @author：tian
 */
(function(window, vx) {'use strict';

	// accountNo.$inject = ['$locale'];
	function timeConvertFilter() {
		return function(input) {
			if (input !== undefined) {
				if (/^\d{6}$/g.test(input) == true) {
					input = input.substring(0, 2) + ':' + input.substring(2, 4) + ':' + input.substring(4, input.length);
				}

			}
			return input;
		};
	}


	vx.module('ui.libraries').filter('timeConvertFilter', timeConvertFilter);

})(window, window.vx);
/**
 * @author 2017.07.07==>2017-07-07
 *
 */
(function(window, vx) {'use strict';

	function IdentityDateFilter() {
		return function(input) {
			if (input !== undefined) {
				input = input.substring(0, 4) + '-' + input.substring(5, 7) + '-' + input.substring(8, 10);
			}
			return input;
		};
	}


	vx.module('ui.libraries').filter('IdentityDateFilter', IdentityDateFilter);

})(window, window.vx);
/**
 * @author 20170707==>2017/07/07
 *
 */
(function(window, vx) {'use strict';
	function obliqueDateFilter() {
		return function(input) {
			if (input !== undefined) {
				input = input.substring(0, 4) + '/' + input.substring(4, 6) + '/' + input.substring(6, 9);
			}
			return input;
		};
	}
	vx.module('ui.libraries').filter('obliqueDateFilter', obliqueDateFilter);
})(window, window.vx);
/**
 * Date类型 ==>201812181651 (yyyyMMddHHmmssms)精确到三位毫秒数
 * 默认当前时间
 */
(function(window, vx) {'use strict';
	function dateStringDateFilter() {
		return function(input) {
			if (!input) {
				input = new Date();
			}
			var yyyy = input.getFullYear();
			var MM = input.getMonth() + 1;
			var dd = input.getDate();
			var HH = input.getHours();
			var mm = input.getMinutes();
			var ss = input.getSeconds();
			var ms = input.getMilliseconds();
			if(MM<10){MM = "0" + MM}
			if(dd<10){dd = "0" + dd}
			if(HH<10){HH = "0" + HH}
			if(mm<10){mm = "0" + mm}
			if(ss<10){ss = "0" + ss}
			if(ms<10){ms = "00" + ms}else if(ms<100){ms = "0" + ms}
			input = "" + yyyy + MM + dd + HH + mm + ss + ms;
			return input;
		};
	}
	vx.module('ui.libraries').filter('dateStringDateFilter', dateStringDateFilter);
})(window, window.vx);
/**
 * n位的随机整数,默认四位
 *
 */
(function(window, vx) {'use strict';
	function randomFilter() {
		return function(input) {
			if (!input) {
				input = 4;
			}
			var randomNum = "";
			for(var i = 0;i < input; i++){
				randomNum += Math.floor(Math.random()*10);
			}
			return randomNum;
		};
	}
	vx.module('ui.libraries').filter('randomFilter', randomFilter);
})(window, window.vx);
/**
 * 2010-02-02 00:00:00 ==> 2010-02-02
 * 2010.02.02 00:00:00 ==> 2010-02-02
 * 20100202 ==> 2010-02-02
 * ......
 */
(function(window, vx) {'use strict';
	function dateFirstTenFilter() {
		return function(input) {
			if (input) {
				input = input.replace(/\D/g, "");
				input = input.substring(0, 4) + "-" + input.substring(4, 6) + "-" + input.substring(6, 8);
			}
			return input;
		};
	}
	vx.module('ui.libraries').filter('dateFirstTenFilter', dateFirstTenFilter);
})(window, window.vx);
/**
 * 1.1 ==>2
 */
(function(window, vx) {'use strict';
	function nbParseIntAdd() {
		return function(n) {
			if (n) {
				n = Math.ceil(Number(n)/10);
			}
			return n;
		};
	}
	vx.module('ui.libraries').filter('nbParseIntAdd', nbParseIntAdd);
})(window, window.vx);