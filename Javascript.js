function oi(){

    var oi=document.getElementById("oi").value;
    var oii=document.getElementById("oii").value;
     console.log(oi,oii);
 }

 function somar(){
var num1=parseInt(document.getElementById("n1").value);

var num2=parseInt(document.getElementById("n2").value);

var resultado=num1 + num2;
var tela=document.getElementById("tela");
tela.innerHTML=(resultado);
 }

 function subtrair(){
     var num1=parseInt(document.getElementById("n1").value);

     var num2=parseInt(document.getElementById("n2").value);

     var resultado=num1-num2;

     var tela=document.getElementById("tela");

     tela.innerHTML=(resultado);
 }

 function comparar(){
     var se1=parseInt(document.getElementById("se1").value);

     var resultado=document.getElementById("resultado");
     
     if(se1>=0 && se1<=100) {
        resultado.innerHTML="O 1° elemento é um número de 0 a 100";
    }
    else{
        resultado.innerHTML="O 1° elemento não é um número de 0 a 100";
    }

     var se2=parseInt(document.getElementById("se2").value);

     var resultado1=document.getElementById("resultado1");

    if(se2>=0 && se2<=100){
        resultado1.innerHTML="O 2° elemento é um número de 0 a 100";
    }
    else{
        resultado1.innerHTML="o 2° elemento não é um número de 0 a 100";
    }
}
function Tentador(){
    alert("Tentador, não ?")
        }
function oi(){
    var tt;

    tt=document.getElementById("Java").value;
    console.log(tt);
}

function string(){
    var sigla=document.getElementById("input").value;

    var tela=document.getElementById("oii");

    switch (sigla){
        case "Batman":
        tela.innerHTML="Preto";
        break;
    case "Supermen":
    tela.innerHTML="Vermelho e azul";
    break;
    default:
        tela.innerHTML="Personagem não identificado";
        break;
}
switch (sigla){
    case "jan":
        case"mar":
    tela.innerHTML="31";
    break;
case "abr"||"jun"||"set"||"nov":
tela.innerHTML=30;
break;
case "fev":
tela.innerHTML="28";
break;
default:
    tela.innerHTML="Mês não identificado";
    break;
    };
};