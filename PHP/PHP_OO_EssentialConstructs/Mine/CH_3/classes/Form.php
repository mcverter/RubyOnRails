<?php

class Form{
    public $name;
    public $fields;
    public $id;

    public function __construct($name, $id, array $fields = null, $db)
    {
        $this->name = $name;
        $this->id = $id;
        $this->db = $db;
        if($fields) {
            foreach($fields as $field) {
                $this->fields[] = $field;
            }
        }
        if ($fields) {
            $this->fields=$fields;
        }
    }

    public function __destruct()
    {
        $this->db = null;
        echo "we are almost done";
        echo "clean up finished";
    }

    public function getName(){
        return $this->name;
    }

    public function getFields() {
        return $this->fields;
    }
}