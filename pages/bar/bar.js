const bar = {
	template: `
	<transition name="slide-fade"><!-- 想要使用入场动画时添加此标签  动画样式可以写在组件css或者app.css中-->
	<div><!-- 固定 容器-->
		<a href="javascript:void(0)" v-on:click="back">返回</a>
		<div>内容区</div>
	</div>
	</transition>
	`,beforeRouteEnter(to, from, next){
		document.title="功能";
		next();
	},created(){
	},methods:{
		back:function(){
			//返回上一页 如需跳转到其他页面 可使用router.push("路径（例: /index）")
			router.go(-1);
		}
	}
}