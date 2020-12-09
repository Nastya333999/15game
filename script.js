'use strict'; 

const main = document.querySelector('.main'); //1. 

const empty = { // 4 создаем переменную 
    top:0, // 5 указываем ее позицию 
    left:0
};

const squareSize = 100;  // 8 создаем переменную размера ячейки

const squares = []; // 16 создаем МАССИВ 
    squares.push(empty); // 17 добавляем пустой элемент в массив
  
function move (index) { // 19 создаем функцию
    const square = squares[index]; 

    const leftDiv = Math.abs(empty.left - square.left); // 26
    const topDiv = Math.abs(empty.top - square.top); //27

    if ( leftDiv + topDiv > 1){
        return;
    }

    square.element.style.left = `${empty.left * squareSize }px`; // +12 скопировали с функции клик
    square.element.style.top = `${ empty.top * squareSize}px`; // +13

    const emptyLeft = empty.left; // 20
    const emptyTop = empty.top; // 21
    empty.left = square.left; //22 в кординаты пустой клетки записываем текущие кординаты ячейки
    empty.top = square.top; //23 в кординаты пустой клетки записываем текущие кординаты ячейки
    
    square.left = emptyLeft; // 24 в ячейку левую записываем временно записанные значения 
    square.top = emptyTop; //25
}

for ( let i = 1; i <= 15; i++ ){  // 2. создаем цикл, где указываем i которое равно от 1 до 15
    const square = document.createElement('div'); // создаем див
    square. className = 'div';  //2 присваиваем класс диву
    square.innerHTML = i; //3 говорим, что див = i (числу от 1 до 15)


    const left = i % 4; // 6 для кажоый из ячеек, позиция слева - остаток отделения чиста i на 4 позиции 
    const top = (i -  left) / 4; // 7 после того, как место i определено, (2й ряд, к примеру), мы делим это на 4 (4 вертикальных ряда всего) и получаем место i в вертикальном ряду
    
    squares.push({// 18 в массив вкладываем данные 
        left:  left, // 
        top: top, // 
        element: square // 
    }); 

    square.style.left = `${left * squareSize }px`; // 9  
    square.style.top = `${ top * squareSize}px`;// 10

    main.append(square); // 4 вставляем square в main

    square.addEventListener('click', ()=>{ // 11 добавляем событиек click, после которого происходит функция

        move(i);

        //square.style.left = `${empty.left * squareSize }px`; // 12
       //square.style.top = `${ empty.top * squareSize}px`; // 13

        //empty.left = left; // 14
        //empty.top = top; // 15
    })
}