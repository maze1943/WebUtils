function Router() {
    this.routes = {}; //路由目录
    this.currentUrl = ''; //当前地址
    window['loadNode'] = document.querySelector('#content');
    this.init(); //初始化添加路由监听事件
}
Router.prototype.setRoute = function (params) {
    this.routes[params['path']] = params;
};
//路由刷新，加载html片段及js
Router.prototype.refresh = function () {
    this.currentUrl = location.hash.slice(1) || '/';
    let r = this.routes[this.currentUrl.substring(0, this.currentUrl.indexOf('?') > -1 ? this.currentUrl.indexOf('?') : this.currentUrl.length)];
    if (r && r['url']) {
        ajax({ url: _c.requestHead + r['url'] }).then(res => {
            window['loadNode'].innerHTML = res;
        }).catch(error => {
            alert(error);
        });
        if (r['script']) {
            let x = document.createElement('script');
            x.src = _c.requestHead + r['script'];
            let s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(x, s);
        }
    }
};
//hash监听
Router.prototype.init = function () {
    window.addEventListener('load', this.refresh.bind(this));
    window.addEventListener('hashchange', this.refresh.bind(this));
};
//暴露全局的路由跳转方法
window['goto'] = function (routeName) {
    window.location.hash = `#/${routeName}`;
};
//以下设置页面路由及路由对应文件路径
let router = new Router();
router.setRoute({
    path: '/login',
    url: '/htmls/ourBank/login.html',
    script: '/htmls/ourBank/login.js'
});
router.setRoute({
    path: '/accountInfo',
    url: '/htmls/ourBank/accountInfo.html'
});
router.setRoute({
    path: '/starNight',
    url: '/htmls/ourBank/starNight.html',
    script: '/htmls/ourBank/starNight.js'
});
router.setRoute({
    path: '/webUtils',
    url: '/htmls/webUtils/webUtils.html',
    script: '/htmls/webUtils/webUtils.js'
});
router.setRoute({
    path: '/picFlow',
    url: '/htmls/ourBank/picFlow.html',
    script: '/htmls/ourBank/picFlow.js'
});
