const switcherDark = document.querySelector('.switcher__dark');
const switcherLight = document.querySelector('.switcher__light');

function dark_mode() {
    document.body.classList.remove('body--light');
    document.body.classList.add('body--dark');
}

function light_mode() {
    document.body.classList.remove('body--dark');
    document.body.classList.add('body--light');
}

switcherDark.addEventListener("click", dark_mode);
switcherLight.addEventListener("click", light_mode);