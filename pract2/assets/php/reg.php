<?php
error_reporting(E_ALL);
ini_set('display_errors', 'on');

$host = 'localhost';
$user = 'root';
$dbPassword = 'root';
$db_Name = 'gta5_forum';
$link = mysqli_connect($host, $user, $dbPassword, $db_Name);
mysqli_query($link, "SET NAMES 'utf-8'");

session_start();

if(!empty($_POST['login']) and !empty($_POST['password']) and !empty($_POST['email'])) {

				$login = $_POST['login'];
				$password = $_POST['password'];
				$email = $_POST['email'];
				$access = 'user';

				$query = "INSERT INTO users (login, password, email, access) VALUES ('$login', '$password', '$email', '$access')";
				mysqli_query($link, $query) or die(mysqli_error($link));


				$_SESSION['auth'] = true;

				$id = mysqli_insert_id($link);
				$_SESSION['id'] = $id;

				echo "Profile soon.<br>";
				echo "<a href='../../index.html'>"."Вернуться"."</a>";
			}

?>