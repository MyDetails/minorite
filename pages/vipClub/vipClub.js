/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const vipClub = {
    cache: {},
    template: `
        <div class="content">
            <div class="header-block"></div><!-- 导航栏占位符 -->
            <div class="main" style="position:relative;">
                <!-- content-nav start -->
                <div class="content-nav footer-nav-content">
                    <p>
                        <span>首页</span> >
                        <span>VIP俱乐部</span>
                    </p>
                </div>
                <!-- conent-nav end -->

                <div class="title">
                    <h3>VIP俱乐部</h3>
                </div>

                <!-- word-space start -->
                <div class="word-space">

                    <h4>VIP积分规则</h4>

                    <pre>
1:由于香水，蜡烛等是特殊物品，若非快递途中破损，漏液，其它理由发货后恕不更换。<br />
<br />
2:若商品出现破损，漏液，请于签收后三日内或者确认收货之前及时反馈，若签收超过三日或货物已经确认收货，由于无法判定原因则无法进行退换处理。<br />
<br />
3:签收后七日内发现快递错发，请您不要拆封商品，拍照并联系客服，客服会安排退还货，若商品被拆封则无法进行退换货。<br />
<br />
4:若由于客户地址或者联系方式等原因导致商品无法派送而退回，则客户需要承担清关费用以及运费，我们会在退款中扣除。<br />
<br />
                    </pre>



                    <h4>VIP会员等级规则</h4>

                    <pre>
1.签收快递时请您当面验货，若有破损，漏液现象请您直接拒签。<br />
<br />
2.若不能当面验收，拆开包裹后发现货物异常，请您拍照并联系客服，客服会为您审核处理。<br />
<br />
3.您的申请通过审核后，客服人员将提供您寄回商品的地址，您应尽快将商品连同赠品、配件等以确保商品不受损坏的方式寄回给我们，并请务必在快递单上注明您的订单号或将minorité 发货单<br />
<br />
放入包裹中；<br />
<br />
4.物流中心收到商品，检查后符合条件的，我们将在3-7个工作日内将款项退回您原来支付的银行账户或支付宝帐户中。<br />
<br />
#关于退货运费：
若是因质量或者错发问题导致的退货， minorité会承担运送产生的费用。请客户在退回商品时先垫付运费（仓库不接受到付快件），并将运费发票与商品一起寄回，我们会按实际<br />
<br />
金额将运费退还给您（最高限额为30元人民币）。
                    </pre>
                    <h4>换货流程</h4>
                    <pre>
minorité只接受由于错发导致换货的需求 。在您签收商品之后的7日内，若发现商品错发，请及时拍照并反馈给客服，客服会提供给您退回商品的地址，您应尽快将商品连同赠品、配件等以确保商<br />
<br />
品不受损坏的方式寄回给我们，我们会在收到货物并确认没有拆封及损坏后安排重新发正确的商品给您。
                    </pre>
                </div>
                <!-- word-space end -->

                <!--浮动元素开始-->
                <div class="slide slide_left">
                    <div class="parallax-item vc-parallax-item-l-c" data-speed="0.2" style="top:200px;"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/newProducts/float_left_1.png" style="height:580px;">
                    </div>
                </div>
                <div class="slide slide_right">
                    <div class="parallax-item vc-parallax-item-r-c" data-speed="0.2" style="top:0;"> 
                        <img src="http://pe1s.static.pdr365.com/minorite/newProducts/newProducts_float_02.png">
                    </div>
                </div>
                <!--浮动元素结束-->

                </div>
            </div>
	`, data: function () {
        return {

        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "VIP俱乐部";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0,0);
    }, mounted() {
        //页面两侧浮动元素
        float();
    }, methods: {


    }
}