require(['config'],function(){
    require(['jquery','common','same'],function(){ 
        jQuery(function($){
            $.ajax({
                url:'../api/car.php',
                success:function(data){
                    data=JSON.parse(data);
                        show(data);
                        num()
                        sum();
                    }
            })
            //生成结构
            function show(data){
                var arr = [];
                let shop=$.map(data,function(item){
                    var sum = item.qty * item.price;
                    arr[arr.length] = sum;
                    return `<li data-id=${item.id} class="clearfix">
                    <div class="photo fl"><img src="./imgs/${item.imgurl}"></div>
                    <div class="title"><span>${item.title}</span></div>
                    <span class="price">￥${item.price}</span>
                    <span>含税</span>
                    <div class="car-add"><span class="jian" style="cursor:pointer">-</span>	<input type="text"  class="num" value="${item.qty}"><span class="jia" style="cursor:pointer">+</span></div>
                    <span class="sum ">￥${sum}</span>
                    <div class="del fr" style="cursor:pointer">删除</div>                   
                    </li>`
                    
                })
                $('ul.buylist').html(shop)
            }

            //封装了页面计算数量总和
            function num(){
                var res=0
                for(var i=0;i<$('input.num').length;i++){
                     res+=$('input.num').eq(i).val()*1
                }
                // console.log(res)
                $('#shu').html(res)
            }
            //封装了页面计算数量总和
            function sum(){
                var res = 0;
                for(var i=0;i<$('input.num').length;i++){
                    var length = $('span.sum').eq(i).text().length
                    // console.log(length)
                    var str = $('span.sum').eq(i).text()
                    var num = str.substring(1,length)
                    // console.log(num)
                    res+=num*1
                }
                $('#sum').html('￥'+res)
            }
                
            //学会读取兄弟元素，然后计算商品
            $('ul.buylist').click(function(e){  
                if(e.target.className=='jian'){
                    var qty= $(e.target).next().val()
                    qty--;
                    $(e.target).next().val(qty)
                    console.log(qty)
                    //截取单价￥后的数字
                    var length = $('span.price').text().length
                    var str = $('span.price').text()
                    var num = str.substring(1,3)
                    //计算并输出
                    var sum = num*qty*1
                    // console.log(sum)
                    $(e.target).parent().next().html('￥'+sum)

                    if(qty==0){
                        $(e.target).parent().parent().remove()
                    }


                    //指定操作中对数据库也进行相应操作
                    var id=$(e.target).parent().parent().attr('data-id')
                    console.log(qty,id)
                    $.ajax({
                        url:'../api/car_change.php',
                        data:{
                            qty:qty,
                            id:id
                        }
                    })
              
                }
                if(e.target.className=='jia'){
                    var qty = $(e.target).prev().val()
                    qty++
                    $(e.target).prev().val(qty)
                    //截取单价￥后的数字
                    var length = $('span.price').text().length
                    var str = $('span.price').text()
                    var num = str.substring(1,3)
                    var sum = num*qty*1
                    $(e.target).parent().next().html('￥'+sum)


                    //指定操作中对数据库也进行相应操作
                    var id=$(e.target).parent().parent().attr('data-id')
                    console.log(qty,id)
                    $.ajax({
                        url:'../api/car_change.php',
                        data:{
                            qty:qty,
                            id:id
                        }
                    })
                }
                //点击计算数量
                var res=0
                for(var i=0;i<$('input.num').length;i++){
                     res+=$('input.num').eq(i).val()*1
                }
                
                $('#shu').html(res)
               
                //计算总价
                var res = 0;
                for(var i=0;i<$('input.num').length;i++){
                     res+=$('span.sum').eq(i).val()*1
                }
                $('#sum').html(res) 
            })
                
           
            //点击删除一整行li
            $('ul.buylist').click(function(e){
                if(e.target.className =='del fr'){
                    $(e.target).parent().remove()
                    console.log ($(e.target))
                    var qty=0;
                    //指定操作中对数据库也进行相应操作
                    var id = $(e.target).parent().attr('data-id')
                    console.log(qty,id)
                    $.ajax({
                        url:'../api/car_change.php',
                        data:{
                            qty:0,
                            id:id
                        }
                    })
                }
                
                num()
                sum()
            })
            //清空购物车
            $('span.clear').click(function(){
                $('ul.buylist').empty()
                var qty=0
                console.log(qty)
                $.ajax({
                    url:'../api/clear_car.php',
                    data:{
                        qty:0,
                    }
                })
                num()
                sum()
            })

           

            //购物车的个人用户信息
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