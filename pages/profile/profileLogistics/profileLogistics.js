/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const profileLogistics = {
    cache: {},
    template: `
            <div class="content">
                <div class="profileLogistics-content main">
                    <personal-msg></personal-msg>

                    <!-- content-nav start -->
                    <div class="content-nav profileLogistics-content-nav">
                        <p>
                            <span>首页</span> > 
                            <span>个人中心</span>
                        </p>
                    </div>
                    <!-- content-nav end -->

                    <!-- slide-nav start -->
                    <profile-nav></profile-nav>
                    <!-- slide-nav end -->

                    <div class="profileLogistics-box">
                        <div class="profileLogistics-title">
                            <span>我的物流</span>
                            <span>圆通速递</span>
                            <span>500466923126</span>
                        </div>
                        <div class="profileLogistics-item">
                            <Steps :current="1" direction="vertical" size="small">
                                <Step title="2018.2.24 22:23" content="客户 签收人：本人签收 感谢使用圆通速递，期待再次为您服务"></Step>
                                <Step title="2018.2.24 22:23" content="「北京转运中心」 已发出  下一站  「北京市东城区金宝街公司」"></Step>
                                <Step title="2018.2.24 22:23" content="「北京市朝阳区樱花公司」 已收件"></Step>
                                <Step title="2018.2.24 22:23" content="买家已发货，包裹等待揽收"></Step> 
                            </Steps>
                        </div>
                    </div>
                </div>
            </div>
	`, data: function () {
        return {
            
        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "我的物流";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, methods: {
        
    }

}