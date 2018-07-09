<?php
    require("DBHelper.php");
    $type=isset($_GET['type'])? $_GET['type'] : null;
    $sql="select * from goods  where type='$type'";
    $result = $conn->query($sql);
    $res = $result->num_rows;
    echo $res;
?>