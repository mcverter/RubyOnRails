<?php
class VehicleBase {
    protected $color;
    protected $type;
    protected $colorNumber;

    public function __construct($type)
    {
        $this->type = $type;
    }

    public function __call($arg, $args) {
        switch(true) {
            case($this instanceof Car):
                require "CarDiagnostic.php";
                $diagnostic = new CarDiagnostic($arg, $args);
                return $diagnostic->$arg($args);
        }
    }
}