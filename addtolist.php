<?php

  	header('Content-type:application/json;charset=utf-8');

	$r = file_get_contents("php://input");
	$name = split("=", $r)[2];
	$time = split("&",split("=",$r)[1])[0];
	$path = "./txts/";
	$filename = $path.$time.".txt";
	$urls = urldecode($name)."\n";
	$fh = fopen($filename, "a");
	fwrite($fh,$urls);
	fclose($fh);

	echo json_encode(array('name' => urldecode($name), 'day' => $time));

?>
