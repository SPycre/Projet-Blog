<?php

header('Content-Type: application/json');
include_once('functions.php');

$result = array();


if ( !isset($_POST['function']) ) { $result['error'] = "No function"; }
else if ( !isset($functions[$_POST['function']]) ) { $result['error'] = "Function not found"; }
else if ( !isset($_POST['arguments']) ) { $result['error'] = "No arguments"; }
else { $result['result'] = $functions[$_POST['function']]($_POST['arguments']); }

echo json_encode($result);