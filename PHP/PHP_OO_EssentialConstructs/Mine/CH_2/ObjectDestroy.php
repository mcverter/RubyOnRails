<?php

require "classes/Form.php";

$form = new Form();

unset($form);
var_dump($form);

$form = new Form();
$form = null;
var_dump($form);