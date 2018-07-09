require(['config'],function(){
    require(['jquery'],function(){   
        jQuery(function($){ 
            //轮播图
            var index=0;
            $('.idx li')[0].style.backgroundColor='red';
            var timer=setInterval(move,1500)
            function move(){
                index++;
                if(index>=3){
                    index=0; 
                }
                $('.pic')[0].style.transform=`translateX(${1300*index*-1}px)`;
                for(i=0;i<3;i++){
                $('.idx li')[i].style.backgroundColor='#fff';  
                }
                $('.idx li')[index].style.backgroundColor='red';
            }
            for(let i=0;i<3;i++){
                $('.idx li')[i].index=i;
                $('.idx li')[i].onclick=function(){
                    var x= this.index;
                    index = x;
                    for(j=0;j<3;j++){
                        $('.idx li')[j].style.backgroundColor='#fff';  
                    }
                    $('.idx li')[x].style.backgroundColor='red';
                    $('.pic')[0].style.transform=`translateX(${1300*x*-1}px)`;  
                }
                move();
            } 
            $('div.wrap').mouseover(function(){
                clearInterval(timer)
            })
            $('div.wrap').mouseout(function(){
                timer=setInterval(move,1500)
            })
        })
})
       
})
    
