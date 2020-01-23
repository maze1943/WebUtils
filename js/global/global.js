// 导入模块
import { dateUtils } from '../dateUtil.js';
// 全局方法
var _ = window;
_["apiList"] = {
    "dateUtiles": [
        "dateToFullDateStr",
        "dateStrConvert1",
        "dateStrConvert2",
        "dateStrConvert3"
    ]
};
// 获取当前点击的方法
_['_getUtils'] = function (that) {
    var thatNode = that;
    var activeNode = document.getElementsByClassName("ButtonActive")[0];
    if (activeNode) {
        activeNode.className = "";
    }
    thatNode.className = "ButtonActive";
    _['method'] = dateUtils[thatNode.innerHTML];
    console.log("执行方法：" + thatNode.innerHTML);
};
//展开或收起方法列表
_["_buttonToggle"] = function (that, apiName) {
    var thatDom = that, apiListNode = document.getElementsByClassName("apiList")[0];
    var nodeElements = "";
    if (thatDom.innerHTML === "展开&gt;&gt;&gt;") {
        thatDom.innerHTML = "收起&lt;&lt;&lt;";
        _["apiList"][apiName].forEach(function (ele) {
            nodeElements = nodeElements + "<button onclick='_getUtils(this)'>" + ele + "</button><br/>";
        });
        apiListNode.innerHTML = nodeElements;
    }
    else {
        thatDom.innerHTML = "展开&gt;&gt;&gt;";
        apiListNode.innerHTML = "";
    }
};
// 执行对应方法，展示执行结果
_['_excuteMethod'] = function () {
    if (_['method']) {
        var inValue = document.getElementsByClassName("input_text")[0]["value"];
        var outNode = document.getElementsByClassName("result_text")[0];
        console.log("执行结果：" + _['method'](inValue));
        outNode["value"] = _['method'](inValue);
    }
    else {
        alert('error: 先选择要执行的util方法');
    }
};
