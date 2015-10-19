<?php
class SimpleClass
{
    public $var = 'default';

    public function displayVar()
    {
        echo $this->var;
    }
}


class A {
    function foo() {
        if (!isset($this)) {
            echo '$this is defined (';
            echo get_class($this);
            echo ")\n";
        }
        else {
            echo "not defined\n";
        }
    }
}

class B {
    function bar() {
        A::foo();
    }
}

$a = new A();
$a->foo();
A::foo();
$b = new B();
$b->bar();

B::bar();


$instance = new SimpleClass();
$className = 'Foo';
//$instance = new $className;


$assigned = $instance;
$reference = & $instance;

$instance ->var = '$assigned will have this value';
$instance = null;
var_dump($instance);
var_dump($reference);
var_dump($assigned);


class Test {
    static public function  getNew() {
        return new static;
    }
}

class Child extends Test {}

$obj1 = new Test();
$obj2 = new $obj1;

var_dump($obj1 !== $obj2);

$obj3 = Test::getNew();
var_dump($obj3 instanceof Test);
$obj4 = Child::getNew();
var_dump($obj4 instanceof Child);


class ExtendClass extends SimpleClass {
    function displayVar() {
        echo "Extending class\n";
        parent::displayVar();
    }
}

$extended = new ExtendClass();
$extended->displayVar();


