(function (window, vx) {
	'use strict';
	var ibsapp = vx.module("ibsapp");
	ibsapp.directive("numpad", function () {
		return {
			restrict: 'AEC',
			templateUrl: 'lib/modules/directives/numpad/numPad.html',
			scope: {
				inputvalue: '=',
				showKeyBoard : '='
			},
			controller: ["$scope",
				function ($scope) {
					var keyBoard = document.getElementsByClassName('key-container')[0]; // 键盘面板
					var keyMask = document.getElementsByClassName('key-mask')[0]; // 键盘蒙版
					var pElements = document.getElementsByClassName('num-item'); // 键盘数字按键
					var elements = Array.prototype.slice.call(pElements);
					var value = '';
					$scope.inputvalue = '';

					elements.forEach(function (val, index, arr) {
						val.addEventListener('click', function (event) {
							value = event.currentTarget.innerText; //获取输入的值
							if($scope.inputvalue === '' && value === '.'){
								$scope.inputvalue = '0.';
							}else if ($scope.inputvalue === '0' && value ==='0'){
								return;
							}else if($scope.inputvalue.search(/\.\d{2}/) == -1 && (value !== '.' || $scope.inputvalue.search(/\./) == -1) && ($scope.inputvalue.length < 12)){
								if($scope.inputvalue === '0' && value != '.'){
									$scope.inputvalue = value;
								}else{
									$scope.inputvalue = $scope.inputvalue + value;
								}
							}
							$scope.$apply();
							stopBubble(event);
						});
					});
					//删除元素
					function deleteElement() {
						$scope.inputvalue = $scope.inputvalue.substring(0,$scope.inputvalue.length-1);
					}
					function stopBubble(e) {
						if (e && e.stopPropagation) {
							e.stopPropagation();
						} else {
							window.event.cancelBubble = true;
						}
					}
					//隐藏keyboard
					function hideKeyBoard(event) {
						keyMask.className = 'key-mask display-none';
						keyBoard.className = 'key-container display-none';
						stopBubble(event);
					}
					//弹出keyboard
					function showKeyBoard() {
						keyMask.className = 'key-mask';
						keyBoard.className = 'key-container';
					}
					$scope.hideKeyBoard = hideKeyBoard;
					$scope.showKeyBoard = showKeyBoard;
					$scope.deleteElement = deleteElement;
				}
			]
		};
	});
})(window, vx);