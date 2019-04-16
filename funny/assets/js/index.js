// lin 4/16 create

$(function () {
    // let 有块级作用域 可再次赋值
    // var  全局变量 无块级作用域 可再次赋值
//    const 有块级作用域 不可再次赋值 声明要赋值
// 选择链接
    let $navs = $(".J-good-list li");

    $navs.on("click",function () {
        let that = $(this);
        that.addClass("good-active").siblings("").removeClass("good-active")
    });

})