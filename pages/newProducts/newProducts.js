/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const newProducts = {
    cache: {},
    template: `
        <div class="content brand-content">
            <div class="header-block"></div><!-- 导航栏占位符 -->
            <div class="main" style="position:relative;">
                <div class="title-logo" style="width:175px;heigth:145px;">
                    <img src="http://pe1s.static.pdr365.com/new-arrival_03.png" alt="">
                </div>

                <!-- content-nav start -->
                <div class="content-nav">
                    <p>
                        <span>首页</span> > 
                        <span>所有品牌</span>
                    </p>
                </div>
                <!-- content-nav end -->

                <!-- slide-nav start -->

                <slide-nav></slide-nav>
                
                <!-- slide-nav end -->

                <!--新品上架开始-->
                <div class="slide-nav-right" style="margin-bottom:250px;">
                    <div class="newProducts-list-box">
                        <div class="newProducts-list" v-for="item in newProducts" :key="item.goods.id">
                            <router-link :to="{path: '/goodsDetails', query: {goodsId: item.goods.id}}" style="display: block;background:transparent;">
                                <img class="newProducts-list-img" :src="'http://pe1d.static.pdr365.com/' + item.goods.goods_picturelink_big" style="padding:10px;">
                            </router-link>
                            <p class="newProducts-list-title">{{item.cat.catNameEn}}</p>
                            <p class="newProducts-list-info">{{item.goods.goods_name}}</p>
                            <p class="newProducts-list-money">¥{{item.goods.goods_price / 100}}</p>
                        </div>
                        
                        <p class="newProducts-list-more">
                        <router-link :to="{path: '/newProductsMore'}" style="color: #a62126;">更多>></router-link>
                        </p>
                    </div>
                    <div class="newProducts-b-postion-img" style="top:0;">
                        <img src="http://pe1s.static.pdr365.com/new-arrivalxian_38.png" style="margin-top:380px;">
                    </div>
                </div>
                <!-- 新品上架结束 -->


                <!--销售排行开始-->
                <div class="title-logo" style="width:120px;heigth:145px;float:left;margin-left:540px;">
                    <img src="http://pe1s.static.pdr365.com/new-arrival_13.png" alt="">
                </div>
                <div class="slide-nav-right" style="position:relative;">
                    <div class="newProducts-list-bottom-box">
                        <div class="newProducts-list-b" v-for="(item, index) in salesRankingList" :key="item.goods.id">
                            <router-link :to="{path: '/goodsDetails', query: {goodsId: item.goods.id}}" style="display:block;padding:10px;transparent;">
                                <img class="newProducts-list-b-img" :src="'http://pe1d.static.pdr365.com/' + item.goods.goods_picturelink_big">
                            </router-link>
                            <img class="newProducts-list-b-num" :src="'http://pe1s.static.pdr365.com/minorite/newProducts/arrival-' + index + '.png'">
                            <p class="newProducts-list-b-title">{{item.cat.catNameEn}}</p>
                            <p class="newProducts-list-b-info">{{item.goods.goods_name}}</p>
                            <p class="newProducts-list-b-money">¥{{item.goods.goods_price / 100}}</p>
                        </div>
                    </div>
                    <div class="newProducts-b-postion-img" style="top:0;">
                        <img src="http://pe1s.static.pdr365.com/new-arrivalxian_38.png" style="margin-top:180px;">
                    </div>
                </div>
                <!--销售排行结束-->

                <div class="slide slide_left">
                    <div class="parallax-item np-parallax-item-center" data-speed="0.2"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/newProducts/float_left_1.png">
                    </div>
                </div>
                <div class="slide slide_right">
                    <div class="parallax-item np-parallax-item-top" data-speed="0.2"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/newProducts/newProducts_float_02.png">
                    </div>
                    <div class="parallax-item np-parallax-item-bottom" data-speed="0.2"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/newProducts/float_right_2.png">
                    </div>
                </div>

            </div>
        </div>
	`, data: function () {
        return {
            brandImgList: [],
            classList: ["fade-middle", "fade-end", "show"],
            currentPage: 0,
            newProducts: [],
            salesRankingList: [],
            cat_id: "",

        };
    }, computed: {
        pageList: function () {
            return this.brandImgList.length;
        }
    }, mounted() {
        this.cat_id = this.$route.query.cat;
        if (this.cat_id === '0') {
            window.scrollTo(0, 0);
        } else if (this.cat_id === '1') {
            window.scrollTo(0, 715);
        } else if (this.cat_id === null || this.cat_id === undefined || this.cat_id === '') {
            window.scrollTo(0, 0);
        }
        //获取新品上市
        let pk2 = "tcss.goods.by.cat";
        let url2 = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk2 + "&cat=357";
        fetch(url2)
            .then(r => r.json())
            .then(d => {
                this.newProducts = d.obj.slice(0, 8);
            });

        //获取销售排行
        let pk_sales_ranking = "tcss.goods.by.cat";
        let url_sales_ranking = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_sales_ranking + "&cat=358";
        fetch(url_sales_ranking)
            .then(r => r.json())
            .then(d => {
                this.salesRankingList = d.obj.slice(0, 10);
            });

        //页面两侧浮动元素
        float();

    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "新品上架";
        next();
    }, methods: {
        clickNav(index) {
            this.slideSelected = index;
            this.slideShow = index;
        },
        pageActive(index) {
            this.currentPage = index;
        }

    }, watch: {
        $route() {
            this.cat_id = this.$route.query.cat;
            if (this.cat_id === '0') {
                window.scrollTo(0, 0);
            } else if (this.cat_id === '1') {
                $('body,html').animate({scrollTop: 1500},800)
            } else if (this.cat_id === null || this.cat_id === undefined || this.cat_id === '') {
                window.scrollTo(0, 0);
            }
        }
    }
}