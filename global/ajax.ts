interface options{
    url:string,
    method?:string,
    async?:string,
    data?:object
}
const ajax = (options:options) => {
    return new Promise((resolve, reject) => {
        //创建一个XMLHttpRequest连接，兼容IE6
        let xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Mricosoft.XMLHTTP");
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
              if (xhr.status >= 200 && xhr.status <= 300) {
                resolve(xhr.response);
              } else {
                reject(new Error(xhr.statusText));
              }
            }
        }
        if(options.method === 'post'){
            xhr.open(options.method, options.url, options.async||false);
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhr.send(options.data||null);
        }else{
            xhr.open(options.method||'get', `${options.url}?${Math.random()}`, options.async||false);
            xhr.send(null);
        }
    });
};
// 使用示例
// ajax({url:'/htmls/accountInfo.html'}).then(res => {
//     console.log(res);
// }).catch(error => {
//     console.log(error);
// });