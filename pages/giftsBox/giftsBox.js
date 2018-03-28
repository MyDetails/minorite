/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const giftsBox = {
	cache: {},
	template: `
			<div class="content">
				<div class="main">
					<div class="gifts-box-logo">
							<img src="http://pe1s.static.pdr365.com/minorite/giftsBox/giftsBox.png" alt="">
					</div>

					<!-- content-nav start -->
					<div class="content-nav">
						<p>
							<span>首页</span> > 
							<span>个人香水</span>
						</p>
					</div>
					<!-- content-nav end -->

					<!-- slide-nav start -->
					<slide-nav></slide-nav>

					<div class="slide-nav-right">
						<ul class="giftsBox-img-list">
							<li v-for="item in giftsBoxImgList" :key="item.goods.id">
								<div class="giftsBox-img">
								<router-link :to="{path: '/goodsDetails', query:{goodsId: item.goods.id}}" style="display:block;">
									<img :src="'http://pe1d.static.pdr365.com/' + item.goods.goods_picturelink_big" alt="">
								</router-link>
								</div>
								<p v-if="item.cat">{{item.cat.catNameEn}}</p>
								<p>{{item.goods.goods_name}}</p>
								<p>¥{{item.goods.goods_price / 100}}</p>
							</li>
						</ul>
						<ul class="page-list">
							<li v-for="(item,index) in pageList"  class="fade-end" :class="currentPage == index ? 'current' : ''" @click="pageActive(index)" :key="item.id">{{index + 1}}</li>
						</ul>
					</div>
					<!-- slide-nav end -->
					
				</div>
		</div>
	`, data: function () {
		return {
			slideSelected: 0,
			slideShow: 0,
			giftsBoxImgList: [
				// {
				// 	id: 0,
				// 	name: "Andree Putman",
				// 	description: "Figue en fleur | 无花之花",
				// 	price: "¥755.00 - 1605.00",
				// 	imgUrl: "http://pe1s.static.pdr365.com/minorite/index/newgoods01.png"
				// },
			],
			classList: ["fade-middle", "fade-end", "show"],
			currentPage: 3
		};
	}, computed: {
		pageList: function () {
			return this.giftsBoxImgList.length;
		}
	}, beforeRouteEnter(to, from, next) {
		//当组件加载时自动调用此函数 函数结尾必须next();
		document.title = "礼盒套装";
		next();
	}, created() {
		//组件加载完成会自动调用此方法
		window.scrollTo(0, 0);
	}, mounted() {
		//获取礼盒套装
		let pk_xb = "tcss.goods.by.cat";
		let url_xb = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_xb + "&cat=411";
		fetch(url_xb)
			.then(r => r.json())
			.then(d => {
				if (d.available) {
					this.giftsBoxImgList = d.obj;
				}
			});
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