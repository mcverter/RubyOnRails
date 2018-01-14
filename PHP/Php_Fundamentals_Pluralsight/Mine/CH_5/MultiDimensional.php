<?php

$authors = array(
  "Male" => array(
      "Charles" => array("Twin CIties", "Frankelpuss"),
      "Bill" => array("Rome", "Jules"),
      "Mark" => array("Huck", "Tom")
  ),
  "Female" => array(
      "Louise" => array("anne", "annie"),
      "weezie" => array("Little wimmen")
  )
);

print_r($authors);
print_r($authors["Male"]);
print_r($authors["Male"]["Mark"]);
print_r($authors["Male"]["Mark"][1]);
