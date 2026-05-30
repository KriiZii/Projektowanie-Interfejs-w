// copy pasted array from script.js!
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

// get the url like a pro hacker
var pageUrl = window.location.href;
var gameId = pageUrl.split("id=")[1];

// if no game ID is found just show hollow knight so it doesn't crash empty
if (gameId == undefined || gameId == null || gameId == "") {
    gameId = 5; 
}

var g = myGames[gameId];

// fill in all the HTML text
document.getElementById("game-title").innerText = g.title;
document.getElementById("game-score").innerText = g.score;
document.getElementById("game-type").innerText = g.type;
document.getElementById("game-dev").innerText = g.maker;
document.getElementById("game-desc").innerText = g.desc;
document.getElementById("game-img").style.backgroundColor = g.c1;

// make the write review button work
document.getElementById("write-review-btn").onclick = function() {
    window.location.href = "write_review.html?id=" + gameId;
};

// default reviews for each game (index matches myGames array)
var defaultReviews = {
    0: [ // Crimson Desert
        { name: "VortexPilot", rating: 9, text: "Stunning visuals and an incredibly deep world. The combat system takes some getting used to but once it clicks, it's phenomenal. Pearl Abyss really delivered something special here.", date: "Apr 3, 2026" },
        { name: "PixelHunter", rating: 8, text: "The open world is massive and full of surprises. A few frame rate issues on base hardware but nothing game-breaking. Easily one of the best action-adventures in recent years.", date: "Apr 1, 2026" }
    ],
    1: [ // Super Meat Boy 3D
        { name: "SpeedrunKing", rating: 9, text: "The 3D transition is surprisingly smooth. Tighter controls than the original and the level design is brutally clever. Already working on a sub-2-hour run.", date: "Feb 20, 2026" },
        { name: "CasualGamer2099", rating: 7, text: "Extremely challenging but fair. The soundtrack is fantastic and keeps you pumped even after your 50th death on the same level. Not for the faint-hearted.", date: "Feb 18, 2026" }
    ],
    2: [ // Red Dead Redemption II
        { name: "OutlawSoul", rating: 10, text: "An absolute masterpiece. The story had me emotionally invested from start to finish. Arthur Morgan is one of gaming's greatest protagonists and this world is unmatched in its detail.", date: "Jan 14, 2026" },
        { name: "WesternLegend", rating: 9, text: "No game has ever made me feel so immersed in another time and place. Every single detail is meticulously crafted. A benchmark for open world games.", date: "Jan 10, 2026" }
    ],
    3: [ // Euro Truck Simulator 2
        { name: "TruckDaddy", rating: 9, text: "Incredibly relaxing and oddly satisfying. Perfect game to wind down after a long day. The road scenery across Europe is genuinely beautiful.", date: "Mar 5, 2026" },
        { name: "HighwayRoamer", rating: 8, text: "More depth than you'd expect. The progression system keeps you hooked for hours. The modding community also adds endless content to keep things fresh.", date: "Mar 2, 2026" }
    ],
    4: [ // skate.
        { name: "BoardSlider", rating: 8, text: "The Flick-It controls feel absolutely fantastic and the physics are spot on. Best skating game in years, no contest. Tricks flow so naturally.", date: "May 10, 2026" },
        { name: "StreetKing99", rating: 7, text: "Fun but the open world feels a bit empty in places. The core skating mechanics are excellent though and the character customisation is solid.", date: "May 8, 2026" }
    ],
    5: [ // Hollow Knight
        { name: "Junkyard_Droid", rating: 10, text: "Great game with very satisfying combat. It gets even better the more you put your heart into it. The price is honestly amazing for a game of this quality — it could easily have cost more and still would have been worth buying.", date: "Nov 16, 2024" },
        { name: "NeonShadow_99", rating: 8, text: "Beautiful game, great storytelling, breathtaking visuals all in one package and runs on potatoes.", date: "Nov 15, 2024" },
        { name: "CaveExplorer", rating: 9, text: "I've never played a metroidvania that nails atmosphere this well. Every area feels distinct and the lore hidden throughout rewards curious players endlessly.", date: "Oct 29, 2024" }
    ],
    6: [ // Elden Ring
        { name: "TarnishedOne", rating: 10, text: "FromSoftware's magnum opus. The open world exploration paired with punishing but fair combat is unlike anything else. Every corner of the Lands Between hides something incredible.", date: "Mar 5, 2022" },
        { name: "SoulsBorne_Fan", rating: 9, text: "The freedom to approach bosses in any order is a game changer. Massive world, incredible boss designs, and the lore goes incredibly deep if you care to dig.", date: "Mar 4, 2022" },
        { name: "OpenWorldGamer", rating: 9, text: "I've never felt so rewarded for simply exploring. Every dungeon, every hidden path has something worthwhile at the end. A masterpiece of game design.", date: "Mar 3, 2022" }
    ],
    7: [ // The Witcher 3
        { name: "GeraltFan", rating: 10, text: "Quite simply the best RPG ever made. The side quests alone contain more depth and storytelling than entire games from other studios. Geralt is one of gaming's greatest characters.", date: "Jun 2, 2015" },
        { name: "LoreMaster99", rating: 9, text: "The world feels genuinely alive. Every NPC has a story, every village has history. The DLC expansions are even better than the base game which is saying something.", date: "Jun 1, 2015" },
        { name: "QuestSeeker", rating: 10, text: "Hearts of Stone and Blood and Wine are the best story DLCs I have ever played. CD Projekt Red set a new bar for RPG storytelling with this one.", date: "May 30, 2015" }
    ],
    8: [ // Minecraft
        { name: "CraftingPro", rating: 9, text: "No game has given me more hours of pure creativity and fun. Whether you want to build, explore, or survive, Minecraft delivers on all fronts and continues getting better with each update.", date: "Jan 10, 2026" },
        { name: "BlockBuilder", rating: 9, text: "The sandbox freedom here is unmatched. I have spent hundreds of hours building and I still find new things to try. The community and mod support make it practically infinite.", date: "Jan 8, 2026" },
        { name: "SurvivalMode", rating: 8, text: "Survival mode is genuinely tense and fun. The progression from punching trees to building a fortress never gets old. A true classic for a reason.", date: "Jan 5, 2026" }
    ],
    9: [ // Cyberpunk 2077
        { name: "NightCityDweller", rating: 9, text: "After the rocky launch this game has transformed into something truly special. Night City is the most detailed open world ever created and V's story is genuinely moving.", date: "Apr 12, 2026" },
        { name: "NetRunner_V", rating: 8, text: "The Phantom Liberty expansion took this to another level. The hacking gameplay is incredibly satisfying and the RPG choices actually feel meaningful.", date: "Apr 10, 2026" },
        { name: "ChromeAndNeon", rating: 8, text: "Night City is a visual spectacle unlike anything else. The atmosphere, the music, the characters — when it all clicks it is absolutely brilliant.", date: "Apr 8, 2026" }
    ],
    10: [ // Stardew Valley
        { name: "FarmingLife", rating: 9, text: "One of the most relaxing and satisfying games I have ever played. The depth hidden beneath the simple farming premise is astonishing. ConcernedApe's passion shows in every pixel.", date: "Feb 28, 2026" },
        { name: "ValleyDreamer", rating: 10, text: "This game genuinely changed how I think about game development. One person made all of this. The seasonal events, the relationships, the cave diving — it is all perfect.", date: "Feb 25, 2026" },
        { name: "PixelFarmer", rating: 9, text: "I came for the farming and stayed for the surprisingly deep story and characters. The multiplayer co-op mode makes it even better. An absolute gem.", date: "Feb 22, 2026" }
    ],
    11: [ // Celeste
        { name: "MadelineClimber", rating: 9, text: "A perfect precision platformer with a genuinely touching story about mental health. The assist mode shows true respect for players of all skill levels.", date: "Feb 3, 2018" },
        { name: "PlatformKing", rating: 10, text: "The tightest controls I have ever felt in a platformer. Every death is your fault and every success is earned. The Chapter 9 DLC pushes the gameplay to an insane level.", date: "Feb 1, 2018" },
        { name: "PixelJumper", rating: 9, text: "Rarely does a game nail both gameplay and storytelling so completely. Madeline's journey mirrors genuine struggles and the mechanics reinforce the themes beautifully.", date: "Jan 30, 2018" }
    ]
};

