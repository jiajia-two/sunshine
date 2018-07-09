<?php
	header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

	require("DBHelper.php");
    $username=isset($_GET['username'])? $_GET['username']:null;
    $email=isset($_GET['email'])? $_GET['email']:null;

    $password=isset($_GET['password'])? $_GET['password']:null;
    $sql="SELECT * FROM `user` WHERE username='$username'";
    $res=$conn -> query($sql);
    $row=$res->fetch_all(MYSQLI_ASSOC);
    if($row){
        echo "exist";
    }else{
            $sql="INSERT INTO `user`(`username`,`email`, `password`) VALUES ('$username','$email','$password')";
            $result=$conn -> query($sql);
            if($result){
                    echo 'success';
                }else{
                    echo 'fail';
                }
        }
        
        //关闭数据库
        $conn ->close();

?>