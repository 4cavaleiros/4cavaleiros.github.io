$(document).ready(function(){
    console.log(moment);
    console.log(moment());
    $('.honeycombs').honeycombs({
        combWidth: 220,
        margin: 10
    });

    var scrollTo = function(to) {
        $.scrollTo(to, 1000, {easing:'easeInOutExpo', offset:0, 'axis':'y'});
    };

    $('.home--btn').click(function(e){
        scrollTo('body');
        e.preventDefault();
    });
    $('.about--btn').click(function(e){
        scrollTo('#about');
        e.preventDefault();
    });
    $('.team--btn').click(function(e){
        scrollTo('#team');
        e.preventDefault();
    });
});
