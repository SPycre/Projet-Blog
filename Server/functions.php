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

$functions['getBillet'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('SELECT * FROM billet WHERE id = :id');

    $statement -> bindValue(':id',intval($arguments[0]),PDO::PARAM_INT);

    $statement -> execute();
    $result = $statement -> fetchAll();

    return $result[0];
};

$functions['addComment'] = function($arguments) {

    $db = connectDb('root','root');
    $statement = $db -> prepare('INSERT INTO commentaire (pseudo,commentaire,billet_id) VALUES (:pseudo,:comment,:id)');

    $statement -> bindValue(':pseudo',$arguments[1],PDO::PARAM_STR);
    $statement -> bindValue(':comment',$arguments[2],PDO::PARAM_STR);
    $statement -> bindValue(':id',$arguments[0],PDO::PARAM_INT);

    $statement -> execute();
};

$functions['countBillets'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('SELECT COUNT(*) FROM billet');

    $statement -> execute();
    $result = $statement -> fetchAll();

    return $result[0][0];
};