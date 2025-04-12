function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
  function displayr(){
    const a = document.querySelector(".report")
    a.style.display="flex"
    a.classList.add("slideup")
  }