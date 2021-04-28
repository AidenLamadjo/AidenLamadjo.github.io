<?php

    error_reporting(E_ALL);
    ini_set('display_errors', 'on');

    $host = 'localhost';
    $user = 'root';
    $dbPassword = 'root';
    $db_Name = 'gta5_forum';
    $link = mysqli_connect($host, $user, $dbPassword, $db_Name);
    mysqli_query($link, "SET NAMES 'utf-8'");


	//Если форма авторизации отправлена...
	if(!empty($_POST['login']) and !empty($_POST['password'])) {
		//Пишем логин и пароль из формы в переменные (для удобства работы):
		$login = $_POST['login']; 
		$password = $_POST['password']; 

		/*
			Формируем и отсылаем SQL запрос:
			ВЫБРАТЬ ИЗ таблицы_users ГДЕ поле_логин = $login И поле_пароль = $password.
		*/
        
		$query = 'SELECT*FROM users WHERE login="'.$login.'" AND password="'.$password.'"';
		$result = mysqli_query($link, $query); //ответ базы запишем в переменную $result. 
		$user = mysqli_fetch_assoc($result); //преобразуем ответ из БД в нормальный массив PHP

		//Если база данных вернула не пустой ответ - значит пара логин-пароль правильная    
        
		if (!empty($user)) {

			//Стартуем сессию:
			session_start(); 

			//Пишем в сессию информацию о том, что мы авторизовались:
			$_SESSION['auth'] = true; 

			//Пишем в сессию логин и id пользователя (их мы берем из переменной $user!):
			$_SESSION['id'] = $user['id']; 
			$_SESSION['login'] = $user['login']; 
            echo 'верно';
		} else {
			echo 'неверно';
		}
	}    
?>