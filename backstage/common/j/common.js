/**
 * Created by pkk on 2018/12/6.
 */

/* 数组去重 */
function uniqueArr(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}
/* 输入框验证 */
$.extend(String.prototype, {
    trim: function () {
        return this.replace(/(^\s*)|(\s*$)/g, '');
    },
    isMobile: function () {
        return new RegExp(/^(13|14|15|17|18)\d{9}$/).test(this)
    },
    isSmsCode: function () {
        return new RegExp(/^\d{6}$/).test(this);
    },
    isNumber: function () {
        return new RegExp(/^[0-9]*$/).test(this);
    },
    isName: function () {
        return (new RegExp(/^[a-zA-Z\u4e00-\u9fa50-9\_]+$/g).test(this.trim()));
    },
    isIdcardNew: function () {
        return (new RegExp(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/).test(this.trim()));
    },
    isEmail: function () {
        return (new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(this.trim()));
    }
});

// 公用方法
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
};
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
};
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};
function getQueryString(name) {//获取浏览器参数
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};
function substitute(str, o, regexp) {
    return str.replace(regexp || /\\?\{([^{}]+)\}/g, function (match, name) {
        return (o[name] === undefined) ? '' : o[name];
    });
};