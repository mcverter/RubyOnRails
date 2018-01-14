<?php

$dbPassword = "PHPFundamentals";
$dbUserName = "PHPFundamentals";
$dbServer = "localhost";
$dbName = "PHPFundamentals";

$connection = new mysqli($dbServer, $dbUserName, $dbPassword, $dbName);

if ($connection->connect_errno) {
    exit("Connection failed. Reason $connection->connect_errno");
}

$query = "INSERT INTO Authors (first_name, last_name, pen_name) VALUES ('John Ro Ro ', 'Tokes', 'jrrt ')";
$connection->query($query);

$connection->close();