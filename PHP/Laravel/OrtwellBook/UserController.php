<?php

class UserController extends BaseController {

    public function getIndex() {
        $users = $this->users->all();
        return View::make('users.index', compact('users'));
    }


    public function  __construct(UserRepositoryInterface $users) {
        this->users = $users;
    }
} 