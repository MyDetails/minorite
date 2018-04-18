/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const footerSend = {
    cache: {},
    template: `
    <div>
    <div class="content">
        <div class="header-block"></div><!-- 导航栏占位符 -->
      <div class="main">
          <!-- content-nav start -->
          <div class="content-nav footer-nav-content">
              <p>
                  <span>首页</span> >
                  <span>配送服务</span>
              </p>
          </div>
          <!-- conent-nav end -->

          <div class="title">
              <h3>支付与配送</h3>
          </div>

          <!-- word-space start -->
          <div class="word-space">
              <h4>关于支付</h4>
              <p class="title-verb">支付方式</p>
              <pre>
我们支持网上支付（包括支付宝、微信和银联在线支付）。
              </pre>
              <table border="1" cellspacing="0" width="600" height="206" style="text-align:center;font-weight:bold;margin:0 0 20px;">
                  <tr>
                    <th rowspan="4" style="font-size:16px;">在线支付</th>
                    <th style="font-size:16px;">支付方式</th>
                    <th style="font-size:16px;">支付货币</th>
                  </tr>
                  <tr>
                      <td style="font-size:14px;">支付宝</td>
                      <td style="font-size:14px;" rowspan="3">人民币</td>
                  </tr>
                  <tr>
                      <td style="font-size:14px;">微信</td>
                  </tr>
                  <tr>
                      <td style="font-size:14px;">银联</td>
                  </tr>
              </table>
              <p class="title-verb">
                  友情提示：<br />
                  • 订单支付期限：您若使用支付宝拍下商品，请在2个小时内完成支付您的订单；<br />我们无法帮尚未完成付款的订单商品保留库存。<br />
                  • 若由于网络故障导致您已支付的订单未改变订单状态，请联系我们的客服人员为您解决。
              </p>
              <h4>关于配送</h4>
              <p class="title-verb">
                  配送费用
              </p>
              <pre>购物满四百元包邮（偏远地区除外）</pre>
              <p class="title-verb">
                  配送时间
              </p>
              <pre>
• 周一至周五正常发货，双休日不发货。果丁节假日发货时间另行通知。<br />
• 在核对顾客收件地址无误后，若无特殊情况，货品将在1-2个工作日内将订单商品发出； 
              </pre>
              <p class="title-verb">
                  配送状态
              </p>
              <pre>
订单发货后，我们会将配送信息录入您的账户，您可以随时根据运单号查询物流配送状态。
              </pre>
              <table border="1" cellspacing="0" width="600" height="206" style="text-align:center;font-weight:bold;margin:0 0 20px;">
                  <tr style="font-size:14px;font-weight:bold;">
                      <th style="font-weight:bold;">配送费用</th>
                      <th style="font-weight:bold;">在线支付预估送抵时间</th>
                      <th style="font-weight:bold;">支付货币</th>
                  </tr>
                  <tr>
                      <td rowspan="2">满400元包邮</td>
                      <td>香港：预计发货后两周左右到货，<br />部分时间清关较慢，时间可能延长</td>
                      <td rowspan="2">顺丰<br />EMS<br />中通<br /></td>
                  </tr>
                  <tr>
                      <td>北京：发货后3-7天</td>
                  </tr>
              </table>
              <p class="title-verb">
                  友情提示
              </p>
              <pre>
以上的送抵时间仅供参考，实际的送抵时间请以快递公司提供的信息为准。 
              </pre>
              
          </div>
          <!-- word-space end -->

        </div>
    </div>
</div>
	`, data: function () {
        return {

        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "配送服务";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, methods: {


    }
}