// combine default reviews with user-submitted ones (user reviews go on top)
var reviewKey = "reviews_" + gameId;
var userReviews = JSON.parse(localStorage.getItem(reviewKey) || "[]");
var gameDefaults = defaultReviews[gameId] || [];
var allReviews = userReviews.concat(gameDefaults);

// render all reviews
function renderReviews(reviews) {
    var reviewsList = document.getElementById("user-reviews-list");
    if (reviews.length === 0) {
        reviewsList.innerHTML = '<p style="color: grey; font-size: 14px;">No reviews yet. Be the first!</p>';
        return;
    }
    var html = "";
    for (var i = 0; i < reviews.length; i++) {
        var r = reviews[i];
        var words = r.name.trim().split(/\s+/);
        var initials = words.map(function(w) { return w[0] || ""; }).join("").toUpperCase().slice(0, 2);
        var isLast = (i === reviews.length - 1);
        html +=
            '<div style="border: 1px solid #eee; padding: 20px; margin-bottom: ' + (isLast ? '0' : '20px') + '; border-radius: 10px;">' +
                '<div style="float: left; width: 40px; height: 40px; background-color: #e0eaff; color: blue; text-align: center; line-height: 40px; border-radius: 20px; font-weight: bold;">' + initials + '</div>' +
                '<div style="float: left; margin-left: 15px;">' +
                    '<b style="font-size: 14px;">' + r.name + '</b><br>' +
                    '<span style="font-size: 10px; color: grey;">Reviewed on ' + r.date + '</span>' +
                '</div>' +
                '<div style="float: right; background-color: #fffae6; color: #b8860b; padding: 10px; font-weight: bold; font-size: 18px; border-radius: 5px;">' + r.rating + '</div>' +
                '<div style="clear: both;"></div><br>' +
                '<p style="color: grey; font-size: 14px; margin: 0;">' + r.text + '</p>' +
            '</div>';
    }
    reviewsList.innerHTML = html;
}

// update the sidebar score and review count
function updateScoreDisplay(reviews) {
    if (reviews.length === 0) return;
    var total = 0;
    for (var i = 0; i < reviews.length; i++) { total += reviews[i].rating; }
    var avg = (total / reviews.length).toFixed(1);
    document.getElementById("game-score").innerText = avg;
    document.getElementById("review-count").innerText = "Based on " + reviews.length + " user review" + (reviews.length === 1 ? "" : "s");

    // update stars (out of 5, mapped from 0-10 score)
    var score = parseFloat(avg);
    var stars = "";
    if (score >= 9) stars = "★★★★★";
    else if (score >= 7) stars = "★★★★☆";
    else if (score >= 5) stars = "★★★☆☆";
    else if (score >= 3) stars = "★★☆☆☆";
    else stars = "★☆☆☆☆";
    document.getElementById("game-stars").innerText = stars;
}

renderReviews(allReviews);
updateScoreDisplay(allReviews);