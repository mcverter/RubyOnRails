<?php

$authors = array(
"Charles Dickens",
"Jane Austin",
"William Shakespeare"
);

$authorsAssociative = array(
"quarky" => "Charles Dickens",
"brilliant" => "Jane Austin",
"poetic" => "William Shakespeare"
);

print_r($authors[1]);
print_r($authorsAssociative['quarky']);

print array_key_exists(5, $authors);