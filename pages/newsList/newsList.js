/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const newsList = {
    cache: {},
    template: `
            <div>
                <div class="content">
                    <div class="header-block"></div><!-- 导航栏占位符 -->
                    <div class="main">
                    <!-- content-nav start -->
                    <div class="content-nav footer-nav-content">
                        <p>
                            <span>首页</span> >
                            <span>香气新鲜报</span>
                        </p>
                    </div>
                    <!-- conent-nav end -->

                    <div class="title">
                        <h3>香气新鲜报</h3>
                    </div>

                    <!-- word-space start -->
                    <div class="list-container">
                        <ul>
                            <li v-for="(item, index) in newsList" :key="item.id">
                                <div class="news-count">{{index + 1}}</div>
                                <div class="news-title">
                                        <a :href="'http://www.minorite.com.cn/front/brand/info/?' + Date.parse(new Date()) + '&dlid=' + item.id" style="display:block;">
                                            {{item.title}}
                                        </a>
                                </div>
                                <div class="news-time">{{timeFormat(item.aTime)}}</div>
                            </li>
                        </ul>
                    </div>
                    <!-- word-space end -->

                    </div>
                </div>
            </div> 
	`, data: function () {
        return {
            newsList: [],
        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "新闻列表";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, mounted() {
        let pk = "tcss.get_docs"
        let url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk;
        fetch(url).then(r => r.json()).then(d => {
            if (d.available) {
                this.newsList = d.obj.carddata;
            }
        })
    }, methods: {

        add0(m) {
            return m < 10 ? "0" + m : m;
        },
        timeFormat(timestamp) {
            //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
            var time = new Date(timestamp);
            var year = time.getFullYear();
            var month = time.getMonth() + 1;
            var date = time.getDate();
            return (
                year +
                "-" +
                this.add0(month) +
                "-" +
                this.add0(date)
            );
        }
    }
}