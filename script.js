function setActive(el) {
    document.querySelectorAll('.links').forEach(item =>
        item.classList.remove('active')
    );
    el.classList.add('active');
}
function openmenu(event) {
    event.preventDefault()
    const a = document.querySelector(".Side")
    a.style.display = "flex"
    a.classList.remove("slideout")
    a.classList.add("slidein")
}
function closemenu(event) {
    event.preventDefault()
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
    b.classList.remove("slidedown")
    b.classList.add("slideup")
    img.classList.remove("slideup")
    img.classList.add("slidedown")
    img.style.display="none"
    msg.style.display="none"
}
function closechat(){
    const b = document.querySelector(".chat")
    const img = document.querySelector(".img2")
    b.classList.remove("slideup")
    b.classList.add("slidedown")
    img.classList.remove("slidedown")
    img.classList.add("slideup")
    img.style.display="flex"
    setTimeout(()=>{
        b.style.display="none"
    },400)
}
const chatMessages = document.querySelector('.messages');

chatMessages.addEventListener('wheel', function (e) {
  const atTop = chatMessages.scrollTop === 0;
  const atBottom = chatMessages.scrollHeight - chatMessages.scrollTop === chatMessages.clientHeight;

  if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
    e.preventDefault();
  }
}, { passive: false });