/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const profileLogistics = {
    cache: {},
    template: `
            <div class="content">
                <div class="header-block"></div><!-- 导航栏占位符 -->
                <div class="profileLogistics-content main">
                    <personal-msg></personal-msg>

                    <!-- content-nav start -->
                    <div class="content-nav profileLogistics-content-nav">
                        <p>
                            <span>首页</span> > 
                            <span>个人中心</span>
                        </p>
                    </div>
                    <!-- content-nav end -->

                    <!-- slide-nav start -->
                    <profile-nav></profile-nav>
                    <!-- slide-nav end -->

                    <div class="profileLogistics-box">
                        <div class="profileLogistics-title">
                            <span>我的物流</span>
                            <span>{{deliver_name}}</span>
                            <span>{{deliver_no}}</span>
                        </div>
                        <div class="profileLogistics-item">
                            <Timeline>
                                <TimelineItem v-for="(item, index) in deliver_data" :key="index" color="#05593F">
                                    <Icon type="checkmark-circled" slot="dot"></Icon>
                                    <p style="font-size:16px;color:#495060">{{item.time}}</p>
                                    <p style="font-size:12px;color:#8F939D">{{item.context}}</p>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </div>
                </div>
            </div>
	`, data: function () {
        return {
            deliver_data: [],
            deliver_name: "",
            deliver_no: "",
        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "我的物流";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, mounted() {
        let o_id = this.$route.query.orderId;
        let pk = "order.express.follow";
        // let code = "490190074640"; //于聪的物流信息
        let token = myCookie.getCookie('_lac_k_');
        let url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&o_id=" + o_id + "&token=" + token;
        fetch(url, { incredentail: "include" }).then(r => r.json()).then(d => {
            if (d.available && d.obj.success) {
                let deliver_data = JSON.parse(d.obj.data[0].wuliu);
                // console.log(deliver_data);
                this.deliver_data = deliver_data.lastResult.data;
                this.deliver_no = d.obj.data[0].billNo;
                deliver_code = d.obj.data[0].orderDeliveryDto.billFirm;
                if(deliver_code === "df1001") {
                    this.deliver_name = "顺丰速运"
                } else if (deliver_code === "df1002") {
                    this.deliver_name = "申通"
                } else if(deliver_code === "df1003") {
                    this.deliver_name = "圆通";
                } else if(deliver_code === "df1004") {
                    this.deliver_name = "中通";
                }else if(deliver_code === "df1005") {
                    this.deliver_name = "百世汇通";
                } else if (deliver_code === "df1006") {
                    this.deliver_name = "韵达";
                } else if(deliver_code === "df9000") {
                    this.deliver_name = "其他快递"
                }
            }
        })
    }, methods: {

    }

}