<?php
    require("DBHelper.php");
    
    $sql="select * from car";
    $result = $conn->query($sql);
    $res = $result->num_rows;
    echo $res;
?>