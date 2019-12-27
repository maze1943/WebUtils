/**
 * @author 
 * 日期控件选择
 * */
(function(window, vx, undefined) {
    'use strict';
    var service = {};
    service.datebox = ['$filter','$timeout','$dateUtil',
        function($filter,$timeout,$dateUtil) {
            return {
                /**
                 * 初始化时间
                 * @author 
                 */
                initDateBox: function(dateId, dateValue,maxValue,enCallback) {
					$timeout(function() {
						var selectDate = new MobileSelectDate();
						selectDate.init({
							trigger : '#'+dateId,
							value : dateValue,
							max : $dateUtil.changeDate(maxValue),
							position : "bottom",
							callback : function() {
								enCallback($('#'+dateId).val());
								//$scope.EndDate = $('#'+dateId).val();
							}
						});
					}, 500); 
                },
                /**
                 * 弹出时间控件
                 * @author
                 * @return {string} 返回校验错误的原因
                 */
	               
				PopOutDateBox: function() {
					$("div.mask").toggle();
					if ($("div.Interestdatebox").css("visibility") == "hidden") {
						$("div.Interestdatebox").removeClass("scaleDown").addClass("scaleUp").css({
							"visibility" : "visible"
						});
					} else if ($("div.Interestdatebox").css("visibility") == "visible") {
						$("div.Interestdatebox").removeClass("scaleUp").addClass("scaleDown");
						setTimeout(function() {
							$("div.Interestdatebox").css({
								"visibility" : "hidden"
							});
						}, 300);
					};
				},
                /**
                 * 收回时间控件
                 * @author 
                 * @return {string} 返回校验错误的原因
                 */
				BackDateBox: function() {
					$("div.mask").toggle();
					if ($("div.Interestdatebox").css("visibility") == "visible") {
						$("div.Interestdatebox").removeClass("scaleUp").addClass("scaleDown");
						setTimeout(function() {
							$("div.Interestdatebox").css({
								"visibility" : "hidden"
							});
						}, 300);
					}
				},
            };
        }
    ];

    vx.module('ui.libraries').service(service);

})(window, window.vx);
