console.log('Hello!');

const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle-btn");

function yakou() {
  sidebar.classList.toggle("cajou");
}

function gigi() {
  toggle.classList.toggle("gigi");
}

toggle.addEventListener("click",gigi);
toggle.addEventListener("click",yakou);
