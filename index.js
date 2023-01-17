/*
    var column = 16;
    var row = 16;

    function makeGrid(columns, rows){
    var grid = document.createElement('div');
    grid.className = 'grid';
    for (var i = 0; i < columns; ++i) {
        var column = document.createElement('div'); // create column
        column.className = 'column';
        for (var j = 0; j < rows; ++j) {
            var row = document.createElement('div'); // create row
            row.className = 'row';
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
    document.body.appendChild(grid);
}

function changeGridSize(size){
    column=size;
    row=size;
}

changeGridSize(4);
makeGrid(column,row);
*/
const container = document.querySelector('.container');
const sizeEl = document.querySelector('.size');
let size = sizeEl.value;
const color= document.querySelector('.color');
const resetBtn = document.querySelector('.btn');
const rainbowBtn = document.querySelector('.btn2');
let rainbowSwitch = false;

let draw = false;

function populate(size){
    container.style.setProperty('--size', size);
    for (let i = 0;i< size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');

    div.addEventListener('mouseover',function(){
        if(!draw)return;
        if(rainbowSwitch==true)
        div.style.backgroundColor = random_rgba();
        else
        div.style.backgroundColor = color.value;
    })
    
    div.addEventListener('mousedown',function(){
        if(rainbowSwitch==true)
        div.style.backgroundColor = random_rgba();
        else
        div.style.backgroundColor = color.value;
    })
    container.appendChild(div);
    }
}



window.addEventListener("mousedown",function(){
    draw = true;
})
window.addEventListener("mouseup",function(){
    draw = false;
})
populate(size);

function reset (){
    container.innerHTML = '';
    populate(size);
}

resetBtn.addEventListener('click', reset);

sizeEl.addEventListener('change', function(){
   if(sizeEl.value > 100)return;

    size = sizeEl.value;
    reset();
})

populate(size);

rainbowBtn.addEventListener('click',function(){
    rainbowSwitch = !rainbowSwitch
})


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

