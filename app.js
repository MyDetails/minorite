const routes = [
	{ path: '/', component: index },
	{ path: '/bar', component: bar },
	{ path: '/brand', component: brand },
	{ path: '/allBrands', component: allBrands },
	{ path: '/furnitureAroma', component: furnitureAroma },
	{ path: '/giftsBox', component: giftsBox },
	{ path: '/goodsDetails', component: goodsDetails },
	{ path: '/newProducts', component: newProducts },
	{ path: '/offlineArtSpace', component: offlineArtSpace },
	{ path: '/onlineAromaTest', component: onlineAromaTest },
	{ path: '/personalAroma', component: personalAroma },
	{ path: '/testAroma', component: testAroma },
	{ path: '/vipClub', component: vipClub },
	{ path: '/footerSecurity', component: footerSecurity },
	{ path: '/footerSend', component: footerSend },
	{ path: '/footerService', component: footerService },
	{ path: '/footerChange', component: footerChange },
	{ path: '/footerJoin', component: footerJoin },
	{ path: '/footerCooperation', component: footerCooperation },
	{ path: '/profileCar', component: profileCar },
	{ path: '/pay', component: pay },
	{ name: 'wxPay', path: '/wxPay', component: wxPay },
	{ name: 'newsList', path: '/newsList', component: newsList },
	{ name: 'duoshou', path: '/duoshou', component: duoshou },
	{ name: 'newProductsMore', path: '/newProductsMore', component: newProductsMore },
	{ path: '/profileMsg', component: profileMsg },
	{ path: '/profileOrders', component: profileOrders },
	{ path: '/profileCoupons', component: profileCoupons },
	{ path: '/profileLogistics', component: profileLogistics },
	{ path: '/profileCollect', component: profileCollect },
	{ path: '/profileAddress', component: profileAddress },
	{ path: '/profileVip', component: profileVip },

];

const router = new VueRouter({
	routes
});
router.beforeEach((to, from, next) => {
	next();
});



