// author:LIN/2019/9/21

charset =  "utf-8";

$(function(){
    var totl = {
        inputs:$(".J-search-val"),
        suoBtn:$(".J-sou-btn"),
        pop:$("#msg"),
        popText:$("#msg .toast-msg"),
        flag:true,
        intVal:"",
        result:"",
        startarr:['隔壁老樊','颜人中','林俊杰','陈奕迅','许嵩','薛之谦','李荣浩','张韶涵'],
        audioBox:$(".J-audio-box"),
        initAudio:{
            autoPlay:true,
            playlist:[]
        },
        AudioBox:$(".jAudio--player"),
        getData:function(){
            let that = this;
            $.ajax({
                url:"https://api.apiopen.top/searchMusic",
                type:"get",
                data:{name:that.intVal},
                success:(res)=>{
                    // console.log(res)
                    if(res.code == 200 && res.result !== ""){
                        that.result = res.result;
                        // 播放器初始化
                        res.result.forEach((item,index)=>{
                        
                        that.initAudio.playlist[index] ={
                            file: res.result[index].url,
                            thumb: res.result[index].pic,
                            trackName: res.result[index].title,
                            trackArtist: res.result[index].author,
                            trackAlbum: "Single",
                        };
                        
                        });
                        // 初始化插件
                        that.AudioBox.jAudio(that.initAudio);
                        // 不再使用默认列表
                        // that.lsitData();
                    }else{
                        totl.pop.show();
                        totl.popText.text("兄dei，我尽力了没搜到呀！");
                        setTimeout(()=>{totl.pop.hide()},2000);
                        that.result = [];
                    }
                   
                }
            }); 
        },
        lsitData:function(res){
            let that = this;
            let html = "";
          that.result.forEach((item,index)=>{
                // console.log(item)
                html+='<div class="audio-list ui-flex"> <div class="list-img ui-full-img"><img src="'+item.pic+'" alt=""></div><div class="list-info ui-cell-1"><p class="title">'+item.title+'</p><p class="name-txt">演唱：'+item.author+'</p> </div>  </div>'
            });
          that.audioBox.html(html);
        },
        runDdata:function(){
            let that = this;
         
        },
        init:function(flag){
            let that = this;
            if(flag){
                let num = Math.floor(Math.random()*(that.startarr.length - 0)+0);
                // 接口限制 菜单模拟一下
                that.intVal = that.startarr[num];
                that.inputs.val(that.startarr[num]);
                that.getData();
              }
        }
    };

    totl.suoBtn.on("click",function(){
     
        if(!totl.flag) return;
        totl.flag = false;

        if($.trim(totl.inputs.val()) =="") return totl.pop.show(),totl.popText.text("啥也不填我能读心术呀！"),setTimeout(()=>{totl.pop.hide();  totl.flag = true;},2000);

        totl.intVal = totl.inputs.val();
        // console.log(totl)
        totl.getData();
        totl.flag = true;
    });
  

    totl.init(true);
    console.log(totl);


    // $.ajax({
    //     url:"https://route.showapi.com/255-1",
    //     data:{
    //         page: '1' ,
    //         showapi_appid: '19791',
    //         type:'41',
    //         showapi_sign:'1685dd5bd4c0a3c6af5b9da508985964'
    //     },
    //     success:function(res){
    //         console.log(res)
    //     }
    // })

});