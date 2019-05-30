
$(function () {
    var $personal = $(".J-personal");

    //取得系统当前时间
    var  getTime = function(){
        var myDate = new Date();
        var date = myDate.toLocaleDateString();
        var hours = myDate.getHours();
        var minutes = myDate.getMinutes();
        var seconds = myDate.getSeconds();
        $("#showDate").html(date+" "+hours+":"+minutes+":"+seconds); //将值赋给div
    }
    setInterval(getTime,1000); //每隔一秒运行一次
$(".data-timer").addClass("ani-data-right")
})