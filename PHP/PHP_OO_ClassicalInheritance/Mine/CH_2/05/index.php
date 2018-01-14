<?php

require 'VehicleBase.php';
require "Car.php";
$car = new Car('sedan', 1);
$car->runDiagnostic(['car', 'suv']);