/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const personalAroma = {
    cache: {},
    template: `
        <div class="content">
            <div class="main">
                <div class="personal-aroma-logo">
                        <img src="http://pe1s.static.pdr365.com/minorite/personalAroma/personalArome-logo.png" alt="">
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

                <ul class="slide-nav">
					<li class="slide-nav-item" v-for="(item,index) in slideNavList" :key="item.id">
						<p :class="slideSelected == index ? 'slide-nav-active' : ''" @click="clickNav(index)">
							<span v-if="item.childList"> {{slideSelected == index ? "-" : "+"}} </span>
							<router-link v-if="item.name" :to="{path: '/' + item.name}">{{item.title}}</router-link>
							<span v-else>{{item.title}}</span>
						</p>
						<ol v-if="slideSelected == index" class="slide-nav-hidden">
							<li v-for="(childItem,childIndex) in item.childList" :key="childIndex">
								<router-link v-if="index==1 && childItem.id" :to="{path: '/brand', query: {brand: childItem.id}}">
									{{childItem.name || childItem.catNameEn}}
								</router-link>
								<p v-if="index==2" :class="childSelected == childIndex ? 'fragrance-nav-active' : ''" @click="childClickNav(childIndex)">
									<span v-if="childItem.itemList"> {{childSelected == childIndex ? "-" : "+"}} </span>
									<span>{{childItem.catNameCn}}</span>
								</p>
								<ol v-if="index==2 && childSelected == childIndex" class="slide-nav-hidden fragrance-nav">
									<li v-for="(_Item, _Index) in childItem.sons" :key="_Item.id">
										<a @click="goPersonalAroma(_Item.id)">
											{{_Item.catNameCn}}
										</a>
									</li>
								</ol>
								<router-link v-else-if="index !=1 && childItem.go" :to="{path: '/' + childItem.go}">
									{{childItem.title}}
								</router-link>
								<router-link v-else-if="index !=1 && childItem.params" :to="{path: '/' + childItem.name, query:{cat: childItem.params}}">
									{{childItem.title}}
								</router-link>
							</li>
						</ol>
					</li>
				</ul>

                <!-- slide-nav end -->

                <div class="slide-nav-right">
                    <ul class="personalAroma-img-list">
                        <li v-for="item in personalAromaImgList" :key="item.id">
                            <div class="personalAroma-img">
                                <router-link :to="{path: '/goodsDetails', query: {goodsId: item.id}}" style="display:block;padding:10px;">
                                    <img :src="'http://pe1d.static.pdr365.com/' + item.goods_picturelink_big" alt="">
                                </router-link>
                            </div>
                            <!--<p>{{item.goods_name}}</p>-->
                            <p>{{item.goods_name}}</p>
                            <p>¥{{item.goods_price / 100}}</p>
                        </li>
                    </ul>
                    <ul class="page-list">
                        <li v-for="(item,index) in pageList"  class="fade-end" :class="currentPage == index ? 'current' : ''" @click="pageActive(index)" :key="item.id">{{index + 1}}</li>
                    </ul>
                </div>
            </div>
        </div>
	`, data: function () {
        return {
            slideSelected: -1,
            slideShow: -1,
            childSelected: 0,
            childIndex: 0,
            slideNavList: [
                {
                    id: 0,
                    // name: "newProducts",
                    title: "新品上市",
                    childList: [
                        { cid: 1, name: "newProducts", title: "新品上市", params: "0", checked: true },
                        { cid: 2, name: "newProducts", title: "销售排行", params: "1" }
                    ]
                },
                {
                    id: 1,
                    // name: "allBrands",
                    title: "所有品牌",
                    childList: []
                },
                {
                    id: 2,
                    // name: "personalAroma",
                    title: "个人香水",
                    childList: []
                },
                {
                    id: 3,
                    // name: "furnitureAroma",
                    title: "家居香氛",
                    childList: [
                        { cid: 31, name: "furnitureAroma", title: "香包", params: "0", checked: true },
                        { cid: 32, name: "furnitureAroma", title: "喷雾", params: "1" },
                        { cid: 33, name: "furnitureAroma", title: "蜡烛", params: "2" }
                    ]
                },
                {
                    id: 4,
                    name: "giftsBox",
                    title: "礼盒套装"
                },
                {
                    id: 5,
                    name: "onlieAromaTest",
                    title: "线上香气测试"
                },
                {
                    id: 6,
                    name: "offlineArtSpace",
                    title: "线下艺术空间"
                },
                {
                    id: 7,
                    // name: "vipClub",
                    title: "优惠活动",
                    childList: [
                        { cid: 71, name: "vipClub", go: "vipClub", title: "优惠指南", checked: true },
                        { cid: 72, name: "testAroma", go: "testAroma", title: "双周七七", },
                        { cid: 73, name: "testAroma", go: "testAroma", title: "试香包", }
                    ]
                },
                {
                    id: 8,
                    name: "vipClub",
                    title: "VIP俱乐部"
                }
            ],
            personalAromaImgList: [],
            classList: ["fade-middle", "fade-end", "show"],
            currentPage: 3,
            personal_aroma_arr: [],
            personal_aroma_id: null,
        };
    }, computed: {
        pageList: function () {
            return this.personalAromaImgList.length;
        }
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "个人香水";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, mounted() {
        //获取品牌
        let pk_catgories = "tcss.get.goods.perfume.categories";
        let url_catgories = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_catgories + "&parent=333";
        fetch(url_catgories)
            .then(r => r.json())
            .then(d => {
                let brandList = d.obj.data;
                this.slideNavList[1].childList = brandList;
            });
        //获取香调
        let pk_fragrance = "tcss.get.goods.perfume.categories";
        let url_fragrance = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_fragrance + "&parent=347";
        fetch(url_fragrance, { incredentails: "include" }).then(r => r.json()).then(d => {
            this.slideNavList[2].childList = d.obj.data[d.obj.data.length - 1].sons;
        });
        //获取香调下面相应的香水
        this.cat_id = this.$route.query.cat;
        let pk_parent = "tcss.get.goods.perfume.categories";
        let url_parent = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_parent + "&parent=347";
        fetch(url_parent).then(r => r.json()).then(d => {
            this.personal_aroma_arr = d.obj.data[d.obj.data.length - 1].sons;
            let arr = this.personal_aroma_arr;
            arr.forEach(v => {
                v.sons.forEach(j => {
                    if (parseInt(this.cat_id) === j.id) {
                        let pk_cat = "tcss.get.perfume.fragrance";
                        let url_cat = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_cat + "&f_c=" + this.cat_id;
                        fetch(url_cat).then(r => r.json()).then(d => {
                            if (d.available) {
                                this.personalAromaImgList = d.obj.carddata;
                            }
                        })
                    }
                });
            });
        })
    }, methods: {
        clickNav(index) {
            this.slideSelected = index;
            this.slideShow = index;
        },
        childClickNav(childIndex) {
            this.childSelected = childIndex;
            this.childShow = childIndex;
        },
        pageActive(index) {
            this.currentPage = index;
        },
        goPersonalAroma(id) {
            this.$router.push({ path: '/personalAroma', query: { cat: id } });
            this.cat_id = this.$route.query.cat;
            let pk_parent = "tcss.get.goods.perfume.categories";
            let url_parent = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_parent + "&parent=347";
            fetch(url_parent).then(r => r.json()).then(d => {
                this.personal_aroma_arr = d.obj.data[d.obj.data.length - 1].sons;
                let arr = this.personal_aroma_arr;
                arr.forEach(v => {
                    v.sons.forEach(j => {
                        if (parseInt(this.cat_id) === j.id) {
                            let pk_cat = "tcss.get.perfume.fragrance";
                            let url_cat = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_cat + "&f_c=" + this.cat_id;
                            fetch(url_cat).then(r => r.json()).then(d => {
                                if (d.available) {
                                    this.personalAromaImgList = d.obj.carddata;
                                }
                            })
                        }
                    });
                });
            })
        }

    }
}