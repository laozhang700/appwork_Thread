/**
 * @Author : 13626456502
 * @Timestamp : 2018-08-12
 */
var nf = sm("do_Notification");
var btn_hello = ui("btn_hello");

var M0176_Thread=sm("M0176_Thread");
//三标准化处理 按键退出系统 开始---------------------------
var app = sm("do_App");
var page = sm("do_Page");
page.on("back", function(){
	app.closePage();
});



btn_hello.on("touch", function() {
	//nf.alert("Hello World !!!!!");
	deviceone.print("开始等待");
	M0176_Thread.sleep(3000);
	deviceone.print("等待结束");
});



