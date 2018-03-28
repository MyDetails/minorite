/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const offlineArtSpace = {
    cache: {},
    template: `
        <div>
            <div class="content">
                <div class="offlineArtSpace-content main">
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
                </div>
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
    }, methods: {


    }
}