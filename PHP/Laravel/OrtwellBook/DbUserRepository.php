<?php
/**
 * Created by PhpStorm.
 * User: mitchell
 * Date: 2/25/14
 * Time: 10:52 AM
 */

class DbUserRepository implements UserRepositoryInterface {
    public function all() {
        return User::all()->toArray();
    }
} 