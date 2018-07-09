<?php
    require('DBhelper.php');
    $qty= isset($_GET['qty'])? $_GET['qty'] : null; 

    $sql="SELECT * FROM `car`";
    $res=$conn->query($sql);
    $row=$res->fetch_all(MYSQLI_ASSOC);
    var_dump($row);
    if($row){
        if($qty==0){
            $sql = "DELETE FROM car";
            $conn->query($sql);
        }
    }
    $conn ->close();
?>