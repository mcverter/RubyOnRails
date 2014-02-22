<?php

class Author extends Eloquent {
  public static $accessible = array ('name', 'bio');
  public static $table = 'authors';


  public static $rules = array (
    'name'=> 'required|min:3',
    'bio'=> 'required|min:10'
				);
  public static function validate($data) {
    return Validator::make($data, static::$rules);
  }
}