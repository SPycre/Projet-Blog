<?php

session_start();

function getUser($id) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('SELECT * FROM user WHERE id = :id');

    $statement -> bindValue(':id',$id,PDO::PARAM_INT);

    $statement -> execute();
    $result = $statement -> fetchAll();

    return $result[0];
}

$functions['checkConnect'] = function($arguments) {
    if (isset($_SESSION['LOGGED_USER'])) {
        $user = getUser($_SESSION['LOGGED_USER']);
        return $user['username'];
    } else {
        return FALSE;
    }
};

$functions['connect'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('SELECT * FROM user WHERE username = :username AND password = :password');

    $statement -> bindValue(':username',$arguments[0],PDO::PARAM_STR);
    $statement -> bindValue(':password',hash("sha512",$arguments[1]),PDO::PARAM_STR);

    $statement -> execute();
    $result = $statement -> fetchAll();

    if ($result != null) {
        $_SESSION['LOGGED_USER'] = $result[0]['id'];
        return TRUE;
    }
    return FALSE;
};

$functions['disconnect'] = function($arguments) {
    if (isset($_SESSION['LOGGED_USER'])) {
        unset($_SESSION['LOGGED_USER']);
    }
    return TRUE;
};