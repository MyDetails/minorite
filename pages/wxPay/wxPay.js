const wxPay = {
	template: `
			<div class="content">
				<div class="wxPay-content main">
					<personal-msg></personal-msg>

					<div class="wxPay">
					<div class="wxPay-box">
						<div class="wxPay-top">
							<span class="wxPay-top-title">微信支付</span>
							<div class="wxPay-top-wx">
								<img class="wxPay-top-img" src="http://pe1s.static.pdr365.com/minorite/wxpay/wxpay_logo.png">
								<span class="wxPay-top-wp">微信支付</span>
							</div>
						</div>
						<div class="wxPay-bot-box">
							<div class="wxPay-bot-content">
								<p class="wxPay-bot-pay">支付金额 ¥{{totalPrice}}</p>
								<p class="wxPay-bot-hint">请使用微信扫描下方二维码完成支付</p>
								<div class="pay-img" id="pay-img"></div>
							</div>
							<p class="wxPay-bot-no">订单号：{{order_num}}</p>
							<p class="wxPay-bot-time">创建时间：{{order_time}}</p>
						</div>
					</div>
					</div>
				</div>
			</div>
	`, beforeRouteEnter(to, from, next) {
		document.title = "微信支付";
		next();
	}, data: function () {
		return {
			totalPrice: 0,
			code_url: "",
			order_num: "",
			order_time: 0,
		};
	}, mounted() {
		this.totalPrice = this.$route.params.totalPrice;
		this.code_url = this.$route.params.code_url;
		this.order_num = this.$route.params.order_num.slice(3);
		this.order_time = this.timeFormat(this.$route.params.order_time);
		$("#pay-img").html("");
		$("#pay-img").qrcode({
			render: "img", //table方式 
			width: 266, //宽度 
			height: 266, //高度 
			text: this.code_url //任意内容 
		});
		// $("#pay-img").show();
	}, methods: {
		back: function () {
			//返回上一页 如需跳转到其他页面 可使用router.push("路径（例: /index）")
			router.go(-1);
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