<?php

class Field {
    public $type;
    public $name;

    public function __construct($type, $name)
    {
        $this->type = $type;
        $this->name = $name;
    }
    public function getName() {
        return $this->name;
    }
    public function getTag() {
        $html =<<<EOI
            <input type="$this->type" name="$this->name" >
EOI;

    }
}