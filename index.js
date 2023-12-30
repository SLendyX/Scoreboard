let homescore =0;
let guestscore =0;
let home = document.getElementById("score-home");
let guest = document.getElementById("score-guest");

home.textContent=homescore;
guest.textContent=guestscore;

let homeText=document.getElementById("home");
let guestText=document.getElementById("guest");


function add1(a){
    //checks if the button was pressed in the home or guest div
    //and increments the corresponding value element
    if(a == 'home'){
        homescore++;
        home.textContent = homescore;
    }
    else{
        guestscore++;
        guest.textContent = guestscore;
    }
    
    //checks which side is leading the game
    if(homescore > guestscore){
        homeText.style.borderBottom = "2px solid";
        guestText.style.borderBottom = "none";
    }else if(homescore==guestscore){
        homeText.style.borderBottom = "2px solid";
        guestText.style.borderBottom = "2px solid";
    }else{
        homeText.style.borderBottom = "none";
        guestText.style.borderBottom = "2px solid";
    }

}

function add2(a){
    
    if(a == 'home'){
        homescore+=2;
        home.textContent = homescore;
    }
    else{
        guestscore+=2;
        guest.textContent = guestscore;
    }

    if(homescore > guestscore){
        homeText.style.borderBottom = "2px solid";
        guestText.style.borderBottom = "none";
    }else if(homescore==guestscore){
        homeText.style.borderBottom = "2px solid";
        guestText.style.borderBottom = "2px solid";
    }else{
        homeText.style.borderBottom = "none";
        guestText.style.borderBottom = "2px solid";
    }

}

function add3(a){
    if(a == 'home'){
        homescore+=3;
        home.textContent = homescore;
    }
    else{
        guestscore+=3;
        guest.textContent = guestscore;
    }

    if(homescore > guestscore){
        homeText.style.borderBottom = "2px solid";
        guestText.style.borderBottom = "none";
    }else if(homescore==guestscore){
        homeText.style.borderBottom = "2px solid";
        guestText.style.borderBottom = "2px solid";
    }else{
        homeText.style.borderBottom = "none";
        guestText.style.borderBottom = "2px solid";
    }

}

//resets all values to default including time values
function newgame(){
    homescore=0, guestscore=0, home.textContent=homescore, guest.textContent=guestscore; 
    minutes =60;
    seconds = 1;
    homeText.style.borderBottom = "none";
    guestText.style.borderBottom = "none";

}
