// Honestly ChatGPT helped out but I plan to understand how exactly fetch, and especially 'then' works.
function addNewsItem() {
    fetch("news_item.html")
        .then((response) => response.text())
        .then((html) => {
            document.getElementById("news").innerHTML += html;
        })
        .catch((error) => console.error("Error:", error));
}

function toggleNavMenu() {
    var navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("visible");
}

addNewsItem();
addNewsItem();
addNewsItem();
addNewsItem();
addNewsItem();
