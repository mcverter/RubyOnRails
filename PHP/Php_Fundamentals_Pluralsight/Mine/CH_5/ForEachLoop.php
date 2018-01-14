<?php

$authorAssociative = array(
"quarky" => "CHarles",
"brilliant" => "Bob",
"poetic" => "Jane"
);

foreach($authorAssociative as $val) {
    print $val . "\n";
}

foreach ($authorAssociative as $key=>$value) {
    print $value . "($key)\n";
}