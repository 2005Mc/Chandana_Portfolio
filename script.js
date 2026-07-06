/* ==========================================
   TYPING ANIMATION
========================================== */

const words = [
    "Computer Science Student",
    "Web Developer",
    "Java Programmer",
    "Problem Solver",
    "Frontend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);
        
        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const speed = target/100;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


/* ==========================================
   MOBILE MENU
========================================== */

const menu=document.querySelector(".menu");

const nav=document.querySelector(".nav-links");

if(menu){

menu.onclick=()=>{

nav.classList.toggle("active");

}

}


/* ==========================================
   DARK MODE
========================================== */

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.id="darkMode";

document.body.appendChild(darkBtn);

darkBtn.style.position="fixed";
darkBtn.style.bottom="90px";
darkBtn.style.right="25px";
darkBtn.style.width="50px";
darkBtn.style.height="50px";
darkBtn.style.borderRadius="50%";
darkBtn.style.border="none";
darkBtn.style.cursor="pointer";
darkBtn.style.background="#00e5ff";
darkBtn.style.fontSize="20px";
darkBtn.style.zIndex="999";

darkBtn.onclick=()=>{

document.body.classList.toggle("light");

};


/* ==========================================
   SMOOTH NAVIGATION
========================================== */

document.querySelectorAll('nav a').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});


/* ==========================================
   PROFILE IMAGE EFFECT
========================================== */

const profile=document.querySelector(".profile");

if(profile){

profile.addEventListener("mouseenter",()=>{

profile.style.transform="scale(1.08) rotate(3deg)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="scale(1)";

});

}


/* ==========================================
   PROJECT CARD EFFECT
========================================== */

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,#00e5ff33,#ffffff10)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.08)";

});

});


/* ==========================================
   CURRENT YEAR
========================================== */

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=`© ${new Date().getFullYear()} Chandana Madasu | All Rights Reserved`;

}
