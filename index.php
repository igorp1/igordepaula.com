<?php

function getRealIpAddr()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
    {
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
    {
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
      $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

$ip = getRealIpAddr();
$query = @unserialize(file_get_contents('http://ip-api.com/php/'.$ip));
$city = ($query && $query['status'] == 'success') ? $query['city'] : "unknown city";
  



?>
<html>
    <head>
        <title>-- idp.code --</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="_res/css/index.css">
        <link rel="shortcut icon" type="image/png" href="_res/img/favicon.png"/>
        <link rel="mask-icon" href="_res/img/rocket.svg" color="#5F44BD">
    </head> 
    <body>
        <div class="center-panel text-elevation-1"> 
            	<h3>Igor de Paula</h3>
            	<br>
		<a id="email-link" onclick="copyEmailToClipboard(this)">email</a>
		 | 
		<a href="_res/docs/dePaula, Igor - resume.pdf" target="_blank">resume</a>
        </div>
    </body>
</html>

<script type="text/javascript" src="https://cdn.rawgit.com/alexgibson/shake.js/master/shake.js"></script>
<script type="text/javascript" src="_res/js/index.js"></script>