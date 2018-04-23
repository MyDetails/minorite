/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const index = {
  cache: {},
  template: `
	<div><!-- 固定 容器-->
		<!-- banner start -->
		<div class="banner-container">
			<!--<ul class="banner">
				<li class="banner-li">
					<img class="banner-img" src="http://pe1s.static.pdr365.com/minorite/index/banner0001.png">
				</li>
      </ul>-->
      <Carousel v-model="bannerValue" radius-dot autoplay :autoplay-speed="bannerSetting.autoplaySpeed" :arrow="bannerSetting.arrow" :easing="bannerSetting.easing">
        <CarouselItem>
            <div class="demo-carousel">
              <img class="banner-img" src="http://pe1s.static.pdr365.com/minorite/index/banner0001.png">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" @click="couponsShow">
              <img class="banner-img" src="http://pe1s.static.pdr365.com/minorite/index/banner0002.png" style="cursor:pointer;">
            </div>
        </CarouselItem>
    </Carousel>
		</div
		<!-- banner end -->

		<div class="content">
			<!-- section new goods start -->
			<div class="section main">
				<div class="section-header">
					<div class="section-title">
						<div class="section-title-left">
							<p>新品上架</p>
							<p>New Arrivals</p>
						</div>
						<div class="section-title-right">
							<p>销售排行</p>
							<p>Top 10</p>
						</div>
					</div>
					<div class="more">
						<router-link :to="{path: '/newProducts'}">更多>></router-link>
					</div>
				</div>
				<div class="new-goods-container main" style="position:relative;">
					<ul class="new-goods-list">
						<li class="new-goods-item" v-for="item in newGoodsList" :key="item.goods.id">
							<router-link :to="{path: '/goodsDetails', query: {goodsId: item.goods.id}}">
								<img :src="'http://pe1d.static.pdr365.com/' + item.goods.goods_picturelink_big" alt="" style="height:100%;">
							</router-link>
              <div class="new-goods-details">
                <p v-if="item.cat" class="new-goods-name">{{item.cat.catNameEn || item.cat.catNameCn}}</p>
                <p class="new-goods-desc">{{item.goods.goods_name}}</p>
								<p class="new-goods-price">¥{{item.goods.goods_price / 100}}</p>
							</div>
						</li>
          </ul>
          
          <div class="slide slide_left">
              <div class="parallax-item index-parallax-item-top" data-speed="0.2"> 
                <img src="http://pe1s.static.pdr365.com/minorite/index/index_float_01.png">
              </div>
              <div class="parallax-item index-parallax-item-bottom" data-speed="0.2"> 
                <img src="http://pe1s.static.pdr365.com/minorite/index/index_float_03.png">
              </div>
          </div>
          <div class="slide slide_right">
              <div class="parallax-item index-parallax-item-center" data-speed="0.2"> 
                <img src="http://pe1s.static.pdr365.com/minorite/index/index_float_02.png">
              </div>
          </div>

				</div>
			</div>
			<!-- section new goods end -->
			<!-- section aroma test start -->
			<div class="section main">
				<div class="section-header">
					<div class="section-title">
						<div class="section-title-left">
							<p>线上香气测评</p>
							<p>SARS test</p>
						</div>
					</div>
				</div>
				<div class="aroma-content" @click="handleRender">
					<a>
						<img src="http://pe1s.static.pdr365.com/minorite/index/aromatest.png" alt="">
					</a>
        </div>
        
      

			</div>
			<!-- section aroma test end -->

			<!-- section news start -->
			<div class="section main">
				<div class="section-header">
					<div class="section-title">
						<div class="section-title-left">
							<p>香气新鲜报</p>
							<p>News</p>
						</div>
					</div>
					<div class="more">
						<router-link :to="{path: '/newsList'}">更多>></router-link>
					</div>
				</div>
				<div class="news-content">
					<ul class="news-list">
						<li class="news-list-item" v-for="item in newsList" :key="item.id">
							<a :href="'http://www.minorite.com.cn/front/brand/info/?' + Date.parse(new Date()) + '&dlid=' + item.id" style="display:block;">
								<img :src="'http://pe1d.static.pdr365.com/' + item.imgUrl" alt="" style="height:100%;">
							</a>
							<p class="news-desc">{{item.title}}</p>
						</li>
					</ul>
				</div>
			</div>
			<!-- section news end -->

			<!-- section exclusive agent start -->
			<div class="section main">
				<div class="section-header">
					<div class="section-title">
						<div class="section-title-left">
							<p>独代品牌</p>
							<p>Exclusive Agent</p>
						</div>
					</div>
				</div>
				<div class="agent-content">
					<ul class="agent-list">
						<li class="agent-item" v-for="item in agentList" :key="item.id"  v-if="item.id">
              <router-link :to="{path: '/brand', query: {brand: item.id}}">
                <img :src="'http://pe1d.static.pdr365.com/' + item.catIcon" alt="">
              </router-link>
						</li>
					</ul>
        </div>

			</div>
			<!-- section exclusive agent end -->
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
                  <a @click="goGoods(item.id)" style="display:block;">
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

        <!-- 领取优惠券 开始 -->
        <Modal class="modal-get-coupons" v-model="get_coupons" width="1200">
           <div class="get-coupons">
              <ul class="coupons-list">
                <li v-for="item in coupons_list" :key="item.id" :class="item.getStatus ? 'coupons-item-active' : ''">
                  <span>¥<b>{{item.cr.crval / 100}}</b></span>
                  <span>{{item.info}}</span>
                  <span v-if="item.validatePeriod !== '0'">有效期至:{{item.validatePeriod}}</span>
                  <span v-else>永久有效</span>
                  <input type="button" :disabled="item.getStatus" @click="getCoupons(item.id, item.couponNo)" :value="item.getStatus ? '已领取' : '立即领取'"></input>
                </li>
                
                <!--<li class="coupons-item-active">
                  <span>¥<b>1000</b></span>
                  <span>指定香水优惠券</span>
                  <span>有效期:4.30-5.30</span>
                  <input type="button" disabled="disabled" value="已领取"></input>
                </li>-->

              </ul>
           </div>
           <div slot="footer">
              <!-- <Button @click="next">Delete</Button> -->
          </div> 
        </Modal>
        <!-- 领取优惠券 结束 -->

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
      checkArr: [],
      checkArr2: [],
      huaxiangArr: [],
      huaxiang_code: "",
      bannerList: [
        { id: 0, name: "banner01", imgUrl: "http://pe1s.static.pdr365.com/minorite/index/banner01.png" },
        { id: 1, name: "banner02", imgUrl: "http://pe1s.static.pdr365.com/minorite/index/banner01.png" },
        { id: 2, name: "banner03", imgUrl: "http://pe1s.static.pdr365.com/minorite/index/banner01.png" },
        { id: 3, name: "banner04", imgUrl: "http://pe1s.static.pdr365.com/minorite/index/banner01.png" }
      ],
      newsList: [],
      newGoodsList: [],
      agentList: [],
      mark: 0,
      currentBanner: "",
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
            // min: 6,
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
      },
      recommendData: [],
      spicesData: [],
      fragranceData: [],
      spicesList: [],
      disabled: false,
      huaxiangCheck: [],
      bannerValue: 0,
      bannerSetting: {
        autoplaySpeed: 5000,
        easing: 'ease',
        arrow: 'never',
      },
      get_coupons: false,
      coupons_list: [],
      person_coupons: [],
    };
  }, beforeRouteEnter(to, from, next) {
    //当组件加载时自动调用此函数 函数结尾必须next();
    document.title = "minorité小众之地—全世界的精致小众香";
    next();
  }, created() {
    //组件加载完成会自动调用此方法
    window.scrollTo(0, 0);
  }, mounted() {
    //获取品牌
    let pk = "tcss.get.goods.perfume.categories&parent=333";
    let time = new Date().getTime();
    let url = appset.domain + "/front/ypc/rt/?" + time + "&pk=" + pk;
    fetch(url)
      .then(r => r.json())
      .then(d => {
        this.agentList = d.obj.data;
      });

    //获取销售排行
    let pk2 = "tcss.goods.by.cat";
    let url2 = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk2 + "&cat=358";
    fetch(url2)
      .then(r => r.json())
      .then(d => {
        this.newGoodsList = d.obj.slice(0, 5);
      });

    //获取新闻列表
    let pk_news = "tcss.get_docs";
    let url_news = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_news;
    fetch(url_news).then(r => r.json()).then(d => {
      if (d.available) {
        this.newsList = d.obj.carddata.slice(0, 3);
      }
    });

    //页面两侧浮动元素
    float();
  }, methods: {
    // 获取cookie
    getCookie(name) {
      var v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
      return v ? v[2] : null;
    },
    //设置cookie
    setCookie(name, value, days) {
      var d = new Date();
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
      window.document.cookie =
        name + "=" + value + ";path=/;expires=" + d.toGMTString();
    },
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
    //领取优惠券
    getCoupons(id, couponNo) {
      let token = this.getCookie("_lac_k_");
      if (token) {
        let pk = "coupon.group.pub";
        let bid = couponNo;
        // let sn = "1498201310156";
        let url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&bid=" + bid + "&token=" + token;
        fetch(url).then(r => r.json()).then(d => {
          console.log(d);
        });
      } else {
        this.get_coupons = false;
        this.modalLogin = true;
      }
    },
    //优惠券弹窗
    couponsShow() {
      //获取系统优惠券列表
      let pk_coupons = "tcss.get.coupons.list";
      let url_coupons = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_coupons;
      let login = this.getCookie("_lac_k_");
      fetch(url_coupons).then(r => r.json()).then(d => {
        if (d.available) {
          this.coupons_list = d.obj.data;
          //获取用户优惠券列表
          if (this.coupons_list.length !== 0) {
            if (login) {
              let pk_person_coupons = "tcss.account.coupons";
              let token = login;
              let url_person_coupons = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk_person_coupons + "&statuses=10" + "&token=" + token;
              fetch(url_person_coupons).then(r => r.json()).then(d => {
                if (d.available && d.obj) {
                  this.person_coupons = d.obj;
                  for (let i = 0; i < this.person_coupons.length; i++) {
                    for (let j = 0; j < this.coupons_list.length; j++) {
                      if (this.coupons_list[j].id === this.person_coupons[i].batch.id) {
                        this.coupons_list[j].getStatus = true;
                      } else {
                        this.coupons_list[j].getStatus = false;
                      }
                    }
                  }
                  this.get_coupons = true;
                } else {
                  this.get_coupons = true;
                }
              });

            } else {
              this.get_coupons = true;
            }
          } else {
            this.$Message.info('暂无优惠券，请随时关注活动');
          }
        }
      });

    },
    loveXiangChange(data) {
      this.checkArr = data;
    },
    hateXiangChange(data) {
      this.checkArr2 = data;
    },
    handleRender() {
      this.modal1 = true;
      //获取香料和香调
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
      if (this.huaxiangCheck.length > 0) {
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
      let url = appset.domain + "/front/ypc/rt?" + time + "&pk=" + pk + "&rules=" + aromaValueStr + loveXiang + hateXiang + huaxiang;
      fetch(url, { credentials: "include" })
        .then(r => r.json())
        .then(d => {
          if (d.available && d.obj.success) {
            this.recommendData = d.obj.carddata;
          }
        });
    },
    restTest() {
      this.modal12 = false;
      this.modal1 = true;
    },
    testPay() {
      this.modal12 = false;
      this.$router.push({ path: '/allBrands' });
    },
    format(val) {
      return val + "%";
    },
    //取消选中香气
    cancelChecked(code) {
      let index = this.huaxiangCheck.indexOf(code);
      if (this.huaxiangCheck.length < 3) {
        if (index === -1) {
          this.huaxiangCheck.push(code);
        } else {
          this.huaxiangCheck.splice(index, 1);
        }
      } else if (this.huaxiangCheck.length === 3 || this.huaxiangCheck.length > 3) {
        this.disabled = true;
        if (index !== -1) {
          this.huaxiangCheck.splice(index, 1);
        }
      }
    },
    goGoods(id) {
      this.modal12 = false;
      this.$router.push({ path: '/goodsDetails', query: { goodsId: id } });
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
}