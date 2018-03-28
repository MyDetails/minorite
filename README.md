vue  https://cn.vuejs.org/
weui  https://weui.io/   
weui-github  https://github.com/weui/weui
添加一个页面步骤  此处 以 "test" 为例
	1、在pages下创文件夹 test
	2、在新建的文件夹下面创建 test.js test.css
	3、编辑test.js 以 const test = {...开头  避免js开发中出现与页面（组件）名相同的变量
	4、app.html head结尾处追加引入test.css样式表
	5、app.html body结尾处追加引入test.js脚本
	6、app.js routes变量中添加页面     { path: '/test', component: test }  path为路径 component名称 首页路径为"/"

首页

app.setting.js 常规信息  非必须使用
pdr.js 票大人工具  现支持发ajax ajax跨域请求


如果需要使用其他 js类库 样式表 直接app.html 添加  注意顺序   原文件可以放在resources中 