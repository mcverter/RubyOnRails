<?php
include 'person.php';
include_once 'author.php';

require 'RandomClass.php';

$newAuthor = new Author("Sam", "CLem", 19999);

echo $newAuthor->getCompleteName();