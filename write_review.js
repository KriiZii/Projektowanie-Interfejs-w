// copy pasted array for the 3rd time! (bad practice but keeps it incredibly simple)
var myGames = [
    { title: "Crimson Desert", score: "9.2", type: "OPEN WORLD", maker: "PEARL ABYSS", desc: "Crimson Desert is an open-world action-adventure set on the continent of...", c1: "brown", c2: "red" },
    { title: "Super Meat Boy 3D", score: "8.7", type: "PLATFORMER", maker: "SLUGGERFLY, TEAM MEAT", desc: "The infamous, tough-as-nails platformer – now in 3D!", c1: "red", c2: "darkred" },
    { title: "Red Dead Redemption II", score: "9.5", type: "OPEN WORLD", maker: "ROCKSTAR GAMES", desc: "Arthur Morgan and the Van der Linde Gang are outlaws on the run. With federal agents...", c1: "darkred", c2: "black" },
    { title: "Euro Truck Simulator 2", score: "8.1", type: "SIMULATION", maker: "SCS SOFTWARE", desc: "Travel across Europe as king of the road, a trucker who delivers important cargo across...", c1: "blue", c2: "darkblue" },
    { title: "skate.", score: "7.9", type: "SPORTS", maker: "FULL CIRCLE", desc: "Experience improved Flick-It controls, the rich physics based skateboarding gameplay...", c1: "orange", c2: "yellow" },
    { title: "Hollow Knight", score: "9.0", type: "PLATFORMER", maker: "TEAM CHERRY", desc: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined...", c1: "darkblue", c2: "blue" },
    { title: "Elden Ring", score: "9.6", type: "RPG", maker: "FROMSOFTWARE", desc: "Rise, Tarnished. Explore a vast open world of ancient kingdoms, fearsome bosses and hidden secrets...", c1: "#7a5c1e", c2: "#3d2e0f" },
    { title: "The Witcher 3", score: "9.7", type: "RPG", maker: "CD PROJEKT RED", desc: "Play as Geralt of Rivia, a monster slayer for hire. Track down your adopted daughter in a war-torn world...", c1: "#1a3a1a", c2: "#0a1a0a" },
    { title: "Minecraft", score: "9.1", type: "SANDBOX", maker: "MOJANG", desc: "Create, explore and survive in a limitless world made of blocks. Build anything you can imagine...", c1: "#5a7a3a", c2: "#3a5a2a" },
    { title: "Cyberpunk 2077", score: "8.8", type: "RPG", maker: "CD PROJEKT RED", desc: "An open-world action-adventure set in Night City, a megalopolis obsessed with power and body modification...", c1: "#0f0f3d", c2: "#1a1a5a" },
    { title: "Stardew Valley", score: "9.3", type: "SIMULATION", maker: "CONCERNEDAPE", desc: "Build the farm of your dreams, forge lasting friendships and explore a mysterious valley...", c1: "#3a6b4a", c2: "#2a5a3a" },
    { title: "Celeste", score: "9.4", type: "PLATFORMER", maker: "MATT MAKES GAMES", desc: "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain in this precision platformer...", c1: "#6b3fa0", c2: "#4a2a7a" }
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

// --- interactive rating selector (1-10) ---
var selectedRating = 8;

var ratingDiv = document.getElementById("rating-selector");
var ratingHtml = "";
for (var i = 1; i <= 10; i++) {
    var bg = (i === selectedRating) ? "#2563eb" : "white";
    var col = (i === selectedRating) ? "white" : "#333";
    ratingHtml += '<button class="rating-btn" data-val="' + i + '" style="' +
        'width: 42px; height: 42px; margin-right: 6px; border: 1px solid #ddd; border-radius: 8px;' +
        'font-size: 14px; font-weight: bold; cursor: pointer;' +
        'background-color: ' + bg + '; color: ' + col + ';">' + i + '</button>';
}
ratingHtml += '<span id="rating-label" style="margin-left: 10px; font-size: 14px; color: #2563eb; font-weight: bold;">' + selectedRating + ' / 10</span>';
ratingDiv.innerHTML = ratingHtml;

document.querySelectorAll(".rating-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        selectedRating = parseInt(this.getAttribute("data-val"));
        document.querySelectorAll(".rating-btn").forEach(function(b) {
            b.style.backgroundColor = "white";
            b.style.color = "#333";
        });
        this.style.backgroundColor = "#2563eb";
        this.style.color = "white";
        document.getElementById("rating-label").innerText = selectedRating + " / 10";
    });
});

// --- submit logic ---
document.getElementById("submit-btn").addEventListener("click", function() {
    var name = document.getElementById("name-input").value.trim();
    var text = document.getElementById("review-text").value.trim();

    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (!text) {
        alert("Please write your review.");
        return;
    }

    var now = new Date();
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var dateStr = months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();

    var review = {
        name: name,
        rating: selectedRating,
        text: text,
        date: dateStr
    };

    var key = "reviews_" + gameId;
    var existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.unshift(review); // newest first
    localStorage.setItem(key, JSON.stringify(existing));

    window.location.href = "gamepage.html?id=" + gameId;
});