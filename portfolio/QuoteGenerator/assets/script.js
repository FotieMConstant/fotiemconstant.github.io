//inspirational quotes
let inspirational =  {
    beginning: [
        "Don’t let yesterday ",
        "It’s not whether you ",
        "People who are crazy enough ",
        "Failure will never overtake me ",
        "We may encounter many ",
    ],
    middle: [
        "take up too ",
        "get knocked down, ",
        "to think they can change the world, ",
        "if my determination to succeed ",
        "defeats but we must ",
    ],
    end: [
        "much of today.",
        "it’s whether you get up.",
        "are the ones who do.",
        "is strong enough.",
        "not be defeated.",
    ]
};

//Hard work Quotes
let hardWork = {
    beginning: [
        "There are no ",
        "I’m a great believer in luck, ",
        "If something is important enough, ",
        "Success is often achieved ",
        "I am who I am today ",
    ],
    middle: [
        "traffic jams ",
        "and I find the harder ",
        "even if the odds are against you, ",
        "by those who don’t know ",
        "because of the choices ",
    ],
    end: [
        "on the extra mile.",
        "I work the more I have of it.",
        "you should still do it.",
        "that failure is inevitable.",
        "I made yesterday.",
    ]
};

let example = {
    beginning: [
        "I like to ",
        "You ",
        "I want to ",
        "We ",
    ],
    middle: [
        "eat ",
        "bit ",
        "swallow ",
    ],
    end: [
        "apples.",
        "oranges.",
        "tomatoes.",
        "bananas.",
    ] 
}


//Function Called when button is clicked!
function runQuoteGen(){
    let typeQuote = document.getElementById("typeQuote").value; //Type of the quote to be generated
    let numberQuote = document.getElementById("numberQuote").value; //Number of quotes to be generated

    //Check if null to display error message
    if(numberQuote == 'null'){
        console.log("Null value");
    }else{
        numberQuote = numberQuote - 1; // making numberQuote zero
    }
    
//Getting the return value from my Quote Generator function
for(i=0; i<=numberQuote; i++){  
    console.log(typeQuote);
    let gen = randomQuote(example);
    console.log(gen);
    } 

}//End of function called on button click




//Random Quote Generator function
function randomQuote(Qtype) {
   randomBeginning = Qtype.beginning[Math.floor(Math.random() * Qtype.beginning.length)];
   randomMiddle = Qtype.middle[Math.floor(Math.random() * Qtype.middle.length)];
   randomEnd = Qtype.end[Math.floor(Math.random() * Qtype.end.length)];
   return randomBeginning + randomMiddle + randomEnd;
}





