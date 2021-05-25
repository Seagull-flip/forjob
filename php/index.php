<?php
	require_once 'connection.php';

	$link = mysqli_connect($host, $user, $password, $database) 
   or die("Ошибка " . mysqli_error($link));


	$store = $_POST['store'];
	$vendor = $_POST['vendor'];
	$query ="SELECT * FROM `vendors_shipping` WHERE `store`='".$store."' AND `vendor`='".$vendor."' ORDER BY `id` ASC";

$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
$i=0;
while ($row = mysqli_fetch_array($result)) {
	$return[$i]['store'] = $row['store'];
	$return[$i]['vendor'] = $row['vendor'];
	$return[$i]['starttime'] = $row['starttime'];
	$return[$i]['endtime'] = $row['endtime'];
	$return[$i]['shipdays'] = $row['shipdays'];
	$i++;
};
	echo json_encode($return);

	mysqli_close($link);
?>



