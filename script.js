const canvas=document.getElementById("matrix");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const chars="01";
const letters=chars.split("");

const fontSize=14;
const columns=canvas.width/fontSize;

const drops=[];

for(let x=0;x<columns;x++){
drops[x]=1;
}

function draw(){
ctx.fillStyle="rgba(0,0,0,0.1)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff00";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){
const text=letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975){
drops[i]=0;
}
drops[i]++;
}
}

setInterval(draw,70);

// Typing Animation
const roles = [
    "Website Developer",
    "Discord Server Developer",
    "Bot Tester",
    "Panel Tester"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;

function typeRole() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    document.querySelector('.typing-text').textContent = currentRole.substring(0, charIndex);

    let typeSpeed = isDeleting ? erasingDelay : typingDelay;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = newTextDelay;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(typeRole, typeSpeed);
}

document.addEventListener("DOMContentLoaded", function() {
    if(roles.length) setTimeout(typeRole, newTextDelay + 250);
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Trigger on load
