<html>
    <head>
    <a href="aciertaNumeroXML.php"></a>
    <a href="aciertaNumeroJSON.php"></a>
      <script src="jquery-3.1.1.min.js" type="text/javascript"></script>
    <script src="newjavascript.js" type="text/javascript"></script>
  
    </head>
<body>
    <div onclick="inicioXML()" id="inicioXML">INICIO XML</div>
    <div onclick="inicioJSON()" id="inicioJSON">INICIO JSON</div>
        <input type="text" id="numero" />
        <div onclick="chechXML()" id="checkAjaxXML"> CHECK AJAX XML</div>
        <div onclick="checkJSON()" id="checkAjaxJSON"> CHECK AJAX JSON</div>
        <div id="encontrado"></div>
        <div id="mensaje"></div>
        <div id="aciertos"></div>
        
    </body>
</html>