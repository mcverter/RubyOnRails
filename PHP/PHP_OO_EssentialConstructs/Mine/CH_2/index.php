<?php
require "classes/Form.php";

$form = new Form();

$data = "Some data to log";
$form->logger($data);

echo $form->loadHtml();

$loginForm = new Form();
$loginForm->setName('Login');
echo $loginForm->getName();

echo PHP_EOL;

$attributes = [
    "nameAttribute" => "Registration",
    "classAttribute" => "FormClass1"
];

$id = "FormId";
$form = new Form();
$form->setFormAttributes($attributes);
$form->setId($id);

echo $form->classAttribute . PHP_EOL;
echo $form->nameAttribute . PHP_EOL;
echo $form->id;


$form = new Form();
$name = "LoginForm";

if ($form->setName($name)) {
    echo "Success";
} else {
    echo "Alert. No val passed";
}

$form->setName($name)->setId($id);

echo $form->name . PHP_EOL . $form->id;

$form->set("id", "itemId");
unset($form->id);
echo $form->id;

$form->set("id", "itemId");
$form->id = null;
echo $form->id;


$form->set("id", "itemId");
$form->set("id");
echo $form->id;
