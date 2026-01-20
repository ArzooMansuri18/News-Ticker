const ticker = document.querySelector("#ticker");

const headlines = [
    "🚀SpaceX launches 60 new satellites into orbit.",
    "💰Stock market hits record highs amid tech rally.",
    "🌧️Heavy rainfall expected in northern India this weekend.",
    "🎬New Marvel movie breaks global box office records.",
    "📱Apple unveils its latest iPhone with AI-powered features."
];

function loadHeadlines(){
    ticker.innerHTML = "";
    headlines.forEach(headline =>{
        const span = document.createElement("span");
        span.textContent = headline;
        ticker.appendChild(span);
    });
}

loadHeadlines();

// Optional for 30 sec
setInterval(() => {
    const first = headlines.shift(); //remove first item
    headlines.push(first);
    loadHeadlines();
}, 30000);