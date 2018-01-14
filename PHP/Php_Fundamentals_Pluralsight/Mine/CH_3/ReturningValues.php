<?php

function getAuthor() {
    return "Charles Dickens";
}

function bookByAuthorYEar($authorName, $year=1910) {
    echo "THis will list all the books written by" . $authorName . " in the year " . $year;

}

$year = 1920;
$authorName = getAuthor();
bookByAuthorYEar($authorName, $year);