function rollDice(){
    var number1 = Math.floor(Math.random()*6) + 1;
    var number2 = Math.floor(Math.random()*6) + 1;
    while (number2 === number1){
        number2 = Math.floor(Math.random()*6) + 1;
    }
    assignDice(1, number1);
    assignDice(2, number2);
    if (number1 > number2){
        showMessage(1);
    }else{
        showMessage(2);
    }
}
function assignDice(dice, number){
    var picSRC = "";
    switch(number){
        case 1:
            picSRC = "./images/dice1.png";
            break;
        case 2:
            picSRC = "./images/dice2.png";
            break;
        case 3:
            picSRC = "./images/dice3.png";
            break;
        case 4:
            picSRC = "./images/dice4.png";
            break;
        case 5:
            picSRC = "./images/dice5.png";
            break;
        case 6:
            picSRC = "./images/dice6.png";
        break;
    }
    if (dice === 1){document.querySelector(".img1").setAttribute("src", picSRC);}
    if (dice === 2){document.querySelector(".img2").setAttribute("src", picSRC);}
    
}
function showMessage(winner){
    var winnerMessage = document.querySelector(".message");
    switch(winner){
        case 1:
            winnerMessage.textContent = "Player 1 wins!";
            break;
        case 2:
            winnerMessage.textContent = "Player 2 wins!";
            break;
    }
}
rollDice();