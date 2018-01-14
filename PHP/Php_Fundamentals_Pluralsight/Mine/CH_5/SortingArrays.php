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

sort($authors);
sort($authorAssociative);

print_r($authors);
print_r($authorAssociative);

asort($authors);
asort($authorAssociative);

print_r($authors);
print_r($authorAssociative);

ksort($authors);
ksort($authorAssociative);

print_r($authors);
print_r($authorAssociative);
