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
	margin-right:-511px;
	background:#000;
}
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
</style>
</head>

<body background="images/Lenovo1-6.jpg">
<div id="wrapper">
<div id="header"></div>
<div id="menu">
<div class="a">
<div class="menu">
  <ul>
    <li><a href="logout.php">logout</a></li>
   
    <li><a href="profile.php">Profile</a></li>
    <li><a href="record.php">My Record</a></li>
    <li><a href="success.php">Home</a></li>
  </ul>

</div>



</div>
<div class="b">
<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("payroll", $con);

$result = mysql_query("SELECT * FROM employee WHERE empno='".$_SESSION['id']."'");
while($row = mysql_fetch_array($result))
  {@$image=$row ['photo']; ?>
  
  <table width="220" border="0" style="color:#FFF; margin-left:20px;" align="left" >
  <tr>
    <td  colspan="2">
  <a href="?profile&change">
  <?php if($image){ ?>
  <img src="photos/<?php echo $image; ?>" height="225" width="225">
  <?php }else{ ?>
    <img src="images/p.jpg" height="225" width="225">

  <?php } ?></a>
  </td><td> <?php if(isset($_GET['change'])){ ?>
  
<table border="0" class="create" >
<tr>
<td colspan="0">
<form name="form" action="" method="post" enctype="multipart/form-data" class="insert">
<input type="file" name="file"/><input type="submit" name="create" value="Save Changes">
</form>
</td>
</tr>
</table>


<?php 
include('config/config.php');
if(@$_POST ['create'])
{
$file = $_FILES ['file'];
$name = $file ['name'];
$type = $file ['type'];
$size = $file ['size'];
$tmppath = $file ['tmp_name']; 
if($name!="")
{
if(move_uploaded_file ($tmppath, 'photos/'.$name))//image is a folder in which you will save image
{

$query="update employee set photo='$name'  WHERE empno='".$_SESSION['id']."'";

mysql_query ($query) or die ('could not updated:'.mysql_error());
@$image=$row ['photo'];
		echo "<script>window.location='profile.php'</script>";
	}

}else{
	echo 'Invalid';
	}
}
?>

  <?php } ?>
  <tr>
    <td>Employee Number</td>
    <td>:</td>
    <td><?php echo $row['empno']; ?></td>
  </tr>

  <tr>
    <td>Last Name</td>
    <td>:</td>
    <td><?php echo $row['lname']; ?></td>
  </tr>
  <tr>
    <td>First Name</td>
    <td>:</td>
    <td><?php echo $row['fname']; ?></td>
  </tr>
  <tr>
    <td>Middle Initial</td>
    <td>:</td>
    <td><?php echo $row['init']; ?></td>
  </tr>
 
</table>


<?php
  
  }
  
  ?>

</div>

</div>
<div id="body">


</div>
<div id="bodyfooter"></div>
<div id="footer">
</div>
</div>
</body>
</html>