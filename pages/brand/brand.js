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
                        <img :src="'http://pe1d.static.pdr365.com/'+brand.titleImg" alt="">
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
                <ul class="slide-nav">
                    <li class="slide-nav-item" v-for="(item,index) in slideNavList" :key="item.id">
                        <p :class="slideSelected == index ? 'slide-nav-active' : ''" @click="clickNav(index)">
                            <span v-if="item.childList"> {{item.flag ? "-" : "+"}} </span>
                            <router-link v-if="item.name" :to="{path: '/' + item.name}">{{item.title}}</router-link>
                            <span v-else>{{item.title}}</span>
                        </p>
                        <ol v-if="item.flag" class="slide-nav-hidden">
                            <li v-for="(childItem,childIndex) in item.childList" :key="childIndex">
                                <a class="brands-hover" v-if="index==1 && childItem.id" :class="childItem.id === brand_active_id ? 'brand-active' : ''" @click="goBrand(childItem.id)">
                                    {{childItem.name || childItem.catNameEn}}
                                </a>
                                <p v-if="index==2" :class="childSelected == childIndex ? 'fragrance-nav-active' : ''" @click="childClickNav(childIndex)">
                                    <span v-if="childItem.sons"> {{clickShow[childIndex] ? "-" : "+"}} </span>
                                    <span>{{childItem.catNameCn}}</span>
                                </p>
                                <ol v-if="index==2 && clickShow[childIndex]" class="slide-nav-hidden fragrance-nav">
                                    <li v-for="(_Item, _Index) in childItem.sons" :key="_Item.id">
                                        <router-link :to="{path: '/personalAroma', query: {cat: _Item.id}}">
                                            {{_Item.catNameCn}}
                                        </router-link>
                                    </li>
                                </ol>
                                <router-link class="brands-hover" v-else-if="index !=1 && childItem.goods" :to="{path: '/' + childItem.goods, query: {goodsId: goodsParams}}">
									{{childItem.title}}
								</router-link>
								<router-link class="brands-hover" v-else-if="index !=1 && childItem.go" :to="{path: '/' + childItem.go}">
									{{childItem.title}}
                                </router-link>
                                <router-link class="brands-hover" v-else-if="index !=1 && childItem.params" :to="{path: '/' + childItem.name, query:{cat: childItem.params}}">
									{{childItem.title}}
								</router-link>
                            </li>
                        </ol>
                    </li>
                </ul>
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
                    <!-- 分页器 开始 -->
                    <!--<ul class="page-list">
                        <li v-for="(item,index) in pageList"  class="fade-end" :class="currentPage == index ? 'current' : ''" @click="pageActive(index)" :key="item.id">{{index + 1}}</li>
                    </ul>-->
                    <!-- 分页器 结束 -->
                </div>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            pageId: "",
            slideSelected: -1,
            childSelected: 0,
            clickArr: [],
            goodsParams: "",
            slideNavList: [
                {
                    id: 0,
                    // name: "newProducts",
                    title: "新品上架",
                    flag: false,
                    childList: [
                        { cid: 1, name: "newProducts", title: "新品上架", params: "0", checked: true },
                        { cid: 2, name: "newProducts", title: "销售排行", params: "1" }
                    ]
                },
                {
                    id: 1,
                    // name: "allBrands",
                    title: "所有品牌",
                    flag: false,
                    childList: []
                },
                {
                    id: 2,
                    // name: "personalAroma",
                    title: "个人香水",
                    flag: false,
                    childList: []
                },
                {
                    id: 3,
                    // name: "furnitureAroma",
                    title: "家居香氛",
                    flag: false,
                    childList: [
                        { cid: 31, name: "furnitureAroma", title: "香包", params: "0", checked: true },
                        { cid: 32, name: "furnitureAroma", title: "喷雾", params: "1" },
                        { cid: 33, name: "furnitureAroma", title: "蜡烛", params: "2" }
                    ]
                },
                {
                    id: 4,
                    name: "giftsBox",
                    flag: false,
                    title: "礼盒套装"
                },
                {
                    id: 5,
                    name: "onlieAromaTest",
                    flag: false,
                    title: "线上香气测试"
                },
                {
                    id: 6,
                    name: "offlineArtSpace",
                    flag: false,
                    title: "线下艺术空间"
                },
                {
                    id: 7,
                    // name: "vipClub",
                    title: "优惠活动",
                    flag: false,
                    childList: [
                        { cid: 71, name: "duoshou", go: "duoshou", title: "优惠指南", checked: true },
                        { cid: 72, name: "goodsDetails", goods: "goodsDetails", title: "双周七七", },
                        { cid: 73, name: "testAroma", go: "testAroma", title: "试香包", }
                    ]
                },
                {
                    id: 8,
                    name: "vipClub",
                    flag: false,
                    title: "VIP俱乐部"
                }
            ],
            brandImgList: [],
            brand: {},
            brandStr: "",
            brandGoodsList: [],
            classList: ["fade-middle", "fade-end", "show"],
            currentPage: 0,
            brand_active_id: "",
        };
    },
    computed: {
        pageList: function () {
            return this.brandImgList.length;
        },
        clickShow() {
            return this.slideNavList[2].childList.map((item, index) => {
                if (this.clickArr.indexOf(index) === -1) {
                    return false;
                } else {
                    return true;
                }
            })
        }
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
        let pk1 = "tcss.get.goods.perfume.categories";
        let url1 = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk1 + "&parent=333";
        fetch(url1)
            .then(r => r.json())
            .then(d => {
                let brandList = d.obj.data;
                this.slideNavList[1].childList = brandList;
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
            });

        //获取香调
        let pk_fragrance = "tcss.get.goods.perfume.categories";
        let url_fragrance = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_fragrance + "&parent=347";
        fetch(url_fragrance, { incredentails: "include" }).then(r => r.json()).then(d => {
            this.slideNavList[2].childList = d.obj.data[d.obj.data.length - 1].sons;
        });

        // 获取商品
        let pk2 = "tcss.goods.by.cat";
        let url2 = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk2 + "&cat=" + this.pageId;
        fetch(url2)
            .then(r => r.json())
            .then(d => {
                this.brandGoodsList = d.obj;
            });
        //获取双周七七商品
        let pk_77 = "coupon.get_mar_77";
        let url_77 = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_77;
        fetch(url_77).then(r => r.json()).then(d => {
            if (d.available && d.obj.carddata) {
                this.goodsParams = d.obj.carddata.goods.g.id;
            }
        });
    },
    methods: {
        clickNav(index) {
            this.slideSelected = index;
            this.slideNavList[index].flag = !this.slideNavList[index].flag;
        },
        childClickNav(childIndex) {
            this.childSelected = childIndex;
            let index = this.clickArr.indexOf(childIndex);
            if (index === -1) {
                this.clickArr.push(childIndex);
            } else {
                this.clickArr.splice(index, 1);
            }
        },
        pageActive(index) {
            this.currentPage = index;
        },
        //点击侧导航品牌
        goBrand(id) {
            this.$router.push({ path: "/brand", query: { brand: id } });
            this.pageId = this.$route.query.brand;
            this.brand_active_id = id;
            //获取品牌
            let url1 =
                appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=tcss.get.goods.perfume.categories&parent=333";
            fetch(url1)
                .then(r => r.json())
                .then(d => {
                    let brandList = d.obj.data;
                    this.slideNavList[1].childList = brandList;
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
                });
            // 获取商品
            let pk2 = "tcss.goods.by.cat";
            let url2 = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk2 + "&cat=" + this.pageId;
            fetch(url2)
                .then(r => r.json())
                .then(d => {
                    this.brandGoodsList = d.obj;
                });
            window.scrollTo(0, 0);
        }

    }
}