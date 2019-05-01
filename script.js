"use strict";
let userHealth = 40;
let bossHealth = 10;
let userWins = 0;
let userDmg = 0;
let bossDmg = 0;
let userName;
let usersChoice;

// // MY SOLUTION

// if (play.toUpperCase() === "YES") {
//     let userName = prompt("Please name your character");
//     while (userWins <= 3) {
//         userDmg = Math.floor(Math.random() * 2) + 1;
//         bossDmg = Math.floor(Math.random() * 2) + 1;
//         if (bossHealth <= 0) {
//             userWins++;
//             bossHealth = 10;
//             console.log(`WIN COUNTER: ${userWins}`);
//         } else if (userHealth <= 0) {
//             console.log(`${userName} HAS BEEN DEFEATED. THE ALMIGHTY GRANT WINS! GAME OVER.`);
//             break;
//         } else if (userWins === 3) {
//             console.log(`${userName} WINS! GAME OVER.`);
//             break;
//         } else {
//             console.log(`${userName} has ${userHealth = userHealth - userDmg} health left.`);
//             console.log(`The Almighty Grant has ${bossHealth = bossHealth - bossDmg} health left.`);
//         }
//     }
// }



// startGame() function
// Prompts User if they want to play
// If yes.. prompt user to add name and call startCombat Function
function startGame() {
    let play = prompt("Do you want to play a game?");
    if (play.toUpperCase() === "YES") {
        userName = prompt("Please name your character");
        startCombat();
        // } else {
        //     return;
    }
}

// startCombat() function
// runs the loop in Part One
function startCombat() {
    while (userWins <= 3) {
        usersChoice = prompt("Would you like to attack or quit?")
        if (usersChoice.toUpperCase() === "ATTACK") {
            getDamage();
            console.log(`${userName} has ${userHealth -= userDmg} health left.`);
            console.log(`Grant has ${bossHealth -= bossDmg} health left.`);
            // if (bossHealth <= 0) {
            //     userWins++;
            //     bossHealth = 10;
            //     console.log(`WIN COUNTER: ${userWins}`);
            // } else if (userHealth <= 0) {
            //     console.log(`${userName} HAS BEEN DEFEATED. THE ALMIGHTY GRANT WINS! GAME OVER.`);
            //     break;
            // } else if (userWins === 3) {
            //     console.log(`${userName} WINS! GAME OVER.`);
            //     break;
            // } else {
            //     console.log(`${userName} has ${userHealth = userHealth - userDmg} health left.`);
            //     console.log(`The Almighty Grant has ${bossHealth = bossHealth - bossDmg} health left.`);
            // }
            if (bossHealth <= 0) {
                userWins++;
                bossHealth = 10;
                if (userWins === 3) {
                    console.log(`${userName} is victorious. ${userName} wins the game.`);
                    break;
                } else {
                    console.log(`Grant has been defeated. ${userName} has to beat Grant ${3 - userWins} more time(s).`);
                }
            }
            if (userHealth <= 0) {
                console.log(`${userName} has been defeated. Game Over.`);
                break;
            }
        } else if (usersChoice.toUpperCase() === "QUIT") {
            return;
        }
    }
}

// getDamage() function
// generates damage between 1-5

function getDamage() {
    userDmg = Math.floor(Math.random() * 5) + 1;
    bossDmg = Math.floor(Math.random() * 5) + 1;
}

startGame();