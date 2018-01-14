<?php

require "classes/Form.php";

$form = new Form();
var_dump($form);

echo PHP_EOL;

$anotherForm = new Form();
var_dump($anotherForm);

echo PHP_EOL;

echo gettype($form);