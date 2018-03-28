/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const goodsDetails = {
	cache: {},
	template: `
	<div>
		<div class="content">
			<div class="main">
				<!-- content-nav start -->
				<div class="content-nav gd-content-nav">
					<p>
						<span>首页</span> > 
						<span>所有品牌</span> > 
						<span>{{brand.catNameEn}}</span> > 
						<span>{{goodsDetails.goods_name}}</span>
					</p>
				</div>
				<!-- content-nav end -->

				<!-- goods details start -->
				<div class="gd-details-container">
					<div class="gd-details-left">
						<div class="gd-details-bigImage">
							<img :src="'http://pe1d.static.pdr365.com/' + bigImg" alt="">
						</div>
						<ul class="gd-details-imgList">
							<li v-for="(item, index) in goodsImgList" :key="index">
								<img :src="'http://pe1d.static.pdr365.com/' + item.imgUrl" alt="">
							</li>
						</ul>
					</div>
					<div class="gd-details-right">
						<div class="gd-details-desc">
							{{goodsDetails.goods_name}}
						</div>
						<div class="gd-details-name">
							<span>{{brand.catNameEn}}</span>
							<span class="collect" @click="collect">
								<Icon type="ios-star"></Icon>
							</span>
							<span class="collect-word" @click="collect">收藏</span>
						</div>
						<div class="gd-details-price">
							<span>小众售价:</span>
							<span>¥{{skuPrice / 100}}</span>
							<span>满减</span>
							<span>全店满1000元减100元</span>
						</div>
						<div class="order-item capacity">
							<span>容量分类:</span>
							<ul>
								<li v-for="(item,index) in unitList" :key="index" :class="unitSelected == index ? 'unit-active' : ''" @click="changePrice(item.id,index)">{{item.unit}}</li>
							</ul>
						</div>
						<div class="order-item support">
							<span>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持:</span>
							<span>满400包邮 全店满1000元减100元</span>
						</div>
						<div class="order-item address-container">
							<span>配&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送:</span>
							<select name="" id="" class="address">
								<option value="beijing">北京市 北京市 朝外街道</option>
								<option value="shanxi">北京市 北京市 朝外街道</option>
								<option value="shanxi">北京市 北京市 朝外街道</option>
							</select>
						</div>
						<div class="order-item service">
							<span>服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务:</span>
							<span>本商品由minotité小众之地 负责发货并提供售后服务</span>
						</div>
						<div class="order-item num">
							<span>数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量:</span>
							<div class="counter">
								<div class="counter-left">
									<input type="text" v-model="goodsNum">
								</div>
								<div class="counter-right">
									<div class="counter-plus" @click="addNum">+</div>
									<div class="counter-reduce" @click="cutNum">-</div>
								</div>
							</div>
						</div>
						<div class="pay">
							<input type="button" value="立即购买" class="btn-pay" @click="goPay">
						</div>
						<div class="addCar">
							<input type="button" value="加入购物车" class="btn-addCar" @click="addToCar">
						</div>
					</div>
				</div>
				<!-- goods details end -->

				<!-- advertisement start -->
				<div class="advertisement">
					<div class="advertisement-title">
						<div class="advertisement-title-img">
							<img src="http://pe1s.static.pdr365.com/minorite/goodsDetails/ad-title-img.png" alt="">
						</div>
					</div>
					<div class="advertisement-desc">	
						<p>minorité小众之地</p>
						<p>全世界的精致小众香</p>
						<p>更别致的香水跨境电商</p>
					</div>
					<div class="advertisement-img">
						<img src="http://pe1s.static.pdr365.com/minorite/goodsDetails/g_banner.png" alt="">
					</div>
				</div>
				<!-- advertisement end -->

				<!-- goods description start -->
				<div class="gd-description">
					<div class="gd-description-title">
						<p>商品详情</p>
						<div class="xiahuaxian"></div>
					</div>
				<div class="about-goods" v-html="goodsContent"></div>
				<div class="gd-description-title">
					<p>品牌介绍</p>
					<div class="xiahuaxian"></div>
				</div>
				<!-- brand description start -->
				<!-- <div class="brand-desc">
					<div class="brand-desc-icon" v-html="brand.catIcon">
					
					</div>
					<div class="brand-desc-title">
					<p>{{brand.desc}}</p>
					</div>
					<div class="brand-desc-bg">
					<img src="http://pe1s.static.pdr365.com/minorite/goodsDetails/details-brand-bg.png" alt="">
					</div>
					<div class="brand-desc-block"></div>
				</div> -->
				<!-- brand description end -->
					<div class="brand-desc" v-html="brand.catContent"></div>

					<div class="brand-about">
						<img src="http://pe1s.static.pdr365.com/minorite/goodsDetails/brandAbout.png" alt="">
					</div>
				</div>
				<!-- goods description end -->

			</div>
		</div>

		<!-- login start -->
		<Modal class="modalLogin" v-model="modalLogin" width="370">
		<div class="modalLogin-container">
		<p>用户登录</p>
		<Form ref="loginFormInline" :model="loginFormInline" :rules="loginRuleInline" inline>
			<FormItem prop="user">
				<Input type="text" v-model="loginFormInline.mobile" placeholder="手机号码/昵称">
				</Input>
			</FormItem>
			<FormItem prop="password">
				<Input type="password" v-model="loginFormInline.password" placeholder="密码">
				</Input>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="loginSubmit('loginFormInline')">进 入</Button>
			</FormItem>
		</Form>
		<div class="goSign-container">
		<div class="goSign" @click="goSignRender">注册</div>
		<div class="forgetPwd">忘记密码?</div>
		</div>
		</div>
		<div slot="footer">
			<!-- <Button @click="next">Delete</Button> -->
		</div> 
		</Modal> 
		<!-- login end -->

		<!-- sign start -->
		<Modal class="modalLogin modalSign" v-model="modalSign" width="370">
		<div class="modalLogin-container">
		<p class="modalSign-title">注册minorité账号</p>
		<div class="goSign-container">
		<Form ref="signFormInline" :model="signFormInline" :rules="signRuleInline" inline>
			<FormItem class="sign-input" prop="phoneNumber">
				<span>+86</span>
				<Input type="text" v-model="signFormInline.mobile" placeholder="手机号码"> </Input>
			</FormItem>
			<FormItem class="sign-input" prop="yzm">
				<span>
					<img :src="'http://www.minorite.com.cn/common/imgcode/generate/?' + timeStamp" @click="getImgCode" style="height:100%;">
				</span>
				<Input type="text" v-model="signFormInline.verify_code" placeholder="输入验证码"></Input>
			</FormItem>
			<FormItem class="sign-input" prop="dxyzm">
				<span v-show="sendCode" @click="getVerifyCode" style="color:#000;"> 发送验证码 </span>
				<span v-show="!sendCode">{{auth_time}} 秒后重新发送</span>
				<Input type="text" v-model="signFormInline.code" placeholder="输入短信验证码"></Input>
			</FormItem>
			<FormItem class="sign-input" prop="password">
				<Icon type="ios-locked-outline"></Icon>
				<Input type="password" v-model="signFormInline.password" placeholder="请输入密码"></Input>
			</FormItem>
			<FormItem>
				<div style="line-height:20px;margin-top:10px;">
				点击立即注册，即表示您统一并愿意遵守<a href="/#/footerService" target="_blank">服务条款</a>和<a href="/#/footerSecurity" target="_blank">安全和隐私</a>
				</div>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="signSubmit('signFormInline')">立即注册</Button>
				<div class="goSign" style="font-size:14px" @click="goLoginRender">登录</div>
			</FormItem>
				
		</Form>
		</div>
		</div>
		<div slot="footer">
			<!-- <Button @click="next">Delete</Button> -->
		</div> 
		</Modal> 
		<!-- sign end -->
	</div>
	`, data: function () {
		return {
			timeStamp: "",
			sendCode: true,
			auth_time: 0,
			carList: [],
			newCarList: [],
			carItem: {},
			goMethods: "",
			goodsId: "",
			brand: {},
			goodsDetails: {},
			goodsUnit: [],
			unitData: [],
			unitList: [],
			skuPrice: 0,
			skuId: "",
			skuUnit: "",
			unitSelected: 0,
			goodsContent: "",
			bigImg: "",
			goodsImgList: [],
			goodsNum: 1,
			modalLogin: false,
			modalSign: false,
			loginFormInline: {
				mobile: "",
				password: ""
			},
			loginRuleInline: {
				mobile: [
					{
						required: true,
						message: "请输入您的手机号或昵称",
						trigger: "blur"
					}
				],
				password: [
					{
						required: true,
						message: "请输入正确密码",
						trigger: "blur"
					},
					{
						type: "string",
						min: 6,
						message: "密码长度应超过6位数",
						trigger: "blur"
					}
				]
			},

			signFormInline: {
				mobile: "",
				verify_code: "",
				code: "",
				password: ""
			},
			signRuleInline: {
				mobile: [
					{
						required: true,
						message: "请输入您的手机号或昵称",
						trigger: "blur"
					}
				],
				verify_code: [
					{
						required: true,
						message: "请输入验证码",
						trigger: "blur"
					}
				],
				code: [
					{
						required: true,
						message: "请输入短信验证码",
						trigger: "blur"
					}
				],
				password: [
					{
						required: true,
						message: "请输入您的密码",
						trigger: "blur"
					},
					{
						type: "string",
						min: 6,
						message: "密码长度应超过6位数",
						trigger: "blur"
					}
				]
			}
		};
	}, beforeRouteEnter(to, from, next) {
		//当组件加载时自动调用此函数 函数结尾必须next();
		document.title = "商品详情";
		next();
	}, created() {
		//组件加载完成会自动调用此方法
		window.scrollTo(0, 0);
		this.goodsId = this.$route.query.goodsId;
		// this.brand = JSON.parse(this.$route.query.brandStr);
	}, mounted() {
		this.timeStamp = new Date().getTime();
		//获取商品详情
		let pk_goods_details = "tcss.get.goods.details.perfume";
		let url_goods_details = appset.domain + "/front/ypc/rt/?" + "pk=" + pk_goods_details + "&goods_id=" + this.goodsId;
		fetch(url_goods_details)
			.then(r => r.json())
			.then(d => {
				this.goodsContent = d.obj.data.goods.content;
				this.goodsDetails = d.obj.data.goods.g;
				this.unitData = d.obj.data.goods.g.goodsSkuList;
				this.bigImg = d.obj.data.goods.g.goods_picturelink_big;
				this.goodsImgList = d.obj.data.goods.g.goodsImgList;
				this.unitData.forEach(v => {
					let unitObj = JSON.parse(v.skus);
					for (let key in unitObj) {
						let obj = {
							id: v.id,
							skuPrice: v.skuPrice,
							unit: unitObj[key]
						}
						this.unitList.push(obj);
					}
				});
				this.skuPrice = this.unitData[0].skuPrice;
				this.skuId = this.unitList[0].id;
				this.skuUnit = this.unitList[0].unit;
				this.brand = d.obj.data.category;
			});
	}, methods: {
		// 登录页面弹窗
		loginRender() {
			this.modalLogin = true;
			this.loginShow = false;
		},
		// 注册页面弹窗
		signRender() {
			this.modalSign = true;
			this.loginShow = false;
		},
		// 前往注册页面弹窗
		goSignRender() {
			this.modalLogin = false;
			this.modalSign = true;
		},
		goLoginRender() {
			this.modalLogin = true;
			this.modalSign = false;
		},
		//设置cookie
		setCookie(name, value, days) {
			let d = new Date();
			d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
			window.document.cookie =
				name + "=" + value + ";path=/;expires=" + d.toGMTString();
		},
		// 获取cookie
		getCookie(name) {
			let v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
			return v ? v[2] : null;
		},
		// 用户登录
		loginSubmit(name) {
			this.$refs[name].validate(valid => {
				if (valid) {
					let pk = "account.do.login";
					let mobile = this.loginFormInline.mobile;
					let password = this.loginFormInline.password;
					let time = new Date().getTime();
					let url = appset.domain + "/front/ypc/rt/?" + time + "&pk=" + pk + "&username=" + mobile + "&userpwd=" + password;
					fetch(url, { credentials: "include" })
						.then(r => r.json())
						.then(d => {
							let token = d.obj.data.token;
							if (token == -1) {
								this.$Message.error("账号或密码错误");

								// 「备注」账号不存在和密码错误返回的数据一样，需要验证用户是否已经注册


							} else {
								this.$Message.success("登录成功");
								this.modalLogin = false;
								this.setCookie("_lac_k_", token, 3);
								this.jump();
							}
						})
				} else {
					this.$Message.error("登录失败");
				}
			});
		},
		//点击刷新图片验证码
		getImgCode() {
			this.timeStamp = new Date().getTime();
		},
		// 获取短信验证码
		getVerifyCode() {
			this.sendCode = false;
			this.auth_time = 60;
			let time_reduce = setInterval(v => {
				this.auth_time--;
				if (this.auth_time <= 0) {
					this.sendCode = true;
					clearInterval(time_reduce);
				}
			}, 1000);
			let mobile = this.signFormInline.mobile;
			let verify_code = this.signFormInline.verify_code;
			let time = new Date().getTime();
			let url = appset.domain + "/front/sms/request_code/?" + time + "&mobile=" + mobile + "&verify_code=" + verify_code;
			fetch(url, { credentials: "include" }).then(r => r.json()).then(d => { })
		},
		// 用户注册
		signSubmit(name) {
			this.$refs[name].validate(valid => {
				if (valid) {
					let pk = "account.user.register";
					let mobile = this.signFormInline.mobile;
					let code = this.signFormInline.code;
					let password = this.signFormInline.password;
					let time = new Date().getTime();
					let url = appset.domain + "/front/ypc/rt/?" + time + "&pk=" + pk + "&mobile=" + mobile + "&code=" + code + "&username=" + mobile + "&userpwd=" + password;
					fetch(url, { method: "POST", credentials: "include" })
						.then(r => r.json())
						.then(d => {
							if (d.obj.msg == 'success') {
								this.$Message.success("注册成功，请登录");
								this.modalSign = false;
								this.modalLogin = true;
							}
						});

				} else {
					this.$Message.error("注册失败");
				}
			});
		},
		jump() {
			if (this.goMethods == "pay") {
				router.go(0);
			} else if (this.goMethods == "car") {
				router.go(0);
			} else if (this.goMethods == "collect") {

				// 填写收藏需要的接口

			}
		},
		// 立即购买
		goPay() {
			let login = this.getCookie("_lac_k_");
			if (login) {
				let payItem = {
					goods_id: this.goodsDetails.id,
					goods_name: this.goodsDetails.goods_name,
					goods_price: this.skuPrice / 100,
					goods_unit: this.goodsDetails.goods_unit,
					goods_picturelink: this.goodsDetails.goods_picturelink,
					goods_num: this.goodsNum,
					skuId: this.skuId,
					unit: this.skuUnit
				};
				let payList = [];
				payList.push(payItem);
				this.payList = payList;
				let payListStr = JSON.stringify(this.payList);
				sessionStorage.setItem("payList", payListStr);
				this.$router.push({ path: "/pay" });
			} else {
				this.modalLogin = true;
				this.goMethods = "pay";
			}
		},
		// 加入购物车
		addToCar() {
			let login = this.getCookie("_lac_k_");
			this.carList = JSON.parse(sessionStorage.getItem("carList"));
			let carItem = {
				goods_id: this.goodsDetails.id,
				goods_name: this.goodsDetails.goods_name,
				goods_price: this.skuPrice / 100,
				goods_unit: this.goodsDetails.goods_unit,
				goods_picturelink: this.goodsDetails.goods_picturelink,
				goods_num: this.goodsNum,
				skuId: this.skuId,
				unit: this.skuUnit,
			};
			if (login) {
				if (this.carList && this.carList.length > 0) {
					let flag = false;
					//循环里return进行打断
					for (let i = 0; i < this.carList.length; i++) {
						if (this.carList[i].skuId === carItem.skuId) {
							flag = false;
							this.$Message.success('已在购物车中');
							return;
						} else {
							flag = true;
						}
					}
					if (flag) {
						this.carList.push(carItem);
						this.$Message.success("成功加入购物车");
					}
				} else {
					let carList = [];
					carList.push(carItem);
					this.carList = carList;
					this.$Message.success("成功加入购物车");
				}
				let carListStr = JSON.stringify(this.carList);
				sessionStorage.setItem("carList", carListStr);
			} else {
				this.goMethods = "car";
				this.modalLogin = true;
			}
		},
		// 收藏商品
		collect() {
			let login = this.getCookie("_lac_k_");
			if (login) {
				// this.$Message.success("收藏成功");
				let pk_collect = "tcss.do.goods.collect";
				let time = new Date().getTime();
				// let token = $.cookie(appset.token_cookie_key);
				let url_collect = appset.domain + "/front/ypc/rt/?" + time + "&pk=" + pk_collect + "&g_id=" + this.goodsId;
				fetch(url_collect, { credentials: 'include' }).then(r => r.json()).then(d => {
					if (d.available && d.obj.data) {
						this.$Message.success("收藏成功");
					} else if (d.available && d.obj.code == "had_collect") {
						this.$Message.success("请勿重复收藏");
					} else {
						this.$Message.success("收藏失败");
					}
				})

			} else {
				this.goMethods = "collect";
				this.modalLogin = true;
			}
		},
		addNum() {
			this.goodsNum++;
		},
		cutNum() {
			if (this.goodsNum < 1) {
				return;
			}
			this.goodsNum--;
		},
		changePrice(id, index) {
			this.unitList.forEach(v => {
				if (id == v.id) {
					this.skuPrice = v.skuPrice;
					this.unitSelected = index;
					this.skuId = v.id;
					this.skuUnit = v.unit;
				}
			});
		},

	}
}