require(['config'],function(){
    require(['jquery','common'],function(){
        jQuery(function($){
             
            //吸顶效果
            $(window).scroll(function(){
                if($(window).scrollTop()>300){
                    $("#top-fix").css("display","block");
                }else{
                    $("#top-fix").css("display","none");
                }
            })

            //置顶效果
            $(window).scroll(function(){
                if($(window).scrollTop()>400){
                    $('.back').css('display','block');
                }else{
                    $('.back').css('display','none');
                }
            })
            $('.back').click(function(){
                    $('html,body').animate({scrollTop:0},300);
                })

           //购物车数量效果，就在置顶行的
           $.ajax({
            url:'../api/numcar.php',
            success:function(data){            
                console.log(data)
                $('i.all-num').html(data)
                }
            })
           
         
        })
    })
       
})
    
