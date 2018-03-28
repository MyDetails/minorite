/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const allBrands = {
    cache: {},
    template: `
        <div class="content brand-content">
            <div class="main" style="position:relative;">
                <div class="title-logo">
                    <img src="http://pe1s.static.pdr365.com/minorite/allBrands/all-brands-logo.png" alt="">
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

                <div class="slide-nav-right">
                    <ul class="all-brands-img-list">
                    <li v-for="item in allBrands" :key="item.id"  v-if="item.id">
                        <div class="brand-img">
                            <!-- <router-link :to="{path: '/brand', query: {brand: item.id}}" v-html="item.catContent"> </router-link> -->
                            <router-link :to="{path: '/brand', query: {brand: item.id}}">
                                <img :src="'http://pe1d.static.pdr365.com/' + item.catIcon" alt="">
                            </router-link>
                        </div>
                        <p>{{item.catNameEn}}</p>
                    </li>
                    </ul>
                </div>

                <div class="slide slide_left">
                    <div class="parallax-item ab-parallax-item-l-t" data-speed="0.2"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/allBrands/allBrands_float_1.png">
                    </div>
                    <div class="parallax-item ab-parallax-item-l-b" data-speed="0.2"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/allBrands/allBrands_float_3.png">
                    </div>
                </div>
                <div class="slide slide_right">
                    <div class="parallax-item ab-parallax-item-r-t" data-speed="0.2"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/allBrands/allBrands_float_2.png">
                    </div>
                    <div class="parallax-item ab-parallax-item-r-b" data-speed="0.2"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/allBrands/allBrands_float_4.png">
                    </div>
                </div>
                
                
            </div>
        </div>
	`, data: function () {
        return {
            classList: ["fade-middle", "fade-end", "show"],
            currentPage: 0,
            allBrands: [],
        };
    }, computed: {
        pageList: function () {
            return this.brandImgList.length;
        },
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "所有品牌";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, mounted() {
        //获取品牌
        let pk = "tcss.get.goods.perfume.categories";
        let time = new Date().getTime();
        let url = appset.domain + "/front/ypc/rt/?" + time + "&pk=" + pk + "&parent=333";
        fetch(url)
            .then(r => r.json())
            .then(d => {
                this.allBrands = d.obj.data;
            });
            float();

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