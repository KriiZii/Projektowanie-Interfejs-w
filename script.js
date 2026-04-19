// list of all the games
var myGames = [
    { title: "Crimson Desert", score: "9.2", type: "OPEN WORLD", maker: "PEARL ABYSS", desc: "Crimson Desert is an open-world action-adventure set on the continent of...", c1: "brown", c2: "red" },
    { title: "Super Meat Boy 3D", score: "8.7", type: "PLATFORMER", maker: "SLUGGERFLY, TEAM MEAT", desc: "The infamous, tough-as-nails platformer – now in 3D!", c1: "red", c2: "darkred" },
    { title: "Red Dead Redemption II", score: "9.5", type: "OPEN WORLD", maker: "ROCKSTAR GAMES", desc: "Arthur Morgan and the Van der Linde Gang are outlaws on the run. With federal agents...", c1: "darkred", c2: "black" },
    { title: "Euro Truck Simulator 2", score: "8.1", type: "SIMULATION", maker: "SCS SOFTWARE", desc: "Travel across Europe as king of the road, a trucker who delivers important cargo across...", c1: "blue", c2: "darkblue" },
    { title: "skate.", score: "7.9", type: "SPORTS", maker: "FULL CIRCLE", desc: "Experience improved Flick-It controls, the rich physics based skateboarding gameplay...", c1: "orange", c2: "yellow" },
    { title: "Hollow Knight", score: "9.0", type: "PLATFORMER", maker: "TEAM CHERRY", desc: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined...", c1: "darkblue", c2: "blue" }
];

var theGrid = document.getElementById('games-grid');
var allHtml = "";

// loop to make cards
for (var i = 0; i < myGames.length; i++) {
    var g = myGames[i];
    
    // add to string
    allHtml = allHtml + "<div class='card'>" +
        "<div class='card-top' style='background-color: " + g.c1 + ";'>" +
            "<div class='review-score'>★ " + g.score + "</div>" +
            "<div class='genre-tag'>" + g.type + "</div>" +
        "</div>" +
        "<div class='info'>" +
            "<h3>" + g.title + "</h3>" +
            "<p>" + g.desc + "</p>" +
        "</div>" +
        "<div class='bot-info'>" +
            "<span class='dev-name'>" + g.maker + "</span>" +
            "<a href='gamepage.html?id=" + i + "' class='read-btn'>Read Review &rarr;</a>" +
        "</div>" +
    "</div>";
}

theGrid.innerHTML = allHtml;