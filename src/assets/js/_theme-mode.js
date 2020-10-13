const switcherDark = document.querySelector('.switcher__dark');
const switcherLight = document.querySelector('.switcher__light');
const darklogo = document.querySelector(".darklogo");
const lightlogo = document.querySelector(".whitelogo");

function dark_mode() {
    document.body.classList.remove('body--light');
    document.body.classList.add('body--dark');
    lightlogo.classList.remove("light-none");
    darklogo.classList.add("dark-none");
}

function light_mode() {
    document.body.classList.remove('body--dark');
    document.body.classList.add('body--light');
    darklogo.classList.remove("dark-none");
    lightlogo.classList.add("light-none");
}

switcherDark.addEventListener("click", dark_mode);
switcherLight.addEventListener("click", light_mode);