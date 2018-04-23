/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const furnitureAroma = {
    cache: {},
    template: `
            <div class="content">
                <div class="header-block"></div><!-- 导航栏占位符 -->
                <div class="main" style="position:relative;">
                    <div class="furniture-aroma-logo">
                            <img src="http://pe1s.static.pdr365.com/minorite/furnitureAroma/furnitureAroma-logo.png" alt="">
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
                        <ul class="furnitureAroma-img-list">
                            <li v-for="item in furnitureAromaImgList" :key="item.goods.id">
                                <div class="furnitureAroma-img" style="width:190px;height:190px;">
                                    <router-link :to="{path: '/goodsDetails', query:{goodsId: item.goods.id}}" style="display:block;background:#fff;width:100%;height:100%;">
                                        <img :src="'http://pe1d.static.pdr365.com/' + item.goods.goods_picturelink_big" alt="">
                                    </router-link>
                                </div>
                                <p v-if="item.cat" class="furnitureAroma-brand-title">{{item.cat.catNameEn}}</p>
                                <p class="furnitureAroma-goods-name">{{item.goods.goods_name}}</p>
                                <p class="furnitureAroma-goods-price">¥{{item.goods.goods_price / 100}}</p>
                            </li>
                        </ul>
                        <!-- 分页器 开始 -->
                        <!--<ul class="page-list">
                            <li v-for="(item,index) in pageList"  class="fade-end" :class="currentPage == index ? 'current' : ''" @click="pageActive(index)" :key="item.id">{{index + 1}}</li>
                        </ul>-->
                        <!-- 分页器 结束 -->
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
        this.cat_id = this.$route.query.cat;
        if (this.cat_id === undefined) {
            //获取香包
            let pk_xb = "tcss.goods.by.cat";
            let url_xb = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_xb + "&cat=362";
            fetch(url_xb)
                .then(r => r.json())
                .then(d => {
                    if (d.available) {
                        this.furnitureAromaImgList = d.obj;
                    }
                });
        } else if (this.cat_id === '0') {
            //获取香包
            let pk_xb = "tcss.goods.by.cat";
            let url_xb = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_xb + "&cat=362";
            fetch(url_xb)
                .then(r => r.json())
                .then(d => {
                    if (d.available) {
                        this.furnitureAromaImgList = d.obj;
                    }
                });
        } else if (this.cat_id === '1') {
            //获取喷雾
            let pk_pw = "tcss.goods.by.cat";
            let url_pw = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_pw + "&cat=363";
            fetch(url_pw)
                .then(r => r.json())
                .then(d => {
                    if (d.available) {
                        this.furnitureAromaImgList = d.obj;
                    }
                });
        } else if (this.cat_id === '2') {
            //获取蜡烛
            let pk_lz = "tcss.goods.by.cat";
            let url_lz = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_lz + "&cat=364";
            fetch(url_lz)
                .then(r => r.json())
                .then(d => {
                    if (d.available) {
                        this.furnitureAromaImgList = d.obj;
                    }
                });
        }
        //浮动元素
        float();

    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "家居香氛";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, methods: {


    }, watch: {
        $route() {
            this.cat_id = this.$route.query.cat;
            if (this.cat_id === undefined) {
                //获取香包
                let pk_xb = "tcss.goods.by.cat";
                let url_xb = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_xb + "&cat=362";
                fetch(url_xb)
                    .then(r => r.json())
                    .then(d => {
                        if (d.available) {
                            this.furnitureAromaImgList = d.obj;
                        }
                    });
            } else if (this.cat_id === '0') {
                //获取香包
                let pk_xb = "tcss.goods.by.cat";
                let url_xb = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_xb + "&cat=362";
                fetch(url_xb)
                    .then(r => r.json())
                    .then(d => {
                        if (d.available) {
                            this.furnitureAromaImgList = d.obj;
                        }
                    });
            } else if (this.cat_id === '1') {
                //获取喷雾
                let pk_pw = "tcss.goods.by.cat";
                let url_pw = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_pw + "&cat=363";
                fetch(url_pw)
                    .then(r => r.json())
                    .then(d => {
                        if (d.available) {
                            this.furnitureAromaImgList = d.obj;
                        }
                    });
            } else if (this.cat_id === '2') {
                //获取蜡烛
                let pk_lz = "tcss.goods.by.cat";
                let url_lz = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_lz + "&cat=364";
                fetch(url_lz)
                    .then(r => r.json())
                    .then(d => {
                        if (d.available) {
                            this.furnitureAromaImgList = d.obj;
                        }
                    });
            }
            //浮动元素
            float();
        }
    }
}