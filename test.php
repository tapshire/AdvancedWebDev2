<?php
	$var1 = "03/04/2018";
	$var2 = "02/04/2018";

	$arr = array("03/04/2018","02/04/2018");
	usort($arr, "strcmp");
	echo $arr[0];
	echo $arr[1];
	
	if($var1 > $var2){
		echo "Wrong";
	}else{
		echo "correct";
	}
?>