<?php

namespace App\Vendor;

use Cake\ORM\TableRegistry;
use Cake\Controller\Controller;
use Cake\Log\Log;

class Team {

    public $teams = [];
    private $allowedKeys = [];

    public function __construct() {
        $this->clear();
        $this->allowedKeys = ['name', 'photo', 'id'];
    }

    protected function clear() {
        $this->teams = [];
    }

    public function __set($key, $value) {
        if (in_array($key, $this->allowedKeys)) {
            $this->$key = $value;
        } else {
            throw new Exception($Key . "is not valid");
        }
    }

    public function getTeams($data) {
        for ($i = 0; $i < count($data); $i++) {
            array_push($this->teams, ['id' => $data[$i]['id'], 'name' => $data[$i]['name'], 'photo' => $data[$i]['photo']]);
            $this->teams[$i]['teamMembers'] = [];
            $objTeamMember = new TeamMember();
            $return = [];
            for ($j = 0; $j < count($data[$i]['team_members']); $j++) {
                $objTeamMember->setMember($data[$i]['team_members'][$j]);
            }
            array_push($this->teams[$i]['teamMembers'], $objTeamMember);
        }
    }

    public function buildTeamObject() {
        array_push($this->teams, ['id' => $this->id,
            'name' => $this->name,
            'photo' => $this->photo,
            'teamMembers' => $this->teamMembers]);
    }

}

class TeamMember {

    public $members;

    public function __set($key, $value) {
        if (in_array($key, $this->allowedKeys)) {
            $this->$key = $value;
        } else {
            throw new Exception($Key . "is not valid");
        }
    }

    public function __construct() {
        $this->clear();
    }

    protected function clear() {
        $this->members = [];
    }

    public function setMember($data) {
        array_push($this->members, ['id' => $data['id'],
            'userId' => $data['user']['id'],
            'image' => $data['user']['profile_pic'],
            "memberName" => $data['user']['first_name'] . " " . $data['user']['last_name'],
            "roleId" => $data['team_role_id'],
            "role" => $data['team_role']['role_name']]);
    }

}
