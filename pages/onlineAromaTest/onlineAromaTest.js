/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const onlineAromaTest = {
    cache: {},
    template: `
	
	`, data: function () {
        return {

        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "所有品牌";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0,0);
    }, methods: {


    }
}