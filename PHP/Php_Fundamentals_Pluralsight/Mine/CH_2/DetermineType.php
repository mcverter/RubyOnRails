<?php

define('CHECK_CONSTANT', "Yes I am a constant");

$intVar = 1234;
$stringVar = "I am a string";
$boolVar = false;
$floatVar = 123.4;

print "All return true"; echo "\n";
echo is_bool($boolVar); echo "\n";
echo is_string($stringVar); echo "\n";
echo is_float($floatVar); echo "\n";
echo is_int($intVar); echo "\n";
echo defined('CHECK_CONSTANT');  echo "\n"; echo "\n";

print "ALL RETURN FALSE";  echo "\n"; echo "\n";
echo is_bool($intVar); echo "\n";
echo is_string($boolVar); echo "\n";
echo is_float($stringVar); echo "\n";
echo is_int($floatVar); echo "\n";
echo defined('NOT_CONSTANT');  echo "\n"; echo "\n";


if (is_int($intVar)) {
    echo "An integer";
} else {
    echo "Not an integer";
}