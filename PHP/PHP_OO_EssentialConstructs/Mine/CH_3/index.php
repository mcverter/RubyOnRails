<?php

require "classes/Form.php";

$name = "Login";
$id = "Form1";

$loginForm = new Form($name, $id);

$name = "Register";
$id = "Form2";

$registerForm = new Form($name, $id);

echo $loginForm->getName() . PHP_EOL;
echo $registerForm->getName();

require "classes/Form.php";
require "classes/Field.php";

$type="text";
$name="username";
$fields[]=new Field($type, $name);

$name ="password";
$fields[]=new Field($type, $name);

$name = "Login";
$id = "Form1";
$form = new Form($name, $id, $fields);

$form = new Form ("FormLogin", "dbconnection");
echo $form->getName() . PHP_EOL;

unset($form);
echo PHP_EOL . "Now we are";

exit;