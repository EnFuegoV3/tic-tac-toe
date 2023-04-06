const player = (name, symbol) => {
    
    const greet = () => console.log(`Hello ${name}`);

    return {
        name,
        symbol,
        greet
    }
}

const human = document.querySelector('.player')

// human.addEventListener('click', () => {
    const player1 = player('player1', "X");
    const player2 = player('player2', "O");
//     console.log(player1.symbol);
// });
//created two players





const myGameBoard = (function() {
    const container = document.querySelector('.game-board');

    // const gameBoard = ["", "", "", "", "", "", "", "", ""];
    const gameBoard = new Array(9).fill(null);

    // let x = () => {
    //       return gameBoard.filter(x => x === "X").length
    // }

    // let o = () => {
    //      return gameBoard.filter(x => x === "O").length;
    // }

    // const create = () => {
    //     for(let i=0; i < gameBoard.length; i++) {
    //         let div = document.createElement('div');
    //         div.setAttribute('id', [i])
    //         div.classList.add('squares')
    //         // div.innerHTML = gameBoard[i];
    //         container.appendChild(div);
    //     }
        
    //     const squares = document.querySelectorAll('.squares'); 
    //     return {squares}
    // }
    
    for(let i=0; i < gameBoard.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', [i])
        div.classList.add('squares')
        // div.innerHTML = gameBoard[i];
        container.appendChild(div);
    }
        
    const squares = document.querySelectorAll('.squares');

    const player1 = () => {squares.forEach(square => {
        square.addEventListener('click', (e) => {
            gameBoard.splice(e.target.id, 1, "X")
            e.target.innerHTML = "X";
            
            console.log(x)
            console.log()
            console.log(gameBoard)
            
            })
        });
    };    

    const player2 = () => {squares.forEach(square => {
        square.addEventListener('click', (e) => {
            gameBoard.splice(e.target.id, 1, "O")
            e.target.innerHTML = "O";

            console.log(xx, oo)
            console.log()
            console.log(gameBoard);
            
            })
        });
    };  

    return {
        gameBoard,
        container,
        player1,
        player2,
        // x,
        // o,
       

    }

   
})();

// console.log(x);

// myGameBoard.gameBoard;

// let x = () => {
//     return myGameBoard.gameBoard.filter(x => x === "X").length
// }

// let o = () => {
//    return myGameBoard.gameBoard.filter(x => x === "O").length;
// }

let x = myGameBoard.gameBoard.filter(x => x === "X").length

let o = myGameBoard.gameBoard.filter(x => x === "O").length;


const displayController = (function () {
   
        if(x == 0 && o == 0){
            myGameBoard.player1();
            
            } else if (x && o == 0) {
                myGameBoard.player2();
                } else if (x === 1 && o === 1) {
                    myGameBoard.player1();
        }
    
})();

// myGameBoard.board();
// myGameBoard.x();
// myGameBoard.o();
// displayController.game();

// console.log(displayController.player1)



// console.log(myGameBoard.oAmount(), myGameBoard.oAmount())



// myGameBoard.create();

