$(document).ready(function(){
    alert("Сайт подготовлен для мониторов с разрешением екрана 1920 пикселей. В ином случае сайт будет отображатья неправильно!");
    
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4500,
        draggable: false,
        prevArrow: '<div class="arrow1_slider hvr-rectangle-in" style="left: 0;"><img src="images/right-arrow.svg" alt=""></div>',
        nextArrow: '<div class="arrow2_slider hvr-rectangle-in" style="right: 0;"><img src="images/right-arrow.svg" alt=""></div>',
        speed: 800
    });
    
    //BUTTONS SHOW EFFECT
    $('#cd_information').on('click', function(){
        $('#cd_text').slideToggle(1000);
    });
    $('#play_information').on('click', function(){
        $('#play_text').slideToggle(1000);
    });
    $('#dice_information').on('click', function(){
        $('#dice_text').slideToggle(1000);
    });
    
    //POSTCARD
    $('#sega_effect_bg').mouseover(function(){
        $('.postcard').css({
            "backgroundSize": "1700px"
        });
    });
    $('#sega_effect_bg').on('mouseout', function(){
       $('.postcard').css({
           "backgroundSize": "1300px"
       }); 
    });
    
    $('#sony_effect_bg').mouseover(function(){
        $('.postcard').css({
            "backgroundSize": "1700px",
            "background-position-x": "-400px"
        });
    });
    $('#sony_effect_bg').on('mouseout', function(){
        $('.postcard').css({
            "backgroundSize": "1300px",
            "background-position-x": "0px"
        });
    });
});



//var src = ($(this).attr('src') === "images/links-arrow-white.svg")
  //          ? 'images/links-arrow.svg'
    //        : 'images/links-arrow-white.svg';
//$(this).attr('src', src);