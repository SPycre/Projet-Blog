<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET");

    include_once '../../config/database.php';
    include_once '../../class/user.php';

    if (session_status() != PHP_SESSION_ACTIVE) {
        session_start();
    }

    $database = new Database();
    $db = $database -> getConnection();

    $item = new User($db);

    if (isset($_SESSION['LOGGED_USER'])) {
        $item -> id = $_SESSION['LOGGED_USER'];
        $stmt = $item -> getUser();
        $resultArr = $stmt -> fetchAll();
        echo json_encode($resultArr['username']);
    } else {
        echo json_encode(FALSE);
    }