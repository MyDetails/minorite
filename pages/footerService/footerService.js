/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const footerService = {
    cache: {},
    template: `
    <div>
    <div class="content">
      <div class="main">
          <!-- content-nav start -->
          <div class="content-nav footer-nav-content">
              <p>
                  <span>首页</span> >
                  <span>服务条款</span>
              </p>
          </div>
          <!-- conent-nav end -->

          <div class="title">
              <h3>服务条款</h3>
          </div>

          <!-- word-space start -->
          <div class="word-space">
              <pre>
感谢您访问minorité小众之地。<br />
您访问和使用网站以及相关服务（合称“服务”）须遵从以下服务条款以及网站所载的其他规定和政策，包括隐私政策（合称“服务条款”）。一旦您使用服务（包括但不限于对本网站的访问、登录，对本网站内容的浏览网站和在网站下订单），即表示您同意所有服务条款。您如果不接受或不同意服务条款，应当立即停止使用服务。
您承认并同意，我们可根据隐私政策收集、使用、储存及披露您提供的任何个人资料。
本协议并不承认您和minorité之间存在任何关系（合伙、合作、雇用或其他关系），亦不使您有权成为minorité代表。
minorité保留在任何时候修订网站或服务条款任何部分的权利。请不时访问本网页以查核对服务条款任何部分（包括上述规定和政策及隐私政策）所作的任何更新或修订。
如果您对网站或本服务条款有任何意见，请联系我们。
              </pre>
              <h4>网站使用</h4>
              <pre>
为了使用网站向您提供的部分服务，您将需要注册一个帐户。在您注册帐户及使用网站时，您同意（在必要情况下）提供关于您个人的真实、准确、最新并完整的资料。请参阅我们的隐私政策以了解我们使用您个人资料的情况。
我们决不会查问您的帐户密码，不论是以书面（包括电邮等形式）、亲身还是电话方式。您在使用网站时，您应负责保护您访问帐户及我们服务所用的密码，并且对所有通过您的帐户使用服务的行为负责。请采取合理审慎措施以保护您的帐户不被盗用。如果您怀疑您帐户的安全已受到损害或有人盗用您的帐户，请立即联系我们。
minorité有限许可您在您的计算机设备上浏览（使用）本网站展示的内容（由本使用条款第2条规定）。在您信守本使用条款的前提下，您可以有限使用本网站的相关内容，但仅允许作为您私人的非商业目的之使用。
              </pre>
              <h4>禁止及违规事项</h4>
              <pre>
如发生下述情况，我们可以针对您的帐户采取行动，这些情况包括但不限于：<br />
• 通过非本公司指定的方法使用本网站。<br />
• 使用任何技术来掩饰使用多重帐户或以任何方式干扰我们的服务的行为。<br />
• 使用本服务进行营业、以营利为目的或者以营利准备为目的的行为。本公司另行认可的情况除外。<br />
• 收集其他用户的个人信息或类似的行为。<br />
• 侵害个人隐私权的行为，以及侵害他人特许权、设计权、创新权、商标权、著作权、肖像权等行为。<br />
• 发出的通讯中包含任何违法、有害、具威胁性、谩骂、骚扰、诽谤、粗俗、猥亵、亵凟、仇视，或者在种族、道德或其他方面令人反感的内容。<br />
• 刊登广告或未经对方要求发送任何形式的信息。<br />
• 冒充他人或提供任何形式的虚假信息。<br />
• 奖励及助长犯罪等行为。<br />
• 侵害本公司机密、有形或无形财产、名誉及信用的行为。<br />
在未经事先通知的情况下，minorité有权自行判断并立即终止您对本网站的使用，或者采取措施禁止您对本网站的再次访问。
              </pre>
              <h4>知识产权声明</h4>
              <pre>
本网站，所有的内容（“内容”的定义包括但不限于，文字、内容、软件、录像、音乐、声音、图形、照片、图表、美术设计、图片、名称、标识、商标和/或服务标志等）均为minorité的知识产权，并受到版权法，商标法和一切知识产权公约的保护。您同意遵守所有适用本网站的版权保护法律法规，以及所有本网站包含的补充性的版权说明或限制。
Minorité小众之地以及本网站所有标注有“R”或“TM”的品牌或标志，均为Minorité小众之地（或Minorité小众之地其他关联公司，或Minorité小众之地经许可使用的产品供应商）的注册商标。在未经Minorité小众之地或Minorité小众之地（或相关权利人）授权同意前，您无权使用上述的商标和名称，且不享有任何权利和利益。 本网站的任何内容都不应被视为授予任何人使用本网站所显示的商标及其他知识产权的许可或权力。除非在本使用条款的适用范围内，一切对本网站商标或其他内容的使用（或误用）都将被严格禁止。在法律许可的最大范围内，Minorité小众之地将积极保护其知识产权，包括诉诸刑事法律。
              </pre>

              <h4>第三方链接</h4>
              <pre>
网站可能包含一些通向并非由minorité营运或准备的其他网站或资源的连接。我们无法控制该等网站和资源，而且我们对其不承担任何责任，对于您使用它们所造成的或指称造成的或者与其有关的任何损失或损害，我们均不负责。
minorité不就任何外部网站网页（包括但不限于本网站的广告商）的内容或准确性负责。使用该等外部网站或资源的风险将由您自行承担，并须遵从各网站内载列的使用及服务条款。
              </pre>
              <h4>产品说明</h4>
              <pre>
minorité将努力确保网站中的内容及产品说明尽可能准确、完整。但我们不保证“内容”和产品说明准确、完整、未过期或无错误。如果您认为minorité提供的任何产品与说明不符，请参阅我们的退货政策。
              </pre>
              <h4>定价</h4>
              <pre>
您所访问的是minorité向中国大陆地区（不包括香港特别行政区、澳门特别行政区和台湾）的官方网站，中国网站中得产品均以人民币定价，商品的价格包含了增值税，商品运费则另外结算，运费会根据用户选择送货方式不同而异。
虽然我们尽力确保网站上所示的所有价格均属准确，但我们并不保证价格一概无误，并且保留纠正任何错误的权利。如果我们发现您订购的任何产品的价格出错，我们将尽快通知您，并且让您选择重新确认或取消订单。如果我们无法与您联系，我们会将订单视作取消处理。
              </pre>
              <h4>付款</h4>
              <pre>
我们接受支付宝，微信和银联在线付款的在线支付方式。
一旦您利用上述信用/借记卡付款方式之一下达订单，即表示确认您所使用的信用/借记卡为您个人所有，或者是您已获信用/借记卡所有人授权使用。如果您的信用/借记卡发行机构拒绝授权向minorité付款，我们将不就任何交货延误或不交货承担责任。
如果您用中国银联帐户付款，款项将在下订单时即时扣除。若是您用支付宝拍下商品，请务必在2小时内完成支付，2小时后未支付的订单系统将自动取消。
我们的付款程序符合支付卡行业制订的严格国际安全标准，使您在安全及有保障的情况下享受购物的乐趣。如果您已在本网站开立注册帐户，您的资料将被充分加密且安全地储存于我们的系统内。除非是我们本身的疏忽，否则如果任何第三方擅自查阅您在使用我们的服务时提供的任何资料，我们将不就您可能蒙受的任何损失承担责任。
              </pre>
              <h4>您的订单</h4>
              <pre>
minorité保留自行酌情决定因任何原因拒绝接受订单的权利。这些原因包括（但不限于）以下各项：<br />
• 您订购的产品缺货，或者是产品因未能符合我们的质量标准或者因适用于一项或所有订购物品的装运限制而被撤回。<br />
• 我们发现存在定价或产品说明方面的错误。<br />
• 您未在规定时间之内支付货款。<br />
• 送货地址不明导致本商品无法实行递送。<br />
• 我们无法取得付款授权。<br />
• 用户违法本规则的条款。<br />
如果有任何关于您的订单的任何问题，我们的客户服务团队将尽快与您联系。
              </pre>
              <h4>免责声明</h4>
              <pre>
在法律允许的最大限度内，本网站及本网站的内容不包括任何明确或暗示的有关（但不限于）所有权，适销性，质量满意程度，特定用途的适用性，产品参数的准确性、时效性和完整性，不侵犯知识产权和其它方权利的承诺。
minorité尽其合理的商业努力维护本网站的安全和功能，但不保证本网站上的所有功能正常运作，也不保证本网站连续性地或无故障运行或缺陷被及时更正。
minorité不保证本网站系统适合您的电脑操作系统性能，也不保证本网站或其服务器永不产生故障或没有病毒、木马程序和其他有害程序。minorité亦不承担您因上述问题而产生的任何电脑的损坏的责任。minorité不为您所使用的访问本网站的网络线路和设备的可靠性以及连续性承担责任。
若发生以下任何情况，minorité无须事先通知用户即有权通过自行判断进行一时中断或停止本服务的一部分或全部服务，且无须对用户或第三方遭受的损失承担任何责任：<br />
• 对本服务的设备、系统进行维修、定期或临时更新本服务。<br />
• 发生如火灾、停电、天灾、恐怖袭击等不可抗力而导致无法正常提供本服务。<br />
• 基本电力通讯事业者无法执行任务。<br />
• 其他由于技术原因而导致本公司需要一时中断或停止本服务、或者发生不可预测之严重事态而导致无法正常提供本服务。
              </pre>
              <h4>违约责任承担</h4>
              <pre>
对于因您违反本服务条款而产生的所有责任、索赔、开支、损害赔偿和损失（包括法律费），您同意一旦经我们要求，即向我们，即minorité（包括其高级管理人员、董事、代理、关联公司、许可人和供应商）作出充分的赔偿，并且使我们免受伤害。这包括任何其他人因您的作为或不作为而利用您的帐户使用网站的行为。
如果您违反服务条款，但我们并未向您采取任何行动，这并不表示我们在您违反服务条款的任何其他情况下放弃行使我们的权利和补救措施。
              </pre>
              <h4>条约的更新与变更</h4>
              <pre>
minorité提供的本网站上的内容仅为方便您获取信息，minorité有权单方面在任何时间，对本网站的内容进行变更、修改、添加或删除本声明，此种变更或更新无需以通知您或任何第三方为前提。您承认并接受上述变更或更新。我们建议您定期访问本网站以尽快获知有关的更新或变更的信息。
              </pre>
              <h4>适用法律和司法管辖地</h4>
              <pre>
本声明受中华人民共和国法律管辖，因此各方均应服从中国法院的非排他性司法管辖。如果声明的部分条款失效，它将不影响其余条款的有效性和可执行性。失效条款将由其他具有法律效力的有效规则取代
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
        document.title = "服务条款";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0,0);
    }, methods: {


    }
}