const numbers = [3, 6, 9, 22, 34, 66, 77, 12, 15, 27, 45];


    let maiorNumber = numbers[0]
    for(let indice of numbers) {
        
        if (indice > maiorNumber) {

            maiorNumber = indice;
        }

    }   

   
    console.log(maiorNumber)




/* const numbers = [3, 6, 9, 22, 34, 66, 77, 12, 15, 27, 45];

const maiorNumber = Math.max(...numbers);

console.log(maiorNumber); */