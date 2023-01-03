<?php

$functions['addBillet'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('INSERT INTO billet (titre,content) VALUES (:title,:content)');

    $statement -> bindValue(':title',$arguments[0],PDO::PARAM_STR);
    $statement -> bindValue(':content',$arguments[1],PDO::PARAM_STR);

    $statement -> execute();
};

$functions['getAllBillets'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('SELECT * FROM billet ORDER BY date DESC LIMIT :offset,:count');

    $statement -> bindValue(':offset',intval($arguments[0]),PDO::PARAM_INT);
    $statement -> bindValue(':count',intval($arguments[1]),PDO::PARAM_INT);

    $statement -> execute();
    $result = $statement -> fetchAll();

    return $result;
};

$functions['removeBillet'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('DELETE FROM billet WHERE id = :id');

    $statement -> bindValue(':id',intval($arguments[0]),PDO::PARAM_INT);

    $statement -> execute();
};

$functions['editBillet'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('UPDATE billet SET titre = :titre, content = :content WHERE id = :id');

    $statement -> bindValue(':id',$arguments[0],PDO::PARAM_INT);
    $statement -> bindValue(':titre',$arguments[1],PDO::PARAM_STR);
    $statement -> bindValue(':content',$arguments[2],PDO::PARAM_STR);

    $statement -> execute();
};

$functions['getBillet'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('SELECT * FROM billet WHERE id = :id');

    $statement -> bindValue(':id',intval($arguments[0]),PDO::PARAM_INT);

    $statement -> execute();
    $result = $statement -> fetchAll();

    if (isset($result[0])) {
        return $result[0];
    } else {
        return null;
    }
};

$functions['countBillets'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('SELECT COUNT(*) FROM billet');

    $statement -> execute();
    $result = $statement -> fetchAll();

    return $result[0][0];
};

$functions['addComment'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('INSERT INTO commentaire (pseudo,commentaire,billet_id) VALUES (:pseudo,:comment,:id)');

    $statement -> bindValue(':pseudo',$arguments[1],PDO::PARAM_STR);
    $statement -> bindValue(':comment',$arguments[2],PDO::PARAM_STR);
    $statement -> bindValue(':id',$arguments[0],PDO::PARAM_INT);

    $statement -> execute();
};

$functions['getComments'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('SELECT * FROM commentaire WHERE billet_id = :id ORDER BY date DESC LIMIT :offset , :count');

    $statement -> bindValue(':id',$arguments[0],PDO::PARAM_INT);
    $statement -> bindValue(':offset',intval($arguments[1]),PDO::PARAM_INT);
    $statement -> bindValue(':count',intval($arguments[2]),PDO::PARAM_INT);

    $statement -> execute();
    $result = $statement -> fetchAll();

    return $result;
};

$functions['removeComment'] = function($arguments) {
    $db = connectDb('root','root');
    $statement = $db -> prepare('DELETE FROM commentaire WHERE id = :id');

    $statement -> bindValue(':id',intval($arguments[0]),PDO::PARAM_INT).

    $statement -> execute();
};