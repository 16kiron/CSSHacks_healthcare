function setActive(el) {
    document.querySelectorAll('.links').forEach(item =>
        item.classList.remove('active')
    );
    el.classList.add('active');
}
function openmenu() {
    const a = document.querySelector(".Side")
    a.style.display = "flex"
    a.classList.remove("slideout")
    a.classList.add("slidein")
}
function closemenu() {
    const a = document.querySelector(".Side")
    a.classList.remove("slidein")
    a.classList.add("slideout")
    setTimeout(() => {
        a.style.display = "none";
    }, 400);
}