/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const profileCoupons = {
    cache: {},
    template: `
             <div class="content">
                <div class="header-block"></div><!-- 导航栏占位符 -->
                <div class="profileCoupons-content main">
                    <personal-msg></personal-msg>

                    <!-- content-nav start -->
                    <div class="content-nav profileCoupons-content-nav">
                        <p>
                            <span>首页</span> > 
                            <span>个人中心</span>
                        </p>
                    </div>
                    <!-- content-nav end -->

                    <!-- slide-nav start -->
                    <profile-nav></profile-nav>
                    <!-- slide-nav end -->

                    <div class="profileCoupons-box">
                        <Tabs :animated="false" type="card">
                            <TabPane label="未使用优惠券">
                                <div class="profileCoupons-table-container">
                                    <Table border :columns="columns1" :data="data1"></Table>
                                </div>
                            </TabPane>
                            <TabPane label="已使用优惠券">
                                <div class="profileCoupons-table-container">
                                    <Table border :columns="columns1" :data="data2"></Table> 
                                </div>
                            </TabPane>
                            <TabPane label="已失效优惠券">
                                <div class="profileCoupons-table-container">
                                    <Table border :columns="columns1" :data="data3"></Table> 
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
            columns1: [
                {
                    title: "优惠券",
                    key: "orderId",
                    width: 140,
                    align: "center"
                },
                {
                    title: "面值/折扣",
                    key: "order",
                    width: 130,
                    align: "center",
                },
                {
                    title: "有效期",
                    key: "deadline",
                    width: 200,
                    align: "center"
                },
                {
                    title: "试用说明",
                    key: "orderPrice",
                    width: 292,
                    align: "center"
                },
                {
                    title: "状态",
                    key: "orderStatus",
                    width: 74,
                    align: "center"
                },
            ],
            data1: [
                {
                    orderId: "情人节¥100优惠券",
                    order: "¥100",
                    deadline: "2017.12.30-2018.01.30",
                    orderPrice: "¥1234.00",
                    orderTime: "2017/1/13  22:32:55",
                    orderStatus: "未使用"
                }
            ],
            data2: [
                {
                    orderId: "情人节¥100优惠券",
                    order: "¥100",
                    deadline: "2017.12.30-2018.01.30",
                    orderPrice: "¥1234.00",
                    orderTime: "2017/2/22  22:32:55",
                    orderStatus: "已使用"
                }
            ],
            data3: [
                {
                    orderId: "情人节¥100优惠券",
                    order: "¥100",
                    deadline: "2017.12.30-2018.01.30",
                    orderPrice: "¥3334.00",
                    orderTime: "2017/3/22  22:32:55",
                    orderStatus: "已失效"
                }
            ],
        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "我的优惠券";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, methods: {
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
            this.$router.push({ path: "/logistics" });
        }
    }

}