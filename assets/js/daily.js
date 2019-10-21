


$(function(){
  
    var $tabBox = $(".J-nav");
    // 初始列表
    function initList(){
        let html = "";

        $.ajax({
            url:"https://api.apiopen.top/videoHomeTab",
            type:"get",
            success:function (data) {
                console.log(data);
                if(data.code ==200){
                    let datas = data.result;
            
                    datas.forEach(function(item,index){
                        item.id == -1 ?'':  html+='<div class="list-itmes" data-url="'+item.apiUrl+'"><span>'+item.name+'</span></div>';
                    });
                    $tabBox.html(html);
                    $tabBox.find(".list-itmes").eq(0).addClass("active-tab");
                    initData(1,datas[1].apiUrl)
                }
            }
        })
    };
    // initList();
    // tab切换

    $tabBox.on("click",".list-itmes",function(){
        console.log( $(this))
        $(this).addClass("active-tab").siblings().removeClass("active-tab");
        // dataUrl = $(this).attr("data-url");
        // $(".ui-content").append($(this).attr("data-url")+'<br/>');
    });


    //视频参数 video
    // 标题 text
    //图片 thumbnail
    // 时间 passtime
    // https://api.apiopen.top/videoHomeTab
    let html = "";
    var page = 1,tmp=[],flags=true;
    let $container = $(".J-video-container");
    function initData(page,apiUrl){
        $.ajax({
            url:apiUrl,
            type:"get",
            dataType : "jsonp",
            data:{
               
            },
         
            success:function (data) {
                console.log(data)
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
    };
    initData(page);

    let $moreBtn = $(".J-tap-page");
    $moreBtn.on("click",function(){
    
      flags ? initData(++page) : '';
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

    $.ajax({
        url:"https://m.ku6.com/video/feed?pageNo=0&pageSize=8",
        success:function(data){
            console.log(data)
            $("body").html(data[0].publisher)
        }
    })
    });
  