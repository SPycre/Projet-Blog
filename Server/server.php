<?php

$functions = [];

function connectDb($user,$pass) {
    return new PDO('mysql:host=localhost;dbname=projet_blog',$user,$pass);
}

header('Content-Type: application/json');
include_once('functions.php');
include_once('session.php');

$result = array();


if ( !isset($_POST['function']) ) { $result['error'] = "No function"; }
else if ( !isset($functions[$_POST['function']]) ) { $result['error'] = "Function not found"; }
else if ( !isset($_POST['arguments']) ) { $result['error'] = "No arguments"; }
else { $result['result'] = $functions[$_POST['function']]($_POST['arguments']); }

echo json_encode($result);