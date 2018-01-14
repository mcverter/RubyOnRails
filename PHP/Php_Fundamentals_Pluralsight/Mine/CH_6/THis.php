<?php
class Person {
    const AVG_LIFE_SPAN = 79;

    public $firstName;
    public $lastName;
    public $yearBorn;

    function __construct($tempFirst = "", $tempLast = "", $tempYear = "") {
        echo "Person COnstructor\n";
        $this->firstName = $tempFirst;
        $this->lastName = $tempLast;
        $this->yearBorn = $tempYear;
    }

    public function getFirstName() {
        return $this->firstName;
    }

    public function setFirstName($tempName) {
        $this->firstName = $tempName;
    }

    public function getFullName() {
        echo "person->getfullname\n";
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
    public function getFullName() {
        echo "author->getfullname\n";
        return $this->firstName . " " . $this->lastName . PHP_EOL;
    }

}


$newAuthor = new Author("Sam", "CLem", 1989);
echo $newAuthor->getFullName();
