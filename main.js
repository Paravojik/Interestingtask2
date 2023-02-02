$(".page__right__choose__box2").click(function(){
    page__left__img.src='./img/iphone2.jpg'
    $('.wrap').css('backgroundColor','white')
    $('.page__right').css('color','black')
    $('.page__right__btn').css('backgroundColor','rgb(210, 210, 210)')
    $('.page__right__btn').css('color','black')
    page__right__btn__basket.src='./img/basket2.png'
})
$(".page__right__choose__box3").click(function(){
    page__left__img.src='./img/iphone3.jpg'
    $('.wrap').css('backgroundColor','rgb(255, 208, 120)')
    $('.page__right').css('color','black')
    $('.page__right__btn').css('backgroundColor','rgb(136, 104, 44)')
    $('.page__right__btn').css('color','black')
    page__right__btn__basket.src='./img/basket2.png'
})
$(".page__right__choose__box4").click(function(){
    page__left__img.src='./img/iphone4.jpg'
    $('.wrap').css('backgroundColor','purple')
    $('.page__right').css('color','white')
    $('.page__right__btn').css('backgroundColor','rgb(52, 2, 52)')
    $('.page__right__btn').css('color','white')
    page__right__btn__basket.src='./img/basket.png'
})
$(".page__right__choose__box1").click(function(){
    page__left__img.src='./img/iphone1.jpg'
    $('.wrap').css('backgroundColor',' rgb(42, 42, 42)')
    $('.page__right').css('color','white')
    $('.page__right__btn').css('backgroundColor','black')
    $('.page__right__btn').css('color','white')
    page__right__btn__basket.src='./img/basket.png'
})
$('.page__right__choose__box').click(function(){
    $('.page__left__img').css('transform','rotate(10deg)')
    setTimeout(function(){
        $('.page__left__img').css('transform','rotate(-10deg)')
    },100)
    setTimeout(function(){
        $('.page__left__img').css('transform','rotate(10deg)')
    },200)
    setTimeout(function(){
        $('.page__left__img').css('transform','rotate(0deg)')
    },300)
})