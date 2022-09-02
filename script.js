/****** MENU DESPLEGABLE  *******/

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}



if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



/*********  SECCION DE CARRITO DE COMPRA ******/
let products = [];
let total = 0;
let desc = 0;
let total1 = 0;


function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    descuento(total);
    document.getElementById("checkout").innerHTML = `TOTAL $${total}`;
}



/*******  PAGAR & RESET ********/
function pay() {
    if (total == 0 || total1 == 0){
        window.alert("El carrito esta vacio, agregue algun producto para realizar su compra")
    } else {
        window.alert(products.join(", \n") + " / " +`Su monto total es: ${total1}` + "$");
    products = [];
    total1 = 0;
    document.getElementById("checkout").innerHTML = `TOTAL $${total1}`;
    }
}



/****** DESCUENTO ********/ 
function descuento (total) {

    

    if (total > 50 && total <= 500){
        desc = total * 0.1;
        total1 = total - desc;
        }else if (total>500){
        desc = total * 0.25;
        total1 = total - desc;
        }else{
        total1 = total;
    } 

    return(total1);
}

/****** SUSCRIPCION  *******/
function suscripcion(){
    window.alert("Suscripción Realizada");
}

/****** fORMULARIO CONTACTO  *******/
function  contacto () {
    
    var formulario= "";
    formulario = "Mensaje Enviado";
    window.alert(formulario);
}


/****** FORMULARIO REGISTRO  *******/
const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');


document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});


/* MOSTRAR DATOS FORMULARIO */

function MiPrimerFormulario()
{
var formulario= "";
var nombre=document.form1.nombre.value;
var email=document.form1.email.value;
var clave1=document.form1.clave1.value;


formulario="DATOS DEL REGISTRO: " + "\nNombre: " + nombre + "\nE-mail: " + email + "\nClave: " + clave1;
alert(formulario);

}


function MiSegundoFormulario()
{

var formulario= "";
var emaili=document.form1.emaili.value;
var password=document.form1.password.value;
var emailir="j@gmail.com";
var passwordr="pepito";

formulario="HA INICIADO SESION CORRECTAMENTE";

if (emaili == emailir &&  password == passwordr) {
    alert (formulario);
 } else {
    window.alert("NO EXISTE EL RESGISTRO")
 }
                                              

}

function MiFormulario()
{
var formulario= "";
var nombre=document.form1.nombre.value;
var email=document.form1.email.value;
var clave1=document.form1.clave1.value;


formulario="DATOS DEL REGISTRO: " + "\nNombre: " + nombre + "\nE-mail: " + email + "\nClave: " + clave1;
alert(formulario);

}
