<?php

include 'assets/include.php';

if (isset($_SESSION['formPostData'])) {
    $postedData = $_SESSION['formPostData'];
    unset ($_SESSION['formPostData']);
} else {
    header('Location: index.php')
}