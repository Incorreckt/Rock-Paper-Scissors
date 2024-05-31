const moves = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.move-button').forEach(button => {
    button.addEventListener('click', () => {
        const playerMove = button.getAttribute('data-move');
        const computerMove = moves[Math.floor(Math.random() * moves.length)];
        const result = determineWinner(playerMove, computerMove);

        document.getElementById('result').textContent = `
            You chose ${playerMove}. The computer chose ${computerMove}.
            ${result}
        `;
    });
});

function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return "It's a tie!";
    }
    if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
