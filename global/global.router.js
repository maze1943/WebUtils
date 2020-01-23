function Router() {
    this.routes = {}; //路由目录
    this.currentUrl = ''; //当前地址
    window['loadNode'] = document.querySelector('#content');
    this.init(); //初始化添加路由监听事件
}
//添加路由规则
Router.prototype.setRoute = function (path, callback) {
    this.routes[path] = callback || function () { };
};
//路由刷新
Router.prototype.refresh = function () {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl] && this.routes[this.currentUrl]();
};
//hash监听
Router.prototype.init = function () {
    window.addEventListener('load', this.refresh.bind(this));
    window.addEventListener('hashchange', this.refresh.bind(this));
};
var router = new Router();
router.setRoute('/dateBox', function () {
    window['loadNode'].innerHTML = '<h2>这是首页</h2>';
    window['loadNode'].load();
});
router.setRoute('/shouye', function () {
    window['loadNode'].innerHTML = '<h2>这是首页</h2>';
});
