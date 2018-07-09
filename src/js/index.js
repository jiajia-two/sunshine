require(['config'],function(){
    require(['jquery','common','same','banner'],function(){
        jQuery(function($){
            //得到页面商品数据
            $.ajax({
                url:'../api/index.php',
                data:{type:1},
                success:function(data){
                    var data = window.eval('('+data+')')
                    console.log(data)
                    get(data)
                }
               
            })
                
           
            // 列表生成
            function get(data){
                $('ul.please').html('');
                let res=$.map(data,function(item){
                    return `
                    <li data-id=${item.id}>
                    <a href="#">
                      <img src="./imgs/${item.imgurl}" alt="">${item.title}
                      <div class="price">
                          <strong class="now-price">￥${item.price}</strong>
                          <span class="old-price">￥${item.oldPrice}</span>
                      </div>
                    </a>
                  </li>`
                   
                });
                $('ul.please').html('<img src="./imgs/main5.jpg" alt="" class="fl">'+res);
            }



            //请求
            $.ajax({
                url:'../api/index_d.php',
                data:{type:0},
                success:function(data){
                    var data = window.eval('('+data+')')
                    console.log(data)
                    
                }
            })

             //点击li生成url
             $('ul.please').click(function(e){
                if(e.target.tagName.toLowerCase()==='img'){
                    var li=e.target.parentNode.parentNode;
                    var id=$(li).attr('data-id');
                    console.log(id)
                    $('a').attr('href','detail.html?id=' + id);
                }else if(e.target.className==='now-price'||e.target.className==='old-price'){
                    var li=e.target.parentNode.parentNode.parentNode;
                    var id=$(li).attr('data-id');
                    $('a').attr('href','detail.html?id='+id);
                }else if(e.target.tagName.toLowerCase()==='a'){
                    var li=e.target.parentNode;
                    var id=$(li).attr('data-id');
                    $('a').attr('href','detail.html?id='+id);
                }
            })   

            //首页的个人用户信息
            var user_cookie;
            var cookies = document.cookie.split('; ');
            cookies.forEach(function(item){
                var arr = item.split('=');
                if(arr[0]==='username'){
                    user_cookie = arr[1]
                }

            })
            //获取所需，然后变更页面用户
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