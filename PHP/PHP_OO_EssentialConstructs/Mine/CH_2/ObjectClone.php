<?php

require "classes/Form.php";

$form = new Form();

$anotherForm = clone $form;

if ($anotherForm === $form) {
    echo "aliases";
} else {
    echo "dupicates";
}

echo PHP_EOL;

$anotherForm = $form;

if ($anotherForm === $form) {
    echo "aliases";
} else {
    echo "dupicates";
}
