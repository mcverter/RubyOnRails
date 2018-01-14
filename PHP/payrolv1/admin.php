<?php
session_start();

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Payroll</title>
<style type="text/css">
#wrapper { background:#000; width:947px; margin:0 auto; clear:both; }
#header { background:url(images/header.gif); width:947px; height:141px; }
#menu { background:url(images/menu.gif); width:947px; height:328px; }
#body { background:#FFF; width:947px; height:200px; }
#bodyfooter { background:url(images/bodyfooter.gif); width:947px; height:42px; }
#footer { background:url(images/footer.gif);width:947px; height:111px; }
.menu{ float:right; margin-top:71px; margin-right:42px; clear:both; }
.menu ul li a {
	font-size:16px;
	text-decoration:none;
	color:#000;
	font-family:Tahoma, Geneva, sans-serif, cursive;
	outline:none;
}

.menu ul{
	margin:0;
	list-style:none;
	float:right;
}
.menu a{
	display:block;
	float:right;
	outline:none;
}

.menu ul li{
	float:right;
	margin-top:35px;
	margin-right:30px;
	
}

.menu ul li.selected a,.menu ul li a:hover{
	color:#0F0;
}
.b {
	float:right;
	margin-top:200px;
	margin-right:-581px;
}
</style>
</head>

<body background="images/Lenovo1-6.jpg">
<div id="wrapper">
<div id="header"></div>
<div id="menu">
<div class="menu">
  <ul>
    <li><a href="logout.php">logout</a></li>
    <li><a href="members.php">Members Name</a></li>
    <li><a href="entry.php">Entry</a></li>
    <li><a href="search.php">Search</a></li>
    <li><a href="admin.php">Home</a></li>
  </ul>

</div>
<div class="b">



</div>

</div>
<div id="body">

</div>
<div id="bodyfooter"></div>
<div id="footer"></div>
</div>
</body>
</html>