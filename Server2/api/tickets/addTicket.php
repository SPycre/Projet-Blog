<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");

    include_once '../../config/database.php';
    include_once '../../class/tickets.php';

    $database = new Database();
    $db = $database -> getConnection();

    $item = new Ticket($db);

    $data = json_decode(file_get_contents("php://input"));

    $item -> title = $data -> title;
    $item -> content = $data -> content;

    if ($item -> createTicket()) {
        echo 'Ticket has been added';
    } else {
        echo 'Could not add ticket';
    }