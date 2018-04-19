var myCookie = {
    // 获取cookie
    getCookie(name) {
        var v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        return v ? v[2] : null;
    },
    //设置cookie
    setCookie(name, value, days) {
        var d = new Date();
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
        window.document.cookie =
            name + "=" + value + ";path=/;expires=" + d.toGMTString();
    },
    //清除cookie    
    clearCookie(name) {
        this.setCookie(name, "", -1);
        this.$Message.success('成功退出登录');
        setTimeout(() => {
            this.$router.push({ path: '/' });
        }, 600);
    }
}