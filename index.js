/*const nome = prompt ("escreva uma frase")
console.log( nome)
const fraseMaiscula = nome.toUpperCase()
console.log( fraseMaiscula)
console.log(nome.rsplaiceall("o" , "i"));
console.log( nome.length)*/

/*const listadecompras =[" abacate ", "banana" , "tomate"]
const segundoitem = listadecpompras [2] // "tomate"*/

// exercicio 3
/*const racasdecachorros = [" raca1", "raca2" , "raca3" , "raca3", "raca4" , "raca5"]
const escolha = prompt("escolha um numero de 0 a 4")
console.log(racasdecachoros[escolha]);
console.log(racasdecachorros[prompt("digita 0 a 4 ")]);*/

//var array =  [ "a" , "b", "c" , "d", "e", "f", "g" , "h"];
//           [  0,    1,   2,   3,    4,   5,   6,    7 ,];
//array.splice(3 , 3)
//console.log(Array);

  // exercicio 4
//var numeros = [ "1" ,  "2" , "3" , "4" , "5" , "6" ];
//console.log(Array.length)
//Array.push(7)
//console.log(numeros)
//Array,splaice(3 ,2 )
//console.log(numeros)
//console.log(Array.length)

 // calcular area de um retangulo
/*const altura =2
const largura =3
const area = altura * largura
console.log(area)*/

/*function calculaarea( altura , largura ) {
    const area = altura * largura
    console.log(area)
}
 calculaarea (2,3)*/

 /*function imprimirolamundo( ){
    console.log( "ola mundo!")
 }
 imprimirolamundo()*/

 /*function iprimirnome( nome){
    console.log( "ola ", nome,)
 }
  iprimirnome()*/

  /*const a = 1;
  function imprimeVariavel () {
   const b = 2;
   console.log("Variavel a:" , a);
   console.log("Variavel b:" , b);
  }
      imprimeVariavel ()
  console.log("Variavel a:" , a);
  console.log("Variavel b:" , b);*/

  /*function calculaArea(altura , largura) {
    const area = altura * largura
    return area
  }
    const areacalculada = calculaArea(2,3)

    console.log(calculaArea(2,3))*/

            // exercicio 3
     /*function somadoisnumeros(altura , largura) {
        const area = altura + largura
        return area
    }
    const areacalculada = somadoisnumeros(5 , 3)
        console.log(calculaArea(5,3))*/

        
            // exercicio 4
      function recebearray(arrayDenumeros = []){
          return [(arrayDenumeros .length)/2 , (arrayDenumeros[0])/2];
      }

           console.log(recebearray([1,2,3,4,5,6,7,8,9]))