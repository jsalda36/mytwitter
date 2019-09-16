<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Balanceador</title>
</head>
<body>
	
</body>
</html>

<?php
$Conexion=mysqli_connect("localhost","id10890353_u518910025_joan","h7Zoo6Zi","id10890353_u518910025_lm") or die ("Error al conectar Base de Datos".mysqli_error());
$Consulta="SELECT Estado FROM Estado WHERE ID=0";
$Resultado= mysqli_query($Conexion,$Consulta);
$pedidos = mysqli_fetch_array($Resultado);
$estado=$pedidos['Estado'];
echo $estado;
	if ($estado==1) {
		$Consulta1="UPDATE Estado SET Estado=2 WHERE ID=0";
		mysqli_query($Conexion,$Consulta1);
		?>
		<meta http-equiv="Refresh" content="0; URL=http://3.227.32.187:3000">
		<?php
	}
	if ($estado==2) {
		$Consulta2="UPDATE Estado SET Estado=1 WHERE ID=0";
		mysqli_query($Conexion,$Consulta2);
		?>
		<meta http-equiv="Refresh" content="0; URL=http://34.232.30.43:3000">
		<?php
	}
?>