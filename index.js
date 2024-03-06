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

  // exercicio 2

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
            /*function recebearray(arrayDenumeros = []){
                return [(arrayDenumeros .length)/2 , (arrayDenumeros[0])/2];
            }

           console.log(recebearray([1,2,3,4,5,6,7,8,9]))*/    
           
           /*const professor = {
            nome: "vitor",
            idade: 27,
            tarefas:['Dar aula', 'responder duvidas'],
            contarpiada: function() {
            console.log('É pa ve ou pa come')
            email:'vitor@gmail.com'
              }

             }
             console.log(professor["idade"] );
             console.log( professor[ 'email'])
             console.log(professor.nome = 'jozue');
             console.log('jozue')*/

                /*const filme = {
                nome : "uma historia de vida",
                direcao:[' nao sei'],
                ano:1988,
                elenco:["neo" , " conexao", "desconexao" , "ola"],
                visto: true,
                }
               console.log(filme.nome);
               console.log( filme.direcao);
               console.log( filme["ano"]);
               console.log(filme["elenco"]);
               console.log(filme["visto"]);*/

                /* const pessoa = {
                nome: "joao",
                idade: 25,
                generomusical: "gaucha",
               }
               console.log("o nome da pessoa é " , pessoa.nome, "ela tem" , pessoa.idade , "anos e gosta muito de musica" , pessoa.generomusical, );  */

               /* const donodopet ={
                nome: "vitor hugo",
                pet: {
                  nomedopet: "wanda",
                  raca: "vira-lata",
                  idade: 1
                }
               }
               console,log(donodopet,pet.donodopet); */

              /*  const curso = {
                nome:" noturno frontend",
                linguagens: [ "js" , "css" , "html"]

               }
                console.log( curso.linguagens[0]) */
                
                
                /* // nome:( objeto) , modulo:(chave) , Andrei,Vitor,Mina:(valor)
                const professores = [
                  {nome: "Andrei" , modulo:1},   
                  {nome: "Vitor" , modulo:2},
                  {nome: "Mina" , modulo:3}
                ]
                //console.log(professores[0].nome)
                console.log(professores[1].nome) */
/* 
                const curso = {
                  nome: "frontend",
                  linguagens:[ "js" , "css" , "html"]

                }
                     console.log("curso.numerosestudante = 50") */

                 /*    const filme = {
                nome : "uma historia de vida",
                direcao:[' nao sei'],
                ano:1988,
                elenco:["xuxa" , " conexao", "desconexao" , "ola"],
                visto: true,
                }
               filme.personagens= [ "personagens 1" , "personagens 2"," personagens 3", "personagens 4"];
               console.log(filme.elenco[0] + "-" + filme.personagens[0]);
               console.log(filme.elenco[1] + "-" + filme.personagens[1]);
               console.log(filme.elenco[2] + "-" + filme.personagens[2]);
               console.log(filme.elenco[3] + "-" + filme.personagens[3]);
                filme.elenco[0] ="xuxa";
                console.log(filme.elenco[0]);
                console.log(filme); */

             /*    const usuario = {
                  nome: 'prof',
                  idade: 25,
                  email:'prof@senacrs.com.br',
                  cidade: 'sao paulo'
                }
                 const novoUsuario = {
                  ...usuario,
                  nome: 'joao',
                  idade:28,
                 } */
              /* 
                 const listadenomes = ["mica" , "paula" , "vitor"]
                 const copialistadenomes = [ ...listadenomes]

                 console.log(copialistadenomes) // ["mica" , "paula" , "vitor"] */

                 /*let condicao1=falce
                 let condicao2=falce

                 if(condicao1){
                  console.log('entrei no if 1!')

                 } elce if (condicao2){
                   console.log('entrei no if 2!')
                 }else{
                  
                  //como tanto o valor da condicao
                 console.log()*/

                 /*let paisdeorigem
                 if ( paisdeorigem === 'brasil'){
                      console.log('brasileiro')
                 }else if(paisdeorigem ==='EUA'){
                       console.log( 'norte americano')
                 }else if(paisdeorigem ==='inglatera'){
                       console.log('ingles')
                 }else if  ( paisdeorigem === 'franca'){
                        console.log('frances')
                  }else if(paisdeorigem === 'italia'){
                        console.log(italiano)
                  }else if ('paisdeorigem === 'canada'){
                        console.log('canadense')
                 }else{
                  console.log('nacionalidade nao encontrada')
                  }*/
                  
                  /*let paisdeorigem
                  switch (paisdeorigem){
                  case 'brasil':
                    console.log('brasileiro')
                      break
                    case 'EUA':
                  console.log('norteamericano')
                      break
                      case 'inglatera':
                  console.log('ingles')
                        break
                        default:
                  console.log('nacionalidade nao encontrada')
                      break
                  }*/

                  /*var pokemon = prompt ('escolherpokemon'){
                  switch (pokemon)
                  case 'bulbusauro':
                      console.log('planeta veneno')
                      break
                  case 'charmander':
                    console.log('fogo')
                      break
                  case 'squirtle':
                      console.log('agua')  
                      break
                      default:
                      console.log('')
                  }*/
                     /*let condicao1 = true
                    let condicao2 = falce*/ 

                    /*if ( condicao1 && condicao2){
                      // entra aqui se ambas forem true

                    }
                    if (!condicao1){
                      // entra aqui se condicao1 for false
                    }*/

                       /* function podeentrarnafaculdade(ensinomedio, idade,faculdade){
                        if(ensinomedio === "sim" || ensinomedio === "sim")
                        {ensinomedio = true ;} else { ensinomedio  =false;}
                        
                        if(faculdade === "sim" || faculdade === "sim")
                        {faculdade === true} else {faculdade = false;}

                        if (idade >=18 && ensinomedio && faculdade){
                          return "vove pode entrar na faculdade";
                        }
                          else{return"vove noa pode etrar na faculdade";}
                      }

                      console.log
                      podeentrarnafaculdade(
                      prompt("voce concluiu o ensino medio?"),
                      number(prompet("qual sua idade?")),
                      prompt("voce ja estuda em uma faculdade?")
                      ) */
                    /*function calculaarea(base ,altura) {
                      
                    }*/