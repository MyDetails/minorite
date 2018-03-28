/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const profileMsg = {
    cache: {},
    template: `
            <div class="content">
                <div class="profileMsg-content main">
                    <personal-msg></personal-msg>

                    <!-- content-nav start -->
                    <div class="content-nav profileMsg-content-nav">
                        <p>
                            <span>首页</span> > 
                            <span>个人中心</span>
                        </p>
                    </div>
                    <!-- content-nav end -->

                    <!-- slide-nav start -->
                    <profile-nav></profile-nav>
                    <!-- slide-nav end -->

                    <div class="profileMsg-box">
                        <Tabs :animated="false" type="card">
                            <TabPane label="个人信息">
                                <div class="personal-msg">
                                    <Form :model="formRight" label-position="right" :label-width="100">
                                        <FormItem label="昵称：">
                                            <Input v-model="formRight.input1"></Input>
                                        </FormItem>
                                        <FormItem label="真实姓名：">
                                            <Input v-model="formRight.input2"></Input>
                                        </FormItem>
                                        <FormItem label="身份证号：">
                                            <Input v-model="formRight.input3"></Input>
                                        </FormItem>
                                        <FormItem label="称谓：">
                                            <RadioGroup v-model="formItem.radio">
                                                <Radio label="1">先生</Radio>
                                                <Radio label="2">女士</Radio>
                                            </RadioGroup>
                                        </FormItem>
                                        <FormItem class="personal-msg-btn">
                                            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                                        </FormItem>
                                    </Form>
                                </div>
                            </TabPane>
                            <TabPane label="修改密码">
                                <div class="personal-msg">
                                    <Form :model="formRight" label-position="right" :label-width="100">
                                        <FormItem label="原密码：">
                                            <Input v-model="formRight.input6"></Input>
                                        </FormItem>
                                        <FormItem label="新密码：">
                                            <Input v-model="formRight.input7"></Input>
                                        </FormItem>
                                        <FormItem>
                                            <Button type="default">弱</Button>
                                            <Button type="default">中</Button>
                                            <Button type="default">强</Button>
                                        </FormItem>
                                        <FormItem label="确认新密码：">
                                            <Input v-model="formRight.input8"></Input>
                                        </FormItem>
                                    </Form>
                                </div>
                            </TabPane>
                            <TabPane label="更换头像">
                                <div class="personal-msg-tips">
                                    您上传的头像会自动生成三种尺寸，请注意中小尺寸是否清晰
                                </div>
                                <div class="demo-avatar change-avatar">
                                    <Avatar :src="headImgUrl === '' ? 'http://pe1s.static.pdr365.com/minorite/profileMsg/avatar.png' : 'http://pe1d.static.pdr365.com/' + headImgUrl" shape="square" size="large" />
                                    <Avatar :src="headImgUrl === '' ? 'http://pe1s.static.pdr365.com/minorite/profileMsg/avatar.png' : 'http://pe1d.static.pdr365.com/' + headImgUrl" shape="square" />
                                    <Avatar :src="headImgUrl === '' ? 'http://pe1s.static.pdr365.com/minorite/profileMsg/avatar.png' : 'http://pe1d.static.pdr365.com/' + headImgUrl" shape="square" size="small" />
                                </div>

                                <!-- 上传按钮 开始 -->
                                <!-- <Upload action="//jsonplaceholder.typicode.com/posts/" style=""> -->
                                <div id="ceshi" style="width:340px;">
                                    <Button class="upload-btn" id="container_big" @click="container_big" type="ghost" icon="image">选择照片</Button>
                                    <!-- <a class="" id="container_big" href="#" > -->
                                        <div class="personal-msg-upload-tips">支持jpg、png、jpeg格式，文件小于2M</div>
                                    <!-- </a> -->
                                </div>
                                <!-- </Upload> -->
                               <!-- 上传按钮 结束-->
                                
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
	`, data: function () {
        return {
            formRight: {
                input1: "",
                input2: "",
                input3: "",
                input4: "",
                input5: "",
                input6: "",
            },
            formItem: {
                radio: "1"
            },
            qkey: "",
            token: "",
            headImgUrl: "",
            phone: "",
        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "个人中心";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, mounted() {
        this.container_big();
    }, methods: {
        handleSubmit(name) {
            //提交个人信息
            let pk = "account.info.update";
            let nick = this.formRight.input1;
            let namecn = this.formRight.input2;
            let userno = this.formRight.input3;
            let sex = this.formItem.radio;
            let token = this.getCookie("_lac_k_");
            this.token = token;
            let url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&nick=" + nick + "&namecn=" + namecn + "&userno=" + userno + "&sex=" + sex;
            fetch(url, {
                method: "POST",
                credentials: "include"
            }).then(r => r.json()).then(d => {
                if (d.available) {
                    this.$Message.success("保存成功");
                } else {
                    this.$Message.success("保存失败");
                }
            });
        },
        // 获取cookie
        getCookie(name) {
            let v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
            return v ? v[2] : null;

        },
        container_big() {
            var qiniu_uptoken_url = appset.domain + "/third/qiniu/get_uptoken?" + Date.parse(new Date());
            var uptoken = "";

            var big_times = 0;
            var small_times = 0;
            var middle_times = 0;

            $.get(qiniu_uptoken_url, {}, (data) => {
                if (data.available) {
                    uptoken = data.obj;

                    var uploader_big = Qiniu.uploader({
                        runtimes: 'html5,flash,html4',    //上传模式,依次退化
                        browse_button: 'container_big',       //上传选择的点选按钮，**必需**
                        //uptoken_url: '/token',
                        //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                        uptoken: uptoken,
                        //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                        unique_names: true,
                        // 默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
                        // save_key: true,
                        // 默认 false。若在服务端生成uptoken的上传策略中指定了 sava_key，则开启，SDK在前端将不对key进行任何处理
                        domain: 'http://pe1d.static.pdr365.com',
                        //bucket 域名，下载资源时用到，**必需**
                        container: 'ceshi',           //上传区域DOM ID，默认是browser_button的父元素，
                        max_file_size: '100mb',           //最大文件体积限制
                        flash_swf_url: 'http://7xnqme.com1.z0.glb.clouddn.com/Moxie.swf',  //引入flash,相对路径
                        max_retries: 3,                   //上传失败最大重试次数
                        dragdrop: true,                   //开启可拖曳上传
                        drop_element: 'container_big',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                        chunk_size: '4mb',                //分块上传时，每片的体积
                        auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                        init: {
                            'FilesAdded': (up, files) => {
                                plupload.each(files, function (file) {
                                    // 文件添加进队列后,处理相关的事情
                                });
                            },
                            'BeforeUpload': (up, file) => {
                                // 每个文件上传前,处理相关的事情
                            },
                            'UploadProgress': (up, file) => {
                                // 每个文件上传时,处理相关的事情
                                // big_times = layer.load("正在上传");
                            },
                            'FileUploaded': (up, file, info) => {
                                // 每个文件上传成功后,处理相关的事情
                                // 其中 info 是文件上传成功后，服务端返回的json，形式如
                                // {
                                //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                                //    "key": "gogopher.jpg"
                                //  }
                                var domain = up.getOption('domain');
                                var res = eval('(' + info + ')');
                                var sourceLink = domain + "/" + res.key; //获取上传成功后的文件的Url
                                // $("#goods_picturelink_big_img").attr("src", sourceLink);
                                // $("#goods_picturelink_big_img").attr("width", "120px");
                                // $("#goods_picturelink_big_img").attr("height", "150px");
                                // $("#goods_picturelink_big").val(res.key);

                                //获取用户头像
                                this.qkey = res.key;
                                var pk = "account.info.avatar";
                                var url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&headimg=" + this.qkey + "&token=" + this.token;
                                fetch(url, { credentials: "include" }).then(r => r.json()).then(d => {
                                    if (d.available) {
                                        this.headImgUrl = d.obj.headimgurl;
                                    }
                                });
                            },
                            'Error': function (up, err, errTip) {
                                console.log('Error')
                                //上传出错时,处理相关的事情
                                // layer.msg(errTip, {icon: 2});
                                // layer.close(big_times);
                            },
                            'UploadComplete': function () {
                                console.log('UploadComplete')
                                //队列文件处理完毕后,处理相关的事情
                                // layer.close(big_times);
                            },
                            'Key': function (up, file) {
                                // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                                // 该配置必须要在 unique_names: false , save_key: false 时才生效
                                var key = "";
                                // do something with key here
                                return key
                            }
                        }
                    });
                }
            });
        }
    }
}