<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");

    include_once '../../config/database.php';
    include_once '../../class/tickets.php';

    $database = new Database();
    $db = $database -> getConnection();

    $item = new Ticket($db);

    $item -> title = $_POST['title'];
    $item -> content = $_POST['content'];

    if ($item -> createTicket()) {
        if ($_FILES['addImage']['size'] != 0) {
            move_uploaded_file($_FILES['addImage']['tmp_name'], '../../../Images/ticket_image/' . $item -> id . '.jpg');
            $item -> image = $item -> id . '.jpg';
            var_dump($item -> image);
            if ($item -> updateTicket()) {
                echo 'Ticket has been added';
            } else {
                echo 'Could not add ticket';
            }
        } else {
            echo 'Ticket has been added';
        }
    } else {
        echo 'Could not add ticket';
    }