// 注册全局header组件
Vue.component('AppHeader', {
	template: `
						<div>
							<div class="header-block"></div>
									<div class="header index-header">
											<div class="main main-nav">
													<!-- logo -->
													<div class="logo">
															<router-link :to="{path: '/'}">
																	<img src="http://pe1s.static.pdr365.com/minorite/index/logo.png" alt="">
															</router-link>
													</div>
													<!-- nav -->
													<ul class="nav">
															<li class="nav-item" v-for="(item,index) in navList" :class="selected == index ? 'nav-active' : ''" @mouseover="active(index)" @mouseout="hidden(index)" @click="handleRender(item)" :key="item.id">
															<router-link  v-if="item.name" :to="{path:'/' + item.name}">{{item.title}}</router-link>
															<span v-else>{{item.title}}</span>
															<ol v-show="show == index" class="nav-hidden">
																	<li v-for="(childItem,childIndex) in item.childName" :key="childIndex">
																	<router-link v-if="childItem.go" :to="{path: '/' + childItem.go}">
																			{{childItem.title}}
																	</router-link>
																	<router-link v-else :to="{path: '/' + childItem.name, query: {cat: childItem.params}}">
																			{{childItem.title}}
																	</router-link>
																	</li>
															</ol>
															</li>
													</ul>
													
													<div class="search-car"  @mouseout="loginHidden">
														<!-- search -->
														<div class="search-car-icon search" @click="searchRender">
															<Badge>
																<Avatar shape="square" icon="ios-search" size="small" />
															</Badge>
														</div>
														<!-- car -->
														<div class="search-car-icon car"  @click="goCar">
															<Badge dot>
																<Avatar shape="square" icon="ios-cart-outline" size="small" />
															</Badge>
														</div>
														<!-- profile -->
														<div class="search-car-icon profile"  @mouseover="login"  @click="goProfile">
															<Avatar shape="square" icon="ios-person-outline" size="small" />
															<ol v-show="loginShow && loginStatus === 'login'" class="profile-hidden">
																<li @click.stop="loginRender"> 立即登录 </li>
																<li @click.stop="signRender"> 立即注册 </li>
															</ol>
															<ol v-show="loginShow && loginStatus === 'logout'" class="profile-hidden">
																<li @click.stop="goProfile"> 个人中心 </li>
																<li @click.stop="goLogout"> 退出登录 </li>
															</ol>
														</div>
													</div>
											</div>
									</div>

									<!-- onlineAromaTest start -->
									<Modal v-model="modal1" width="1200">
										<!-- <p slot="header" style="color:#f60;text-align:center">
											<Icon type="information-circled"></Icon>
											<span>Delete confirmation</span>
										</p>
										<div style="text-align:center">
											<p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
											<p>Will you delete it?</p>
										</div> -->
										<div class="test-border">
										<div class="test-border-span">即</div>
										<div class="test-border-span">将</div>
										<div class="test-border-span">开</div>
										<div class="test-border-span">启</div>
										<p class="test-border-title">SARS <span>香气自动推荐系统</span></p>
										<p>数据的真实性</p>
										<p>直接影响SARS为你选香</p>
										<button class="start-test-btn" @click="next1">开始测试</button>
										<p>*我们建议首次使用香水的用户直接进入专业推荐系统</p>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div>
							
									</Modal>
									<!-- 第一题 -->
									<Modal v-model="modal2" width="1200">
										<div class="test1-border">
										<p>1. 你想要的香气性别值?</p>
										<span>女性化</span>
										<span>男性化</span>
										<Slider class="test1-slider" v-model="testAromaValue01" :tip-format="format"></Slider>
										<button class="test1-next-btn" @click="next2">下一题</button>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div> 
									</Modal>
									<!-- 第二题 -->
									<Modal v-model="modal3" width="1200">
										<div class="test1-border">
										<p>2. 你使用的香气季节？</p>
										<span>春夏</span>
										<span>秋冬</span>
										<Slider class="test1-slider" v-model="testAromaValue02" :tip-format="format"></Slider>
										<button class="test2-prev-btn" @click="pre1">上一题</button>
										<button class="test1-next-btn" @click="next3">下一题</button>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div> 
									</Modal>
									<!-- 第三题 -->
									<Modal v-model="modal4" width="1200">
										<div class="test1-border">
										<p>3. 你通常什么时候用香水</p>
										<span>白昼</span>
										<span>夜晚</span>
										<Slider class="test1-slider" v-model="testAromaValue03" :tip-format="format"></Slider>
										<button class="test2-prev-btn" @click="pre2">上一题</button>
										<button class="test1-next-btn" @click="next4">下一题</button>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div> 
									</Modal>
									<!-- 第四题 -->
									<Modal v-model="modal5" width="1200">
										<div class="test1-border">
										<p>4. 你从事一本正经的工作么？</p>
										<span>正经</span>
										<span>随意</span>
										<Slider class="test1-slider" v-model="testAromaValue04" :tip-format="format"></Slider>
										<button class="test2-prev-btn" @click="pre3">上一题</button>
										<button class="test1-next-btn" @click="next5">下一题</button>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div> 
									</Modal>
									<!-- 第五题 -->
									<Modal v-model="modal6" width="1200">
										<div class="test6-border">
										<p>5. 你所使用香水的年龄层？</p>
										<span> &lt;18&nbsp;&nbsp;&nbsp;18&nbsp;&nbsp;&nbsp; 25&nbsp;&nbsp; 30 &nbsp;&nbsp;35&nbsp;&nbsp; 40&nbsp;&nbsp; 45&nbsp;&nbsp; 50&nbsp;&nbsp; 55&nbsp;&nbsp;&nbsp;&gt;60 </span>
										<span></span>
										<Slider class="test1-slider test5-slider" v-model="testAromaValue05" :step="10" :tip-format="format"></Slider>
										<button class="test2-prev-btn" @click="pre4">上一题</button>
										<button class="test1-next-btn" @click="next6">下一题</button>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div> 
									</Modal>
									<!-- 第六题 -->
									<Modal v-model="modal7" width="1200">
										<div class="test1-border">
										<p>6. 你的性格？</p>
										<span>内向</span>
										<span>外向</span>
										<Slider class="test1-slider" v-model="testAromaValue06" :tip-format="format"></Slider>
										<button class="test2-prev-btn" @click="pre5">上一题</button>
										<button class="test1-next-btn" @click="next7">下一题</button>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div> 
									</Modal>
									<!-- 第七题 -->
									<Modal v-model="modal8" width="1200">
										<div class="test1-border">
										<p>7. 你希望的香气安全不出错还是出挑而别致？</p>
										<span>安全</span>
										<span>挑战</span>
										<Slider class="test1-slider" v-model="testAromaValue07" :tip-format="format"></Slider>
										<button class="test2-prev-btn" @click="pre6">上一题</button>
										<button class="test1-next-btn" @click="next8">下一题</button>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div> 
									</Modal>
									<!-- 第八题 -->
									<Modal v-model="modal9" width="1200">
										<div class="test9-border">
										<p>8. 你最喜欢的香料？</p>
										<CheckboxGroup class="test9-group" v-model="loveXiang" @on-change="loveXiangChange">
											<Checkbox label="204001">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr.indexOf('204001') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/1moli.jpg" alt="">
												<span>茉莉</span>
												</div>
											</Checkbox>
											<Checkbox label="203007">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr.indexOf('203007') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/2xunyicao.jpg" alt="">
												<span>薰衣草</span>
												</div>
											</Checkbox>
											<Checkbox label="204005">
												<div class="xiangliao" :class="{'xiangliao-active':checkArr.indexOf('204005') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/3baihe.jpg" alt="">
												<span>百合</span>
												</div>
											</Checkbox>
											<Checkbox label="203001">
												<div class="xiangliao" :class="{'xiangliao-active':checkArr.indexOf('203001') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/4meigui.jpg" alt="">
												<span>玫瑰</span>
												</div>
											</Checkbox>
											<Checkbox label="204002">
												<div class="xiangliao" :class="{'xiangliao-active':checkArr.indexOf('204002') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/5chenghua.jpg" alt="">
												<span>橙花</span>
												</div>
											</Checkbox>
											<Checkbox label="205005">
												<div class="xiangliao" :class="{'xiangliao-active':checkArr.indexOf('205005') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/6ziluolanye.jpg" alt="">
												<span>紫罗兰叶</span>
												</div>
											</Checkbox>
											<Checkbox label="205008">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr.indexOf('205008') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/7midiexiang.jpg" alt="">
												<span>迷迭香</span>
												</div>
											</Checkbox>
											<Checkbox label="208016">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr.indexOf('208016') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/8bajiao.jpg" alt="">
												<span>八角</span>
												</div>
											</Checkbox>
											<Checkbox label="205004">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr.indexOf('205004') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/9bohe.jpg" alt="">
												<span>薄荷</span>
												</div>
											</Checkbox>
											<Checkbox label="202019">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr.indexOf('202019') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/10wuhuaguo.jpg" alt="">
												<span>无花果</span>
												</div>
											</Checkbox>
											<Checkbox label="206001">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr.indexOf('206001') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/11guanghuoxiang.jpg" alt="">
												<span>广藿香</span>
												</div>
											</Checkbox>
											<Checkbox label="209001">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr.indexOf('209001') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/12shexiang.jpg" alt="">
												<span>麝香</span>
												</div>
											</Checkbox>
											<Checkbox label="208001">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr.indexOf('208001') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/13xiangcao.jpg" alt="">
												<span>香草</span>
												</div>
											</Checkbox>
										</CheckboxGroup>
										<span class="text9-xiahua">下滑更多</span>
										<span class="text9-tips">*本题为多选</span>
										<button class="test9-prev-btn" @click="pre7">上一题</button>
										<button class="test9-next-btn" @click="next9">下一题</button>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div> 
									</Modal>
									<!-- 第九题 -->
									<Modal v-model="modal10" width="1200">
										<div class="test9-border">
										<p>9. 你最不喜欢的香料？</p>
										<CheckboxGroup class="test9-group" v-model="hateXiang" @on-change="hateXiangChange">
										    <Checkbox label="204001">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('204001') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/1moli.jpg" alt="">
												<span>茉莉</span>
												</div>
											</Checkbox>
											<Checkbox label="203007">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('203007') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/2xunyicao.jpg" alt="">
												<span>薰衣草</span>
												</div>
											</Checkbox>
											<Checkbox label="204005">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('204005') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/3baihe.jpg" alt="">
												<span>百合</span>
												</div>
											</Checkbox>
											<Checkbox label="203001">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('203001') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/4meigui.jpg" alt="">
												<span>玫瑰</span>
												</div>
											</Checkbox>
											<Checkbox label="204002">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('204002') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/5chenghua.jpg" alt="">
												<span>橙花</span>
												</div>
											</Checkbox>
											<Checkbox label="205005">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('205005') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/6ziluolanye.jpg" alt="">
												<span>紫罗兰叶</span>
												</div>
											</Checkbox>
											<Checkbox label="205008">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('205008') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/7midiexiang.jpg" alt="">
												<span>迷迭香</span>
												</div>
											</Checkbox>
											<Checkbox label="208016">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('208016') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/8bajiao.jpg" alt="">
												<span>八角</span>
												</div>
											</Checkbox>
											<Checkbox label="205004">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('205004') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/9bohe.jpg" alt="">
												<span>薄荷</span>
												</div>
											</Checkbox>
											<Checkbox label="202019">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('202019') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/10wuhuaguo.jpg" alt="">
												<span>无花果</span>
												</div>
											</Checkbox>
											<Checkbox label="206001">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('206001') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/11guanghuoxiang.jpg" alt="">
												<span>广藿香</span>
												</div>
											</Checkbox>
											<Checkbox label="209001">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('209001') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/12shexiang.jpg" alt="">
												<span>麝香</span>
												</div>
											</Checkbox>
											<Checkbox label="208001">
												<div class="xiangliao"  :class="{'xiangliao-active':checkArr2.indexOf('208001') !== -1}">
													<img class="xiangliao-img" src="http://pe1s.static.pdr365.com/minorite/onlineAromaTest/13xiangcao.jpg" alt="">
												<span>香草</span>
												</div>
											</Checkbox>
										</CheckboxGroup>
										<span class="text9-xiahua">下滑更多</span>
										<span class="text9-tips">*本题为多选</span>
										<button class="test9-prev-btn" @click="pre8">上一题</button>
										<button class="test9-next-btn" @click="next10">下一题</button>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div> 
									</Modal>
									<!-- 第十题 -->
									<Modal v-model="modal11" width="1200">
										<div class="test10-border">
										<p>10. 你最喜欢的香调？</p>
										<table class=test10-table border="1" cellpadding="0" cellspacing="0">
											<tr v-for="item in fragranceData" :key="item.code">
												<th>{{item.name}}</th>
												<td>
												<CheckboxGroup v-model="huaxiang">
													<Checkbox v-for="child in item.itemList" :key="child.code" :label="child.code" :disabled="disabled">
														<span  @click.stop="cancelChecked(child.code)">{{child.name}}</span>
													</Checkbox>
												</CheckboxGroup>
												</td>
											</tr>
										</table>
										<span class="text9-tips">*本题为多选三项</span>
										<button class="test9-prev-btn" @click="pre9">上一题</button>
										<button class="test9-next-btn" @click="next11">查看结果</button>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div> 
									</Modal>
									<!-- 测试结果 -->
									<Modal v-model="modal12" width="1200">
										<div class="test11-border">
										<p class="test11-border-title">匹配结果</p>
										<ul class="test11-border-content">
											<li v-for="item in recommendData" :key="item.id">
												<div class="test11-item-left">
													<p>匹配指数78</p>
													<p>Andree Putman</p>
													<p>Figue en Fleur</p>
													<p>{{item.goods_name}}</p>
												</div>
												<div class="test11-item-right">
													<a style="display:block;" @click="goGoods(item.id)">
														<img :src="'http://pe1d.static.pdr365.com/' + item.goods_picturelink" alt="">
													</a>
												</div>
											</li>
										</ul>
										<span class="test11-xiahua">下滑更多</span>
										<span class="test11-tips1">*匹配结果仅供参考</span>
										<span class="test11-tips2">我们将依照您的预算与香气库存量推荐合适您的香水</span>
										<button class="test11-rest-btn" @click="restTest">重新测评</button>
										<button class="test11-pay-btn" @click="testPay">自选购买</button>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div> 
									</Modal>
									<!-- onlineAromaTest end -->

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
										<Form ref="signFormInline" :model="signFormInline" :rules="signRuleInline" inline autocomplete="off">
											<FormItem class="sign-input" prop="phoneNumber">
											  <span>+86</span>
												<Input type="text" v-model="signFormInline.mobile" placeholder="手机号码"> </Input>
											</FormItem>
											<FormItem class="sign-input" prop="yzm">
												<span>
												  <img :src="'http://www.minorite.com.cn/common/imgcode/generate/?' + timeStamp" @click="getImgCode" style="height:100%">
												</span>
												<Input type="text" v-model="signFormInline.verify_code" placeholder="输入验证码"></Input>
											</FormItem>
											<FormItem class="sign-input" prop="dxyzm">
												<span v-show="sendCode" @click="getVerifyCode" style="color:#000;">发送验证码</span>
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

									<!-- personal aroma start -->
									<Modal class="modalPersonalAroma" v-model="modalPersonalAroma" width="1100">
										<div class="modalPersonalAroma-container">
											<div class="modalPersonalAroma-left">
												<div class="modalPersonalAroma-title1">
													<p>寻找一款专属于自己的小众香</p>
													<p>小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之<br><br>地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小<br>众之地小众之地小众之地小众之地小众之地小众之地小<br>众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小<br>众之地小众之地小众之地小众之地小众之地小众之地小<br>众之地小众之地小众之地小众之地小众之地</p>
												</div>
												<div class="modalPersonalAroma-title2">
													<p>寻找一款专属于自己的小众香</p>
													<p>小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之地小众之<br><br>之地小众之地小众之地小众之地小众之地小众</p>
												</div>
											</div>
											<div class="modalPersonalAroma-right">
												<div class="circular">
													<!--<ul>
														<li style="transform:rotate(0deg) skew(66deg)">
															<a href="#" style="background-color:#c91f82;"> </a>
															<span style="right:58px;bottom:29px;transform:skew(-66deg) rotate(-90deg)">柔和东方调</span>
														</li>
														<li style="transform:rotate(25.72deg) skew(66deg)">
															<a href="#"  style="background-color:#9a052f;">
															<span style="right:58px;bottom:29px;transform:skew(-66deg) rotate(-116deg)">普通东方调</span>
															</a>
														</li>
														<li style="transform:rotate(51.44deg) skew(66deg)">
															<a href="#"  style="background-color:#b9590d;">
															<span style="right:58px;bottom:29px;transform:skew(-66deg) rotate(-141deg)">木质东方调</span>
															</a
														</li>
														<li style="transform:rotate(77.16deg) skew(66deg)">
															<a href="#"  style="background-color:#c18a3a;">
															<span  style="right:58px;bottom:29px;transform:skew(-66deg) rotate(-167deg)">普通木质调</span>
															</a></li>
														<li style="transform:rotate(102.88deg) skew(66deg)">
															<a href="#"  style="background-color:#43735b;">
															<span style="right:58px;bottom:29px;transform:skew(-66deg) rotate(-191deg)">苔藓木质调</span>
															</a>
														</li>
														<li style="transform:rotate(128.6deg) skew(66deg)">
															<a href="#"  style="background-color:#8c8551;">
															<span style="right:58px;bottom:29px;transform:skew(-66deg) rotate(-219deg)">乾造木质调</span>
															</a>
														</li>
														<li style="transform:rotate(154.32deg) skew(66deg)">
															<a href="#"  style="background-color:#564d82;">
															<span style="right:63px;bottom:32px;transform:skew(-66deg) rotate(-246deg)">芳香调</span>
															</a>
														</li>
														<li style="transform:rotate(180.04deg) skew(66deg)">
															<a href="#"  style="background-color:#ffdd00;">
															<span style="right:75px;bottom:27px;transform:skew(-66deg) rotate(-269deg)">柑橘调</span>
															</a>
														</li>
														<li style="transform:rotate(205.76deg) skew(66deg)">
															<a href="#"  style="background-color:#008fc1;">
															<span style="right:75px;bottom:27px;transform:skew(-66deg) rotate(-292deg)">水香调</span>
															</a>
														</li>
														<li style="transform:rotate(231.48deg) skew(66deg)">
															<a href="#"  style="background-color:#7db955;">
															<span style="right:77px;bottom:29px;transform:skew(-66deg) rotate(-320deg)">绿调</span>
															</a>
														</li>
														<li style="transform:rotate(257.2deg) skew(66deg)">
															<a href="#"  style="background-color:#ec7703;">
															<span style="right:75px;bottom:27px;transform:skew(-66deg) rotate(-347deg)">果香调</span>
															</a>
														</li>
														<li style="transform:rotate(282.92deg) skew(66deg)">
															<a href="#"  style="background-color:#e6352d;">
															<span style="right:75px;bottom:23px;transform:skew(-66deg) rotate(-372deg)">普通花香调</span>
															</a>
															</li>
														<li style="transform:rotate(308.64deg) skew(66deg)">
															<a href="#"  style="background-color:#ea6ea4;">
															<span style="right:75px;bottom:27px;transform:skew(-66deg) rotate(-399deg)">柔和花香</span>
															</a>
														</li>
														<li style="transform:rotate(334.36deg) skew(66deg)">
															<a href="#"  style="background-color:#e2017b;">
															<span style="right:61px;bottom:28px;transform:skew(-66deg) rotate(-64deg)">花香东方调</span>
															</a>
														</li>
													</ul>-->


													<ul>
														<li>
															<a @click="modalGoPersonalAroma('103002')"> <span>柔和东方调</span> </a>
														</li>
														<li>
															<a @click="modalGoPersonalAroma('103003')"> <span>普通东方调</span> </a>
														</li>
														<li>
															<a @click="modalGoPersonalAroma('103004')"> <span>木质东方调</span> </a>
														</li>
														<li>
															<a  @click="modalGoPersonalAroma('104001')"> <span  style="">普通木质调</span> </a></li>
														<li>
															<a  @click="modalGoPersonalAroma('104002')"> <span>苔藓木质调</span> </a>
														</li>
														<li>
															<a  @click="modalGoPersonalAroma('104003')"> <span>干燥木质调</span> </a>
														</li>
														<li>
															<a  @click="modalGoPersonalAroma('101005')"> <span>芳香调</span> </a>
														</li>
														<li>
															<a  @click="modalGoPersonalAroma('101004')"> <span>柑橘调</span> </a>
														</li>
														<li>
															<a  @click="modalGoPersonalAroma('101003')"> <span style="">水香调</span> </a>
														</li>
														<li>
															<a @click="modalGoPersonalAroma('101002')"> <span>绿调</span> </a>
														</li>
														<li>
															<a  @click="modalGoPersonalAroma('101001')"> <span>果香调</span> </a>
														</li>
														<li>
															<a  @click="modalGoPersonalAroma('102001')"> <span>普通花香调</span> </a>
														</li>
														<li>
															<a  @click="modalGoPersonalAroma('102002')"> <span>柔和花香</span> </a>
														</li>
														<li>
															<a  @click="modalGoPersonalAroma('103001')"> <span>花香东方调</span> </a>
														</li>
													</ul>


													<div class="circular-center">
														<p>全世界的精致小众香</p>
														<p>四大调&nbsp; | &nbsp;十四小调</p>
														<p>寻找出一款属于你的小众香</p>
													</div>
												</div>
												<div class="circular-bg"></div>
											</div>
										</div>
										<div slot="footer">
											<!-- <Button @click="next">Delete</Button> -->
										</div> 
									</Modal>
									<!-- personal aroma end -->

									<!-- header search start -->
									<Modal class="header-search" v-model="modalSearch" width="800">
									<div class="modalSearch-container">
										<AutoComplete v-model="search" icon="ios-search" placeholder="请输入关键词" style="width:800px">
											<div class="demo-auto-complete-item" v-for="item in searchData">
												<div class="demo-auto-complete-group">
													<span>{{ item.title }}</span>
													<a  @click="goMore">更多</a>
												</div>
												<Option v-for="option in item.children" :value="option.title" :key="option.title">
													<span class="demo-auto-complete-title">{{ option.title }}</span>
													<span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
												</Option>
											</div>
											<a class="demo-auto-complete-more" @click="goMore">查看所有结果</a>
										</AutoComplete>
									</div>
									<div slot="footer">
										<!-- <Button @click="next">Delete</Button> -->
									</div>
									</Modal>
									<!-- header search end -->
							</div>
						`,
	data: function () {
		return {
			checkArr: [],
			checkArr2: [],
			timeStamp: "",
			sendCode: true,
			auth_time: 0,
			huaxiang: ["0000"],
			loveXiang: ["0000"],
			hateXiang: ["0000"],
			testAromaValue01: 50,
			testAromaValue02: 50,
			testAromaValue03: 50,
			testAromaValue04: 50,
			testAromaValue05: 50,
			testAromaValue06: 50,
			testAromaValue07: 50,

			modal1: false,
			modal2: false,
			modal3: false,
			modal4: false,
			modal5: false,
			modal6: false,
			modal7: false,
			modal8: false,
			modal9: false,
			modal10: false,
			modal11: false,
			modal12: false,
			modalLogin: false,
			modalSign: false,
			modalPersonalAroma: false,

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
				phoneNumber: "",
				yzm: "",
				dxyzm: "",
				password: "",
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
			},

			navList: [
				{
					id: 0,
					name: "newProducts",
					title: "新品上市",
					childName: [
						{ name: "newProducts", params: "0", title: "新品上架" },
						{ name: "newProducts", params: "1", title: "销售排行" }
					]
				},
				{ id: 1, name: "allBrands", title: "所有品牌" },
				{ id: 2, title: "个人香水", clickName: "personalAroma" },
				{
					id: 3,
					name: "furnitureAroma",
					title: "家居香氛",
					childName: [
						{ name: "furnitureAroma", params: "0", title: "香包" },
						{ name: "furnitureAroma", params: "1", title: "喷雾" },
						{ name: "furnitureAroma", params: "2", title: "蜡烛" }
					]
				},
				{ id: 4, name: "giftsBox", title: "礼盒套装" },
				{ id: 5, clickName: "onlineAromaTest", title: "线上香气测评" },
				{ id: 6, name: "offlineArtSpace", title: "线下艺术空间" },
				{
					id: 7,
					title: "优惠活动",
					childName: [
						{ name: "duoshou", go: "duoshou", title: "剁手指南" },
						{ name: "testAroma", go: "testAroma", title: "双周七七" },
						{ name: "testAroma", go: "testAroma", title: "试香包" },
					]
				},
				{ id: 8, name: "vipClub", title: "VIP俱乐部" }
			],
			selected: -1,
			show: -1,
			loginShow: false,
			loginStatus: "",
			domain: "http://www.minorite.com.cn",
			recommendData: [],
			spicesData: [],
			fragranceData: [],
			spicesList: [],
			disabled: false,
			modalSearch: false,
			search: "",
			searchData: [
				{
					title: "香料",
					children: [
						{
							title: "东方木质调",
							count: 10000
						},
						{
							title: "绿调",
							count: 10600
						}
					]
				},
				{
					title: "香料",
					children: [
						{
							title: "薰衣草",
							count: 60100
						},
						{
							title: "玫瑰",
							count: 30010
						}
					]
				},
			],
			huaxiangCheck: [],
		}
	},
	mounted() {
		// let carList = JSON.parse(sessionStorage.getItem('carList'));
		// this.carLength = carList.length;
		this.timeStamp = new Date().getTime();
	},
	methods: {
		loveXiangChange(data) {
			this.checkArr = data;
		},
		hateXiangChange(data) {
			this.checkArr2 = data;
		},
		active(index, show) {
			this.selected = index;
			this.show = index;
		},
		hidden(index) {
			this.selected = -1;
			this.show = -1;
		},
		searchRender() {
			this.modalSearch = true;
			let pk = "";
		},
		goMore() {
			this.modalSearch = false;
			this.$router.push({ path: '/allBrands' });
		},
		handleRender(item) {
			if (item.clickName == "onlineAromaTest") {
				this.$router.push({ path: '/' });
				this.modal1 = true;

				let pk = "tcss.get.all.key ";
				let time = new Date().getTime();
				let url = appset.domain + "/front/ypc/rt?" + time + "&pk=" + pk;
				fetch(url, { credentials: "include" })
					.then(r => r.json())
					.then(d => {
						if (d.available && d.obj.data) {
							this.spicesData = d.obj.data.spices;
							this.fragranceData = d.obj.data.fragrance;
						}
					});
			} else if (item.clickName == "personalAroma") {
				this.modalPersonalAroma = true;
			}
		},
		pre1() {
			this.modal2 = true;
			this.modal3 = false;
		},
		pre2() {
			this.modal3 = true;
			this.modal4 = false;
		},
		pre3() {
			this.modal4 = true;
			this.modal5 = false;
		},
		pre4() {
			this.modal5 = true;
			this.modal6 = false;
		},
		pre5() {
			this.modal6 = true;
			this.modal7 = false;
		},
		pre6() {
			this.modal7 = true;
			this.modal8 = false;
		},
		pre7() {
			this.modal8 = true;
			this.modal9 = false;
		},
		pre8() {
			this.modal9 = true;
			this.modal10 = false;
		},
		pre9() {
			this.modal10 = true;
			this.modal11 = false;
		},
		next1() {
			this.modal1 = false;
			this.modal2 = true;
		},
		next2() {
			this.modal2 = false;
			this.modal3 = true;
		},
		next3() {
			this.modal3 = false;
			this.modal4 = true;
		},
		next4() {
			this.modal4 = false;
			this.modal5 = true;
		},
		next5() {
			this.modal5 = false;
			this.modal6 = true;
		},
		next6() {
			this.modal6 = false;
			this.modal7 = true;
		},
		next7() {
			this.modal7 = false;
			this.modal8 = true;
		},
		next8() {
			this.modal8 = false;
			this.modal9 = true;
		},
		next9() {
			this.modal9 = false;
			this.modal10 = true;
		},
		next10() {
			this.modal10 = false;
			this.modal11 = true;
		},
		next11() {
			this.modal11 = false;
			this.modal12 = true;
			if(this.huaxiangCheck.length > 0) {
				this.huaxiang = this.huaxiangCheck;
			}

			let aromaValueList = [
				this.testAromaValue01,
				this.testAromaValue02,
				this.testAromaValue03,
				this.testAromaValue04,
				this.testAromaValue05,
				this.testAromaValue06,
				this.testAromaValue07
			];
			let aromaValue = aromaValueList.map(v => {
				return v / 100;
			});
			let aromaValueStr = aromaValue.join(";") + ";";
			let loveXiang = this.loveXiang.join() + ";";
			let hateXiang = this.hateXiang.join() + ";";
			let huaxiang = this.huaxiang.join() + ";";

			let pk = "tcss.recommend.perfume";
			let time = new Date().getTime();
			let url =
				appset.domain + "/front/ypc/rt?" +
				time +
				"&pk=" +
				pk +
				"&rules=" +
				aromaValueStr +
				loveXiang +
				hateXiang +
				huaxiang;
			fetch(url, { credentials: "include" })
				.then(r => r.json())
				.then(d => {
					if (d.available && d.obj.success) {
						this.recommendData = d.obj.carddata;
					}
				});
		},
		//重新测试
		restTest() {
			this.modal12 = false;
			this.modal1 = true;
		},
		//购买自选
		testPay() {
			this.modal12 = false;
			this.$router.push({ path: '/allBrands' });
		},
		format(val) {
			return val + "%";
		},
		login() {
			this.loginShow = true;
			let login = this.getCookie('_lac_k_');
			if (login) {
				this.loginStatus = "logout";
			} else {
				this.loginStatus = "login";
			}
		},
		//登录弹窗
		loginRender() {
			this.modalLogin = true;
			this.loginShow = false;
		},
		//注册弹窗
		signRender() {
			this.modalSign = true;
			this.loginShow = false;
		},
		//跳转到注册弹窗
		goSignRender() {
			this.modalLogin = false;
			this.modalSign = true;
		},
		//跳转到登录弹窗
		goLoginRender() {
			this.modalLogin = true;
			this.modalSign = false;
		},
		//隐藏登录弹窗
		loginHidden() {
			this.loginShow = false;
		},
		//点击导航购物车icon跳转到我的购物车
		goCar() {
			let login = this.getCookie('_lac_k_');
			if (login) {
				this.$router.push({ path: '/profileCar' });
			} else {
				this.modalLogin = true;
			};
		},
		//前往个人中心
		goProfile() {
			let login = this.getCookie('_lac_k_');
			if (login) {
				this.$router.push({ path: '/profileMsg' });
			} else {
				this.modalLogin = true;
			};
		},
		//退出登录
		goLogout() {
			this.clearCookie('_lac_k_');
		},
		//设置cookie
		setCookie(name, value, days) {
			var d = new Date();
			d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
			window.document.cookie =
				name + "=" + value + ";path=/;expires=" + d.toGMTString();
		},
		// 获取cookie
		getCookie(name) {
			var v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
			return v ? v[2] : null;
		},
		//清除cookie    
		clearCookie(name) {
			this.setCookie(name, "", -1);
			this.$Message.success('成功退出登录');
			setTimeout(() => {
				this.$router.push({ path: '/' });
			}, 600);
		},
		//用户登录
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
							} else {
								this.$Message.success("登录成功");
								this.modalLogin = false;
								this.setCookie("_lac_k_", token, 3);
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
		//获取短信验证码
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
			fetch(url, { credentials: "include" }).then(r => r.json()).then(d => console.log(d))
		},
		//用户注册
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
							console.log(d);
						});

				} else {
					this.$Message.error("注册失败");
				}
			});
		},
		//选中香气
		cancelChecked(code) {
			let index = this.huaxiangCheck.indexOf(code);
			if (this.huaxiangCheck.length < 3) {
				if (index === -1) {
					this.huaxiangCheck.push(code);
				} else {
					this.huaxiangCheck.splice(index, 1);
				}
			} else if(this.huaxiangCheck.length === 3 || this.huaxiangCheck.length > 3) {
				this.disabled = true;
				if(index !== -1) {
					this.huaxiangCheck.splice(index, 1);	
				}
			}
		},
		//测试结果点击跳转到商品详情页
		goGoods(id) {
			this.modal12 = false;
			this.$router.push({ path: '/goodsDetails', query: { goodsId: id } });
		},
		//个人香水导航
		modalGoPersonalAroma(id) {
			this.modalPersonalAroma = false;
			this.$router.push({ path: '/personalAroma', query: { cat: id } });
		}
	},
	watch: {
		huaxiangCheck() {
			if (this.huaxiangCheck.length > 3) {
				this.disabled = true;
			} else {
				this.disabled = false;
			}
		}
	}
});

