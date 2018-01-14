<?php

class Car extends VehicleBase {
    protected $hasTrunk;
    protected $owner;
    protected $colorHex;

    public function __construct($type, $hasTrunk = null) {
        parent::__construct($type);
        if ($hasTrunk) $this->hasTrunk = $hasTrunk;
    }

    p

}