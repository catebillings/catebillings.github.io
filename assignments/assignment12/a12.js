function submit() {
    alert(output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function plusRunner() {
    plus(outputInt)
}

function minus() {
    if (outputInt > 0) {
    outputInt -=1;
    output.textContent = outputInt; }
 }

function plus() {
    if (outputInt < 9999999999) {
   outputInt +=1;
   output.textContent = outputInt; }
}

function random() {
    outputInt = randomNumber(0, 999999999);
    output.textContent = outputInt;
}


function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}



const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const minusButton = document.querySelector('.minus-button').addEventListener('click',minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click',plusRunner);
const resetButton = document.querySelector('.reset-button').addEventListener('click',reset);
const randomButton = document.querySelector('.random-button').addEventListener('click',random);
const submitButton = document.querySelector('.submit-button').addEventListener('click',submit);


//sets a random absolute position to a html element; receives the html element
function moveElmRand(elm){
    elm.style.position ='absolute';
    elm.style.top = Math.floor(Math.random()*90+5)+'%';
    elm.style.left = Math.floor(Math.random()*90+5)+'%';
}
   
//get the #btn_test
var minus = document.querySelector('#minus')
var plus = document.querySelector('#plus')
var reset = document.querySelector('#reset')
var random = document.querySelector('#random')
var submit = document.querySelector('#submit')
   
   
minus.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
minus.addEventListener('click', function(e){ alert('You are Good.');});

plus.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
plus.addEventListener('click', function(e){ alert('You are Good.');});

reset.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
reset.addEventListener('click', function(e){ alert('You are Good.');});

random.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
random.addEventListener('click', function(e){ alert('You are Good.');});

submit.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
submit.addEventListener('click', function(e){ alert('You are Good.');});