<?php
/**
 * Created by PhpStorm.
 * User: mitchell
 * Date: 2/28/14
 * Time: 8:22 PM
 */

class  Person {

}

$classes = get_declared_classes();

foreach ($classes as $class) {
    echo $class . " <br/>";
}

?>