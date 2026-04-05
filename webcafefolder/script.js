// NAVBAR SCROLL
window.addEventListener("scroll", ()=>{
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(()=>{
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
},3000);

// LOGIN
function openLogin(){
  document.getElementById("authBox").style.display="flex";
}

function closeLogin(){
  document.getElementById("authBox").style.display="none";
}

function toggleAuth(){
  alert("Signup feature coming soon!");
}

// FORM
document.getElementById("form").addEventListener("submit",function(e){
  e.preventDefault();
  alert("Message Sent Successfully!");
});