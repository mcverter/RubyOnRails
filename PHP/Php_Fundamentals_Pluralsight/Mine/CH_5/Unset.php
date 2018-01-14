<?php

$authors = array(
    "CHarles",
    "Bob",
    "Jane",
    13
);

$authorAssociative = array(
    "quarky" => "CHarles",
    "brilliant" => "Bob",
    "poetic" => "Jane"
);

unset($authorAssociative["poetic"]);
unset($authors[0], $authors[2]);
unset($authors);

print_r($authors);
print_r($authorAssociative);