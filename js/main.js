
const list = [
    'uova', 
    'pane', 
    'burro', 
    'marmellata'
];
const listaSpesa = document.getElementById('listaSpesa');
let x = 0;
while(x < list.length) {
    listaSpesa.innerHTML += `<li>${list[x]}</li>`;
    x++;
}