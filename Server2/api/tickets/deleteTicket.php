<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: DELETE");

    if (isset($_SESSION['LOGGED_USER'])) {

        include_once '../../config/database.php';
        include_once '../../class/tickets.php';

        $database = new Database();
        $db = $database -> getConnection();

        $item = new Ticket($db);
        $result = [];

        $data = json_decode(file_get_contents("php://input"));

        $item -> id = $data -> id;

        if ($item -> deleteTicket()) {
            $result['result'] = 'Ticket has been deleted';
        } else {
            $result['result'] =  'Could not delete ticket';
        }

        echo json_encode($result);

}