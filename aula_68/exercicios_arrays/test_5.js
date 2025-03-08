const idades = [13, 15, 17, 22, 12, 18, 25, 32];

const legalAge = idades.filter(value => value >= 18);

console.log(`A quantidade de pessoas ${legalAge.length === 1 ? 'é' : 'são'} ${legalAge.length}`)