/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const brand = {
    cache: {},
    template: `
    <div><!-- 固定 容器-->
        <div class="content">
            <div class="header-block"></div><!-- 导航栏占位符 -->
            <div class="main brand-main">
                <div class="brand-title">
                    <div class="brand-title-left">
                        <img v-if="brand" :src="'http://pe1d.static.pdr365.com/'+brand.titleImg" alt="">
                    </div>
                    <div class="brand-title-right">
                        <p>{{brand.title}}</p>
                        <p>{{brand.desc}}</p>
                    </div>
                </div>

                <!-- content-nav start -->
                <div class="content-nav">
                    <p>
                        <span>首页</span> > 
                        <span>所有品牌</span> > 
                        <span>{{brand.title}}</span>
                    </p>
                </div>
                <!-- content-nav end -->

                <!-- slide-nav start -->
                
                <slide-nav></slide-nav>

                <!-- slide-nav end -->

                <div class="slide-nav-right">
                    <ul class="brand-img-list">
                        <li v-for="item in brandGoodsList" :key="item.goods.id">
                        <div class="brand-img">
                        <router-link :to="{path: '/goodsDetails', query: {goodsId: item.goods.id}}" style="background:#fff;">
                            <img :src="'http://pe1d.static.pdr365.com/' + item.goods.goods_picturelink_big" alt="">
                        </router-link>
                        </div>
                        <p>{{item.cat.catNameEn}}</p>
                        <p>{{item.goods.goods_name}}</p>
                        <p>¥{{item.goods.goods_price / 100}}</p>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            pageId: "",
            brandImgList: [],
            brand: {},
            brandStr: "",
            brandGoodsList: [],
            classList: ["fade-middle", "fade-end", "show"],
        };
    },
    beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "单个品牌";
        next();
    },
    created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
        this.pageId = this.$route.query.brand;
    },
    mounted() {
        //获取品牌
        let pk_brand = "tcss.get.goods.perfume.categories";
        let url_brand = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_brand + "&parent=333";
        fetch(url_brand)
            .then(r => r.json())
            .then(d => {
                if (d.available && d.obj.data) {
                    let brandList = d.obj.data;
                    brandList.forEach(v => {
                        if (v.id == this.pageId) {
                            this.brand = {
                                titleImg: v.catIcon,
                                title: v.catNameEn,
                                desc: v.catInfo,
                                content: v.catContent,
                            };
                        }
                    });
                    this.brandStr = JSON.stringify(this.brand)
                }
            });

        // 获取商品
        let pk2 = "tcss.goods.by.cat";
        let url2 = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk2 + "&cat=" + this.pageId;
        fetch(url2)
            .then(r => r.json())
            .then(d => {
                if (d.available && d.obj) {
                    this.brandGoodsList = d.obj;
                }
            });
    },
    methods: {
    },
    watch: {
        $route() {
            this.pageId = this.$route.query.brand;
            //获取品牌
            let url1 = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=tcss.get.goods.perfume.categories&parent=333";
            fetch(url1)
                .then(r => r.json())
                .then(d => {
                    if (d.available && d.obj.data) {
                        let brandList = d.obj.data;
                        brandList.forEach(v => {
                            if (v.id == this.pageId) {
                                this.brand = {
                                    titleImg: v.catIcon,
                                    title: v.catNameEn,
                                    desc: v.catInfo,
                                    content: v.catContent
                                };
                            }
                        });
                        this.brandStr = JSON.stringify(this.brand);
                    }
                });
            // 获取商品
            let pk2 = "tcss.goods.by.cat";
            let url2 = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk2 + "&cat=" + this.pageId;
            fetch(url2)
                .then(r => r.json())
                .then(d => {
                    if (d.available && d.obj) {
                        this.brandGoodsList = d.obj;
                    }
                });
            window.scrollTo(0, 0);
        }
    }
}