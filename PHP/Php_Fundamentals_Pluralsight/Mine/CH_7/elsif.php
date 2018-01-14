<?php
$authors = ["Charles Dickens", "Jane Austin", "William Shakespeare", "Mark Twain", "Louisa May Alcott"];

$authors = [];
$count = count($authors);

if ($count == 1) {
    echo "there is one author";
} elseif ($count>1){
    echo "there is a total fo $count authors";
} else {
    echo "there is nobody";
}