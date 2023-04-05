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
    
    const create = () => {
        for(let i=0; i < gameBoard.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', [i])
        div.classList.add('squares')
        div.innerHTML = gameBoard[i];
        container.appendChild(div);
        
        }
        const squares = document.querySelectorAll('.squares');
        squares.forEach(square => {
            square.addEventListener('click', (e) => {
                mark(e.target.id, player1.symbol)
            })
        });
    }
    


    
    const mark = (a, b) => {
                gameBoard.splice(a, 1, b)
                container.innerHTML = "";
                create();
                console.log(gameBoard);
        
    }

    const click = () => {
        
    }
    

    return {
        gameBoard,
        mark,
        create,
        container,
        
    }

   
})();



// myGameBoard.mark(0, player1.symbol);





const displayController = (function () {
    
    
})();








myGameBoard.create();

