'use strict';
const Quotes=document.querySelector('.quotes');
const btn=document.querySelector('.btn');

// Array of quotes
const quotes = [
    "Dhoni is the best captain I have played under. - Sachin Tendulkar",
    "Dhoni is a great leader by example. Someone whom I have always admired for his ability to remain balanced and have the sense of calmness even during the toughest of situations. - Virat Kohli",
    "MSD is one of the best finishers in the game and has an amazing ability to stay calm under pressure. - Ricky Ponting",
    "Dhoni is the most successful Indian captain and has brought a unique style of captaincy to the game. - Sunil Gavaskar",
    "MSD is not just a captain; he is a phenomenon. He has shown the world how to lead a team with humility and grace. - Rahul Dravid",
    "Dhoni's decision-making ability and his instinct on the field are unparalleled. He knows exactly what needs to be done in any situation. - Brian Lara",
    "MS Dhoni is a once-in-a-generation cricketer. He has redefined the role of a wicket-keeper batsman and has been a great ambassador for the sport. - Kumar Sangakkara",
    "Dhoni is a captain who leads from the front. He is always willing to take responsibility and make the tough decisions. - Michael Clarke",
    "MS Dhoni is a true legend of the game. His contributions to Indian cricket and his leadership qualities are unmatched. - Wasim Akram",
    "Dhoni's calmness and composure in high-pressure situations make him a true champion. - Shane Warne",
    "MSD is a master strategist and has a remarkable understanding of the game. He has taken Indian cricket to new heights. - Harbhajan Singh",
    "Dhoni's ability to read the game and make quick decisions sets him apart. He has a brilliant cricketing mind. - Brendon McCullum",
    "MS Dhoni is the coolest captain I have ever seen. Nothing seems to affect him, and he always leads by example. - Chris Gayle",
    "Dhoni's leadership qualities are exceptional. He knows how to get the best out of his players and create a winning environment. - Graeme Smith",
    "MS Dhoni is a true legend of Indian cricket. His humility, work ethic, and selflessness make him an inspiration for aspiring cricketers. - Anil Kumble"
  ];
  
  // Random quote generator function
  function getRandomQuote() {
    
     const randomIndex = Math.floor(Math.random() * quotes.length);
    const Q=quotes[randomIndex];
    return Q;
  }
  function displayQuotes(){
    
    const quote=getRandomQuote();
    Quotes.textContent=quote;
  }
  btn.addEventListener('click',displayQuotes);
  displayQuotes();
 
  