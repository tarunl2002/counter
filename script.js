const decButton = document.getElementById('decrement');
const incButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');
const countSpan = document.getElementById('count');

let count = 0;

function updateCount(){
    countSpan.textContent = count;
}

incButton.addEventListener('click', ()=>{
    count = count+1;
    updateCount();
})

decButton.addEventListener('click', ()=>{
    count = count-1;
    updateCount();
})

resetButton.addEventListener('click', ()=> {
    count=0;
    updateCount();
})