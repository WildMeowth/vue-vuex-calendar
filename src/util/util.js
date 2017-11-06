//设置cookie
export const setCookie= function (name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

//获取cookie
export const getCookie= function (name) {
    var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

//清除cookie
export const delCookie= function (name) {
    setCookie(name, "", -1);
}

export default {
    setCookie,
    getCookie,
    delCookie
};