<?php

$authors = ["Charles Dickens", "Jane Austin", "William Shakespeare", "Mark Twain", "Louisa May Alcott"];

$authors = [];

$count = count($authors);

switch ($count) {
    case 0:
        echo "No authors" . PHP_EOL;
        break;
    case 1:
        echo "one author" . PHP_EOL;
        break;
    default:
        echo "there are $count authors ".PHP_EOL;
        break;
}

$authorName = "Bob";
switch ($authorName) {
    case "Bill":
    case "Jane":
        echo "wrong author";
        break;

    case "Bob":
        echo "got the author";
        break;
    default:
        echo "author not found";
}

switch (5 <=> 7) {
    case 1:
        echo "greater than"
        break;
    case 0:
        echo "equal";
        break;
    case -1:
        "Less Than"
        break;
}