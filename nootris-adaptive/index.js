const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu__list");
const links = document.querySelectorAll(".menu__items li");

function slider() {
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        burger.classList.toggle("toggle");

        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `nav-links-fade .5s ease forwads ${index / 7 + 0.3}s`;
            }
            // console.log(link.style.animation==='');
        });
    });
}

slider();
