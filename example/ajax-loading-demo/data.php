<?php
// var_dump($_REQUEST);
$params = $_REQUEST;
$id = $params['id'];
  $p = [
  'id' => $id,
  'name' => "hh",
  'age' => 17
  ];
  $json_name = json_encode($p);
  exit($json_name);
?>