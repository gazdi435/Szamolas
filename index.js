function szamol(){
    kapacitas = document.getElementById("kapacitasSzam").value;
    kapacitasMert = document.getElementById("kapacitasMertEgy").value;
    if (kapacitasMert == "KB") {

    }else if (kapacitasMert == "MB") {
        kapacitas *= 1000;
    }else if (kapacitasMert == "GB") {
        kapacitas *= 1000 * 1000;
    }else if (kapacitasMert == "TB") {
        kapacitas *= 1000*1000*1000;
    }

    atvitel = document.getElementById("atvitel").value;
    atvitelMert = document.getElementById("atvitelMert").value;
    if (kapacitasMert == "KBps") {

    }else if (atvitelMert == "MBps") {
        atvitel *= 1000;
    }else if (atvitelMert == "GBps") {
        atvitel *= 1000000;
    }else if (atvitelMert == "TBps") {
        atvitel *= 1000000000;
    }
    document.getElementById("eredmeny").innerHTML = ido(kapacitas/atvitel);
    alert("Az alábbi művelethez " + ido(kapacitas/atvitel) + " idő szükséges");

}

function atvitelValtozas(){
    document.getElementById("atvitelErtek").innerHTML = document.getElementById("atvitel").value;
}

function ido(szam)
 { 
  var perc = Math.floor(szam / 60);  
  var masodperc = szam % 60;
  return perc + ":" + masodperc;         
}