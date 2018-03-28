/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const profileOrders = {
    cache: {},
    template: `
            <div class="content">
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
                        <Tabs :animated="false" type="card">
                            <TabPane label="全部订单">
                                <div class="profileOrders-table-container">
                                    <Table border :columns="columns1" v-for="item in orderData" :key="item.id" :data="item"></Table>
                                </div>
                            </TabPane>
                            <TabPane label="待付款">
                                <div class="profileOrders-table-container">
                                    <Table border :columns="columns1" :data="no_pay_order"></Table> 
                                </div>
                            </TabPane>
                            <TabPane label="待发货">
                                <div class="profileOrders-table-container">
                                    <Table border :columns="columns1" :data="no_send_order"></Table> 
                                </div>
                            </TabPane>
                            <TabPane label="待收货">
                                <div class="profileOrders-table-container">
                                    <Table border :columns="columns1" :data="no_receive_order"></Table> 
                                </div>
                            </TabPane>
                            <TabPane label="已完成">
                                <div class="profileOrders-table-container">
                                    <Table border :columns="columns1" :data="done_order"></Table> 
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
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
        let statuses = "";
        let url_first =
            appset.domain + "/front/ypc/rt/?" +
            Date.parse(new Date()) +
            "&pk=" +
            pk +
            "&statuses=" +
            statuses +
            "&token=" +
            token;
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
                                    os: d.obj[i].os
                                }
                            ];
                        } else if (d.obj[i].os == "1000") {
                            var data = [
                                {
                                    orderId: d.obj[i].id,
                                    receivePerson: d.obj[i].mobile,
                                    orderPrice: "¥" + d.obj[i].payAmount / 100,
                                    orderTime: this.timeFormat(d.obj[i].aTime),
                                    orderStatus: "待发货",
                                    order: order,
                                    os: d.obj[i].os
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
                align: "center"
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
        goLogistics(index) {
            this.$router.push({ path: "/profileLogistics" });
        },
        add0(m) {
            return m < 10 ? "0" + m : m;
        },
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
        }
    }

}