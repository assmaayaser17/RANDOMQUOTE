var quoteText = document.querySelector("#quote"),
 quoteBtn = document.querySelector("button"),
writerName = document.querySelector("#writer"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
synth = speechSynthesis;



var quotes = [{
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `– Mae West`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    writer: `– Albert Einstein`
}, {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    writer: `– Babe Ruth`
}, {
    quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
    writer: `– Steve Jobs`
}, {
    quote: `"In order to write about life first you must live it."`,
    writer: `– Ernest Hemingway`
}, {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    writer: `– Soren Kierkegaard`
}, {
    quote: `"The unexamined life is not worth living."`,
    writer: `– Socrates`
}, {
    quote: `"Turn your wounds into wisdom."`,
    writer: `– Oprah Winfrey`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `- Dalai Lama`
}, {
    quote: `"Live for each second without hesitation."`,
    writer: `- Elton John`
}, ]
    
var lastNum;
function Quote() {
  var num = Math.floor(Math.random() * quotes.length);

  while (lastNum === num) {
    num = Math.floor(Math.random() * quotes.length);
  }
  document.getElementById("quote").innerHTML = quotes[num].quote;
  document.getElementById("writer").innerHTML = `-- ` + quotes[num].writer; 

  console.log(quotes[num].quote + ` ` + quotes[num].writer); 
  
  lastNum = num;
}





function randomQuote(){
    // quoteBtn.classList.add("loading");
    // quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.quote;
        writerName.innerText = result.writer;
        // quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
}
soundBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${writerName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? soundBtnBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});


copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});




