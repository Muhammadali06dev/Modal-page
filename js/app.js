let openBtn = document.getElementById("btn-open");
let closeBtn = document.getElementById("close-btn");
let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal")


function addModal() {
   modal.classList.remove("hidden");
   overlay.classList.remove("hidden")
   openBtn.classList.add("hidden")
}

function removeModal() {
   modal.classList.add("hidden")
   overlay.classList.add("hidden")
   openBtn.classList.remove("hidden")
}

openBtn.addEventListener('click', addModal)

closeBtn.addEventListener('click', removeModal)

overlay.addEventListener('click', removeModal)

document.addEventListener('keydown', (e) => {
   if(e.code == "Escape") {
      removeModal()
   }
})