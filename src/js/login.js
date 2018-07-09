
require(['config'],function(){
    require(['jquery','form'],function(){
        jQuery(function($){ 
            $('#userName').focus(function(){
                var count = $(this).val().length
                if(count>0){
                    $('#txtUserName_error').html('')
                    $("#userName").removeAttr("class");
                    $("#tip1").removeClass();

                    $("#tip1").attr("class","true-pic");
                }else{
                    $('#txtUserName_error').html(msg_un_blank)
                    $("#userName").attr("class","input-red");
                    $("#tip1").removeClass();
                    $("#tip1").addClass("error-pic");
                }  
            })
            $('#userName').blur(function(){
                var count = $(this).val().length
                if(count>0){
                    $('#txtUserName_error').html('')
                    $("#userName").removeAttr("class");
                    $("#tip1").removeClass();

                    $("#tip1").attr("class","true-pic");
                }else{
                    $('#txtUserName_error').html(msg_un_blank)
                    $("#userName").attr("class","input-red");
                    $("#tip1").removeClass();
                    $("#tip1").addClass("error-pic");
                }  
            })


            $('#password').focus(function(){
                var str = $(this).val()
            var count = $(this).val().length
                if(count>0){
                    $('#txtPassword_error').html('')
                    $("#pwd").removeAttr("class");
                    $("#tip3").removeClass();
                    $("#tip3").attr("class","true-pic");
                }else{
                    $('#txtPassword_error').html(password_empty)
                    $("#password").attr("class","input-red");
                    $("#tip3").removeClass();
                    $("#tip3").addClass("error-pic");
                }
            })
            $('#password').blur(function(){
            var count = $(this).val().length
                if(count>0){
                    $('#txtPassword_error').html('')
                    $("#password").removeAttr("class");
                    $("#tip3").removeClass();
                    $("#tip3").attr("class","true-pic");
                }else{
                    $('#txtPassword_error').html(password_empty)
                    $("#password").attr("class","input-red");
                    $("#tip3").removeClass();
                    $("#tip3").addClass("error-pic");
                }  
            })
   
            //点击确认可不可以登录，顺便cookie
            $('input.load-btn').click(function(){
                if($('#userName').val().length<3){
                    
                }else if($('#password').val().length==0){
                   
                }
                else{
                    $.ajax({
                        url:'../api/login.php',
                        type:'post',
                        data:{
                            username:$('#userName').val().trim(),
                            password: $('#password').val().trim()
                        },
                        success:function(data){
                            console.log(data)
                            if(data==='fail'){
                                alert('登录失败')
                            }else{
                                alert('登录成功');
                                var date = new Date();
                                date.setDate(date.getDate()+1);
                                document.cookie ='password='+$('#password').val().trim()+';expires='+date.toUTCString();
                                document.cookie ='username='+$('#userName').val().trim()+';expires='+date.toUTCString();
                               
                                location.href="../index.html"
                            }
                        }
                    }) 
                }
            })



            //七天免登陆读取cookie
            var user_cookie;
            var pwd_cookie;
            var cookies = document.cookie.split('; ');
            cookies.forEach(function(item){
                var arr = item.split('=');
                if(arr[0]==='username'){
                    user_cookie = arr[1]
                }else if(arr[0]==='password'){
                    pwd_cookie =arr[1]
                }
    
            })
            $('#userName').val(user_cookie)
            $('#password').val(pwd_cookie)

        })
    })
})