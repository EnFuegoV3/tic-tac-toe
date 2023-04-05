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
    

    const gameBoard = ["", "", "", "", "", "", "", "", ""];
    
    const xAmount = () => gameBoard.indexOf("X");
    const oAmount = () => gameBoard.indexOf("O");
    
    for(let i=0; i < gameBoard.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', [i])
        div.classList.add('squares')
        div.innerHTML = gameBoard[i];
        container.appendChild(div);
    }
        
    const squares = document.querySelectorAll('.squares');

    const player1 = () => {squares.forEach(square => {
        square.addEventListener('click', (e) => {
            gameBoard.splice(e.target.id, 1, player1.symbol)
            console.log(gameBoard);
            })
        });
    };    

    const player2 = () => {squares.forEach(square => {
        square.addEventListener('click', (e) => {
            gameBoard.splice(e.target.id, 1, player2.symbol)
            console.log(gameBoard);
            })
        });
    };  

    return {
        gameBoard,
        container,
        player1,
        player2,
        xAmount,
        oAmount

    }

   
})();



// myGameBoard.mark(0, player1.symbol);





const displayController = (function () {
    if(myGameBoard.xAmount() === 0 && myGameBoard.oAmount() === 0){
         myGameBoard.player1();
    } else {myGameBoard.player2()}
    // myGameBoard.player1();
    // myGameBoard.player2();
    
})();








// myGameBoard.create();

