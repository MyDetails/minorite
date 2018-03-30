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
			<ul class="banner">
				<li class="banner-li">
					<img class="banner-img" src="http://pe1s.static.pdr365.com/minorite/index/banner0001.png">
				</li>
			</ul>
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
								<img :src="'http://pe1d.static.pdr365.com/' + item.goods.goods_picturelink_big" alt="">
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
							<!--<p class="news-desc">{{item.description}}</p>-->
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
                  <CheckboxGroup v-model="huaxiang" @on-change="checkGroupChange">
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
        
        
	</div>
	`, data: function () {
    return {
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
      recommendData: [],
      spicesData: [],
      fragranceData: [],
      spicesList: [],
      disabled: false
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
        this.newsList = d.obj.carddata.slice(0,3);
      }
    });
    //页面两侧浮动元素
    float();
  }, methods: {
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
            //获取所有香料
            // this.spicesData.forEach(v => {
            //   v.itemList.forEach(val => {
            //     this.spicesList.push(val);
            //   });
            // });
            // console.log(this.spicesList);
            //根据香料名称获取code
            // this.spicesList.forEach(v => {
            //   if(v.name == '香草') {
            //     console.log(v);
            //   }
            // });
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
    //查看选中香气
    checkGroupChange(data) {
    //   this.huaxiangArr = data;
    //   console.log(this.huaxiangArr);
    },
    //取消选中香气
    cancelChecked(code) {
    //   if (this.huaxiangArr.length > 3) {
    //     this.disabled = true;
        
    //   } 
    //   this.huaxiang.forEach((v, i) => {
    //     console.log(v, code);
    //     if (code == v) {
    //       this.huaxiang_code = code;
          
    //     }
    //   });
      
    //   console.log(this.huaxiang);
    },
    goGoods(id) {
      this.modal12 = false;
      this.$router.push({ path: '/goodsDetails', query: { goodsId: id } });
    }

  }
}