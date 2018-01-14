<?php

require "classes/ObjectFactoryService.php";

$params = require "config/config.php";

$session = ObjectFactoryService::getSession();
$session->start();

$db = ObjectFactoryService::getDb($params);
$model = ObjectFactoryService::getModel($db);
$view = ObjectFactoryService::getView();

$users = $model->getUsers();
$session->save(['users'=>$users]);
$view->setResults();
$view->render();


require "classes/Utility.php";
$total = 123;
echo Utility::formatCurrency($total);

require 'classes/Form.php';
require "classes/StringLengthValidator.php";
require "classes/InputText.php";

$name = "Login";
$id = "Form1";

$usernameInput = new InputText();
$usernameInput->setLabel("username");
$usernameInput->setRequired();

$passwordInput = new InputText();
$passwordInput->setType('password');
$passwordInput->setLabel("password");
$passwordInput->setRequired();

$submitInput = new InputText();
$submitInput->setType("submit");


$fields = [
    "username" => $usernameInput,
    "password" => $passwordInput,
    "submit" => $submitInput
];

$form = new Form($name, $id, $fields);

if (!empty($_POST['Username']) && !empty($_POST["Password"])) {
    $username = ctype_alnum($_POST['Username']) ? $_POST['Username']:null;
    $password = ctype_alnum($_POST["Password"]) ? $_POST["Password"]:null;
    StringLengthValidator::setMaximum(30);
    StringLengthValidator::setMinimum(5);
    if (StringLengthValidator::validate($username) &&
       StringLengthValidator::validate($password)) {
        echo "<h1>Thank you for loggin in $username </h1>";
        exit;
    } else {
        echo "invalid input.  username and password must be between 5 and 30";
    }
}

echo "<h1>Hello please login</h1>";
echo $form->getStartTag() . PHP_EOL;
foreach ($form->getFields() as $field) {
    if ($field->label) echo $field->label . ": ";
    echo $field->getInput() . '<br/>'
}
echo $form->getEndTag();