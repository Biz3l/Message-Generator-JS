
// arrays das frases, contendo inicio, meio e fim de uma frase.
const inicioFrase = ['Xibiu', 'Vaca', 'Chavinho', 'Rapaz', 'Mano'];
const meioFrase = ['ele tá', 'é minha piranha', 'sua vagabunda', 'é uma mulher', 'pode ficar', 'não pode estar' ];
const fimFrase = ['sem zap', 'com o cu grudado', 'com as calça arriada', 'gostando de linkin park aqui em chique chique 📍'];


const randSel = (arr) => {
  const randNum = Math.floor(Math.random() * arr.length);
  return randNum;
};

const phraseSel = (arr1, arr2, arr3) => {
  const word1 = arr1[randSel(arr1)];
  const word2 = arr2[randSel(arr2)];
  const word3 = arr3[randSel(arr3)];
  return `${word1} ${word2} ${word3}`
};

console.log(phraseSel(inicioFrase, meioFrase, fimFrase));

// :) 