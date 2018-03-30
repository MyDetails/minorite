/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const newProductsMore = {
    cache: {},
    template: `
            <div class="content">
                <div class="main" style="position:relative;">
                    <div class="newProducts-more-logo">
                            <img src="http://pe1s.static.pdr365.com/new-arrival_03.png" alt="">
                    </div>

                    <!-- content-nav start -->
                    <div class="content-nav">
                        <p>
                            <span>首页</span> > 
                            <span>新品上架</span>
                        </p>
                    </div>
                    <!-- content-nav end -->

                    <!-- slide-nav start -->
                    <slide-nav></slide-nav>

                    <div class="slide-nav-right">
                        <ul class="newProductsMore-img-list">
                            <li v-for="item in furnitureAromaImgList" :key="item.goods.id">
                                <div class="newProductsMore-img" style="padding:10px;">
                                    <router-link :to="{path: '/goodsDetails', query:{goodsId: item.goods.id}}" style="display:block;">
                                        <img :src="'http://pe1d.static.pdr365.com/' + item.goods.goods_picturelink_big" alt="">
                                    </router-link>
                                </div>
                                <p>{{item.cat.catNameEn}}</p>
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
                        <div class="parallax-item fa-parallax-item-l-c" data-speed="0.2"> 
                            <img src="http://pe1s.static.pdr365.com/minorite/allBrands/allBrands_float_3.png">
                        </div>
                    </div>
                    <div class="slide slide_right">
                        <div class="parallax-item fa-parallax-item-r-c" data-speed="0.2"> 
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
            furnitureAromaImgList: [],
            classList: ["fade-middle", "fade-end", "show"],
            currentPage: 3,
            cat_id: "",
        };
    }, computed: {
        pageList: function () {
            return this.furnitureAromaImgList.length;
        }
    }, mounted() {
        //获取新品上市
        let pk2 = "tcss.goods.by.cat";
        let url2 = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk2 + "&cat=357";
        fetch(url2)
            .then(r => r.json())
            .then(d => {
                this.furnitureAromaImgList = d.obj;
            });
        //浮动元素
        float();

    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "家具香氛";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, methods: {


    }, watch: {
        $route() {
            router.go(0);
        }
    }
}