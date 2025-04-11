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
function openchat(){
    const msg = document.querySelector(".banner")
    const img = document.querySelector(".img2")
    const b = document.querySelector(".chat")
    b.style.display="flex"
    img.style.display="none"
    msg.style.display="none"
    document.body.style.overflow="hidden"
}
function closechat(){
    const b = document.querySelector(".chat")
    const img = document.querySelector(".img2")
    img.style.display="flex"
    b.style.display="none"
    document.body.style.overflow="visible"
}