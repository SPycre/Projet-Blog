<?php

$functions = [];

$functions['somme'] = function($arguments) {
    $result = 0;
    foreach ($arguments as $argument) {
        $result += $argument;
    }
    return $result;
};