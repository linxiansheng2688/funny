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

    //视频参数 video
    // 标题 text
    //图片 thumbnail
    // 时间 passtime
    
    let html = "";
    var page = 1,tmp=[],flags=true;
    let $container = $(".J-video-container");
    function initData(page){
        $.ajax({
            url:"https://api.apiopen.top/getJoke",
            type:"post",
            data:{
                page:page,
                count:4,
                type:"video"
            },
            success:function (data) {
                // console.log(data)
                  if(data.code == 200){
                      const datas = data.result;
                      datas.map(function (item,index) {
                          // console.log(item,index)
                          html+='<div class="list-video J-tap-video" data-url="'+item.video+'"> <div class="ui-full-img video-img"> <img src="'+item.thumbnail+'" alt=""></div> <p class="title ui-nowrap-2">'+item.text+'</p> <p class="timer">'+item.passtime+'</p></div>'
                      })
                      $container.html(html)
                      
                  }
           
            }
  
        })
    }
    initData(page);

    let $moreBtn = $(".J-tap-page");
    $moreBtn.on("click",function(){
      flags ? initData(++page) : '';
    });

    var video1 = document.getElementById("videoPlay1"),//获取视频元素
        J_video_pop =   $(".J-video-pop"),
        clsoe_btn = $(".J-close-btn");

    $container.on("click",".J-tap-video",function(){
        console.log();
        $('#videoPlay1').attr("src",$(this).attr("data-url"));
        $('#videoPlay1').attr("type",$(this).attr("data-url"))
        J_video_pop.show();
        $('#videoPlay1').show();//视频展示
        video1.play();//视频播放
       
        video1.onended = function() {//视频播放结束执行的函数
            $('#videoPlay1').hide();//视频隐藏
            video1.pause();
            J_video_pop.hide();
        };
    });

    clsoe_btn.on("click",function(){
        $('#videoPlay1').hide();//视频隐藏
        J_video_pop.hide();
        video1.pause();
    })

    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // window.location.href = "https://linxiansheng2688.github.io/funny/funny/";
        return true;
    } else {
        // window.location.href = "http://news.baidu.com/";
    }
})