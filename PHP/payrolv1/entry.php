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
#body { background:#FFF; width:947px; height:550px; }
#bodyfooter { background:url(images/bodyfooter.gif); width:947px; height:42px; }
#footer { background:url(images/footer.gif);width:947px; height:111px; clear:both;}
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
	margin-right:-506px;
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
    <li><a href="?entry">Entry</a></li>
    <li><a href="search.php">Search</a></li>
    <li><a href="admin.php">Home</a></li>
  </ul>

</div>
<div class="b">

<script type="text/javascript">
 function proceed() {
  return confirm("Save this entry?");
 }
 function startTime() {
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  // add a zero in front of numbers<10
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('txt').innerHTML=h+":"+m+":"+s;
  t=setTimeout('startTime()',500);
 }
 function checkTime(i) {
  if (i<10) {
   i="0" + i;
  }
  return i;
 }
</script>
<?php
$msg = "";

//Save record (Insert/Update)
if (isset($_POST['insert'])) {
  if ($_POST['insert'])
    $insert = 1;
  else
    $insert = 0;

  $empno = $_POST['empno'];
  $lname = $_POST['lname'];
  $fname = $_POST['fname'];
  $init = $_POST['init'];
  $gender = $_POST['gender'];
  $bmonth = $_POST['bmonth'];
  $bday = $_POST['bmonth'];
  $byear = $_POST['byear'];
  $bdate = $byear.'-'.$bmonth.'-'.$bday;
  $dept = $_POST['dept'];
  $position = $_POST['position'];
  $pay = $_POST['pay'];
  $dayswork = $_POST['dayswork'];
  $otrate = $_POST['otrate'];
  $othrs = $_POST['othrs'];
  $allow = $_POST['allow'];
  $advances = $_POST['advances'];
  $insurance = $_POST['insurance'];

  if ($insert) {
    $query = "INSERT INTO employee VALUES ($empno,'$lname','$fname','$init','$gender','$bdate','$dept','$position',$pay,$dayswork,$otrate,$othrs,$allow,$advances,$insurance,'')";
	$msg = "New record saved!";
  }
  else {
    $query = "UPDATE employee SET empno=$empno,lname='$lname',fname='$fname',init= '$init',gender='$gender',bdate='$bdate',dept='$dept',position='$position',pay=$pay,dayswork=$dayswork,otrate=$otrate,othrs=$othrs,allow=$allow,advances=$advances,insurance=$insurance WHERE empno = $empno";
    $msg = "Record updated!";
  }
  include 'include/dbconnection.php';
  $result=mysql_query ($query,$link) or die ("invalid query".mysql_error());
}	  
// End of insert/update if there's any	 

//Initialize input fields
$insert = 1;
$empno = 0;
$lname = "";
$fname = "";
$init = "";

$gendermale = "checked";
$genderfemale = "";

$bmonth0 = "selected";
$bmonth1 = "";
$bmonth2 = "";
$bmonth3 = "";
$bmonth4 = "";
$bmonth5 = "";
$bmonth6 = "";
$bmonth7 = "";
$bmonth8 = "";
$bmonth9 = "";
$bmonth10 = "";
$bmonth11 = "";
$bmonth12 = "";

$bday = "";
$byear = "";

$dept = "";
$dept0 = "selected";
$dept1 = "";
$dept2 = "";
$dept3 = "";
$dept4 = "";
$dept5 = "";
$dept6 = "";
  
$position = "";
$pay = 0;
$dayswork = 0;
$otrate = 0;
$othrs = 0;
$allow = 0;
$advances = 0;
$insurance = 0;
//End of input field initialization

// If update then retrieve record
if (isset($_GET['empno'])) {
  $insert = 0;
  $empno = $_GET['empno'];
  $query = "SELECT * FROM employee WHERE empno = $empno";
  include 'include/dbconnection.php';
  $result = mysql_query($query,$link) or die (mysql_error());
  if (!mysql_num_rows($result)) {
    $empno = 0;
	$msg = "No record found!";
  }	
  else {
	$row = mysql_fetch_array($result,MYSQL_ASSOC);
	$empno = $row['empno'];
	$lname = $row['lname'];
	$fname = $row['fname'];
	$init = $row['init'];

	if ($row['gender'] == 'Male') {
	  $gendermale = "checked"; 
	  $genderfemale = ""; }
  	else {
	  $gendermale = "";
	  $genderfemale = "checked"; }

	switch (substr($row['bdate'],8,2)) {
	  case '01':
	    $bmonth1 = "selected"; break;
	  case '02':	
	    $bmonth2 = "selected"; break;
	  case '03':	
	    $bmonth3 = "selected"; break;
	  case '04':	
	    $bmonth4 = "selected"; break;
	  case '05':	
	    $bmonth5 = "selected"; break;
	  case '06':	
	    $bmonth6 = "selected"; break;
	  case '07':	
            $bmonth7 = "selected"; break;
	  case '08':	
	    $bmonth8 = "selected"; break;
	  case '09':	
	    $bmonth9 = "selected"; break;
	  case '10':	
	    $bmonth10 = "selected"; break;
	  case '11':	
	    $bmonth11 = "selected"; break;
	  case '12':	
	    $bmonth12 = "selected"; break;
	}	

	$bday = substr($row['bdate'],8,2);
	$byear = substr($row['bdate'],0,4);

	switch ($row['dept']) {
	  case '- Select Department -':
        $dept0 = "selected"; break;
	  case 'Accounting':
        $dept1 = "selected"; break;
	  case 'Marketing' :
	    $dept2 = "selected"; break;
	  case 'IT' :
	    $dept3 = "selected"; break;
	  case 'Accounting' :
	    $dept4 = "selected"; break;
	  case 'R&D' :
	    $dept5 = "selected"; break;
	  case 'Administration' :
        $dept6 = "selected"; break;
	  case 'Production' :
	    $dept6 = "selected"; break;
	}	  

	$position = $row['position'];
        $pay = $row['pay'];
        $dayswork = $row['dayswork'];
        $otrate = $row['otrate'];
	$othrs = $row['othrs'];
	$allow = $row['allow'];
	$advances = $row['advances'];
	$insurance = $row['insurance'];
  }
}
?>
</head>
<span style="color:	#484848 ;">
<i><h1>ABC COMPANY ONLINE PAYROLL SYSTEM</h1></i>
<center><script type="text/javascript"> document.write('<h3>'+Date()+'</h3>') </script></center>
<center>
<body onLoad="startTime()">

