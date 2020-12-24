'use strict'; 
const main = document.querySelector('.main'); 

let cellSize = 100;
const empty = {
    value:0,
    top:0,
    left:0
};

const cells = [];
cells.push(empty);


function move(index) {
    
    const cell = cells[index];

    const leftDiv = Math.abs(empty.left - cell.left); 
    const topDiv = Math.abs(empty.top - cell.top); 

    if (leftDiv + topDiv > 1) {
        return;
    }

    cell.element.style.left = `${empty.left * cellSize}px`;
    cell.element.style.top = `${empty.top * cellSize}px`;

    const emptyLeft = empty.left; 
    const emptyTop = empty.top;

    empty.left = cell.left; 
    empty.top = cell.top; 

    cell.left = emptyLeft;
    cell.top = emptyTop;

    const isFinihed = cells.every( cell => {
        console.log(cell.value, cell.top, cell.left);
        return cell.value === cell.top * 4 + cell.left;
    });

    if (isFinihed){
        alert('you won');
    }

};

const num = [...Array(15).keys()]
.sort(() => Math.random() -0.5);

for ( let i = 1; i <=15; i++){ // создаем цикл, где i = 0, i меньше или равно 15 и добирает до 15
    const cell = document.createElement('div');// создали для  переменной cell div
    const value = num[i-1]+1; 
    cell.className = 'cell'; // дали перемменной и диву cell имя класса
    cell.innerHTML = value;// поместили в cell цифры от 1 до 15


    const left = i % 4; // переменная left это число i остаток от деления на 4
    const top = ( i - left) / 4; // 

    cells.push({
        value:num[i-1]+1,
        left: left, 
        top: top, 
        element:cell
    })

    cell.style.left = `${left * cellSize}px`;
    cell.style.top = `${ top * cellSize}px`;
    

    main.appendChild(cell); // вставляем cell в main 

    cell.addEventListener('click', () => {
        move(i);
    })



};











// Мой вариант с массивами
// let i = ['1', "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15" ]; 
// let newCell = i.map(i => document.createElement('div').innerHTML = i);
// main.append(newCell);
// newCell.className = 'cell';



// function shuffle(array){ // функция для перемешивания массива
//     array.sort(() => Math.random() - 0.5);  // с array используем метод sort() 
// }; 

//shuffle(cell); // перемешали массив







// перебираем массив по элемменту и присваеваем ему дивы 
// в каждый перебранный элеммент массива присваем один и тот же класс 

