<?php

namespace App\Vendor;

use Cake\ORM\TableRegistry;
use Cke\Controller\Controller;
use Cake\Log\Log;

class Response {

    public $status;
    public $message;
    public $id;

    public function __construct() {
        
    }

    private function clear() {
        $this->message = "";
        (int) $this->id = 0;
        $this->status = "";
    }

    public function getMessage() {
        $objResponse = new Response();
        if (!empty($this->id)) {
            $objResponse->id = $this->id;
        }
        if (!empty($this->status)) {
            $objResponse->status = $this->status;
        }
        $objResponse->message = $this->message;
        return $objResponse;
    }

}
