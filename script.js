let Navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    Navbar.classList.toggle('show');
}
window.onscroll = () =>{
    Navbar.classList.remove('show');
}