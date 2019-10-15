// lin 4/16 create

$(function () {
    // let 有块级作用域 可再次赋值
    // var  全局变量 无块级作用域 可再次赋值
    //const 有块级作用域 不可再次赋值 声明要赋值

    // 初始列表
    var dataList = {
        data:[
                {name:'2048',url:'./Game_2048/index.html',icon:'https://iconfont.alicdn.com/t/1557371281179.jpg@100h_100w.jpg'},
                {name:'疯狂影视',url:'http://ifkdy.com/',icon:'https://iconfont.alicdn.com/t/1557371281179.jpg@100h_100w.jpg'},
                {name:'遇见工具',url:'https://met.red/',icon:'https://iconfont.alicdn.com/t/1557371281179.jpg@100h_100w.jpg'},
                {name:'音乐',url:'./music/index.html',icon:'https://iconfont.alicdn.com/t/1557371281179.jpg@100h_100w.jpg'},
                {name:'每日推荐',url:'./daily/index.html',icon:'https://iconfont.alicdn.com/t/1557371281179.jpg@100h_100w.jpg'},
                {name:'LIN-TV',url:'http://b0bc6f5747b9adc1.free.webt.top/',icon:'https://iconfont.alicdn.com/t/1557371281179.jpg@100h_100w.jpg'},
                {name:'1',url:'javascript:void(0)',icon:'https://iconfont.alicdn.com/t/1557371281179.jpg@100h_100w.jpg'},
                {name:'开发者信息',url:'my/index.html',icon:'https://iconfont.alicdn.com/t/1557371281179.jpg@100h_100w.jpg'}
            ]
    };

    (function(){
        let tmp = "",$menu = $(".J-menu");

        dataList.data.forEach((item,index)=>{
                tmp+='<a href="'+item.url+'" class="nav-list ani-touch-scale"><div class="ui-full-img nav-icon"><img src="'+item.icon+'" alt=""></div><p class="ui-text-center nav-list-text">'+item.name+'</p></a>'
        });
        $menu.html(tmp);
        $menu.on("click",".nav-list:last",function(){
        
          var word = prompt("开发者名称","");
          if(word =="林剑"){
             
           }else{
               return false;
           }
       
        });
    }());

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
        $("#loading").show();
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
                          html+='<div class="list-video J-tap-video" data-url="'+item.video+'"> <div class="ui-full-img video-img"> <img src="'+item.thumbnail+'" alt=""></div> <p class="title ui-nowrap-2">'+item.text+'</p> <p class="timer"><span>作者：'+item.name+'</span></p></div>'
                      })
                      $("#loading").hide();
                      $container.html(html)
                  }
           
            }
  
        })
    };
    initData(page);

    // 点击加载更多
    let $moreBtn = $(".J-tap-page");
    $moreBtn.on("click",function(){
      flags ? initData(++page) : '';
    });

    // 上拉加载
    var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)  
    var nScrollTop = 0;   //滚动到的当前位置  
    var nDivHight = $(".ui-content").height();  
    $(".ui-content").scroll(function(){  
      nScrollHight = $(this)[0].scrollHeight;  
      nScrollTop = $(this)[0].scrollTop;  
      if(nScrollTop + nDivHight >= nScrollHight) {
        flags ? initData(++page) : '';
      }else{
          return false;
      }
     
    });  


    var video1 = document.getElementById("videoPlay1"),//获取视频元素
        J_video_pop =   $(".J-video-pop"),
        clsoe_btn = $(".J-close-btn");

    $container.on("click",".J-tap-video",function(){
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
    });

    //每日推荐
    // function dily(){
       
    // };
    // dily();
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // window.location.href = "https://linxiansheng2688.github.io/funny/funny/";
        return true;
    } else {
        window.location.href = "http://news.baidu.com/";
    };
})