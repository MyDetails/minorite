/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const offlineArtSpace = {
    cache: {},
    template: `
            <div class="content">
                <div class="offlineArtSpace-content main" style="position:relative;">
                    <!-- content-nav start -->
                    <div class="content-nav">
                    <p>
                        <span>首页</span> > 
                        <span>线下艺术空间</span>
                    </p>
                    </div>
                    <!-- content-nav end -->

                    <!-- slide-nav start -->
                    <slide-nav></slide-nav>
                    <!-- slide-nav end -->

                    <div class="offlineArtSpace-content-right">
                    <div class="art-space-box1 art-space-box">
                        <p class="art-space-box-title">
                        <span>上海（M50）</span>
                        </p>
                        <p>上海市普陀区莫于山路50号<br>M50艺术园区23号楼2层</p>
                    </div>
                    <div class="art-space-box2 art-space-box">
                        <p class="art-space-box-title">
                        <span>成都（IFS)</span>
                        </p>
                        <p>成都市锦江区红星路三段1号<br>成都国际金融中心L408号（magmode名堂）</p>
                    </div>
                    </div>

                    <!--浮动元素开始-->
                    <div class="slide slide_left">
                        <div class="parallax-item oa-parallax-item-l-c" data-speed="0.2"> 
                            <img src="http://pe1s.static.pdr365.com/minorite/allBrands/allBrands_float_3.png" style="height:780px;">
                        </div>
                    </div>
                    <div class="slide slide_right">
                        <div class="parallax-item oa-parallax-item-r-c" data-speed="0.2"> 
                            <img src="http://pe1s.static.pdr365.com/minorite/allBrands/allBrands_float_4.png">
                        </div>
                    </div>
                    <!--浮动元素结束-->

                </div>
            </div>
	`, data: function () {
        return {
            slideSelected: 0,
            slideShow: 0,
        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "线下艺术空间";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, mounted() {
        //页面两侧浮动元素
        float();
    }, methods: {


    }
}