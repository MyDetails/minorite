const myFavorite = {
	template: `
	<transition name="slide-fade"><!-- 想要使用入场动画时添加此标签  动画样式可以写在组件css或者app.css中-->
	<div class="myFavorite"><!-- 固定 容器-->
		<div class="myFavorite-box">
			<div class="myFavorite-list">
				<img class="myFavorite-list-img" src="">
				<div class="myFavorite-list-bot">
					<p class="myFavorite-list-bot-title">Apsu | 阿卜苏</p>
					<p class="myFavorite-list-bot-fg"></p>
					<p class="myFavorite-list-bot-pay">立即抢购</p>
				</div>
				<img class="myFavorite-list-img-x" src="">
			</div>
			<div class="myFavorite-list">
				<img class="myFavorite-list-img" src="">
				<div class="myFavorite-list-bot">
					<p class="myFavorite-list-bot-title">Apsu | 阿卜苏</p>
					<p class="myFavorite-list-bot-fg"></p>
					<p class="myFavorite-list-bot-pay">立即抢购</p>
				</div>
				<img class="myFavorite-list-img-x" src="">
			</div>
			<div class="myFavorite-list">
				<img class="myFavorite-list-img" src="">
				<div class="myFavorite-list-bot">
					<p class="myFavorite-list-bot-title">Apsu | 阿卜苏</p>
					<p class="myFavorite-list-bot-fg"></p>
					<p class="myFavorite-list-bot-pay">立即抢购</p>
				</div>
				<img class="myFavorite-list-img-x" src="">
			</div>
			<div class="myFavorite-list">
				<img class="myFavorite-list-img" src="">
				<div class="myFavorite-list-bot">
					<p class="myFavorite-list-bot-title">Apsu | 阿卜苏</p>
					<p class="myFavorite-list-bot-fg"></p>
					<p class="myFavorite-list-bot-pay">立即抢购</p>
				</div>
				<img class="myFavorite-list-img-x" src="">
			</div>
		</div>
	</div>
	</transition>
	`,beforeRouteEnter(to, from, next){
		document.title="我的收藏";
		next();
	},created(){
	},methods:{
		back:function(){
			//返回上一页 如需跳转到其他页面 可使用router.push("路径（例: /index）")
			router.go(-1);
		}
	}
}