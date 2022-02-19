$(window).scroll(function() {
    if($(this).scrollTop()>300){
        $('.navbar').stop(true,false).addClass('background-dark', {duration: 500});
        $('.rectangle').css("background","#021126");
    }
    if($(this).scrollTop()<300&&(!$('.rectangle').hasClass("open"))){
        $('.navbar').stop(true,false).removeClass('background-dark', {duration: 500});
        $('.rectangle').css("background","#FFF");
    }
})

const btn = document.querySelector(".hamburger");

btn.addEventListener("click", () => {
    btn.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));
    if($('.rectangle').hasClass("open")){
        $('.navbar').stop(true,false).addClass('background-dark', {duration: 500});
        $('.rectangle').css("background","#021126");
        $('.off-canvas').stop(true,false).show({duration : 500}).delay(500);;
    }else{
        $('.navbar').stop(true,false).removeClass('background-dark', {duration: 500});
        $('.rectangle').css("background","#FFF");
        $('.off-canvas').stop(true,false).hide({duration : 500}).delay(500);
    }
});

$('.off-canvas-link').click(function(){
    btn.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));
    $('.navbar').stop(true,false).removeClass('background-dark', {duration: 500})
    $('.rectangle').css("background","#FFF");
    $('.off-canvas').stop(true,false).hide({duration : 500}).delay(500);
})
    

