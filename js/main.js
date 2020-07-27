///////////////////////////////////
/// Make the Nav menu active according to section
//////////////////////////////////

$(function(){
    $('.nav li').click(function(event){
        var $this = $(this);
        $('.nav li').removeClass('active');
       // $this.removeClass('active');
        $($this).addClass('active');
    });
});