/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const profileOrders = {
    cache: {},
    template: `
            <div class="content">
                <div class="header-block"></div><!-- 导航栏占位符 -->
                <div class="profileOrders-content main">
                    <personal-msg></personal-msg>

                    <!-- content-nav start -->
                    <div class="content-nav profileOrders-content-nav">
                        <p>
                            <span>首页</span> > 
                            <span>个人中心</span>
                        </p>
                    </div>
                    <!-- content-nav end -->

                    <!-- slide-nav start -->
                    <profile-nav></profile-nav>
                    <!-- slide-nav end -->

                    <div class="profileOrders-box">
                        <Tabs :animated="false" :value="tabName" type="card" @on-click="tabOrderStatus">
                            <TabPane label="全部订单" name="order_all">
                                <div class="profileOrders-table-container">
                                    <Table border :columns="columns1" v-for="item in orderData" :key="item.id" :data="item"></Table>
                                </div>
                            </TabPane>
                            <TabPane label="待付款" name="order_no_pay">
                                <div class="profileOrders-table-container">
                                    <Table border :columns="columns1" v-for="item in no_pay_order" :key="item.id" :data="item"></Table> 
                                </div>
                            </TabPane>
                            <TabPane label="待发货" name="order_no_send">
                                <div class="profileOrders-table-container">
                                    <Table border :columns="columns1"  v-for="item in no_send_order" :key="item.id" :data="item"></Table> 
                                </div>
                            </TabPane>
                            <TabPane label="待收货" name="order_no_receive">
                                <div class="profileOrders-table-container">
                                    <Table border :columns="columns1"  v-for="item in no_receive_order" :key="item.id" :data="item"></Table> 
                                </div>
                            </TabPane>
                            <TabPane label="已完成" name="order_done">
                                <div class="profileOrders-table-container">
                                    <Table border :columns="columns1"  v-for="item in done_order" :key="item.id" :data="item"></Table> 
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                    <Modal class="order-confirm-modal" v-model="confirmModal" title="提示" ok-text="付款成功" cancel-text="遇到问题" @on-ok="asyncOk" width="360px;">
                        <p>是否已完成付款？</p>
                    </Modal>
                </div>
                <form action="/front/using/alipay_new.jsp" id="submit_alipay" method="post" target="_blank">

                </form>
            </div>
	`, data: function () {
        return {
            formRight: {
                input1: "",
                input2: "",
                input3: "",
                input4: "",
                input5: "",
                input6: "",
                input7: "",
                input8: ""
            },
            formItem: {
                radio: "male"
            },
            columns1: [],
            orderData: [],
            no_pay_order: [],
            no_send_order: [],
            no_receive_order: [],
            done_order: [],
            confirmModal: false,
            tabName: "order_all",
        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "个人中心";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, mounted() {
        let pk = "tcss.account.goods.orders";
        let token = this.getCookie("_lac_k_");
        tabName = this.$route.query.tabName;
        if (tabName) {
            this.tabName = tabName;
        } else {
            this.tabName = "order_all";
        }
        this.tabOrderStatus(this.tabName);

        this.columns1 = [
            {
                title: "订单编号",
                key: "orderId",
                width: 110,
                align: "center"
            },
            {
                title: "订购产品",
                key: "order",
                width: 164,
                align: "center",
                render: (h, params) => {
                    if (params.row.order) {
                        return h(
                            "div",
                            {
                                props: {}
                            },
                            params.row.order.map(item => {
                                return h(
                                    "div",
                                    {
                                        style: {
                                            display: "flex",
                                            marginTop: "10px",
                                            marginBottom: "10px",
                                            flexDirection: "column",
                                            alignItems: "center"
                                        }
                                    },
                                    [
                                        h("img", {
                                            style: {
                                                width: "93px",
                                                height: "93px"
                                            },
                                            attrs: {
                                                src: "http://pe1d.static.pdr365.com/" + item.imgUrl,
                                                alt: ""
                                            }
                                        }),
                                        h(
                                            "p",
                                            {
                                                style: {
                                                    marginTop: "10px",
                                                    fontSize: "12px"
                                                }
                                            },
                                            ""
                                        ),
                                        h(
                                            "p",
                                            {
                                                style: {
                                                    color: "#7d7d7d",
                                                    fontSize: "12px"
                                                }
                                            },
                                            [h("span", {}, item.goodsName), h("span", {}, "")]
                                        )
                                    ]
                                );
                            })
                        );
                    } else {
                        return h("p", "No items found.");
                    }
                }
            },
            {
                title: "收货人",
                key: "receivePerson",
                width: 158,
                align: "center"
            },
            {
                title: "订单金额",
                key: "orderPrice",
                width: 108,
                align: "center"
            },
            {
                title: "下单时间",
                key: "orderTime",
                width: 112,
                align: "center"
            },
            {
                title: "状态",
                key: "orderStatus",
                width: 92,
                align: "center",
                render: (h, params) => {
                    if (params.row.os == "0000") {
                        return h("div", [h("p", {}, "待付款"),
                        h(
                            "Button",
                            {
                                props: {
                                    size: "small"
                                },
                                style: {
                                    background: "#f7f9f3",
                                    border: "0",
                                    color: "#04593f"
                                },
                                on: {
                                    click: () => {
                                        var payType = params.row.payType;
                                        if (payType == 'wxpay') {
                                            let pk_code = "tcss.build.wx.pay";
                                            let oss_code = params.row.orderId + "," + "1000";
                                            // let token = this.token;
                                            //获取token
                                            let token = this.getCookie("_lac_k_");
                                            let url_code = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&t_t=NATIVE&pk=" + pk_code + "&oss=" + oss_code + "&prefer_way=0&market_item_id=0&acmid=0&quanid=0" + "&token=" + token;
                                            fetch(url_code, { credentials: "include" }).then(r => r.json()).then(d => {
                                                if (d.available) {
                                                    console.log(d);
                                                    let code_url = d.obj.data.code_url;
                                                    this.$router.push({ name: "wxPay", params: { totalPrice: params.row.payAmount, code_url: code_url, order_num: params.row.on, order_time: params.row.aTime, o_id: params.row.orderId } });
                                                }
                                            });
                                        } else {
                                            //设置当前所有ajax请求为同步
                                            $.ajaxSetup({
                                                async: false
                                            });
                                            let pk_code = "order.pay.alipay.unifiedorders";
                                            let oss_code = params.row.orderId + "," + "1000";
                                            this.formOss = oss_code;
                                            let token = this.getCookie("_lac_k_");
                                            let url_code = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_code + "&oss=" + oss_code + "&token=" + token;
                                            $.get(url_code, d => {
                                                if (d.available) {
                                                    this.custom();
                                                    let url_jsp = "/front/using/alipay_new.jsp";
                                                    let data = this.formOss;
                                                    let form = $("#submit_alipay");
                                                    form.attr({ "action": url_jsp });
                                                    let input = $("<input type='hidden' id='alipay_param' name='alipay_param' />")
                                                    input.attr({ "method": "post" });
                                                    input.val(data);
                                                    form.append(input);
                                                    form.submit();
                                                }
                                            })
                                        }
                                        console.log(params.row);
                                    }
                                }
                            },
                            "去支付"
                        )
                        ]);
                    } else if (params.row.os == "1000" || params.row.os == "1001") {
                        return h("div", {}, [
                            h("p", {}, "待发货")
                        ])
                    } else if (params.row.os == "2000") {
                        return h("div", {}, [
                            h("p", {}, "待收货")
                        ])
                    } else if (params.row.os == "3000") {
                        return h("div", {}, [
                            h("p", {}, "已收货")
                        ])
                    } else if (params.row.os == "8001") {
                        return h("div", {}, [
                            h("p", {}, "申请退款")
                        ])
                    }
                }
            },
            {
                title: "物流",
                key: "logistics",
                width: 90,
                align: "center",
                render: (h, params) => {
                    if (params.row.os == "2000") {
                        return h("div", [
                            h(
                                "Button",
                                {
                                    props: {
                                        size: "small"
                                    },
                                    style: {
                                        background: "#f7f9f3",
                                        border: "0",
                                        color: "#04593f"
                                    },
                                    on: {
                                        click: () => {
                                            this.goLogistics(params.index);
                                        }
                                    }
                                },
                                "查看详情"
                            )
                        ]);
                    } else {
                        return h("p", "/");
                    }
                }
            }
        ];
    }, methods: {
        // 获取cookie
        getCookie(name) {
            var v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
            return v ? v[2] : null;
        },
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$Message.success("Success!");
                } else {
                    this.$Message.error("Fail!");
                }
            });
        },
        //查看物流
        goLogistics(index) {
            this.$router.push({ path: "/profileLogistics" });
        },
        //十进制
        add0(m) {
            return m < 10 ? "0" + m : m;
        },
        //格式化时间
        timeFormat(timestamp) {
            //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
            var time = new Date(timestamp);
            var year = time.getFullYear();
            var month = time.getMonth() + 1;
            var date = time.getDate();
            var hours = time.getHours();
            var minutes = time.getMinutes();
            var seconds = time.getSeconds();
            return (
                year +
                "/" +
                this.add0(month) +
                "/" +
                this.add0(date) +
                " " +
                this.add0(hours) +
                ":" +
                this.add0(minutes) +
                ":" +
                this.add0(seconds)
            );
        },
        //待支付订单状态提示
        asyncOk() {
            let pk_code = "order.check.status";
            let o_id = this.o_id;
            let token = this.token;
            let url_code = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_code + "&o_id=" + o_id + "&oc=1000&token=" + token;
            $.get(url_code, d => {
                if (d.available && d.obj.data) {
                    location.href = appset.domain + "/front/pageapp#/profileOrders";
                } else {
                    this.$Message.info('您还未完成付款');
                }
            })
        },
        //确认支付弹窗
        custom() {
            this.confirmModal = true;
        },
        //根据tab标签的名称展示相应内容
        tabOrderStatus(name) {
            let pk = "tcss.account.goods.orders";
            let token = this.getCookie("_lac_k_");
            if (name === 'order_all') {
                let statuses = "";
                let url_first = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&statuses=" + statuses + "&token=" + token;
                fetch(url_first, { credentials: "include" })
                    .then(r => r.json())
                    .then(d => {
                        if (d.available) {
                            let order_list = [];
                            for (var i = 0; i < d.obj.length; i++) {
                                var order = [];
                                for (var j = 0; j < d.obj[i].o_goods.length; j++) {
                                    order.push(d.obj[i].o_goods[j]);
                                }
                                if (d.obj[i].os == "0000") {
                                    var data = [
                                        {
                                            orderId: d.obj[i].id,
                                            receivePerson: d.obj[i].mobile,
                                            orderPrice: "¥" + d.obj[i].payAmount / 100,
                                            orderTime: this.timeFormat(d.obj[i].aTime),
                                            orderStatus: "待付款",
                                            order: order,
                                            os: d.obj[i].os,
                                            payType: d.obj[i].payType,
                                            payAmount: d.obj[i].payAmount / 100,
                                            on: d.obj[i].on,
                                            aTime: d.obj[i].aTime,
                                        }
                                    ];
                                } else if (d.obj[i].os == "1000" || d.obj[i].os == "1001") {
                                    var data = [
                                        {
                                            orderId: d.obj[i].id,
                                            receivePerson: d.obj[i].mobile,
                                            orderPrice: "¥" + d.obj[i].payAmount / 100,
                                            orderTime: this.timeFormat(d.obj[i].aTime),
                                            orderStatus: "待发货",
                                            order: order,
                                            os: d.obj[i].os,

                                        }
                                    ];
                                } else if (d.obj[i].os == "2000") {
                                    var data = [
                                        {
                                            orderId: d.obj[i].id,
                                            receivePerson: d.obj[i].mobile,
                                            orderPrice: "¥" + d.obj[i].payAmount / 100,
                                            orderTime: this.timeFormat(d.obj[i].aTime),
                                            orderStatus: "待收货",
                                            order: order,
                                            os: d.obj[i].os
                                        }
                                    ];
                                } else if (d.obj[i].os == "3000") {
                                    var data = [
                                        {
                                            orderId: d.obj[i].id,
                                            receivePerson: d.obj[i].mobile,
                                            orderPrice: "¥" + d.obj[i].payAmount / 100,
                                            orderTime: this.timeFormat(d.obj[i].aTime),
                                            orderStatus: "已收货",
                                            order: order,
                                            os: d.obj[i].os
                                        }
                                    ];
                                } else if (d.obj[i].os == "8001") {
                                    var data = [
                                        {
                                            orderId: d.obj[i].id,
                                            receivePerson: d.obj[i].mobile,
                                            orderPrice: "¥" + d.obj[i].payAmount / 100,
                                            orderTime: this.timeFormat(d.obj[i].aTime),
                                            orderStatus: "申请退款",
                                            order: order,
                                            os: d.obj[i].os
                                        }
                                    ];
                                }
                                order_list.push(data);
                            }
                            this.orderData = order_list;
                        }
                    });
            } else if (name === 'order_no_pay') {
                let statuses = "0000";
                let url_nopay = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&statuses=" + statuses + "&token=" + token;
                fetch(url_nopay, { credentials: "include" }).then(r => r.json()).then(d => {
                    let order_list = [];
                    for (var i = 0; i < d.obj.length; i++) {
                        var order = [];
                        for (var j = 0; j < d.obj[i].o_goods.length; j++) {
                            order.push(d.obj[i].o_goods[j]);
                        }
                        var data = [
                            {
                                orderId: d.obj[i].id,
                                receivePerson: d.obj[i].mobile,
                                orderPrice: "¥" + d.obj[i].payAmount / 100,
                                orderTime: this.timeFormat(d.obj[i].aTime),
                                orderStatus: "待付款",
                                order: order,
                                os: d.obj[i].os,
                                payType: d.obj[i].payType,
                                payAmount: d.obj[i].payAmount / 100,
                                on: d.obj[i].on,
                                aTime: d.obj[i].aTime,
                            }
                        ];
                        order_list.push(data);
                    }
                    this.no_pay_order = order_list;
                });
            } else if (name === 'order_no_send') {
                let statuses = "1001";
                let url_nopay = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&statuses=" + statuses + "&token=" + token;
                fetch(url_nopay, { credentials: "include" }).then(r => r.json()).then(d => {
                    let order_list = [];
                    for (var i = 0; i < d.obj.length; i++) {
                        var order = [];
                        for (var j = 0; j < d.obj[i].o_goods.length; j++) {
                            order.push(d.obj[i].o_goods[j]);
                        }
                        var data = [
                            {
                                orderId: d.obj[i].id,
                                receivePerson: d.obj[i].mobile,
                                orderPrice: "¥" + d.obj[i].payAmount / 100,
                                orderTime: this.timeFormat(d.obj[i].aTime),
                                orderStatus: "待发货",
                                order: order,
                                os: d.obj[i].os,
                            }
                        ];
                        order_list.push(data);
                    }
                    this.no_send_order = order_list;
                });
            } else if (name === 'order_no_receive') {
                let statuses = "2000";
                let url_nopay = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&statuses=" + statuses + "&token=" + token;
                fetch(url_nopay, { credentials: "include" }).then(r => r.json()).then(d => {
                    let order_list = [];
                    for (var i = 0; i < d.obj.length; i++) {
                        var order = [];
                        for (var j = 0; j < d.obj[i].o_goods.length; j++) {
                            order.push(d.obj[i].o_goods[j]);
                        }
                        var data = [
                            {
                                orderId: d.obj[i].id,
                                receivePerson: d.obj[i].mobile,
                                orderPrice: "¥" + d.obj[i].payAmount / 100,
                                orderTime: this.timeFormat(d.obj[i].aTime),
                                orderStatus: "待收货",
                                order: order,
                                os: d.obj[i].os,
                            }
                        ];
                        order_list.push(data);
                    }
                    this.no_receive_order = order_list;
                });
            } else if (name === 'order_done') {
                let statuses = "3000";
                let url_nopay = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&statuses=" + statuses + "&token=" + token;
                fetch(url_nopay, { credentials: "include" }).then(r => r.json()).then(d => {
                    let order_list = [];
                    for (var i = 0; i < d.obj.length; i++) {
                        var order = [];
                        for (var j = 0; j < d.obj[i].o_goods.length; j++) {
                            order.push(d.obj[i].o_goods[j]);
                        }
                        var data = [
                            {
                                orderId: d.obj[i].id,
                                receivePerson: d.obj[i].mobile,
                                orderPrice: "¥" + d.obj[i].payAmount / 100,
                                orderTime: this.timeFormat(d.obj[i].aTime),
                                orderStatus: "已完成",
                                order: order,
                                os: d.obj[i].os,
                            }
                        ];
                        order_list.push(data);
                    }
                    this.no_send_order = order_list;
                });
            }


        },

    },
    watch: {
        $route() {
            tabName = this.$route.query.tabName;
            if (tabName) {
                this.tabName = tabName;
            } else {
                this.tabName = "order_all";
            }
            this.tabOrderStatus(this.tabName);
        }
    }

}