// 注册全局footer组件
Vue.component('AppFooter', {
	template: `
					<div>
						<!-- section contact us start -->
						<div class="footer-section">
								<div class="main">
										<div class="section-header"></div>
										<div class="contact-content">
												<div class="contact-content-left">
												<p>服务热线：010-59576375</p>
												<p>服务时间：周一至周五（假期除外）10:30-19:00</p>
												<p><b>特别申明：minorité小众之地正品仅在“minorité小众之地”官网有售</b></p>
												</div>
												<div class="contact-content-right">
												<div class="contact-wechat">
														<div class="wechat-icon">
														<img src="http://pe1s.static.pdr365.com/minorite/index/wechat_icon.png" alt="">
														</div>
														<div class="wechat">
														<img src="http://pe1s.static.pdr365.com/minorite/index/wechat.png" alt="">
														</div>
												</div>
												<div class="contact-weibo">
														<div class="weibo-icon">
														<img src="http://pe1s.static.pdr365.com/minorite/index/weibo_icon.png" alt="">
														</div>
														<div class="weibo">
														<img src="http://pe1s.static.pdr365.com/minorite/index/weibo.png" alt="">
														</div>
												</div>
												</div>
										</div>
								</div>     
						</div>
						<!-- section contact us end -->
						<div class="footer">
								<div class="main">
										<ul class="footer-top">
												<li>
														<img src="http://pe1s.static.pdr365.com/minorite/index/footer-sf.png" alt="">
														<p>400元以上免运费</p>
												</li>
												<li>
														<img src="http://pe1s.static.pdr365.com/minorite/index/footer-note.png" alt="">
														<p>独家代理 品质保证</p>
												</li>
												<li>
														<img src="http://pe1s.static.pdr365.com/minorite/index/footer-plane.png" alt="">
														<p>海外直邮 精致新鲜</p>
												</li>
										</ul>
										<div class="footer-bottom-container">
												<ul class="footer-bottom">
														<li class="footer-bottom-link" v-for="item in footerLink" :key="item.id">
																<router-link :to="{path: '/' + item.name}">{{item.title}}</router-link>
														</li>
												</ul>
												<p>Copyright © minorité小众之地 2018-2017 All Rights Reserved | 浙ICP备16040311号</p>
												<p>minorité小众之地是Perexpo香气博览旗下品牌</p>
										</div>
								</div>
						</div>
					</div>
	`,
	data: function () {
		return {
			footerLink: [
				{ id: 0, name: "footerSecurity", title: "安全和隐私" },
				{ id: 1, name: "footerSend", title: "配送服务" },
				{ id: 2, name: "footerChange", title: "退换货说明" },
				{ id: 3, name: "footerService", title: "服务条款" },
				{ id: 4, name: "footerJoin", title: "加入我们" },
				{ id: 5, name: "footerCooperation", title: "商务合作" }
			],
		}
	},
	methods: {

	}
});

