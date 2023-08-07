function mudarBackgroudCardAmarelo(){
    var cor = document.getElementById('Txtcor').value;
    document.getElementById('divAmarela').style.backgroundColor = cor;
}

function mudarBackgroudCardVermelho(){
    var cor = document.getElementById('Txtcor').value;
    document.getElementById('divVermelha').style.backgroundColor = cor;
}

function mudarBackgroudCardAzul(){
    var cor = document.getElementById('Txtcor').value;
    document.getElementById('divAzul').style.backgroundColor = cor;
}

function mudarGeral(param){
    var cor = document.getElementById('Txtcor').value;

if(param == true){
    document.getElementById('divAmarela').style.backgroundColor = cor;
}
else if ('OK'){
    document.getElementById('divVermelha').style.backgroundColor = cor;
}
else{
    document.getElementById('divAzul').style.backgroundColor = cor;
}

    document.getElementById('header2').innerHTML = 'Adrian';
}

//Lucas || Rodrigo || Adrian