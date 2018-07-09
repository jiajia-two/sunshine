<?php
    require('DBHelper.php');
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 12;
    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $type=isset($_GET['type'])? $_GET['type'] : null;

    $min = $qty*($page-1)+1;
    $data = array();
    $sql = "select * from goods where type='$type' limit $min ,12 ";
    $result= $conn->query($sql);
    while($row = mysqli_fetch_array($result)){
        $data[]=$row;
    }
    echo json_encode($data);
?>