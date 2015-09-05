<?php
	header('Content-type:application/json;charset=utf-8');
	$results = file_get_contents("php://input");
	$time = split("=",$results)[1];
	$tmppath = "./txts/";
	$savefile = $tmppath. $time;

	$scriptcmd = "./code/test"." ".$savefile;
	//$scriptcmd = "/usr/local/bin/youtube-dl -sge 'https://www.youtube.com/watch?v=Q5POuMHxW-0'";
	exec($scriptcmd,$output,$return_value);//php调用c++ 获取每个网址的视频链接，生成以时间命名html文件
	echo "<br/>";
	print_r($output);
	print_r($return_value);
	echo json_encode(array('time' => $time));

?>
