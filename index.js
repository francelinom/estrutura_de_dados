const saldoContas = [100, 200, 40, 1.9, 300, 1000, 9.99];

const total = saldoContas.reduce( (acumulador, valor) => {
    console.log('acumulador', acumulador);
    console.log('valor', valor);
    return acumulador + valor
});

console.log(total);