const share = document.querySelector(".footer");
const hoovered = document.querySelector(".hoovered");

share.addEventListener("click",()=> {
    hoovered.classList.toggle("d-none");
})

