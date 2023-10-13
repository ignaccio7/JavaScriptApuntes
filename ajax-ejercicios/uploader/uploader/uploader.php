<?php
    //CON ESTE ARCHIVO PHP moveremos los archivos que subamos a la ruta /archivos/

    //echo "HOLA RESPONSE DESDE SERVIDOR PHP";
    //cuando subimos ficheros en php tenemos variables especiales para estos
    //var_dump() crea un arreglo asociativo del archivo que se sube pero no nos sirve para mostrar ya que en el js estamos recibiendo un text
    //con este isset verificamos que la variable $_FILES["file"] exista osea que le estemos enviando algo en "file" desde js cuando hacemos el append
    if(isset($_FILES["file"])){
        //echo "existe";
        //convertira el contenido de $_FILES a una cadena y podremos ver su salida en el js
        // $fileInfoAsString = print_r($_FILES, true);
        // echo $fileInfoAsString;    
        //NOTA HASTA AQUI FUE PARA PROBAR COMO CONECTO CON JS YA LUEGO DE ESTO MANDAREMOS UN JSON

        $name = $_FILES["file"]["name"]; //nombre del archivo
        $file = $_FILES["file"]["tmp_name"]; //nombre de archivo temporal
        $error = $_FILES["file"]["error"]; //en caso de error

        //en la carpeta archivos con su $name (nombre original)
        $destinantion = "./archivos/$name";

        //(<archivo>,<destino>) devuelve true o false si se cumple o no
        $upload = move_uploaded_file($file,$destinantion);

        if($upload){
            $res = array(
                "err"=>false,
                "status"=>http_response_code(200),
                "statusText"=>"Archivo $name subido con exito",
                "files"=>$_FILES
            );
        }else{
            $res = array(
                "err"=>true,
                "status"=>http_response_code(400),
                "statusText"=>"Error al subir el archivo $name",
                "files"=>$_FILES
            );
        }

        //vamos a codificar ese arreglo asociativo a un formato json
        echo json_encode($res);

    }
?>