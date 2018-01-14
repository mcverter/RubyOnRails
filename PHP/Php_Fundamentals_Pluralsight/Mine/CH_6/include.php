<?php

include 'person.php';
include_once 'author.php';

$newAuthor = new Author("sam", "clem", 199999);
echo $newAuthor->getCompleteName();