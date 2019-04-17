// lin 4/16 create

$(function () {
    // let 有块级作用域 可再次赋值
    // var  全局变量 无块级作用域 可再次赋值
//    const 有块级作用域 不可再次赋值 声明要赋值
// 选择链接
    let $navs = $(".J-good-list li");
    var flag = true;

    $navs.on("click", function () {
        if (flag) {
            flag = false;
            let that = $(this);
            that.addClass("good-active").siblings("").removeClass("good-active");
            setTimeout(function () {
                $(".J-pop-toast").hide();
                flag = true;
            }, 1300)
            $(".J-pop-toast").show();
            $(".toast-msg").text("待开发")
        }
    });

    //playUrl  视频参数
    //图片 cover.feed
    //详情 description
    //跳转 webUrl.forWeibo
    let html = "";
    let $container = $(".J-video-container");
    (function () {
      $.ajax({
          url:"https://api.apiopen.top/todayVideo",
          type:"post",
          data:{},
          success:function (data) {
              const datas = data.result;
              datas.map(function (item,index) {
                  // console.log(item,index)
                  if(item.data.content == undefined){

                  }else{
                      console.log(item.data.content.data)
                      html+='<div class="list-video"><a href="'+ item.data.content.data.webUrl.forWeibo+'" class="ui-flex">   <div class="ui-full-img video-img ui-avatar-head" style="background-image: url('+item.data.content.data.cover.feed+')"></div> <div class="ui-cell-1 video-msg-text"> <p class="ui-nowrap-3">'+item.data.content.data.description+'</p></div></a></div>'
                  }
              })
              $container.html(html)
          }

      })
    }())

})