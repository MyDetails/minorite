/**
 * 组件
 * 请避免js开发中出现与组件名称相同的变量
 */
const profileMsg = {
    cache: {},
    template: `
            <div class="content">
                <div class="header-block"></div><!-- 导航栏占位符 -->
                <!-- profile-msg start -->
                <div class="profileMsg-content main">
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
                    <!-- profile-msg end-->

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
                        <Tabs :animated="false" type="card" :value="tabName">
                            <TabPane label="个人信息" name="tab_name_msg">
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
                            <TabPane label="修改密码" name="tab_name_pwd">
                                <div class="personal-msg">
                                    <Form :model="formRight" label-position="right" :label-width="100">
                                        <FormItem label="原密码：">
                                            <Input type="password" v-model="formRight.input6"></Input>
                                        </FormItem>
                                        <FormItem label="新密码：">
                                            <Input type="password" v-model="formRight.input7" @on-change="changePwd" placeholder="请输入6-16位字符"></Input>
                                        </FormItem>
                                        <FormItem>
                                            <Button type="default" :class="pwd_level === 'low' ? 'bg-red' : '' ">弱</Button>
                                            <Button type="default" :class="pwd_level === 'middle' ? 'bg-orange' : '' ">中</Button>
                                            <Button type="default" :class="pwd_level === 'high' ? 'bg-green' : '' ">强</Button>
                                        </FormItem>
                                        <FormItem label="确认新密码：">
                                            <Input type="password" v-model="formRight.input8"></Input>
                                        </FormItem>
                                        <FormItem class="personal-msg-btn">
                                            <Button type="primary" @click="handleSubmitPwd()">提交</Button>
                                        </FormItem>
                                    </Form>
                                </div>
                            </TabPane>
                            <TabPane label="更换头像" name="tab_name_avatar">
                                <div class="personal-msg-tips">
                                    您上传的头像会自动生成三种尺寸，请注意中小尺寸是否清晰
                                </div>
                                <div class="demo-avatar change-avatar">
                                    <Avatar :src="qkey === '' ? 'http://pe1s.static.pdr365.com/minorite/profileMsg/avatar.png' : 'http://pe1d.static.pdr365.com/' + qkey" shape="square" size="large" />
                                    <Avatar :src="qkey === '' ? 'http://pe1s.static.pdr365.com/minorite/profileMsg/avatar.png' : 'http://pe1d.static.pdr365.com/' + qkey" shape="square" />
                                    <Avatar :src="qkey === '' ? 'http://pe1s.static.pdr365.com/minorite/profileMsg/avatar.png' : 'http://pe1d.static.pdr365.com/' + qkey" shape="square" size="small" />
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
                               <!--提交按钮 开始-->
                                    <Button type="primary" @click="confirmAvatar" style="width:80px;height:38px;color:#fff;font-size:14px;background-color:#04593f;border-color:#04593f;margin-top:24px;margin-left:170px;">提交</Button>
                                <!--提交按钮 结束-->
                                
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
                input7: "",
                input8: "",
            },
            formItem: {
                radio: "1"
            },
            qkey: "",
            token: "",
            phone: "",
            tabName: "tab_name_msg",
            address: {},
            profileData: {
                nick: "",
                phone: "",
            },
            headImgUrl: "",
            pwd_level: "",
        };
    }, beforeRouteEnter(to, from, next) {
        //当组件加载时自动调用此函数 函数结尾必须next();
        document.title = "个人中心";
        next();
    }, created() {
        //组件加载完成会自动调用此方法
        window.scrollTo(0, 0);
    }, mounted() {
        //获取收货地址
        let pk = "account.get.addresses";
        let url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk;
        fetch(url, { credentials: "include" })
            .then(r => r.json())
            .then(d => {
                if (d.available) {
                    this.info_list = d.obj;
                    this.address_list = d.obj.data;
                    d.obj.data.forEach(v => {
                        if (v.def) {
                            this.address = v;
                        }
                    });
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
        this.container_big();
        tabName = this.$route.query.tabName;
        if (tabName) {
            this.tabName = tabName;
        } else {
            this.tabName = "tab_name_msg";
        }
    }, methods: {
        // 获取cookie
        getCookie(name) {
            let v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
            return v ? v[2] : null;
        },
        handleSubmit(name) {
            //提交个人信息
            let pk = "account.info.update";
            let nick = this.formRight.input1;
            let namecn = this.formRight.input2;
            let userno = this.formRight.input3;
            let sex = this.formItem.radio;
            let token = this.getCookie("_lac_k_");
            this.token = token;
            if (nick !== '' && namecn !== '' && userno.length > 17) {
                let url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&nick=" + nick + "&namecn=" + namecn + "&userno=" + userno + "&sex=" + sex;
                fetch(url, {
                    method: "POST",
                    credentials: "include"
                }).then(r => r.json()).then(d => {
                    if (d.available) {
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
                        this.$Message.success("保存成功");
                    } else {
                        this.$Message.error("保存失败");
                    }
                });
            } else {
                this.$Message.error("请填写正确的个人信息");
            }
        },
        //修改密码
        handleSubmitPwd() {
            if (this.formRight.input6 && this.formRight.input7 && this.formRight.input8) {
                let pk = "account.info.passwd.modify";
                let token = myCookie.getCookie('_lac_k_');
                let url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&org_passwd=" + this.formRight.input6 + "&new_passwd=" + this.formRight.input8 + "&token=" + token;
                fetch(url, { incredentails: "include" }).then(r => r.json()).then(d => {
                    console.log(d);
                    if(d.available && d.obj.success) {
                        this.$Message.success('修改密码成功，请重新登录');
                        myCookie.clearCookie('_lac_k_');
                        setTimeout(() => {
                            this.$router.push({path: '/'});
                        }, 2000);
                    } else {
                        this.$Message.error('修改密码失败');
                    }
                })
            } else {
                this.$Message.error('修改密码失败')
            }

        },
        changePwd() {
            let reg1 = /^[0-9]{6,16}$/; //弱密码
            let reg2 = /^[0-9A-Za-z]{6,16}$/; //中密码
            let reg3 = /^(?=.{6,16})[0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*$/; //强密码
            // let reg4 = /^(?=.{6,16})([0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*){2,}$/; //超级强密码
            let val = this.formRight.input7;
            if (reg1.test(val) || val.length > 0 && val.length < 6) {
                this.pwd_level = "low";
            } else if (reg2.test(val)) {
                this.pwd_level = "middle";
            } else if (reg3.test(val)) {
                this.pwd_level = "high";
            } else {
                this.pwd_level = "";
            }
        },
        //确认密码
        // checkPwd() {
        //     if(this.formRight.input8 !== this.formRight.input7) {

        //     }
        // },

        // 获取cookie
        getCookie(name) {
            let v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
            return v ? v[2] : null;
        },
        //确认上传头像
        handleSubmitAvatar() {

        },
        //个人中心上传头像
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
                                this.qkey = res.key;

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
        },
        confirmAvatar() {
            //获取用户头像
            var pk = "account.info.avatar";
            var url = appset.domain + "/front/ypc/rt/?" + Date.parse(new Date()) + "&pk=" + pk + "&headimg=" + this.qkey + "&token=" + this.token;
            fetch(url, { credentials: "include" }).then(r => r.json()).then(d => {
                if (d.available) {
                    this.headImgUrl = d.obj.headimgurl;
                    this.$Message.success('上传头像成功');
                }
            });
        }
    },
    watch: {
        $route() {
            tabName = this.$route.query.tabName;
            if (tabName) {
                this.tabName = tabName;
            } else {
                this.tabName = "tab_name_msg";
            }
        }
    }
}