// 导入模块
import {dateUtils} from '../../dateUtil.js';

// 全局方法
const _ = window;
_["apiList"] = {
    "dateUtiles" :[
        "dateToFullDateStr",
        "dateStrConvert1",
        "dateStrConvert2",
        "dateStrConvert3"
    ]
};

// 获取当前点击的方法
_['_getUtils'] = (that:any): void=>{
    const thatNode = that;
    const activeNode = document.getElementsByClassName("ButtonActive")[0];
    if(activeNode){
        activeNode.className = "";
    }
    thatNode.className = "ButtonActive";
    _['method'] = dateUtils[thatNode.innerHTML];
    console.log("执行方法：" + thatNode.innerHTML);
}

//展开或收起方法列表
_["_buttonToggle"] = (that:any,apiName:string): void=>{
    const thatDom = that, apiListNode = document.getElementsByClassName("apiList")[0];
    let nodeElements = "";
    if(thatDom.innerHTML === "展开&gt;&gt;&gt;") {
        thatDom.innerHTML =  "收起&lt;&lt;&lt;";
        _["apiList"][apiName].forEach(ele => {
            nodeElements = nodeElements + "<button onclick='_getUtils(this)'>" + ele + "</button><br/>";
        });
        apiListNode.innerHTML = nodeElements;
    }else{
        thatDom.innerHTML =  "展开&gt;&gt;&gt;";
        apiListNode.innerHTML = "";
    }
    
}

// 执行对应方法，展示执行结果
_['_excuteMethod'] = (): void=>{
    if(_['method']){
        const inValue = document.getElementsByClassName("input_text")[0]["value"];
        let outNode = document.getElementsByClassName("result_text")[0];
        console.log("执行结果：" + _['method'](inValue));
        outNode["value"] = _['method'](inValue);
    }else{
        alert('error: 先选择要执行的util方法');
    }
}