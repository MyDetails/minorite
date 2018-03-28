/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const newProducts = {
    cache: {},
    template: `
		<div class="newProducts-box"><!-- 固定 容器-->
            <!-- 新品上架开始 -->
            <div class="newProducts-top">
                <div class="newProducts">
                    <div class="newProducts-title-box">
                        <img class="newProducts-title" src="http://pe1s.static.pdr365.com/new-arrival_03.png">
                        <img class="newProducts-title-p" src="http://pe1s.static.pdr365.com/newp_03.png">
                    </div>

                    <!-- content-nav start -->
                    <div class="content-nav">
                        <p>
                            <span>首页</span> > 
                            <span>新品上市</span>
                        </p>
                    </div>
                    <!-- content-nav end -->

                    <!-- slide-nav start -->
                    
                    <slide-nav></slide-nav>
                    <!-- slide-nav end -->
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
                        <router-link :to="{path: '/'}" style="color: #a62126;">更多>></router-link>
                        </p>
                    </div>
                </div>
                <div class="newProducts-postion-img">
                    <img src="http://pe1s.static.pdr365.com/new-arrivalxian_10.png"/>
                </div>
            </div>
            <!-- 新品上架结束 -->

            <!-- 销售排行开始 -->
            <div class="newProducts-bottom-box">
                <div class="newProducts-bottom">
                    <div class="newProducts-b-title-box">
                        <img class="newProducts-b-title" src="http://pe1s.static.pdr365.com/new-arrival_13.png">
                    </div>
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
                </div>
                <div class="newProducts-b-postion-img">
                    <img src="http://pe1s.static.pdr365.com/new-arrivalxian_38.png"/>
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
            window.scrollTo(0, 1374);
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

    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "新品上市";
        next();
    }, methods: {
        clickNav(index) {
            this.slideSelected = index;
            this.slideShow = index;
        },
        pageActive(index) {
            this.currentPage = index;
        }

    }
}