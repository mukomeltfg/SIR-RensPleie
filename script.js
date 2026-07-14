// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    },800);

});

// ==========================
// BOOKING MODAL
// ==========================

const modal = document.getElementById("bookingModal");

const closeBtn = document.querySelector(".close");

const buttons = document.querySelectorAll(".book-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        modal.style.display = "flex";

    });

});

closeBtn.onclick = () => {

    modal.style.display = "none";

};

window.onclick = (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

};

// ==========================
// FORM
// ==========================

const form = document.getElementById("bookingForm");

form.addEventListener("submit",(e)=>{

    e.preventDefault();const promo = document.getElementById("promoCode").value.trim().toUpperCase();

if (promo !== "" && promo !== "SIR10") {
    alert("Ugyldig promokode!");
    return;
}

if (promo === "SIR10") {
    alert("✅ Promokode aktivert! 10% rabatt.");
} 
emailjs.sendForm(
    "service_03vx88u",
    "template_tl6cfws",
    form
)
.then(() => {
    console.log("Письмо отправлено!");
})
.catch((error) => {
    alert(JSON.stringify(error));
    console.log(error);
    console.error(error);
});

    const button=form.querySelector("button");

    button.innerHTML="Sender...";

    button.disabled=true;

    setTimeout(()=>{

        button.innerHTML="✓ Bestillingen er sendt";

        button.style.background="#16a34a";

        form.reset();

        setTimeout(()=>{

            modal.style.display="none";

            button.innerHTML="Bestill Nå";

            button.disabled=false;

            button.style.background="#4da3ff";

        },1800);

    },1500);

});

// ==========================
// FAQ
// ==========================

document.querySelectorAll(".faq-question").forEach(question=>{

    question.addEventListener("click",()=>{

        const answer=question.nextElementSibling;

        if(answer.style.display==="block"){

            answer.style.display="none";

        }else{

            document.querySelectorAll(".faq-answer").forEach(item=>{

                item.style.display="none";

            });

            answer.style.display="block";

        }

    });

});

// ==========================
// SUPPORT BUTTON
// ==========================

const support=document.getElementById("supportButton");

support.addEventListener("click",()=>{

    alert(
`Kontakt oss

📞 Telefon:
+47 939 53 581

✉️ E-post:
Sirrenspleie@gmail.com

WhatsApp:
+47 939 53 581`
    );

});

// ==========================
// SCROLL ANIMATION
// ==========================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(60px)";

    section.style.transition="1s";

    observer.observe(section);

});
let selectedCity = "";

function chooseCity(city){

    selectedCity = city;

    document.getElementById("serviceModal").style.display = "flex";

}
function closeServiceModal(){

    document.getElementById("serviceModal").style.display = "none";

}

function selectService(service){

    document.getElementById("serviceModal").style.display = "none";

    document.querySelector('select[name="city"]').value = selectedCity;

    document.getElementById("service").value = service;

    document.getElementById("bookingModal").style.display = "flex";

}
const translations = {

no:{

nav_home:"Hjem",
nav_services:"Tjenester",
nav_gallery:"Galleri",
nav_reviews:"Anmeldelser",
nav_faq:"FAQ",
nav_contact:"Kontakt",
book_btn:"Bestill Time",

hero_title:"Premium Bilpleie",
hero_text:"Profesjonell bilvask og detailing med fokus på kvalitet, glans og perfeksjon.",
hero_book:"Bestill Time",
hero_call:"Ring Nå",
hero_hours:"🕒 Åpningstider",
hero_area:"📍 Serviceområde"

},

en:{

nav_home:"Home",
nav_services:"Services",
nav_gallery:"Gallery",
nav_reviews:"Reviews",
nav_faq:"FAQ",
nav_contact:"Contact",
book_btn:"Book Now",

hero_title:"Premium Car Care",
hero_text:"Professional car cleaning and detailing focused on quality, shine and perfection.",
hero_book:"Book Now",
hero_call:"Call Now",
hero_hours:"🕒 Opening Hours",
hero_area:"📍 Service Area"

},

ru:{

nav_home:"Главная",
nav_services:"Услуги",
nav_gallery:"Галерея",
nav_reviews:"Отзывы",
nav_faq:"FAQ",
nav_contact:"Контакты",
book_btn:"Записаться",

hero_title:"Премиальная химчистка",
hero_text:"Профессиональная химчистка мебели и салона автомобиля с акцентом на качество, чистоту и отличный результат.",
hero_book:"Записаться",
hero_call:"Позвонить",
hero_hours:"🕒 Время работы",
hero_area:"📍 Зона обслуживания"

}

};

function changeLanguage(){

const lang=document.getElementById("languageSelect").value;

localStorage.setItem("lang",lang);

document.querySelectorAll("[data-lang]").forEach(item=>{

const key=item.dataset.lang;

if(translations[lang][key]){

item.textContent=translations[lang][key];

}

});

}

window.addEventListener("load",()=>{

const saved=localStorage.getItem("lang")||"no";

document.getElementById("languageSelect").value=saved;

changeLanguage();

});