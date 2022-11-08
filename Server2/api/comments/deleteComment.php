<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: DELETE");

    include_once '../../config/database.php';
    include_once '../../class/comments.php';

    $database = new Database();
    $db = $database -> getConnection();

    $item = new Comment($db);

    $data = json_decode(file_get_contents("php://input"));

    $item -> id = $data -> id;

    if ($item -> deleteComment()) {
        echo 'Ticket has been deleted';
    } else {
        echo 'Could not delete ticket';
    }