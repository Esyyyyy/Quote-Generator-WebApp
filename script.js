const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes=[];

//show Loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show New Quote
function newQuote(){
    //Pick a random quote from apiQuotes array
    //const quote=localQuotes[Math.floor(Math.random()*localQuotes.length)];

    const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    

    if (!quote.author){
        authorText.textContent='Unknown';
    } else {
        authorText.textContent=quote.author;
    }

    // if (quote.text.length >120) {
    //     quoteText.classList.add('long-quote');
    // }else{
    //     quoteText.classList.remote('long-quote');
    // }

    if (!quote.text){
        quoteText.textContent='Unknown';
    } else {
        quoteText.textContent=quote.text;
    }
  

    
}

//Get Quote from API
async function getQuote(){

    const apiUrl = 'https://type.fit/api/quotes';
   
   try {
       const response = await fetch(apiUrl);
       apiQuotes = await response.json();
       //authorText.innerText=data.quoteAuthor;
       //quoteText.innerText = data.quoteText;
       newQuote();
   } catch (error) {
       //getQuote();
       console.log('whoops, no quote', error);
   }
}

//Tweet Quote
function tweetQuote(){
    const twitterUrl= `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');

}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On Load
getQuote();
//newQuote();