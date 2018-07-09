/* 
* @Author: Marte
* @Date:   2018-06-30 20:06:56
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-01 21:41:56
*/
require(['config'],function(){
    require(['jquery','form'],function(){
        jQuery(function($){ 
            //用户名   
            $('#userName').focus(function(){
                var count = $(this).val().length
                if(count>=3){
                    $('#txtUserName_error').html('')
                    $("#userName").removeAttr("class");
                    $("#tip1").removeClass();

                    $("#tip1").attr("class","true-pic");
                }else{
                    $('#txtUserName_error').html(username_shorter)
                    $("#userName").attr("class","input-red");
                    $("#tip1").removeClass();
                    $("#tip1").addClass("error-pic");
                }  
            })
            $('#userName').blur(function(){
                var count = $(this).val().length
                if(count>=3){
                    $('#txtUserName_error').html('');
                    $("#userName").removeAttr("class");
                    $("#tip1").removeClass();

                    $("#tip1").attr("class","true-pic");
                }else{
                    $('#txtUserName_error').html(username_shorter)
                    $("#userName").attr("class","input-red");
                    $("#tip1").removeClass();
                    $("#tip1").addClass("error-pic");
                }  
            })

            //邮箱
            $('#email').focus(function(str){
                var str =$('#email').val()
                if((validateRules.isEmail(str))){
                    $('#txtEmail_error').html('邮箱格式正确');
                    $("#email").removeAttr("class");
                    $("#tip2").removeClass();
                    $("#tip2").attr("class","true-pic");
                }
            })
            $('#email').blur(function(){
                var str =$('#email').val()
                if((validateRules.isEmail(str))){
                    $('#txtEmail_error').html('');
                    $("#email").removeAttr("class");
                    $("#tip2").removeClass();
                    $("#tip2").attr("class","true-pic");
                }else{
                    $('#txtEmail_error').html(msg_email_format)
                    $("#email").attr("class","input-red");
                    $("#tip2").removeClass();
                    $("#tip2").attr("class","error-pic");
                }
            })
            
            // 密码验证
            $('#password').focus(function(){
                var str = $(this).val()
            var count = $(this).val().length
                if(count>=6){
                    $('#txtPassword_error').html('')
                    $("#pwd").removeAttr("class");
                    $("#tip3").removeClass();
                    $("#tip3").attr("class","true-pic");
                }
            })
            $('#password').blur(function(){
            var count = $(this).val().length
                if(count>=6){
                    $('#txtPassword_error').html('')
                    $("#password").removeAttr("class");
                    $("#tip3").removeClass();
                    $("#tip3").attr("class","true-pic");
                }else{
                    $('#txtPassword_error').html(password_shorter)
                    $("#password").attr("class","input-red");
                    $("#tip3").removeClass();
                    $("#tip3").addClass("error-pic");
                }  
            })
            //再一次密码验证
            $('#pwd').focus(function(){
                var count = $(this).val().length
                if(count>=6 && $(this).val()==$('#password').val()){
                    $('#txtPassword2_error').html('')
                    $("#pwd").removeAttr("class");
                    $("#tip4").removeClass();
                    $("#tip4").attr("class","true-pic");
                }
            })
            $('#pwd').blur(function(){
                var count = $(this).val().length
                if(count>=6 && $(this).val()==$('#password').val()){
                    $('#txtPassword2_error').html('');
                    $("#pwd").removeAttr("class");
                    $("#tip4").removeClass();
                    $("#tip4").attr("class","true-pic");
                }else if(count<6){
                    $('#txtPassword2_error').html(password_shorter)
                    $("#pwd").attr("class","input-red");
                    $("#tip4").removeClass();
                    $("#tip4").addClass("error-pic");
                }else if($(this).val()!==$('#password').val()){
                    $('#txtPassword2_error').html(confirm_password_invalid);
                    $("#pwd").attr("class","input-red");
                    $("#tip4").removeClass();
                    $("#tip4").addClass("error-pic");
                }
                
            })


           //登录验证并跳转
            $('input.reg-btn').click(function(){
                if($('#userName').val().length<3){
                    alert('名字注册失败')
                }else if(!validateRules.isEmail($('#email').val())){
                    alert('邮箱错误')
                }else if($('#password').val().length<6){
                    alert('密码长度')
                }else if($('#password').val()!==$('#pwd').val()){  
                    alert('密码不一致')
                }else if($('#pwd').val().length<6){
                    alert('密码的长度')
                }
                else{
                    $.ajax({
                        url:'../api/register.php',
                        type:'get',
                        data:{
                            username:$('#userName').val().trim(),
                            email: $('#email').val().trim(),
                            password: $('#password').val().trim()
                        },
                        success:function(data){
                            console.log(data)
                            if(data==='fail'){
                                alert('写入注册失败')
                            }else if(data==='exist'){
                                alert('已有相同用户名')
                            }else{
                                alert('注册成功');
                                // 七天免登陆
                                var date = new Date();
                                date.setDate(date.getDate()+7);
                                document.cookie ='username='+$('#userName').val().trim()+';expires='+date.toUTCString();
                                document.cookie = 'password='+$('#password').val().trim()+';expires='+date.toUTCString();
                                location.href="../index.html"
                            }
                        }
                    }) 
                }
            })
        }) 
    })
})
    

  