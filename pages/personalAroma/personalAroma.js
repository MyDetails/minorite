/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const personalAroma = {
    cache: {},
    template: `
        <div class="content">
            <div class="header-block"></div><!-- 导航栏占位符 -->
            <div class="main" style="position:relative;">
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

                <slide-nav></slide-nav>

                <!-- slide-nav end -->

                <div class="slide-nav-right">
                    <ul class="personalAroma-img-list">
                        <li v-for="item in personalAromaImgList" :key="item.goods.id">
                            <div class="personalAroma-img" style="padding:10px;width:190px;height:190px;">
                                <router-link :to="{path: '/goodsDetails', query: {goodsId: item.goods.id}}" style="display:block;background:#fff;">
                                    <img :src="'http://pe1d.static.pdr365.com/' + item.goods.goods_picturelink_big" alt="" style="height:100%;">
                                </router-link>
                            </div>
                            <p>{{item.cat.catNameCn}}</p>
                            <p>{{item.goods.goods_name}}</p>
                            <p>¥{{item.goods.goods_price / 100}}</p>
                        </li>
                    </ul>
                </div>

                <div class="slide slide_left">
                    <div class="parallax-item pa-parallax-item-l-c" data-speed="0.2"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/newProducts/float_left_1.png">
                    </div>
                </div>
                <div class="slide slide_right">
                    <div class="parallax-item pa-parallax-item-r-c" data-speed="0.2"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/newProducts/newProducts_float_02.png">
                    </div>
                </div>

            </div>
        </div>
	`, data: function () {
        return {
            personalAromaImgList: [],
            classList: ["fade-middle", "fade-end", "show"],
            personal_aroma_arr: [],
            personal_aroma_id: null,
        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "个人香水";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, mounted() {
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
        });
        //浮动元素
        float();
    }, methods: {
        
    },
    watch: {
        $route() {
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
        }
    }
}