/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const duoshou = {
    cache: {},
    template: `
        <div class="content">
            <div class="header-block"></div><!-- 导航栏占位符 -->
            <div class="main" style="position:relative;">
                <!-- content-nav start -->
                <div class="content-nav footer-nav-content">
                    <p>
                        <span>首页</span> >
                        <span>优惠指南</span>
                    </p>
                </div>
                <!-- conent-nav end -->

                <div class="title">
                    <h3>优惠指南</h3>
                </div>

                <!-- word-space start -->
                <div class="word-space">
                    <img src="http://pe1s.static.pdr365.com/minorite/duoshou/duoshou.png" style="margin-top:100px;">
                    
                </div>
                <!-- word-space end -->

                <!--浮动元素开始-->
                <div class="slide slide_left">
                    <div class="parallax-item vc-parallax-item-l-c" data-speed="0.2" style="top:1200px;"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/newProducts/float_left_1.png">
                    </div>
                </div>
                <div class="slide slide_right">
                    <div class="parallax-item vc-parallax-item-r-c" data-speed="0.2"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/newProducts/newProducts_float_02.png">
                    </div>
                </div>
                <!--浮动元素结束-->

                </div>
            </div>
	`, data: function () {
        return {

        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "VIP俱乐部";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0,0);
    }, mounted() {
        //页面两侧浮动元素
        float();
    }, methods: {


    }
}