// list of all the games
var myGames = [
    { title: "Crimson Desert", score: "9.2", type: "OPEN WORLD", maker: "PEARL ABYSS", desc: "Crimson Desert is an open-world action-adventure set on the continent of...", c1: "brown", c2: "red" },
    { title: "Super Meat Boy 3D", score: "8.7", type: "PLATFORMER", maker: "SLUGGERFLY, TEAM MEAT", desc: "The infamous, tough-as-nails platformer – now in 3D!", c1: "red", c2: "darkred" },
    { title: "Red Dead Redemption II", score: "9.5", type: "OPEN WORLD", maker: "ROCKSTAR GAMES", desc: "Arthur Morgan and the Van der Linde Gang are outlaws on the run...", c1: "darkred", c2: "black" },
    { title: "Euro Truck Simulator 2", score: "8.1", type: "SIMULATION", maker: "SCS SOFTWARE", desc: "Travel across Europe as king of the road, a trucker who delivers...", c1: "blue", c2: "darkblue" },
    { title: "skate.", score: "7.9", type: "SPORTS", maker: "FULL CIRCLE", desc: "Experience improved Flick-It controls, the rich physics based...", c1: "orange", c2: "yellow" },
    { title: "Hollow Knight", score: "9.0", type: "PLATFORMER", maker: "TEAM CHERRY", desc: "Forge your own path in Hollow Knight! An epic action adventure through...", c1: "darkblue", c2: "blue" },
    { title: "Elden Ring", score: "9.6", type: "RPG", maker: "FROMSOFTWARE", desc: "Rise, Tarnished. Explore a vast open world of ancient kingdoms, fearsome bosses and hidden secrets...", c1: "#7a5c1e", c2: "#3d2e0f" },
    { title: "The Witcher 3", score: "9.7", type: "RPG", maker: "CD PROJEKT RED", desc: "Play as Geralt of Rivia, a monster slayer for hire. Track down your adopted daughter in a war-torn world...", c1: "#1a3a1a", c2: "#0a1a0a" },
    { title: "Minecraft", score: "9.1", type: "SANDBOX", maker: "MOJANG", desc: "Create, explore and survive in a limitless world made of blocks. Build anything you can imagine...", c1: "#5a7a3a", c2: "#3a5a2a" },
    { title: "Cyberpunk 2077", score: "8.8", type: "RPG", maker: "CD PROJEKT RED", desc: "An open-world action-adventure set in Night City, a megalopolis obsessed with power and body modification...", c1: "#0f0f3d", c2: "#1a1a5a" },
    { title: "Stardew Valley", score: "9.3", type: "SIMULATION", maker: "CONCERNEDAPE", desc: "Build the farm of your dreams, forge lasting friendships and explore a mysterious valley...", c1: "#3a6b4a", c2: "#2a5a3a" },
    { title: "Celeste", score: "9.4", type: "PLATFORMER", maker: "MATT MAKES GAMES", desc: "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain...", c1: "#6b3fa0", c2: "#4a2a7a" }
];

// same default reviews as in gamepage.js
var defaultReviews = {
    0: [
        { rating: 9 }, { rating: 8 }
    ],
    1: [
        { rating: 9 }, { rating: 7 }
    ],
    2: [
        { rating: 10 }, { rating: 9 }
    ],
    3: [
        { rating: 9 }, { rating: 8 }
    ],
    4: [
        { rating: 8 }, { rating: 7 }
    ],
    5: [
        { rating: 10 }, { rating: 8 }, { rating: 9 }
    ],
    6: [
        { rating: 10 }, { rating: 9 }, { rating: 9 }
    ],
    7: [
        { rating: 10 }, { rating: 9 }, { rating: 10 }
    ],
    8: [
        { rating: 9 }, { rating: 9 }, { rating: 8 }
    ],
    9: [
        { rating: 9 }, { rating: 8 }, { rating: 8 }
    ],
    10: [
        { rating: 9 }, { rating: 10 }, { rating: 9 }
    ],
    11: [
        { rating: 9 }, { rating: 10 }, { rating: 9 }
    ]
};

function getAvgScore(gameId) {
    var defaults = defaultReviews[gameId] || [];
    var userReviews = JSON.parse(localStorage.getItem("reviews_" + gameId) || "[]");
    var all = defaults.concat(userReviews);
    if (all.length === 0) return myGames[gameId].score;
    var total = 0;
    for (var i = 0; i < all.length; i++) { total += all[i].rating; }
    return (total / all.length).toFixed(1);
}

var theGrid = document.getElementById('games-grid');
var allHtml = "";

// loop to make cards
for (var i = 0; i < myGames.length; i++) {
    var g = myGames[i];
    
    // add to string
    var searchData = (g.title + " " + g.type + " " + g.maker).toLowerCase();
    allHtml = allHtml + "<div class='card' data-search='" + searchData + "'>" +
        "<div class='card-top' style='background-color: " + g.c1 + ";'>" +
            "<div class='review-score'>★ " + getAvgScore(i) + "</div>" +
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

// search bar filtering
document.getElementById("search-input").addEventListener("input", function() {
    var term = this.value.toLowerCase().trim();
    var cards = document.querySelectorAll(".card");
    var visibleCount = 0;

    cards.forEach(function(card) {
        var searchText = card.getAttribute("data-search");
        if (!term || searchText.indexOf(term) !== -1) {
            card.style.display = "inline-flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    var noResults = document.getElementById("no-results");
    if (visibleCount === 0 && term) {
        document.getElementById("no-results-term").innerText = this.value;
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
});