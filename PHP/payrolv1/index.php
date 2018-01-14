<?php
session_start();

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Payroll</title>
<style type="text/css">
#wrapper { background:#000; width:947px; height:500px; margin:0 auto; clear:both; }
#header { background:url(images/header.gif); width:947px; height:141px; }
#menu { background:url(images/menu.gif); width:947px; height:328px; }
#body { background:#FFF; width:947px; height:300px; }
#bodyfooter { background:url(images/bodyfooter.gif); width:947px; height:42px; }
#footer { background:url(images/footer.gif);width:947px; height:111px; }
.a { float:right; margin-top:71px; margin-right:270px; }
.b {
	float:right;
	margin-top:200px;
	margin-right:-444px;
}
</style>
</head>

<body background="images/Lenovo1-6.jpg">
<div id="wrapper">
<div id="header"></div>
<div id="menu">
<div class="a">
<h1><a href="index.php">Home</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="index.php">About</a>
</h1>

</div>
<div class="b">

<img src="images/logo.jpg" width="522" height="306" />


</div>

</div>
<div id="body">
<form action="process.php" method="post">
<table border="0"class="reg" width="100">
<i><b></i><tr>
  <td align="center" class="login"><b>
  <h1>LOGIN</h1></b></td></tr></b>
<tr><td align="center" class="login"></td></tr>
<tr><td align="left" class="user">Last Name:</td></tr>
<tr><td ><input type="text" name="email1"/></td></tr>
<tr><td align="left" class="user">Employee Number:</td></tr>
<tr><td><input type="password" name="password" /></td></tr>
<tr><td><input type="submit" name="login" class="ok" value="Login" /></td></tr>
<tr><td>
<?php if(isset($_GET['err']))
		{
			
				echo '<div class="error"style="color:#060">You are Not A member Pls Try Again</div>';
		
				
		} ?></td></tr>

<?php

 if(isset($SESSION['email1']))
 if(isset($_GET['success']))
		{
			
				echo '<div class="error"style="color:#060">Welcome</div>';
		
				
		} ?>
</table>
</form>
</div>
<div id="bodyfooter"></div>
<div id="footer"></div>
</div>
</body>
</html>