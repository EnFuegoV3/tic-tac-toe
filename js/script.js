const player = (name, symbol) => {
    
    const greet = () => console.log(`Hello ${name}`);

    return {
        name,
        symbol,
        greet
    }
}

const player1 = player('player1', "X");
const player2 = player('player2', "O");



const myGameBoard = (function() {
    const container = document.querySelector('.game-board');
    const winner = document.querySelector('.player-board')
    

    const gameBoard = new Array(9).fill(null);

    for(let i=0; i < gameBoard.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', [i])
        div.classList.add('squares')
        container.appendChild(div);
    }

    function winning(y) {
        if((gameBoard[0] == y && gameBoard[1] == y && gameBoard[2] == y) ||
        (gameBoard[3] == y && gameBoard[4] == y && gameBoard[5] == y) ||
        (gameBoard[6] == y && gameBoard[7] == y && gameBoard[8] == y) ||
        (gameBoard[0] == y && gameBoard[3] == y && gameBoard[6] == y) ||
        (gameBoard[1] == y && gameBoard[4] == y && gameBoard[7] == y) ||
        (gameBoard[2] == y && gameBoard[5] == y && gameBoard[8] == y) ||
        (gameBoard[0] == y && gameBoard[4] == y && gameBoard[8] == y) ||
        (gameBoard[2] == y && gameBoard[4] == y && gameBoard[6] == y))
        
        return "win"

    }

    const win = () => {
        if(winning("X") == "win") {
            winner.textContent = "Player 1 Wins"
        } else if(winning("O") == "win") {
            winner.textContent = "Player 2 Wins"
        }
        
    }

    return {
       gameBoard,
       win,
       winning
    }
   
})();


const displayController = (function () {
    const squares = document.querySelectorAll('.squares');
    const p1 = document.querySelector('#p1');
    const p2 = document.querySelector('#p2');
    const reset = document.querySelector('.reset')

    reset.addEventListener('click', () => {
        location.reload();
    })

    const x = () => {
        return myGameBoard.gameBoard.filter(x => x === "X").length
    }
    
    let o = () => {
        return myGameBoard.gameBoard.filter(o => o === "O").length;
    }

    if(x() == o()){
        p1.classList.add('turn')
    }

    squares.forEach(square => {
        square.addEventListener('click', (e) => {
            if(x() == o()) {
                p1.classList.remove('turn');
                p2.classList.add('turn');
                myGameBoard.gameBoard.splice(e.target.id, 1, "X");
                e.target.innerHTML = "X";
                myGameBoard.win();
            } else {
                p2.classList.remove('turn');
                p1.classList.add('turn');
                myGameBoard.gameBoard.splice(e.target.id, 1, "O");
                e.target.innerHTML = "O";
                myGameBoard.win();
                } 
            
        }, {once: true})
    });

})();

// displayController.game();
// console.log(x() == o());
// displayController.player1();
// displayController.player2();

