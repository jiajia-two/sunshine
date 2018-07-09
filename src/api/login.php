<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
header('Access-Control-Request-Headers:accept, content-type');
require("DBHelper.php");
$username = isset($_POST["username"]) ? $_POST["username"] : null;
$password = isset($_POST["password"]) ? $_POST['password'] : null;
$sql = "SELECT * FROM `user` WHERE username='$username'and password='$password'";
$res=$conn -> query($sql);
$row = $res->fetch_assoc();
if($res->num_rows > 0){
    echo "登录成功";
}else{
    echo "fail";
}
?>