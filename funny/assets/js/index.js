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

})