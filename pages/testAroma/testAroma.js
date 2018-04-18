/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const testAroma = {
    cache: {},
    template: `
            <div class="content">
                <div class="main" style="position:relative;">
                    <div class="gifts-box-logo">
                        <img src="http://pe1s.static.pdr365.com/minorite/testAroma/testAroma_logo.png" alt="">
                    </div>

                    <!-- content-nav start -->
                    <div class="content-nav">
                        <p>
                            <span>首页</span> > 
                            <span>个人香水</span>
                        </p>
                    </div>
                    <!-- content-nav end -->

                    <!-- slide-nav start -->
                    <slide-nav></slide-nav>

                    <div class="slide-nav-right">
                        <ul class="testAroma-img-list">
                            <li v-for="item in testAromaImgList" :key="item.goods.id">
                                <div class="testAroma-img">
                                <router-link :to="{path: '/goodsDetails', query:{goodsId: item.goods.id}}" style="display:block;background:#fff;">
                                    <img :src="'http://pe1d.static.pdr365.com/' + item.goods.goods_picturelink_big" alt="">
                                </router-link>
                                </div>
                                <p v-if="item.cat">{{item.cat.catNameEn}}</p>
                                <p>{{item.goods.goods_name}}</p>
                                <p>¥{{item.goods.goods_price / 100}}</p>
                            </li>
                        </ul>
                        <ul class="page-list">
                            <li v-for="(item,index) in pageList"  class="fade-end" :class="currentPage == index ? 'current' : ''" @click="pageActive(index)" :key="item.id">{{index + 1}}</li>
                        </ul>
                    </div>
                    <!-- slide-nav end -->

                    <!--浮动元素开始-->
                    <div class="slide slide_left">
                        <div class="parallax-item ta-parallax-item-l-c" data-speed="0.2"> 
                            <img src="http://pe1s.static.pdr365.com/minorite/allBrands/allBrands_float_3.png">
                        </div>
                    </div>
                    <div class="slide slide_right">
                        <div class="parallax-item ta-parallax-item-r-c" data-speed="0.2"> 
                            <img src="http://pe1s.static.pdr365.com/minorite/allBrands/allBrands_float_4.png">
                        </div>
                    </div>
                    <!--浮动元素结束-->
                    
                </div>
            </div>      
	`, data: function () {
        return {
            testAromaImgList: [],
            classList: ["fade-middle", "fade-end", "show"],
            currentPage: 3
        };
    }, computed: {
        pageList: function () {
            return this.testAromaImgList.length;
        }
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "试香包";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, mounted() {
        //获取试香包
        let pk_xb = "tcss.goods.by.cat";
        let url_xb = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_xb + "&cat=352";
        fetch(url_xb)
            .then(r => r.json())
            .then(d => {
                if (d.available) {
                    this.testAromaImgList = d.obj;
                }
            });
        //页面两侧浮动元素
        float();
    }, methods: {
        clickNav(index) {
            this.slideSelected = index;
            this.slideShow = index;
        },
        pageActive(index) {
            this.currentPage = index;
        }
    },
}