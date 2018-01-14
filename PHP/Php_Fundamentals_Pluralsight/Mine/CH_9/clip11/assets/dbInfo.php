<?php
$connection = new mysqli($dbServer, $dbUserName, $dbPassword, $dbName);

if ($connection->connect_errno) {
    exit("DB conn failed. reason". $connection->connect_errno);
}

$query = "SELECT id, first_name, last_name, pen_name FROM Authors ORDER BY first_name";

$resultObj = $connection->query($query);

?>