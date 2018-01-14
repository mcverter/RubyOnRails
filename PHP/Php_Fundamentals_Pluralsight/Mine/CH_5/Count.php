<?php

$authors = array(
    "Charles Dickens",
    "Jane Austin",
    "William Shakespeare",
    "Mark Twain",
    "Louisa May Alcott",
);

print count($authors);

$authors = array(
    "Male" => array(
        "Charles Dickem" => array("A Christmas Carol", "Oliver Twist"),
        "Willaim Shakespeare" => array("Romeo & Juliet", "Richard III"),
        "Mark Twain" => array("The Adventures of Tom Sawyer", "The Prince and the Pauper")
    ),
    "Female" => array(
        "L. M. Montgomery" => array("Anne of Green Gables", "Anne of Avonlea"),
        "Louisa May Alcott" => array ("Little Women")
    )
);

print count($authors, COUNT_RECURSIVE);