const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'}
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa})//setar valores no map usa SET

}
// no objeto javascript uma chave só pode ser uma string ou number;

console.log(novasPessoas.get(2))//para obter valores do map usasse GET

//pode iterar e retorna array

//for (const pessoas of novasPessoas.values()) { //.keys() retorna chaves, .values() retorna valores array;

  //  console.log(pessoas);

//}

novasPessoas.delete(2);
console.log(novasPessoas);
