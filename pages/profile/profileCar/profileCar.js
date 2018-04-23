/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const profileCar = {
    cache: {},
    template: `
            <div class="content">
                <div class="header-block"></div><!-- 导航栏占位符 -->
                <div class="addToCar-content main">
                    <personal-msg></personal-msg>
                    <!-- content-nav start -->
                    <div class="content-nav">
                        <p>
                            <span>首页</span> > 
                            <span>个人中心</span>
                        </p>
                    </div>
                    <!-- content-nav end -->

                    <!-- slide-nav start -->

                    <profile-nav></profile-nav>

                    <!-- slide-nav end -->

                    <div class="addToCar-table-container">
                        <Table class="addToCar-table"  ref="selection" :columns="columns4" :data="data1" @on-selection-change="carSelect"></Table>
                    </div>
                    <div class="count-accounts">
                        <div class="goods-num">
                            <span>总计</span>
                            <div>
                                共<span> {{totalNum}} </span> 件商品
                            </div>
                        </div>
                        <div class="coupon">
                            <!--<input type="checkbox" checked="checked">
                            <span> 使用优惠券 </span>-->
                            <p>满¥400包邮</p>
                        </div>
                        <div class="car-address">
                            <p>{{def_address}}</p>
                        </div>
                        <div class="del-go">
                            <input class="del" type="button" value="删除选中项">
                            <router-link :to="{path: '/'}">继续购物</router-link>
                        </div>
                        <div class="addToCar-total-price">
                            <p>总计： <span>¥{{totalPrice}}</span></p>
                            <input type="button" value="去结算" @click="goPay">
                        </div>
                    </div>
                </div>
            </div>
    `,
    data: function () {
        return {
            columns4: [],
            data1: [],
            carList: [],
            payList: [],
            def_address: "",

        }
    },
    computed: {
        totalPrice: {
            get: function () {
                let result = 0;
                this.payList.forEach(v => {
                    result += v.goods_price * v.goods_num;
                });
                return result;
            },
            set: function (v) {

            }
        },
        totalNum: {
            get: function () {
                let result = 0;
                this.payList.forEach(v => {
                    result += v.goods_num;
                });
                return result;
            },
            set: function () { }
        }
    },
    mounted() {
        //获取购物车
        let car = sessionStorage.getItem("carList");
        if (car) {
            this.carList = JSON.parse(car);
        }
        this.carList.forEach((v, i) => {
            let carItem = {
                goods_id: v.goods_id,
                goods_name: v.goods_name,
                goods_price: v.goods_price,
                goods_unit: v.goods_unit,
                goods_picturelink: v.goods_picturelink,
                goods_num: v.goods_num,
                skuId: v.skuId,
                unit: v.unit,
                name: {
                    src: v.goods_picturelink,
                    goods_name: v.goods_name,
                    unit: v.unit
                },
                // _checked: true
            };
            this.data1.push(carItem);
            this.totalPrice += v.goods_price * v.goods_num;
        });
        //获取收货地址
		let pk = "account.get.addresses";
		let url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk;
		fetch(url, { credentials: "include" })
			.then(r => r.json())
			.then(d => {
				if (d.available && d.obj.data) {
					d.obj.data.forEach(v => {
						if (v.def) {
							this.def_address = v.address;
						}
                    });
				}
			});

        this.columns4 = [
            {
                type: "selection",
                title: "全选",
                width: 80,
                height: 34,
                align: "center"
            },
            {
                title: "商品",
                key: "name",
                width: 420,
                align: "center",
                render: (h, params) => {
                    return h(
                        "div",
                        {
                            style: {
                                display: "flex"
                            }
                        },
                        [
                            h("img", {
                                attrs: {
                                    src:
                                        "http://pe1d.static.pdr365.com/" + params.row.name.src,
                                    alt: ""
                                },
                                style: {
                                    width: "44px",
                                    height: "44px"
                                }
                            }),
                            h(
                                "div",
                                {
                                    style: {
                                        textAlign: "left",
                                        marginLeft: "12px"
                                    }
                                },
                                [
                                    h(
                                        "p",
                                        {
                                            style: {}
                                        },
                                        params.row.name.goods_name
                                    ),
                                    h(
                                        "span",
                                        {
                                            style: {
                                                fontSize: "12px",
                                                color: "#7d7d7d"
                                            }
                                        },
                                        params.row.name.unit
                                    )
                                ]
                            )
                        ]
                    );
                }
            },
            {
                title: "价格",
                key: "goods_price",
                width: 120,
                align: "center"
            },
            {
                title: "数量",
                key: "goods_num",
                width: 200,
                align: "center",
                render: (h, params) => {
                    return h("div", [
                        h("InputNumber", {
                            props: {
                                size: "small",
                                value: params.row.goods_num,
                                min: 1
                            },
                            on: {
                                "on-change": val => {
                                    this.numChange(params.index, val);
                                }
                            }
                        })
                    ]);
                }
            },
            {
                title: "操作",
                key: "option",
                align: "center",
                render: (h, params) => {
                    return h("div", [
                        h(
                            "Button",
                            {
                                props: {
                                    size: "small",
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index);
                                        this.carList.forEach((v, i) => {
                                            if (v.goods_id == params.row.goods_id) {
                                                this.carList.splice(i, 1);
                                            }
                                        });
                                        if (this.carList.length === 0) {
                                            this.carList = null;
                                        }
                                        sessionStorage.setItem(
                                            "carList",
                                            JSON.stringify(this.carList)
                                        );
                                    }
                                }
                            },
                            "删除"
                        )
                    ]);
                }
            }
        ];
    },
    methods: {
        //选择全部商品
        handleSelectAll(status) {
            this.$refs.selection.selectAll(status);
        },
        //点击去结算
        goPay() {
            for (let i = 0; i < this.carList.length; i++) {
                for (let j = 0; j < this.payList.length; j++) {
                    if (this.carList[i].skuId === this.payList[j].skuId) {
                        this.carList.splice(i, 1);
                    }
                }
            }
            if (this.payList.length > 0) {
                let payListStr = JSON.stringify(this.payList);
                let carListStr = JSON.stringify(this.carList);

                sessionStorage.setItem("payList", payListStr);
                sessionStorage.setItem("carList", carListStr);
                this.$router.push({ path: "/pay" });
            } else {
                this.$Message.error("请选择商品");
            }

        },
        remove(index) {
            this.data1.splice(index, 1);
        },
        carSelect(val) {
            this.payList = val;
        },
        //修改购物车商品数量
        numChange(index, val) {
            this.totalPrice = 0;
            let carItem = this.data1[index];
            carItem.goods_num = val;
            this.data1.splice(index, 1, carItem);
            this.data1.forEach(v => {
                this.totalPrice += v.goods_price * v.goods_num;
            });
        }
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "我的购物车";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, goPay() {
        this.$router.push({ path: '/' });
    }
}