const colors = ['azul', 'vermelho', 'amarelo', 'vermelho', 'amarelo', 'amarelo', 'vermelho', 'preto', 'roxo', 'verde'];


const colorCount = makeCount(colors);

console.log(colorCount);

function makeCount (array) {

    let count = { };


    

    for (let cor of array) {
        
        count[cor] = (count[cor] || 0) + 1; 
    }

    return count;

}
