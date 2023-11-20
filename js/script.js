function toggleNavMenu() {
    var navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("visible");
}

// For future use, and I was just learning how to create elements with js based on a file
// function addNewsItem() {
//     fetch("news_item.html")
//         .then((response) => response.text())
//         .then((html) => {
//             document.getElementById("news").innerHTML += html;
//         })
//         .catch((error) => console.error("Error:", error));
// }
