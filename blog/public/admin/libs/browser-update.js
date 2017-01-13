if (navigator.appName === "Microsoft Internet Explorer" && parseInt(navigator.appVersion.match(/MSIE\s(\d{1,2}\.\d)/)[1]) < 10) {
    alert('你的浏览器版本过低，请下载最新版浏览器！');
    window.location.href="http://www.browser.com";
}