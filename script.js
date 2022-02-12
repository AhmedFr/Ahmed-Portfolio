const menuButton = document.getElementsByClassName("menu-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const tabs = document.querySelectorAll("tab");
const sections = document.querySelectorAll("section");

menuButton.addEventListener("click", ()=> {
    navbarLinks.classList.toggle("shown");
})

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
        document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
    });
}
