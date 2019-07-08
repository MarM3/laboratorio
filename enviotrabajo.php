<?php
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$horario = $_POST["horario"];
$mensaje = $_POST["mensaje"];
$destinatario = "maradrformacion@gmail.com";
$asunto = "Envío desde trabajar con nosotros.";
$cuerpo = '<html>
<head>
<title>Envío de Curriculum</title>
</head>
<body>
<h1>Recepción de Curriculum Vitae</h1>
<h3>DATOS DE CONTACTO</h3>
<p><strong>Nombre: </strong>'. $nombre .'</p>
<p><strong>E-mail: </strong>'. $email .'</p>
<p><strong>Teléfono: </strong>'. $telefono .'</p>
<p><strong>Horario: </strong>'. $horario .'</p>
<h3>MENSAJE</h3>
<p>'. $mensaje .'</p>
</body>
</html>
';
$cabecera = 'MIME-Version: 1.0\r\n
Content-type: text/html; charset=UTF-8\r\n'.
'From: maradrformacion@gmail.com'. "\r\n" .
'Reply-To: postmaster@localhost' . "\r\n" .
'X-Mailer: PHP/' . phpversion();

mail($destinatario, $asunto, $cuerpo, $cabecera);
?>