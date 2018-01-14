<?php

for ($i=0; $i<=5; $i++) {
    echo "Reading is fun" . PHP_EOL;
}

$authors = ["Charles Dickens", "Jane Austin", "William Shakespeare", "Mark Twain", "Louisa May Alcott"];

for ($i=0;$i<count($authors); $i++) {
    echo $authors[$i].PHP_EOL;
}

for ($i=0, $authCount = count($authors); $i<$authCount; $i++) {
    echo $authors[$i] . PHP_EOL;
}