/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const footerCooperation = {
    cache: {},
    template: `
        <div>
            <div class="content">
            <div class="header-block"></div><!-- 导航栏占位符 -->
            <div class="main">
                <!-- content-nav start -->
                <div class="content-nav footer-nav-content">
                    <p>
                        <span>首页</span> >
                        <span>商务合作</span>
                    </p>
                </div>
                <!-- conent-nav end -->

                <div class="title">
                    <h3>商务合作</h3>
                </div>

                <!-- word-space start -->
                <div class="word-space">
                    <h4>市场推广 / 品牌合作</h4>
                    <p class="title-verb">
                        <b>联系人：</b>蔡昕昕<br />
                        <b>Email：&nbsp;</b>xinxin.cai@scentpage.com<br />
                        <b>电&nbsp;&nbsp;话：</b>&nbsp;010-5957375<br />
                    </p>
                </div>
                <!-- word-space end -->

                </div>
            </div>
        </div>
	`, data: function () {
        return {

        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "商务合作";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0,0);
    }, methods: {


    }
}