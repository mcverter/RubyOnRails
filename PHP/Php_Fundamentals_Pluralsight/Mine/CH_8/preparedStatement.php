<?php

$dbPassword = "PHPFundamentals";
$dbUserName = "PHPFundamentals";
$dbServer = "localhost";
$dbName = "PHPFundamentals";

$connection = new mysqli($dbServer, $dbUserName, $dbPassword, $dbName);

if ($connection->connect_errno) {
    exit("Connection failed. Reason $connection->connect_errno");
}

$tempFirstName = 'Test';

$query = "SELECT first_name, last_name, pen_name FROM Authors WHERE  firstName = ?";

$statementObj = $connection->prepare($query);

$statementObj->bind_param("s", $tempFirstName);
$statementObj->execute();

$statementObj->bind_result($firstName, $lastName, $penName);
$statementObj->store_result();

if($statementObj->num_rows()>0) {
    while ($statementObj->fetch()) {
        echo "$firstName $lastName ($penName)\n";
    }
}

$statementObj->close();
$connection->close();