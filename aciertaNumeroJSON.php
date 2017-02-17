<?php
session_start();


$resultado='{';
if(isset($_GET['inicio'])){     //se ha indicado iniciar un nuevo juego
        $numeroAleatorio=rand(0,10);//seleccionamos un numero aleatorio entre 0 y 10
        $_SESSION['numeroOculto'] = $numeroAleatorio;
                
                $resultado .= '"inicio":'.$_SESSION['numeroOculto'];
       
}else{
    $numeroUsuario = $_GET['numero'];
    $numeroOculto=$_SESSION['numeroOculto'];
    
    if($numeroUsuario > $numeroOculto ){
        $resultado .='"encontrado":"no","mensaje":"Has introducido un valor demasiado alto"';
       
    }else {
        if($numeroUsuario < $numeroOculto ){
             $resultado .='"encontrado":"no","mensaje":"Has introducido un valor demasiado bajo"';
          
        }else{
              $resultado .='"encontrado":"si","mensaje":"Exacto!"';
             
        } 
        
    }
}
//finalizamos la estructura XML


//insertamos la respuesta XML
$resultado.='}';
echo($resultado);
?>
