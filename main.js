const list = ["ROCK", "PAPER", "SCISSORS"];
const getComputerChoice = (l) => {
	return l[Math.floor(Math.random() * l.length)];
};
const getPlayerChoice = (l) => {
	let PlayerSelection = prompt("Pick Rock, Paper Or Scissors");
	while (l.includes(PlayerSelection.toUpperCase()) === false) {
		PlayerSelection = prompt("Pick A Valid Choice !");
	}
	return PlayerSelection.toUpperCase();
};
const updateScoreboard = (ps, cs) => {
    document.getElementById('ps').innerHTML = `${ps}`;
    document.getElementById('cs').innerHTML = `${cs}`;
    return true;
};
const startGame = (l) => {
	let pScore = 0, cScore = 0;
	let c = "", p = "",res = "";
	while (pScore < 3 && cScore < 3) {
		c = getComputerChoice(l);
		p = getPlayerChoice(l);
		alert(`Player ${p} - ${c} Computer`);
		switch (true) {
			case c == p:
				alert("It's A Tie ! Go Next >>>");
				break;
			case c == "ROCK" && p == "SCISSORS":
				cScore++;
				break;
			case c == "PAPER" && p == "ROCK":
				cScore++;
				break;
			case c == "SCISSORS" && p == "PAPER":
				cScore++;
				break;
			default:
				pScore++;
		}
        updateScoreboard(pScore, cScore)
	}
	pScore === 3 ? (res = "Won") : (res = "Lost");
	alert(`You ${res} ! Player ${pScore} - ${cScore} Computer`);
};
startGame(list);
