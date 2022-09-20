const navToggle = document.querySelector(".nav-toggle");
const burgerMenu = document.querySelector(".main-menu");
const navToggleLabel = document.querySelector(".nav-toggle-label");
    
navToggle.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navToggleLabel.classList.toggle("active");
});
    
burgerMenu.addEventListener("click", (event) => {
        if(event.target){
            burgerMenu.classList.remove("active");
            navToggleLabel.classList.remove("active");
        }
});
