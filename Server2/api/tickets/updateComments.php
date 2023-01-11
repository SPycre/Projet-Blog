<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: PATCH");

    include_once '../../config/database.php';
    include_once '../../class/tickets.php';

    $database = new Database();
    $db = $database -> getConnection();

    $item = new Ticket($db);

    $data = json_decode(file_get_contents("php://input"));

    $item -> id = $data -> id;
    
    $rslt = $item -> updateComments();
    $result = [];

    if ($rslt) {
        $result['result'] = $rslt->queryString;
    } else {
        $result['result'] = "No record found";
    }
    
    echo json_encode($result);
