var show_menu = false;

function toggleNav() {
    let nav_menu = document.getElementById("nav-menu");
    if(show_menu){
        nav_menu.style.width = "0%";
        show_menu = !show_menu;
    }else{
        nav_menu.style.width = "100%";
        show_menu = !show_menu;
    }
} 

$('.steps-sampling').on('click','a', function(){
    $(this).addClass('active').siblings().removeClass('active');
 });
 
 $("a").click(function(){
    $("a").removeClass("active");
     $(this).addClass("active");
 });