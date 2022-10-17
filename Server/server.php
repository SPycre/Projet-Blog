<?php

$functions = [];

function connectDb($user,$pass) {
    return new PDO('mysql:host=localhost;dbname=projet_blog',$user,$pass);
}

header('Content-Type: application/json');

include_once('functions.php');
include_once('session.php');


$result = array();

$data=(array)json_decode(file_get_contents("php://input"));

if ( !isset($data['function']) ) { $result['error'] = "No function"; }
else if ( !isset($functions[$data['function']]) ) { $result['error'] = "Function not found"; }
else if ( !isset($data['arguments']) ) { $result['error'] = "No arguments"; }
else { $result['result'] = $functions[$data['function']]($data['arguments']); }

echo json_encode($result);
