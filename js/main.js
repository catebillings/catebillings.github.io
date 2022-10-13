// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = 'There once was a man who was 500 pounds. He only left the house if it was at least 70 fahrenheit. His name was :insertx:, and he worked from home as a :inserty:. One day, his best friend Bob told him his job as a :inserty: sucked, so he :insertz:.'

const insertX = ['Chris','John','Allen'];

const insertY = ['cyber security intern','information technology CEO','software engineer'];

const insertZ = ['ran away to Mexico','quit by making a TikTok about all the things he hated about his job','sold everything he owned and moved to Alaska'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
   let newStory = storyText;

   const xItem = randomValueFromArray(insertX)
   const yItem = randomValueFromArray(insertY)
   const zItem = randomValueFromArray(insertZ)

   newStory = newStory.replaceAll(':insertx:',xItem);
   newStory = newStory.replaceAll(':inserty:',yItem);
   newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('70 fahrenheit', temperature);
    newStory = newStory.replaceAll('500 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


randomize.addEventListener('click', result);

