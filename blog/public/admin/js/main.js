var config = [{
    id: 'menu',
    homePage: 'code',
    menu: [{
        text: '首页内容',
        items: [{
            id: 'code',
            text: '首页代码',
            href: 'main/code.html',
            closeable: false
        }, {
            id: 'main-menu',
            text: '顶部导航',
            href: 'main/menu.html'
        }, {
            id: 'second-menu',
            text: '右边菜单',
            href: 'main/second-menu.html'
        }, {
            id: 'dyna-menu',
            text: '动态菜单',
            href: 'main/dyna-menu.html'
        }]
    }, {
        text: '页面操作',
        items: [{
            id: 'operation',
            text: '页面常见操作',
            href: 'main/operation.html'
        }, {
            id: 'quick',
            text: '页面操作快捷方式',
            href: 'main/quick.html'
        }]
    }, {
        text: '文件结构',
        items: [{
            id: 'resource',
            text: '资源文件结构',
            href: 'main/resource.html'
        }, {
            id: 'loader',
            text: '引入JS方式',
            href: 'main/loader.html'
        }]
    }]
}];
new PageUtil.MainPage({
    modulesConfig: config
});
