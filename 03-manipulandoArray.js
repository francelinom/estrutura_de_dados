const redesSociais = [
    'Instagram',
    'Youtube',
    'Facebook',
    'TikTok',
    'Twitter',
    'LinkedIn',
    'Pinterest',
]

/** O indexOf vai retornar a posição do index do elemento do array */
const tiktok = redesSociais.indexOf('TikTok');
console.log(tiktok);

/** O includes vai dizer se o elemento existe no array */
console.log(redesSociais.includes('Youtube'));

for (let i = 0; i < redesSociais.length; i++) {
    console.log('for tradicional ->', redesSociais[i]);
}

for (const i in redesSociais) {
    console.log('for in ->', `${i}: ${redesSociais[i]}`);
}

/** O for of intera sobre os valores do array */
for (const valor of redesSociais) {
    console.log('for of ->', valor);
}

redesSociais.forEach((valor, index, array) => {
    console.log(valor);
    console.log(index);
    console.log(array);
})

let i = 0;
while (i < redesSociais.length) {
    console.log(redesSociais[i]);
    i++;
}

let j = 0;
do {
    console.log('do -> ', redesSociais[j]);
    j++;
} while (j < redesSociais.length);