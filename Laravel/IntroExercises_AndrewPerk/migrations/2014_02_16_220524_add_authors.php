<?php

class Add_Authors {

	/**
	 * Make changes to the database.
	 *
	 * @return void
	 */
	public function up()
	{

	  DB::table('authors')->
	    insert(array(
			 'name' => 'Mitchell Verter',
			 'bio' => 'Mitch is the greatest',
			 'created_at' =>date('Y-m-d H-m-s'),
			 'updated_at' =>date('Y-m-d H-m-s')));

	  DB::table('authors')->
	    insert(array(
			 'name' => 'Shorty The Dog',
			 'bio' => 'Shorty is just okay',
			 'created_at' =>date('Y-m-d H-m-s'),
			 'updated_at' =>date('Y-m-d H-m-s')));

	  DB::table('authors')->
	    insert(array(
			 'name' => 'Demelza Champagne',
			 'bio' => 'Demelza is a pornographer.  She started out as a bondage model',
			 'created_at' =>date('Y-m-d H-m-s'),
			 'updated_at' =>date('Y-m-d H-m-s')));


	  DB::table('authors')->
	    insert(array(
			 'name' => 'Hctim',
			 'bio' => 'Hctim zoom faloob',
			 'created_at' =>date('Y-m-d H-m-s'),
			 'updated_at' =>date('Y-m-d H-m-s')));

	  DB::table('authors')->
	    insert(array(
			 'name' => 'Snoozy',
			 'bio' => 'is the bestest',
			 'created_at' =>date('Y-m-d H-m-s'),
			 'updated_at' =>date('Y-m-d H-m-s')));

	  DB::table('authors')->
	    insert(array(
			 'name' => 'Duane',
			 'bio' => 'Duane is Bells dude',
			 'created_at' =>date('Y-m-d H-m-s'),
			 'updated_at' =>date('Y-m-d H-m-s')));



		//
	}

	/**
	 * Revert the changes to the database.
	 *
	 * @return void
	 */
	public function down()
	{
	  DB::table('authors')->
	    where('name', '=', 'Mitchell Verter')->delete();
	  DB::table('authors')->
	    where('name', '=',  'Demelza Champagne')->delete();
	  DB::table('authors')->
	    where('name', '=',  'Shorty The Dog')->delete();

	  DB::table('authors')->
	    where('name', '=', 'Hctim')->delete();
	  DB::table('authors')->
	    where('name', '=',  'Snoozy')->delete();
	  DB::table('authors')->
	    where('name', '=',  'Duane')->delete();

		//
	}

}