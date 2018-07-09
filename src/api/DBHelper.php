<?php 

        // 配置参数
        $servername = 'localhost';
        $username = 'root';
        $password = 'root';
        $database = 'work';

        //连接数据库
       
        $conn = new mysqli($servername,$username,$password,$database);
        //判断是否连接成功
        // if($conn -> connect_error){
        //     die("连接失败:".$conn -> connect_error);
        // }
        $conn -> set_charset("utf8");

?>