//inspirational quotes
let inspirational =  {
    beginning: [
        '" I enjoy every day ',
        '" Everyday is beautiful ',
        '" I will make it ',
        '" Everyday is a new day and i am positive ',
        '" I remain positive ',
    ],
    middle: [
        'just because ',
        'in view of the fact that , ',
        'more opportunities ',
        'now that ',
        'as long as ',
    ],
    end: [
        'i choose to. "',
        'i enjoy every second. "',
        'there are more opportunities than i find. "',
        'i am happy. "',
        'i feel really good. "',
    ]
};

//Hard work Quotes
let hardWork = {
    beginning: [
        '" Work hard, be kind, ',
        '" Keep up the great work, ',
        '" Never give up on your dreams because ',
        '" Always stay focused as ',
        '" Your opportunities are endless ',
    ],
    middle: [
        'amazing opportunities ',
        'stunning things  ',
        'marvelous things ',
        'astonishing opportunities ',
        'unbelievable things ',
    ],
    end: [
        'will happen. "',
        'will come your way. "',
        'are on their way. "',
        'are yet to meet you. "',
        'are waiting for you. "',
    ]
};

//Function Called when clear button is clicked!
function clearAll() {
    document.getElementById('displayQuote').innerHTML="Your Quote will appear here!";
}

//Function Called when generate button is clicked!
function runQuoteGen(){
    let typeQuote = document.getElementById("typeQuote").value; //Type of the quote to be generated
    let numberQuote = document.getElementById("numberQuote").value; //Number of quotes to be generated

    //Making sure to call for the right array when i get input value
    if(typeQuote == 1){
        typeQuote = inspirational;
    }else if(typeQuote == 2 ){
        typeQuote = hardWork;
    } 
    numberQuote = numberQuote - 1; // making numberQuote usable for our loop
    let genArray = []; //Definding an array to fill in the generated quote while in our for loop
    
//Looping to display the number of Quotes to be generated
for(i = 0; i <= numberQuote; i++){  
    console.log("-----");
    let gen = randomQuote(typeQuote); //Passing as param the quote type to be generated
    console.log(gen);
    console.log("-----");
    genArray.push(gen);
    document.getElementById('displayQuote').innerHTML = '<div style="color:black;"> ' + genArray.join('<div style="margin-top:30px;"></div>') + ' </div>';

    } // 
    
  
}//End of function called on button click




//Random Quote Generator function
function randomQuote(Qtype) {
   randomBeginning = Qtype.beginning[Math.floor(Math.random() * Qtype.beginning.length)];
   randomMiddle = Qtype.middle[Math.floor(Math.random() * Qtype.middle.length)];
   randomEnd = Qtype.end[Math.floor(Math.random() * Qtype.end.length)];
   return randomBeginning + randomMiddle + randomEnd;
}





