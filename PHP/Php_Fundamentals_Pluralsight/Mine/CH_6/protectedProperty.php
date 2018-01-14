<?php
class Person {
    const AVG_LIFE_SPAN = 79;

    protected $firstName;
    protected $lastName;
    protected $yearBorn;

    function __construct($tempFirst = "", $tempLast = "", $tempYear = "") {
        $this->firstName = $tempFirst;
        $this->lastName = $tempLast;
        $this->yearBorn = $tempYear
    }

    public function getFirstName() {
        return $this->firstName;
    }

    public function setFirstName($tempName) {
        $this->firstName = $tempName
    }

    protected function getFullName() {
        return $this->firstName . " " . $this->lastName . PHP_EOL;
    }
}

class Author extends Person {
    private $penName = "Mark Twain";
    public function getPenName() {
        return $this->penName . PHP_EOL;
    }

    public function getCompleteName() {
        return $this->firstName . " " . $this->lastName . " aka " . $this.$this->penName . PHP_EOL;
    }
}


$newAuthor = new Author("Sam", "CLem", 1989);
echo $newAuthor->penName;
echo $newAuthor->getFullName();
echo $newAuthor->getCompleteName();