//funções geradoras;

//laise evaluation, não entrega todos os valores de uma vez, bom para performace dependendo do uso.


//return faz

//yield ao invez de return

function* geradora1 () { //qualquer chamar vai chamar um valor diferente(em ordem)
    //código qualquer...
    yield 'Valor 1';
    //código qualquer...
    yield 'Valor 2';
    //código qualquer...
    yield 'Valor 3';
};

const g1 = geradora1();
/*console.log(g1.next().value); //para ver o valor deve usar o .next() (valor 1)
console.log(g1.next().value); //para ver o valor deve usar o .next() (valor 2)
console.log(g1.next().value); //para ver o valor deve usar o .next() (valor 3)
console.log(g1.next())*/

//{ value: 'Valor 1', done: false } => .value done diz se já terminou o valor dentro da fucntion;

//{ value: undefined, done: true } => done = true quer dizer que já acabou os valores.

//para iterar

/*for (let valor of g1) {

    console.log(valor)

} */

    //gerador infinito

    function* geradora2() {
        let i = 0;

        while(true) {
            yield i;
            i++;
            
        }
    }

  /*  const g2 = geradora2();

    console.log (g2.next().value)
    console.log (g2.next().value)
    console.log (g2.next().value)
    console.log (g2.next().value)
      console.log (g2.next().value)

      */

      //gerador que delega tarefa para outro gerador

      /*function* geradora3() {

        yield 0;
        yield 1;
        yield 2;

      }

      function* geradora4() {
        yield* geradora3(); //delega para a geradora 3 fazer de 1-3 e na geradora 4 continuar
        yield 3;
        yield 4;
        yield 5;


      }

      const g4 = geradora4();

      for (let valor of g4){

        console.log(valor);

      }
        */

      function* geradora5(){
        yield function() {

            console.log('vim do Y1');
        };
        
        yield function() {
            console.log('vim do Y2')

        }

        //.... //aṕs return n chama nada

        yield function () {
            console.log('vim do Y3');


        }

      }

      const g5 = geradora5();

      const func1 = g5.next().value; //a ordem onde é declarada influencia no resultado
      const func2 = g5.next().value;
      const func3 = g5.next().value;

      func1();
      func2();
      func3();