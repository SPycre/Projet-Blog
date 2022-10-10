<?php

$functions = [];

function connectDb($user,$pass) {
    return new PDO('mysql:host=localhost;dbname=projet_blog',$user,$pass);
}

$functions['getAllBillets'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('SELECT * FROM billet LIMIT :offset,:count ');

    $statement -> bindValue(':offset',intval($arguments[0]),PDO::PARAM_INT);
    $statement -> bindValue(':count',intval($arguments[1]),PDO::PARAM_INT);

    $statement -> execute();
    $result = $statement -> fetchAll();

    return $result;
};

$functions['somme'] = function($arguments) {
    $result = 0;
    foreach ($arguments as $argument) {
        $result += $argument;
    }
    return $result;
};

$functions['countBillets'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('SELECT COUNT(*) FROM billet');

    $statement -> execute();
    $result = $statement -> fetchAll();

    return $result[0][0];
};