<?php
    require('DBhelper.php');
    $qty= isset($_GET['qty'])? $_GET['qty'] : null; 
    $id= isset($_GET['id'])? $_GET['id'] : null; 

    $sql="SELECT * FROM `car` WHERE id='$id'";
    $res=$conn->query($sql);
    $row=$res->fetch_all(MYSQLI_ASSOC);
    var_dump($row);
    if($row){
        if($qty==0){
            $sql = "DELETE FROM car WHERE id ='$id'";
            $conn->query($sql);
        }else{
            $sql="UPDATE `car` SET `qty`=$qty WHERE id='$id'";
            $conn->query($sql);
        }  
    }
    $conn ->close();
?>