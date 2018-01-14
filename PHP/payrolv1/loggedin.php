<?php
	//start session and check if session variable is set
	session_start();
	if(!isset($_SESSION['logged_in']))
	{
		header("location:index.php");
	}
	// if yes, show status and an logout button
	else
	{
		echo "logged in";
		//if logout button is clicked, unset the session variable and redirect to index.php?logout
		if(isset($_GET['logout']))
		{
			unset($_SESSION['logged_in']);
			header("location:index.php?logout");
		}
		echo "<br /><a href=\"loggedin.php?logout\">Logout</a>";
	}
?>
