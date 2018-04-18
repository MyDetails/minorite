/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const profileVip = {
    cache: {},
    template: `
        <div>
            <div class="content">
                <div class="header-block"></div><!-- 导航栏占位符 -->
                <div class="profileVip-content main">
                    <personal-msg></personal-msg>

                    <!-- content-nav start -->
                    <div class="content-nav profileVip-content-nav">
                        <p>
                            <span>首页</span> > 
                            <span>个人中心</span>
                        </p>
                    </div>
                    <!-- content-nav end -->

                    <!-- slide-nav start -->
                    <profile-nav></profile-nav>
                    <!-- slide-nav end -->

                    <div class="profileVip-box">
                        <div class="profileVip-item">
                            <div class="vip-label">
                                您的会员等级:
                            </div>                       
                            <div class="vip-level">
                                <div class="vip-level-blank  vip-level-blank-active">VIP0</div>
                                <div class="vip-level-blank">VIP1</div>
                                <div class="vip-level-blank">VIP2</div>
                                <div class="vip-level-blank">VIP3</div>
                                <div class="vip-level-blank">VIP4</div>
                            </div>
                        </div>
                        <div class="profileVip-item">
                            <div class="vip-label">
                                当前享受优惠:
                            </div>                       
                            <div class="vip-level">
                                <div class="discount-blank">9.8折</div>
                                <div class="discount-blank">免费试香</div>
                                <div class="discount-blank">每月会员团购</div>
                                <div class="discount-blank">活动预告/新春介绍</div>
                            </div>
                        </div>
                        <div class="profileVip-item">
                            <div class="vip-label">
                                当前累计金额:
                            </div>                       
                            <div class="discount-word">
                                <div class="discount-rank">
                                    <span>¥500.00</span>
                                    <span>¥1500.00</span>
                                    <span>¥7500.00</span>
                                    <span>¥20000.00</span>
                                    <span>¥50000.00</span>
                                </div>
                                <div class="level-rank">
                                    <span>VIP0</span>
                                    <span>VIP1</span>
                                    <span>VIP2</span>
                                    <span>VIP3</span>
                                    <span>VIP4</span>
                                </div>
                                <div class="discount-rank-word">
                                    <span>9.8折</span>
                                    <span>9.5折</span>
                                    <span>9折</span>
                                    <span>8.8折</span>
                                </div>
                                <div class="gradual-bar"></div>
                            </div>
                        </div>
                        <div class="profileVip-item vip-time-item">
                            <div class="vip-label">
                                当前有效期:
                            </div>                       
                            <div class="vip-time">
                                VIP会员终身有效
                                <div class="time-line"></div>
                                <div class="time-word">2018.01.15<br />开启VIP之旅</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
	`, data: function () {
        return {

        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "我的会员";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0,0);
    }, methods: {


    }
}