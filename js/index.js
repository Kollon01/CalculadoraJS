"use strict"


var btn1 = document.querySelector(".uno"); 
var btn2 = document.querySelector(".dos"); 
var btn3 = document.querySelector(".tres"); 
var btn4 = document.querySelector(".cuatro"); 
var btn5 = document.querySelector(".cinco"); 
var btn6 = document.querySelector(".seis"); 
var btn7 = document.querySelector(".siete"); 
var btn8 = document.querySelector(".ocho"); 
var btn9 = document.querySelector(".nueve"); 
var btn0 = document.querySelector(".cero");

var btnSuma = document.querySelector(".suma");
var btnResta = document.querySelector(".resta");
var btnMult = document.querySelector(".multiplicar");
var btnDiv = document.querySelector(".dividir");


function setResult(value) {
    document.getElementById('result').innerHTML = value;
}
function getResult() {
    return(document.getElementById('result').innerHTML);
}
function add(key) { 
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}
function calc() {
    try{
        var result = eval(getResult()); 
        setResult(result);
    }catch(err){
        if(err){
            setResult(0);
        }
    }
    
    
}
function del() { 
    setResult(0);
}
    

