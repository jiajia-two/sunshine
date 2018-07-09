require(['config'],function(){
    require(['jquery','common','same','xZoom'],function(){ 
        jQuery(function($){
            $('.all').mouseover(function(){
                $(".nav-one").css('display','block')
            })
            $('.nav-one').mouseover(function(){
                $(".nav-one").css('display','block')
            })
            $('.nav-one').mouseout(function(){
                $(".nav-one").css('display','none')
            })



            //读取本地url的id，然后读取数据库id的信息
            var url=decodeURI(location.search.slice(1));
            var str=url.split('=');
            var id=str[1];
            $.ajax({
                url:'../api/detail.php',
                data:{id:id},
                success:function(data){
                    data = window.eval('('+data+')')
                    get(data);
                    //放大镜
                    $('div.xzoom-t').xZoom({
                        width:400,
                        height:400
                    })
                }
            })
                
            //生成页面商品信息
            function get(data){
                    $('img.big-pic').attr('src','../imgs/'+data.imgurl);
                    $('.imgs li img').attr('src','../imgs/main14.jpg');
                    $('.right h2').html(data.title);
                    $('span.price').html('￥'+data.oldPrice);
                    $('span.oldprice').html('￥'+data.price);
                    $('span.buys').html(data.buys);
            }
            //点击加减商品数量
            $('p.add').click(function(e){
                var num = $('input.num').val()*1;
                if(e.target.className=='jia'){
                    num++;
                    $('input.num').val(num);
                } 
                if(e.target.className=='jian'){
                    num--;
                    $('input.num').val(num);
                    }
            })

            //图片点击效果
            $('ul.imgs').click(function(e){
                if(e.target.tagName=='IMG'){
                    console.log(e.target)
                    $('img.big-pic')[0].src=e.target.src
                }
            })
            

            //加入购物车
            $('span.dtadd').click(function(){
                var num = $('input.num').val()*1;
                $.ajax({
                    url:'../api/detail.php',
                    data:{id:id},
                    success:function(data){
                        data=window.eval('('+data+')')
                        let list=data;
                        console.log(list)
                        $.ajax({
                            url:'../api/wri_car.php',
                            data:{
                                img:list.imgurl,
                                id:list.id,
                                title:list.title,
                                price:list.price,
                                qty:num
                            }
                        })
                        $('#mask').css('display','block')
                    }
                })
            })


            
             //详情页的个人用户信息
             var user_cookie;
             var cookies = document.cookie.split('; ');
             cookies.forEach(function(item){
                 var arr = item.split('=');
                 if(arr[0]==='username'){
                     user_cookie = arr[1]
                 }
             })
             //获取所需，然后变更页面
             if(user_cookie){
                $('a.user').html(user_cookie)
                $('a.user').prop('href','javascript:')
    
                $('a.pwd').html('您好！') 
                $('a.pwd').prop('href','javascript:')
             }else{
                $('a.user').html('请登录')
                $('a.user').prop('href','./load.html')
    
                $('a.pwd').html('注册') 
                $('a.pwd').prop('href','./register.html')
             }


            
        })
    })
})

