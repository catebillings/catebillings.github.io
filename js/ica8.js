// Function to change the content of t2
function modifyText() {
    const clickme = document.getElementById("clickme");
    const isNodeThree = clickme.firstChild.nodeValue === "Hello!";
    clickme.firstChild.nodeValue = isNodeThree ? "Click Me" : "Hello!";
  }
  
// Add event listener to table
const el = document.getElementById("clickme");
el.addEventListener("click", modifyText, false);



const buttonToBeClicked = document.getElementById("buttonone");

const initialText = buttonToBeClicked.textContent;

// the text that the button contains after being clicked
const clickedText = "My name is Cate!";

// we hoist the event listener callback function
// to prevent having duplicate listeners attached
function eventListener() {
  buttonToBeClicked.textContent = clickedText;
}

function addListener() {
  buttonToBeClicked.addEventListener(
    "click",
    eventListener,
    {
      passive: true,
      once: true
    }
  );
}

addListener();