<center>
<form method="post" action="entry.php" onSubmit="return proceed()">
<table width="428" border bgcolor="339900"="2">
  <tr>
    <td width="174">Employee Number</td>
    <td width="238"><input type="text" name="empno" value="<?php echo $empno; ?>" tabindex="1" /></td></tr>
  <tr>
    <td>Lastname</td>
    <td><input type="text" name="lname" value="<?php echo $lname; ?>" tabindex="2"/></td>
  </tr>
  <tr>
    <td>Firstname</td>
    <td><input type="text" name="fname" value="<?php echo $fname; ?>" tabindex="3"/></td></tr>
  <tr>
    <td>Initial</td>
    <td><input name="init" type="text" value="<?php echo $init; ?>" tabindex="4" size="1" maxlength="1"/></td>
  </tr>
  <tr>
    <td>Gender</td>
    <td><input type="radio" name="gender" value="Male" <?php echo $gendermale; ?> tabindex="5"/>Male
        <input type="radio" name="gender" value="Female" <?php echo $genderfemale; ?> tabindex="6"/>Female</td>
  </tr>
  <tr>
    <td>Birthday</td>
    <td><select name="bmonth" tabindex="7">
		  <option value="" <?php echo $bmonth0; ?>>- Select Month -</option>
		  <option value="01" <?php echo $bmonth1; ?>>January</option>
		  <option value="02" <?php echo $bmonth2; ?>>February</option>
  		  <option value="03" <?php echo $bmonth3; ?>>March</option>
		  <option value="04" <?php echo $bmonth4; ?>>April</option>
		  <option value="05" <?php echo $bmonth5; ?>>May</option>
		  <option value="06" <?php echo $bmonth6; ?>>June</option>
		  <option value="07" <?php echo $bmonth7; ?>>July</option>
		  <option value="08" <?php echo $bmonth8; ?>>August</option>
		  <option value="09" <?php echo $bmonth9; ?>>September</option>
		  <option value="10" <?php echo $bmonth10; ?>>October</option>
		  <option value="11" <?php echo $bmonth11; ?>>November</option>
		  <option value="12" <?php echo $bmonth12; ?>>December</option>
    	</select>
	<input type="text" name="bday" value="<?php echo $bday; ?>" size="2" maxlength="2" tabindex="8" />
    <input type="text" name="byear" value="<?php echo $byear; ?>" size="4" maxlength="4" tabindex="9"/></td>
  </tr>
  <tr>
    <td>Department</td>
    <td><select name="dept" tabindex="10">
	      <option <?php echo $dept0; ?>>- Select Department -</option>
          <option <?php echo $dept1; ?>>Accounting</option>
          <option <?php echo $dept2; ?>>Marketing</option>
          <option <?php echo $dept3; ?>>IT</option>
          <option <?php echo $dept4; ?>>R&D</option>
          <option <?php echo $dept5; ?>>Administration</option>
          <option <?php echo $dept6; ?>>Production</option>
        </select></td>
  </tr>
  <tr>
    <td>Position</td>
    <td><input type="text" name="position" value="<?php echo $position; ?>"tabindex="11"/></td>
  </tr>
  <tr>
    <td>Basic Pay</td>
    <td><input type="text" name="pay" value="<?php echo $pay; ?>" tabindex="12" /></td>
  </tr>
  <tr>
    <td>Days worked</td>
    <td><input type="text" name="dayswork" value="<?php echo $dayswork; ?>" tabindex="13"/></td>
  </tr>
  <tr>
    <td>Overtime Rate/Hour</td>
    <td><input type="text" name="otrate" value="<?php echo $otrate; ?>" tabindex="14"/></td>
  </tr>
  <tr>
    <td>OT Hours</td>
    <td><input type="text" name="othrs" value="<?php echo $othrs; ?>" tabindex="15"/></td>
  </tr>
  <tr>
    <td>Allowances</td>
    <td><input type="text" name="allow" value="<?php echo $allow; ?>" tabindex="16"/></td>
  </tr>
  <tr>
    <td>Advances</td>
    <td><input type="text" name="advances" value="<?php echo $advances; ?>" tabindex="17"/></td>
  </tr>
  <tr>
    <td>Insurance</td>
    <td><input type="text" name="insurance" value="<?php echo $insurance; ?>" tabindex="18"/></td>
  </tr>
  <tr>
   <td colspan="2" align="center">
	<input type="submit" name="save" id="save" value="Save" tabindex="19"/>
	<input type="reset" value="Reset"></td>
  </tr>
</table>
<input type="hidden" name="insert" value="<?php echo $insert; ?>" />
</form>
</center>
<div id="txt"></div>
<?php echo '<strong>'.$msg.'</strong>'; ?>
</body>
</html>


</div>

</div>
<div id="body">

</div>
<div id="bodyfooter"></div>
<div id="footer"></div>
</div>
</body>
</html>