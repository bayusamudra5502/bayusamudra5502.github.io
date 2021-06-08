console.log("Selamat datang di website bayu :D");

// Header Manipulation
const menuButton = document.querySelector("header .menu");

menuButton.addEventListener("click", () => {
    const menu = document.querySelector("#menu");
    if (menu.classList.contains("show-menu")) {
        menu.classList.toggle("show-menu");
        menu.classList.toggle("animate-menu");
    } else {
        menu.classList.toggle("animate-menu");
        menu.classList.toggle("show-menu");
    }
});

function back() {
    window.history.back();
}
