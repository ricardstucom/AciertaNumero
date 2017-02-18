//---------------------XML-----------------------------
var fallos = 0;
var aciertos = 0;
function inicioXML() {
    var numero = document.getElementById("numero").value;
    var xmlHttp = new XMLHttpRequest();
    var urlDesti = "aciertaNumeroXML.php?inicio=si";

    xmlHttp.open("GET", urlDesti, true);
    xmlHttp.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repResposta(xmlHttp);
        }
    };
    xmlHttp.send(null);
}
function repResposta(xmlHttp) {
    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseXML;
        var result = resp.getElementsByTagName("inicio")[0].textContent;
        document.getElementById("mensaje").innerHTML = "Se ha generado un numero nuevoo";
    }
}

function chechXML() {
    var numero = document.getElementById("numero").value;
    var xmlHttp = new XMLHttpRequest();
    var urlDesti = "aciertaNumeroXML.php?numero=" + numero;

    xmlHttp.open("GET", urlDesti, true);
    xmlHttp.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repResposta2(xmlHttp);
        }
    };
    xmlHttp.send(null);
}
function repResposta2(xmlHttp) {
    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseXML;
        // var result = resp.getElementsByTagName("inicio")[0].textContent;
        var encontrado = resp.getElementsByTagName("encontrado")[0].textContent;
        var mensaje = resp.getElementsByTagName("mensaje")[0].textContent;
        // console.log(result);
        if (encontrado === ("no")) {
            fallos++;
        } else {
            aciertos++;
        }
        if (aciertos === 10) {
            document.getElementById("aciertos").innerHTML = "Has llegado al límite de aciertos";
        }
        if (aciertos < 10 && fallos < 10) {
            document.getElementById("aciertos").innerHTML = "Llevas: " + aciertos + " aciertos";
            document.getElementById("aciertos").innerHTML = "Llevas: " + fallos + " fallos";
        }
        if (fallos === 10) {
            document.getElementById("aciertos").innerHTML = "Has llegado al máximo de fallos";
            document.getElementById("general").classList.add("esconder");

        }
 document.getElementById("mensaje").innerHTML = encontrado + "</br>" + mensaje;


    }
}

//-------------------------------------JSON-----------------------------------------------------

function inicioJSON() {
    var numero = document.getElementById("numero").value;
    var xmlHttp = new XMLHttpRequest();
    var urlDesti = "aciertaNumeroJSON.php?inicio=si";

    xmlHttp.open("GET", urlDesti, true);
    xmlHttp.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repResposta3(xmlHttp);
        }
    };
    xmlHttp.send(null);
}
function repResposta3(xmlHttp) {
    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseText;

        var respJSON = JSON.parse(resp);
        var respuesta = respJSON.inicio;

        document.getElementById("mensaje").innerHTML = "Se ha generado un numero nuevoo";
    }
}

function checkJSON() {
    var numero = document.getElementById("numero").value;
    var xmlHttp = new XMLHttpRequest();
    var urlDesti = "aciertaNumeroJSON.php?numero=" + numero;

    xmlHttp.open("GET", urlDesti, true);
    xmlHttp.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repResposta4(xmlHttp);
        }
    };
    xmlHttp.send(null);
}
function repResposta4(xmlHttp) {
    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseText;

        var respJSON = JSON.parse(resp);
        var mensaje = respJSON.mensaje;
        var respuesta = respJSON.encontrado;
        if (respuesta === ("no")) {
            fallos++;
        } else {
            aciertos++;
        }
        if (aciertos === 10) {
            document.getElementById("aciertos").innerHTML = "Has llegado al límite de aciertos";
        }
        if (aciertos < 10 && fallos < 10) {
            document.getElementById("aciertos").innerHTML = "Llevas: " + aciertos + " aciertos";
            document.getElementById("aciertos").innerHTML = "Llevas: " + fallos + " fallos";
        }
        if (fallos === 10) {
            document.getElementById("aciertos").innerHTML = "Has llegado al máximo de fallos";
            document.getElementById("general").classList.add("esconder");

        }
 document.getElementById("mensaje").innerHTML = respuesta + "</br>" + mensaje;

    }
}

