
console.log("Mi primer hola mundo ej javascript")

let numero1=8;
let numero2=12;

let suma =numero1+numero2;

console.log(`La suma es ${suma}`)

let resta = numero2-numero1;
console.log(`La resta es ${resta}`)

let multiplicacion = numero1*numero2;
console.log(`la multiplicacion es ${multiplicacion}`)

let division = numero1/numero2;
console.log(`la division es ${division}`)

let nota =8
let EstadoMateria= nota >5 ? "Materia aprobrada": "Reprobo la materia ";

console.log(EstadoMateria)

let edad=15
let MayorOMenor = edad>18 ? "Es mayor de edad":"Es menor de edad vaya al kinder"
console.log(MayorOMenor);

let edad2=12
let MayorOMenor2= edad2 >18? 1:2;
console.log(MayorOMenor2)

let edad3=15
let MayorOMenor3 =edad3 >18? "true":"false";
console.log(MayorOMenor3)

let numero = parseFloat("500.60"); 
let resultado = numero + 100;      
console.log(resultado);    

let numeroCuatro ="500";
let segundoNumero=100;
let sumar =Number(numeroCuatro)+segundoNumero
console.log(`el numero es ${numeroCuatro}`)
console.log(` la suma es ${sumar} `)

let edad4 =25;
console.log(`la edad de chantal es ${edad4.toString()}`)
console.log(typeof edad4);
console.log(typeof edad4.toString());







let promedio=8
let edadAlumno=15;
 if (promedio>6){
    console.log("usted ha aprobado la materia ");
if (edadAlumno>18){
    console.log("usted es mayor de edad");
}
else{
    console.log("El estudiante es menor de dad");
}
 }else{
    console.log("usted ha reprobado la materia");

    if(edadAlumno>18){
        console.log("usted es mayor de edad");
    }
    else{
        console.log("El estudiante es menor de edad");
    }
 }

 let dia=5;
 if (dia==1){
    console.log("El dia es lunes")
 }
 else if(dia==2){
    console.log("el dia es martes")
 }
 else if(dia==3){
console.log("el dia es miercoles")
 }
  else if(dia==4){
console.log("el dia es jueves")
 }
  else if(dia==5){
console.log("el dia es viernes")
 }
  else if(dia==6){
console.log("el dia es sabado")
 }
  else if(dia==7){
console.log("el dia es domingo")
 }
  else {
console.log("Ingrese numero del 1 al 7")
 }

 let diaSemana=4;
 switch(diaSemana){
    case 1: console.log("lunes");
    break;
    case 2: console.log("martes");
    break;
    case 3: console.log("miercoles")
    break;
    case 4: console.log("jueves")
    break;
    case 5: console.log("viernes")
    break;
    case 6 : console.log("sabado")
    break;
    case 7: console.log("domingo")
    break;
    default: console.log("no existe dicho numero")
 }


let numeros =[1,2,3,4,5,6];
let nombres =["carlos","alfredo","jhon"]
console.log(numeros);

numeros.forEach(numero =>{
    console.log(`el numero es ${numero}`)
})

nombres.forEach(nombre=>{
    console.log(`el estudiante ${nombre} es muy aplicado`)
})
 
