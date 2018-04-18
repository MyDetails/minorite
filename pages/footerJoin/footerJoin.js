/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const footerJoin = {
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
                  <span>加入我们</span>
              </p>
          </div>
          <!-- conent-nav end -->

          <div class="title">
              <h3>加入我们</h3>
          </div>

          <!-- word-space start -->
            <div class="word-space">
                <h4>财务主管（北京）/ Finance Director(BeiJing)</h4>
                <p class="title-verb">主要指责 / Main Responsibilities</p>
                <pre>
1. 负责总公司及子公司的财务、成本、预算、会计核算及财务分析等方面的工作，及时、准确按公司的要求提供各类报表和分析及报表合并；
2. 建立和完善财务管理制度和相关工作程序；
3. 与银行、工商、税务等部门建立并保持良好的关系。
                </pre>
                <p class="title-verb">任职资格 / Experience / Education required</p>
                <pre>
1. 熟悉电商及跨境电商领域者优先，具备扎实的财务会计专业知识，3年以上财务管理工作经验，财经类本科以上学历；
2. 熟悉国家财税相关法律、法规和财务会计信息系统；
3. 有较强组织协调能力，风险意识强，作风严谨，严守机密，坚持原则；
                </pre>
                <p class="title-verb">薪资 / salary</p>
                <pre>8-12k</pre>

                <br />
                <br />
                <h4>供应链总监助理（上海）/ Assistant supply chain assistant(ShangHai)</h4>
                <p class="title-verb">主要职责/Main Responsibilities</p>
                <pre>
1. 协助供应链总监完成供应链管理的良性互动，并完成海外品牌的文书管理、资料汇整工作；
2. 跟进主要货品的品牌供货进度，保证货品的到货时间，对多品牌多线头管理有经验；
3. 协助供应链总监建立与品牌的良好合作关系，定期与品牌进行沟通；
4. 出色的英文读写水皮，精通商务谈判用语精通法语者优先。 
                </pre>
                <p class="title-verb">任职资格 / Experience / Education Required</p>
                <pre>
1. 英文读写能力强，精通商务英语，流利的英文邮件和电话会议沟通，海外留学背景优先；
2. 逻辑清晰，具有良好的协调能力和学习能力，勤奋努力；
3. 较强的总结提炼能力和推动能力，心思细腻，注重细节。
                </pre>
                <p class="title-verb">薪资 / salary</p>
                <pre>6-12k</pre>
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
        document.title = "加入我们";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0,0);
    }, methods: {


    }
}