<?php


 session_start();
 
$hostname = 'localhost';       
 $dbname   = 'payroll';
 $username = 'root';            
 $password = '';       
 
 mysql_connect($hostname, $username, $password) or DIE('NOT Connected!');
 mysql_select_db($dbname) or DIE('Database name is not available!');
 $login = mysql_query("SELECT * FROM employee WHERE (lname = '" .addslashes($_POST['email1']) . "') and ( empno = '" .($_POST['password']) . "')");
 $row=mysql_fetch_array($login); 
 $a = mysql_query("SELECT * FROM admin WHERE (username = '" .addslashes($_POST['email1']) . "') and (password = '" .sha1($_POST['password']) . "')");
 $r=mysql_fetch_array($a); 
 if($row){
 $_SESSION['id'] = $row['empno'];
 
header ("location: success.php");
	}
	elseif($r){
 $_SESSION['admin'] = $row['id'];
 
header ("location: admin.php");
	}
	else {
		header ("location: index.php?err");
		}
 
 
?>
