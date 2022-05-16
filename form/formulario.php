<?php

session_start();

  $nombre = $_POST['nombre'];
  $apellido = $_POST['apellido'];
  $fechadenacimiento = $_POST['fechadenacimiento'];
  echo 'Hola '. $nombre;
  echo ' ' .$apellido;
  echo ' tu fecha de nacimiento es: '.$fechadenacimiento;
  session_destroy();
?>
