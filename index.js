var array = []; //array for storing numbers
var parent = document.getElementById("bar"); 

//function to generate random numbers array
function generateArray(){
    deleteChild();
    for(let i=0;i<15;i++){
        array[i] = generateRandom();
    }
    const bars = document.querySelector("#bar");
    for (let i = 0;i<15;i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*4}px`;
        bar.classList.add('barheight');
        bars.appendChild(bar);
    }
}

let delay = 500;
let speed = document.querySelector("#speed_input");
speed.addEventListener('input',function(){
    delay = 1000 - speed.value;
});

// function to generate random numbers
function generateRandom(){
    var numb = Math.floor(Math.random()*(100-5))+5;
    return numb;
}

function wait(miliseconds){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('')
        },miliseconds);
    });
}

generateArray();

let newArraybtn = document.querySelector(".newarraybtn");
newArraybtn.addEventListener('click',function(){
    generateArray();
});

function deleteChild() {
    const bar = document.querySelector("#bar");
    bar.innerHTML = '';
}
// mergeSort(array,0,size-1);
// alert("working");