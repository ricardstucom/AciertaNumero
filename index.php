<html>
    <head>
    <a href="aciertaNumeroXML.php"></a>
    <a href="aciertaNumeroJSON.php"></a>
      <script src="jquery-3.1.1.min.js" type="text/javascript"></script>
    <script src="newjavascript.js" type="text/javascript"></script>
    <link href="newCascadeStyleSheet.css" rel="stylesheet" type="text/css"/>
    <!-- Versión compilada y comprimida del CSS de Bootstrap -->
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">
 
<!-- Tema opcional -->
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap-theme.min.css">
 
<!-- Versión compilada y comprimida del JavaScript de Bootstrap -->
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
  
    </head>
<body>
    <div class="container">
        <div id="general" class="row petu">
            <div class="row interior">
    <div  class="row" id="input">
        <div class="row">
    <button onclick="inicioXML()" id="inicioXML">INICIO XML</button>
    <button onclick="inicioJSON()" id="inicioJSON">INICIO JSON</button>
        </div>
        <div class="row">
        <input type="text" id="numero" />
    </div>
        <div class="row">
        <button onclick="chechXML()" id="checkAjaxXML"> CHECK AJAX XML</button>
        <button onclick="checkJSON()" id="checkAjaxJSON"> CHECK AJAX JSON</button>
        </div>
        <div id="encontrado"></div>
        <div id="mensaje"></div>
        <div id="aciertos"></div>
        </div>
        
            </div>
        </div>
    </div>
    </body>
</html>