<?php

namespace App\Vendor;

use Cake\ORM\TableRegistry;
use Cake\Controller\Controller;
use Cake\Log\Log;

Class User {

    public $id;
    public $name;
    public $phoneNumber;
    public $image;
    public $teamMembers = [];

    public function __construct() {
        $this->clear();
    }

    private function clear() {
        (int) $this->id = "";
        $this->name = "";
        $this->photo = "";
        $this->image = "";
    }
    
    public function buildUserObject() {
        $objUser = new User();
        $objUser->id = $this->id;
        $objUser->name = $this->name;
        $objUser->image = $this->profile_pic;
    }

}
