//forEach só está disponível dentro de arrays. 
//forma diferente de iterar sobre arrays (for in, for of)
//so itera sobre a array

const a1 = [10, 20, 30];
let total = 0;
/*
for (let valor of a1) {
    console.log(valor)
} */

a1.forEach(valor => {
    total += valor;
});

console.log(total)
