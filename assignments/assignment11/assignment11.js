const quoteButton = document.querySelector('.new-quote');

quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.api-ninjas.com/v1/randomword';


async function getQuote(){
    let text = await fetch (endpoint);
    let response = await text.text();

    let json_response = JSON.parse (response);

    displayQuote(json_response['word']);
}


function displayQuote(x) {
    document.getElementById('js-quote-text').textContent = x;
}

getQuote();