// 注册全局slideNav组件
Vue.component('SlideNav', {
	template: `
			<div>
				<ul class="slide-nav">
					<li class="slide-nav-item" v-for="(item,index) in slideNavList" :key="item.id">
						<p :class="slideSelected == index ? 'slide-nav-active' : ''" @click="clickNav(index)">
							<span v-if="item.childList"> {{item.flag ? "-" : "+"}} </span>
							<router-link v-if="item.name" :to="{path: '/' + item.name}">{{item.title}}</router-link>
							<span v-else>{{item.title}}</span>
						</p>
						<ol v-if="item.flag" class="slide-nav-hidden">
							<li v-for="(childItem,childIndex) in item.childList" :key="childIndex">
								<router-link class="brands-hover" v-if="index==1 && childItem.id" :to="{path: '/brand', query: {brand: childItem.id}}">
									{{childItem.name || childItem.catNameEn}}
								</router-link>
								<p v-if="index==2" :class="childSelected == childIndex ? 'fragrance-nav-active' : ''" @click="childClickNav(childIndex)">
									<span v-if="childItem.sons"> {{clickShow[childIndex] ? "-" : "+"}} </span>
									<span>{{childItem.catNameCn}}</span>
								</p>
								<ol v-if="index==2 && clickShow[childIndex]" class="slide-nav-hidden fragrance-nav">
									<li v-for="(_Item, _Index) in childItem.sons" :key="_Item.id">
										<router-link class="brands-hover" :to="{path: '/personalAroma', query: {cat: _Item.id}}">
											{{_Item.catNameCn}}
										</router-link>
									</li>
								</ol>
								<router-link class="brands-hover" v-else-if="index !=1 && childItem.go" :to="{path: '/' + childItem.go}">
									{{childItem.title}}
								</router-link>
								<router-link class="brands-hover" v-else-if="index !=1 && childItem.params" :to="{path: '/' + childItem.name, query:{cat: childItem.params}}">
									{{childItem.title}}
								</router-link>
							</li>
						</ol>
					</li>
				</ul>
			</div>
	`,
	data: function () {
		return {
			slideSelected: -1,
			childSelected: 0,
			clickArr: [],
			slideNavList: [
				{
					id: 0,
					// name: "newProducts",
					title: "新品上市",
					flag: false,
					childList: [
						{ cid: 1, name: "newProducts", title: "新品上架", params: "0", checked: true },
						{ cid: 2, name: "newProducts", title: "销售排行", params: "1" }
					]
				},
				{
					id: 1,
					// name: "allBrands",
					title: "所有品牌",
					flag: false,
					childList: []
				},
				{
					id: 2,
					// name: "personalAroma",
					title: "个人香水",
					flag: false,
					childList: []
				},
				{
					id: 3,
					// name: "furnitureAroma",
					title: "家居香氛",
					flag: false,
					childList: [
						{ cid: 31, name: "furnitureAroma", title: "香包", params: "0", checked: true },
						{ cid: 32, name: "furnitureAroma", title: "喷雾", params: "1" },
						{ cid: 33, name: "furnitureAroma", title: "蜡烛", params: "2" }
					]
				},
				{
					id: 4,
					name: "giftsBox",
					flag: false,
					title: "礼盒套装"
				},
				{
					id: 5,
					name: "onlieAromaTest",
					flag: false,
					title: "线上香气测试"
				},
				{
					id: 6,
					name: "offlineArtSpace",
					flag: false,
					title: "线下艺术空间"
				},
				{
					id: 7,
					// name: "vipClub",
					title: "优惠活动",
					flag: false,
					childList: [
						{ cid: 71, name: "duoshou", go: "duoshou", title: "剁手指南", checked: true },
						{ cid: 72, name: "testAroma", go: "testAroma", title: "双周七七", },
						{ cid: 73, name: "testAroma", go: "testAroma", title: "试香包", }
					]
				},
				{
					id: 8,
					name: "vipClub",
					flag: false,
					title: "VIP俱乐部"
				}
			]
		}
	},
	computed: {
		clickShow() {
			return this.slideNavList[2].childList.map((item, index) => {
				if (this.clickArr.indexOf(index) === -1) {
					return false;
				} else {
					return true;
				}
			})
		}
	},
	mounted() {
		//获取品牌
		let pk_catgories = "tcss.get.goods.perfume.categories";
		let url_catgories = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_catgories + "&parent=333";
		fetch(url_catgories)
			.then(r => r.json())
			.then(d => {
				let brandList = d.obj.data;
				this.slideNavList[1].childList = brandList;
			});
		//获取香调
		let pk_fragrance = "tcss.get.goods.perfume.categories";
		let url_fragrance = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_fragrance + "&parent=347";
		fetch(url_fragrance, { incredentails: "include" }).then(r => r.json()).then(d => {
			this.slideNavList[2].childList = d.obj.data[d.obj.data.length - 1].sons;
		});
	},
	methods: {
		clickNav(index) {
			this.slideSelected = index;
			this.slideNavList[index].flag = !this.slideNavList[index].flag;
		},
		childClickNav(childIndex) {
			this.childSelected = childIndex;
			let index = this.clickArr.indexOf(childIndex);
			if (index === -1) {
				this.clickArr.push(childIndex);
			} else {
				this.clickArr.splice(index, 1);
			}
		},
	}
});

