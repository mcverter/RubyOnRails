<?php 
if(isset($_SESSION['name'])){
?>
   <ul>
    <li><a href="logout.php">logout</a></li>
    <li><a href="">My Profile</a></li>
    <li><a href="">Upload</a></li>
    <li><a href="">Photos</a></li>
    <li><a href="">Send Email</a></li>
    <li><a href="index.php">Home</a></li>
  </ul>
<?php
}else{
?>
<?php
}
?>