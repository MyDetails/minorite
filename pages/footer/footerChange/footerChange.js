/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const footerChange = {
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
                  <span>退换货说明</span>
              </p>
          </div>
          <!-- conent-nav end -->

          <div class="title">
              <h3>退换货说明</h3>
          </div>

          <!-- word-space start -->
          <div class="word-space">
              <h4>特别声明</h4>
              <pre>
1:由于香水，蜡烛等是特殊物品，若非快递途中破损，漏液，其它理由发货后恕不更换。<br />
2:若商品出现破损，漏液，请于签收后三日内或者确认收货之前及时反馈，若签收超过三日或货物已经确认收货，由于无法判定原因则无法进行退换处理。<br />
3:签收后七日内发现快递错发，请您不要拆封商品，拍照并联系客服，客服会安排退还货，若商品被拆封则无法进行退换货。<br />
4:若由于客户地址或者联系方式等原因导致商品无法派送而退回，则客户需要承担清关费用以及运费，我们会在退款中扣除。<br />
              </pre>
              <h4>退货流程</h4>
              <pre>
1.签收快递时请您当面验货，若有破损，漏液现象请您直接拒签。<br />
2.若不能当面验收，拆开包裹后发现货物异常，请您拍照并联系客服，客服会为您审核处理。<br />
3.您的申请通过审核后，客服人员将提供您寄回商品的地址，您应尽快将商品连同赠品、配件等以确保商品不受损坏的方式寄回给我们，并请务必在快递单上注明您的订单号或将minorité 发货单放入包裹中；
4.物流中心收到商品，检查后符合条件的，我们将在3-7个工作日内将款项退回您原来支付的银行账户或支付宝帐户中。<br />
#关于退货运费：
若是因质量或者错发问题导致的退货， minorité会承担运送产生的费用。请客户在退回商品时先垫付运费（仓库不接受到付快件），并将运费发票与商品一起寄回，我们会按实际金额将运费退还给您（最高限额为30元人民币）。
              </pre>
              <h4>换货流程</h4>
              <pre>
minorité只接受由于错发导致换货的需求 。在您签收商品之后的7日内，若发现商品错发，请及时拍照并反馈给客服，客服会提供给您退回商品的地址，您应尽快将商品连同赠品、配件等以确保商品不受损坏的方式寄回给我们，我们会在收到货物并确认没有拆封及损坏后安排重新发正确的商品给您。
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
        document.title = "退换货说明";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0,0);
    }, methods: {


    }
}