require(['config'],function(){
    require(['jquery','common','same'],function(){ 
        jQuery(function($){
            // 导航栏
            $('.all').mouseover(function(){
                $(".nav-one").css('display','block')
            })
            $('.nav-one').mouseover(function(){
                $(".nav-one").css('display','block')
            })
            $('.nav-one').mouseout(function(){
                $(".nav-one").css('display','none')
            })

            $.ajax({
                url:'../api/list.php',
                data:{type:0},
                success:function(data){
                    var data = window.eval('('+data+')')
                    console.log(data)
                    
                }
            })
                
           
            // 列表生成
            function get(data){
                $('ul.data').html('');
                let res=$.map(data,function(item){
                    return `<li data-id=${item.id}>
                    <a href="#">
                    <div class="photo"><img src="./imgs/${item.imgurl}"></div>
                    <div class="price class="clearfix"><h4 class="fl">￥${item.price}</h4><span class="buys fr" style="color:#ccc;font-size:12px;"><span style="color:#f73736">${item.buys}</span>人付款</span></div>
                    <div class="title"><p>${item.title}</p></div>
                    </a>
                    
                    <input type="number" class="num" value="1">
                    <button class="btnAdd">加入购物车</button>
                    </li>`
                });
                $('ul.data').html(res);
           
                //点击li生成url
                $('ul.data').click(function(e){
                    if(e.target.tagName.toLowerCase()==='img'){
                        var li=e.target.parentNode.parentNode.parentNode;
                        var id=$(li).attr('data-id');
                        var  a=$('a');
                        a.attr('href','detail.html?id=' + id);
                    }else if(e.target.className==='photo'||e.target.className==='title'){
                        var li=e.target.parentNode.parentNode;
                        var id=$(li).attr('data-id');
                        var a=$('a');
                        a.attr('href','detail.html?id='+id);
                    }
                })   
            } 

            //发送ajax得到所有数据数量
            let qty=12; 
            $.ajax({
                url:'../api/numlist.php',
                data:{type:0},
                success:function(data){
                    console.log(data)
                    getPage(data);
                    console.log(data)
                }
            })
            //发送ajax得到指定数据数量
            $.ajax({
                url:'../api/allgoods.php',
                data:{type:0},
                success:function(data){
                    data=JSON.parse(data);
                    console.log(data)
                    get(data);
                }
            })
            //封装生成页码
            function getPage(data){
                let page=Math.ceil(data/qty);
                for(let i = 0;i<page;i++){
                    let span=$('<span style="cursor:pointer">');
                    span.addClass('idx');
                    $('span.idx').eq(0).addClass('active');
                    span.html((i+1));
                    if(i===0){
                        $('span.idx').addClass('active');
                    }
                    $('.page').append(span);
                }
            }

            //点击页码切换页面，请求第二页的数据生成
            $('.page').click(function(e){
                if(e.target.className==='idx'){
                    let a =e.target.innerHTML;
                    $(e.target).addClass('active').siblings('.idx').removeClass('active');
                    $.ajax({
                        url:'../api/allgoods.php',
                        data:{
                            page:a,
                            qty:qty,
                            type:0,
                        },
                        success:function(data){
                            data=JSON.parse(data);
                            get(data);
                            console.log(data)
                        }
                    })
                }
            })


            //销量排序,和分页有冲突，只能当前页排序。啊。。。。
            var buys = true
            $('span.sort-buys').click(function(){
                if(buys){
                    $('span.sort-buys').html('销量↓')
                    $('span.sort-buys').css('color','#f40')
                    $.ajax({
                        url:'../api/allgoods.php',
                        data:{type:0},
                        success: function(data){
                            data=JSON.parse(data)
                        
                           function sortadd(a,b){
                            return b.buys-a.buys
                           }   
                            data.sort(sortadd)
                            // console.log(data)
                            get(data)
    
                        }
                    })
                    buys = false
                }else{
                    $('span.sort-buys').html('销量↑')
                    $('span.sort-buys').css('color','#f40')
                    $.ajax({
                        url:'../api/allgoods.php',
                        data:{type:0},
                        success: function(data){
                            data=JSON.parse(data)
                           function sortdesc(a,b){
                            return a.buys-b.buys
                           }   
                            data.sort(sortdesc)
                            // console.log(data)
                            get(data)        
                        }
                    })
                    buys = true
                }  
            })
            

            
             //列表页的个人用户信息
             var user_cookie;
             var cookies = document.cookie.split('; ');
             cookies.forEach(function(item){
                 var arr = item.split('=');
                 if(arr[0]==='username'){
                     user_cookie = arr[1]
                 }
             })
             //获取cookie信息，然后变更页面用户信息
             if(user_cookie){
                $('a.user').html(user_cookie)
                $('a.user').prop('href','javascript:')
    
                $('a.pwd').html('您好') 
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