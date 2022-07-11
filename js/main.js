
const list = [
    'uova', 
    'pane', 
    'burro', 
    'marmellata'
];
const shoppingList = document.getElementById('shoppingList');
let x = 0;
while(x < list.length) {
    shoppingList.innerHTML += `<li>${list[x]}</li>`;
    x++;
}