//注册全局的personalMsg组件
Vue.component('PersonalMsg', {
	template: `
			<div class="personal-msg-container">
				<div class="personal-msg-item-container">
					<div class="personal-msg-item">
						<div class="personal-msg-img">
							<img :src="headImgUrl === '' ||  headImgUrl === null ? 'http://pe1s.static.pdr365.com/minorite/profileMsg/avatar.png' : 'http://pe1d.static.pdr365.com/' + headImgUrl" alt="">
						</div>
						<div class="personal-msg-content">
							<p class="personal-msg-title">{{profileData.nick}}</p>
							<div class="change-pwd">
								<p>
									<router-link :to="{path: '/profileMsg', query: {tabName: 'tab_name_avatar'}}">更换头像</router-link>
								</p>
								<p>
									<router-link :to="{path: '/profileMsg', query: {tabName: 'tab_name_pwd'}}">修改密码</router-link>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="personal-msg-item-container">
					<div class="personal-msg-item">
						<div class="personal-msg-content phone-number">
							<p>minorite账号：<span>{{profileData.nick}}</span></p>
							<p>绑定手机号：<span>{{profileData.phone}}</span></p>
						</div>
					</div>
				</div>
				<div class="personal-msg-item-container">
					<div class="personal-msg-item  address-details">
						<div class="personal-msg-content">
							<p>默认收货地址：</p>
							<p>收&nbsp;&nbsp;货&nbsp;&nbsp;人：<span>{{address.name}}</span></p>
							<p>联系电话：<span>{{address.mobile}}</span></p>
							<!--<p>所&nbsp;&nbsp;在&nbsp;&nbsp;地：<span>北京市 北京市 朝阳区</span></p>-->
							<p style="display:flex;"><span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</span><span>{{address.address}}</span></p>
						</div>
					</div>
				</div>
			</div>
	`,
	data: function () {
		return {
			address: {},
			profileData: {
				nick: "",
				phone: "",
			},
			headImgUrl: "",
		}
	},
	mounted() {
		//获取收货地址
		let pk = "account.get.addresses";
		let url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk;
		fetch(url, { credentials: "include" })
			.then(r => r.json())
			.then(d => {
				if (d.available) {
					this.address = d.obj.data[0];
				}
			});
		//获取个人信息
		let pk_info = "account.info.get";
		let token = this.getCookie("_lac_k_");
		let url_info = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_info + "&token=" + token;
		fetch(url_info, { credentials: "include" })
			.then(r => r.json())
			.then(d => {
				this.profileData.nick = d.obj.nick;
				let str = d.obj.phone + "";
				this.profileData.phone = str.substr(0, 3) + "****" + str.substr(7);
				this.headImgUrl = d.obj.headimgurl;
			})
	},
	methods: {
		// 获取cookie
		getCookie(name) {
			let v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
			return v ? v[2] : null;
		}
	}
})

