// copy pasted array for the 3rd time! (bad practice but keeps it incredibly simple)
var myGames = [
    { title: "Crimson Desert", score: "9.2", type: "OPEN WORLD", maker: "PEARL ABYSS", desc: "Crimson Desert is an open-world action-adventure set on the continent of...", c1: "brown", c2: "red" },
    { title: "Super Meat Boy 3D", score: "8.7", type: "PLATFORMER", maker: "SLUGGERFLY, TEAM MEAT", desc: "The infamous, tough-as-nails platformer – now in 3D!", c1: "red", c2: "darkred" },
    { title: "Red Dead Redemption II", score: "9.5", type: "OPEN WORLD", maker: "ROCKSTAR GAMES", desc: "Arthur Morgan and the Van der Linde Gang are outlaws on the run. With federal agents...", c1: "darkred", c2: "black" },
    { title: "Euro Truck Simulator 2", score: "8.1", type: "SIMULATION", maker: "SCS SOFTWARE", desc: "Travel across Europe as king of the road, a trucker who delivers important cargo across...", c1: "blue", c2: "darkblue" },
    { title: "skate.", score: "7.9", type: "SPORTS", maker: "FULL CIRCLE", desc: "Experience improved Flick-It controls, the rich physics based skateboarding gameplay...", c1: "orange", c2: "yellow" },
    { title: "Hollow Knight", score: "9.0", type: "PLATFORMER", maker: "TEAM CHERRY", desc: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined...", c1: "darkblue", c2: "blue" }
];

// get the url id again
var pageUrl = window.location.href;
var gameId = pageUrl.split("id=")[1];

// default just in case
if (gameId == undefined || gameId == null || gameId == "") {
    gameId = 5; 
}

var g = myGames[gameId];

// populate the top game card
document.getElementById("review-game-title").innerText = g.title;
document.getElementById("review-game-desc").innerText = g.desc;
document.getElementById("review-game-img").style.backgroundColor = g.c1;

// update the back/cancel links so they go back to the correct game page
document.getElementById("back-link").href = "gamepage.html?id=" + gameId;
document.getElementById("cancel-btn").href = "gamepage.html?id=" + gameId;