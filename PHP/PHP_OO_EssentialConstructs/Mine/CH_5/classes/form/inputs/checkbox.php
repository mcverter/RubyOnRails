<?php

class Checkbox {
    public $label;
    public $type = "checkbox";
    public $name;
    public $value = true;
    public $valueString;
    public $required = false;
    public $validator;
    public $valid=false;



    public function getInput(){
        return "<input type=\"checkbox\" name=\"$this->name\" value=\"$this->value\"> $this->valueString";
    }

    public function getName() {
        return $this->name;
    }
    public function setName($name) {
        $this->name = $name;
        return $this;
    }

    public function getValue(){
        return $this->value;
    }
    public function setValue($name) {
        $this->value = $name;
        return $this;
    }

    public function setValueString($name) {
        $this->valueString = $name;
        return $this;
    }

    public function getValueString(){
        return $this->valueString;
    }

    public function isRequired() {
        return $this->required;
    }
    public function setRequired($required) {
        $this->required = $required;
    }

}