//注册全局profileNav组件
Vue.component('profileNav', {
	template: `
			<ul class="slide-nav">
				<li class="slide-nav-item" v-for="(item,index) in personalDetails" :key="item.id">
					<p :class="personalSelected == index ? 'slide-nav-active' : ''" @click="clickNav(index)">
						<span v-if="item.childList"> {{personalSelected == index ? "-" : "+"}} </span>
						<router-link v-if="item.name" :to="{path: '/' + item.name}">{{item.title}}</router-link>
						<span v-else>{{item.title}}</span>
					</p>
					<ol v-if="personalSelected == index" class="slide-nav-hidden">
						<li v-for="(childItem,childIndex) in item.childList" :key="childIndex">
							<router-link :to="{path: '/' + childItem.name}">
								{{childItem.title}}
							</router-link>
						</li>
					</ol>
				</li>
			</ul>
	`,
	data: function () {
		return {
			personalSelected: -1,
			personalShow: -1,
			personalDetails: [
				{
					id: 1,
					name: "profileMsg",
					title: "个人信息"
				},
				{
					id: 2,
					// name: "profileOrders",
					title: "我的订单",
					childList: [
						{
							cid: 1,
							name: "profileOrders",
							title: "全部订单",
							imgUrl: "",
							checked: true
						},
						{ cid: 2, name: "profileOrders", title: "待付款", imgUrl: "" },
						{ cid: 3, name: "profileOrders", title: "待发货", imgUrl: "" },
						{ cid: 4, name: "profileOrders", title: "待收货", imgUrl: "" },
						{ cid: 5, name: "profileOrders", title: "已完成", imgUrl: "" }
					]
				},
				{
					id: 3,
					name: "profileVip",
					title: "我的会员"
				},
				{
					id: 4,
					name: "profileCoupons",
					title: "我的优惠券"
				},
				{
					id: 5,
					name: "profileCar",
					title: "我的购物车"
				},
				{
					id: 6,
					name: "profileCollect",
					title: "我的收藏"
				},
				{
					id: 7,
					name: "profileAddress",
					title: "我的地址"
				}
			]
		}
	},
	methods: {
		clickNav(index) {
			this.personalSelected = index;
			this.personalSelected = index;
		}
	}
})

// 实例化vue
const app = new Vue({
	router,
	template: `
	<div id="app">
		<app-header></app-header>
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
	`,
}).$mount('#app');
