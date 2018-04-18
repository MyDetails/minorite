/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const profileCollect = {
    cache: {},
    template: `
            <div class="content">
                <div class="header-block"></div><!-- 导航栏占位符 -->
                <div class="profileCollect-content main">
                    <personal-msg></personal-msg>

                    <!-- content-nav start -->
                    <div class="content-nav profileMsg-content-nav">
                        <p>
                            <span>首页</span> > 
                            <span>个人中心</span>
                        </p>
                    </div>
                    <!-- content-nav end -->

                    <!-- slide-nav start -->
                    <profile-nav></profile-nav>
                    <!-- slide-nav end -->

                    <div class="profileCollect-box">
                        <transition name="slide-fade"><!-- 想要使用入场动画时添加此标签  动画样式可以写在组件css或者app.css中-->
                            <div class="myCollect"><!-- 固定 容器-->
                                <div class="myCollect-box">
                                    <div class="myCollect-list" v-for="item in collectList" :key="item.id">
                                        <router-link :to="{path: '/goodsDetails',query: {goodsId: item.id}}" style="display:block;">
                                            <img class="myCollect-list-img" :src="'http://pe1d.static.pdr365.com/' + item.goods_picturelink_big">
                                        </router-link>
                                        <div class="myCollect-list-bot">
                                            <p class="myCollect-list-bot-title">{{item.goods_name}}</p>
                                            <p class="myCollect-list-bot-fg"></p>
                                            <p class="myCollect-list-bot-pay">立即抢购</p>
                                        </div>
                                        <!-- <img  src=""> -->
                                        <div class="myCollect-list-img-x">
                                            <Poptip confirm title="您确认删除这个收藏吗？" @on-ok="ok(item.id)" @on-cancel="cancel"> <Icon type="android-close"></Icon> </Poptip>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
    `,
    data: function () {
        return {
            collectList: [],
        }
    },
    mounted() {
        let login = this.getCookie("_lac_k_");
        let time = new Date().getTime();
        if (login) {
            let pk = "tcss.my.goods.collects";
            let url = appset.domain + "/front/ypc/rt/?" + time + "&pk=" + pk;
            fetch(url, { credentials: "include" })
                .then(r => r.json())
                .then(d => {
                    if (d.available && d.obj.data) {
                        this.collectList = d.obj.data;
                    }
                });
        } else {
            this.goMethods = "collect";
            this.modalLogin = true;
        }
    },
    methods: {
        // 获取cookie
        getCookie(name) {
            let v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
            return v ? v[2] : null;
        },
        ok(g_id) {
            let login = this.getCookie("_lac_k_");
            if (login) {
                let pk = "tcss.remove.goods.collect";
                let url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&g_id=" + g_id;
                fetch(url, { credentials: "include" })
                    .then(r => r.json())
                    .then(d => {
                        if (d.available && d.obj.data) {
                            this.collectList = d.obj.data;
                            this.$Message.success("删除成功");
                            let pk = "tcss.my.goods.collects";
                            let url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk;
                            fetch(url, { credentials: "include" })
                                .then(r => r.json())
                                .then(d => {
                                    if (d.available && d.obj.data) {
                                        this.collectList = d.obj.data;
                                    }
                                });
                        }
                    });
            } else {
                this.goMethods = "collect";
                this.modalLogin = true;
            }
        },
        cancel() {
            // this.$Message.info('点击了取消');
        }
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "我的收藏";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }
}