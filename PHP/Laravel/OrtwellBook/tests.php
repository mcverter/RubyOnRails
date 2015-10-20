<?php
public function testIndexActionBindsUsersFromRepository() {
    $repository = Mockery::mock ('UserRepositoryInterface');
    $repository->shouldReceive('all')->once()->andReturn(array('foo'));
    App::instance('UserRepositoryInterface', $repository);


    $response = $this->action('GET', 'UserController@getIndex');
    this->assertResponseOk();
    $this->assertViewHas('users', array('foo'));h
}
?>