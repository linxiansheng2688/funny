$(function(){
    var totl = {
        inputs:$(".J-search-val"),
        suoBtn:$(".J-sou-btn"),
        pop:$("#msg"),
        popText:$("#msg .toast-msg"),
        flag:true,
        intVal:"",
        result:"",
        startarr:['隔壁老樊','颜人中','林俊杰','陈奕迅','许嵩','薛之谦','李荣浩'],
        audioBox:$(".J-audio-box"),
        getData:function(){
            console.log(this.intVal)
            let that = this;
            $.ajax({
                url:"https://api.apiopen.top/searchMusic",
                type:"get",
                data:{name:that.intVal},
                success:(res)=>{
                    console.log(res)
                    if(res.code == 200 && res.result !== ""){
                        that.result = res.result;
                        that.lsitData();
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
        init:function(){
            let that = this;
            let num = Math.floor(Math.random()*(that.startarr.length - 0)+0);
            // 接口限制 菜单
            that.intVal = that.startarr[num];
            that.inputs.val(that.startarr[num]);
            that.getData();
        }
    };

    totl.suoBtn.on("click",function(){
     
        if(!totl.flag) return;
        totl.flag = false;

        if($.trim(totl.inputs.val()) =="") return totl.pop.show(),totl.popText.text("啥也不填我能读心术呀！"),setTimeout(()=>{totl.pop.hide();  totl.flag = true;},2000);

        totl.intVal = totl.inputs.val();
        console.log(totl)
        totl.getData();
        totl.flag = true;
    });
    
    totl.init();
});