<?php

class Author extends Person {
    public static $centuryPopular = "19th";
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

    public static function getCenturyAuthorWasPopular() {
        return self::$centuryPopular;
    }

}


