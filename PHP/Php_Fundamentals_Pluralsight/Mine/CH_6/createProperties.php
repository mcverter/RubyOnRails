<?php

// --------------------------------
// -- Private Properties and Methods
// --------------------------------

/*

With a private property/method, you can only access that method inside the class that initiated it.
You can't access them from class to class nor can you access them from the object variable.

*/

class Person
{
    const AVG_LIFE_SPAN = 79;

    public $firstName = "Sam";
    public $lastName = "clem";
    public $yearBorn = 19999;

}


$newAuthor = new Person();