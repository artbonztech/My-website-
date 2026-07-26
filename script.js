/*=====================================================
ARTBONZ TECHNOLOGIES
Professional Website
script.js
======================================================*/

/*=====================================================
LOADER
======================================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {
        loader.classList.add("hide");
    }

});


/*=====================================================
MOBILE NAVIGATION
======================================================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (nav.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        } else {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

}


/*=====================================================
CLOSE MENU WHEN A LINK IS CLICKED
======================================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});


/*=====================================================
STICKY HEADER
======================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.padding = "12px 8%";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.1)";

    } else {

        header.style.padding = "18px 8%";
        header.style.boxShadow = "none";

    }

});


/*=====================================================
SCROLL TO TOP BUTTON
======================================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=====================================================
DARK MODE
======================================================*/

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeToggle.innerHTML='<i class="fas fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeToggle.innerHTML='<i class="fas fa-moon"></i>';

    }

});
/*=====================================================
SMOOTH SCROLL
======================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=====================================================
ACTIVE NAVIGATION
======================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});


/*=====================================================
SCROLL REVEAL
======================================================*/

const reveals=document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach(reveal=>{

const windowHeight=window.innerHeight;

const revealTop=reveal.getBoundingClientRect().top;

const revealPoint=100;

if(revealTop<windowHeight-revealPoint){

reveal.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();


/*=====================================================
CURRENT YEAR
======================================================*/

const year=document.querySelector(".current-year");

if(year){

year.textContent=new Date().getFullYear();

}
/*=====================================================
PART 2
STATISTICS COUNTER | FAQ ACCORDION
======================================================*/


/*=====================================================
ANIMATED STATISTICS COUNTER
======================================================*/

const counters = document.querySelectorAll(".stat h2");

let counterStarted = false;


function startCounter(){

    const statisticsSection = document.querySelector(".statistics");

    if(!statisticsSection) return;


    const sectionTop = statisticsSection.getBoundingClientRect().top;

    const screenHeight = window.innerHeight;


    if(sectionTop < screenHeight - 100 && !counterStarted){


        counters.forEach(counter => {


            const target = +counter.innerText.replace(/\D/g,'');


            let count = 0;


            const updateCounter = () => {


                const increment = target / 100;


                if(count < target){


                    count += increment;


                    counter.innerText =
                    Math.ceil(count) + "+";


                    setTimeout(updateCounter,20);


                }else{


                    counter.innerText =
                    target + "+";


                }


            };


            updateCounter();


        });


        counterStarted = true;


    }

}


window.addEventListener("scroll", startCounter);



/*=====================================================
FAQ ACCORDION
======================================================*/


const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item =>{


    const question = item.querySelector(".faq-question");


    if(question){


        question.addEventListener("click",()=>{


            // Close other FAQs

            faqItems.forEach(otherItem=>{


                if(otherItem !== item){

                    otherItem.classList.remove("active");

                }


            });


            // Open selected FAQ

            item.classList.toggle("active");


        });


    }


});



/*=====================================================
AUTO CLOSE FAQ WHEN CLICKING OUTSIDE
======================================================*/


document.addEventListener("click",(e)=>{


    if(!e.target.closest(".faq-item")){


        faqItems.forEach(item=>{

            item.classList.remove("active");

        });


    }

});
/*=====================================================
PART 3
TESTIMONIAL SLIDER
PORTFOLIO FILTER
GALLERY LIGHTBOX
======================================================*/


/*=====================================================
TESTIMONIAL SLIDER
======================================================*/


const testimonials =
document.querySelectorAll(".testimonial-card");


let testimonialIndex = 0;


function showTestimonial(index){


    testimonials.forEach(card=>{

        card.style.display="none";

    });


    if(testimonials[index]){

        testimonials[index].style.display="block";

    }


}


function nextTestimonial(){


    testimonialIndex++;


    if(testimonialIndex >= testimonials.length){

        testimonialIndex = 0;

    }


    showTestimonial(testimonialIndex);


}



function previousTestimonial(){


    testimonialIndex--;


    if(testimonialIndex < 0){

        testimonialIndex =
        testimonials.length - 1;

    }

    showTestmonial(testimonialIndex);


}



if(testimonials.length > 0){


    showTestimonial(testimonialIndex);


    setInterval(()=>{

        nextTestimonial();

    },5000);


}
/*=====================================================
TESTIMONIAL BUTTONS
======================================================*/


const nextBtn =
document.querySelector(".next-testimonial");


const prevBtn =
document.querySelector(".prev-testimonial");



if(nextBtn){

nextBtn.addEventListener("click",
nextTestimonial);

}



if(prevBtn){

prevBtn.addEventListener("click",
previousTestimonial);

}
/*=====================================================
PORTFOLIO FILTER
======================================================*/


const filterButtons =
document.querySelectorAll(".filter-btn");


const portfolioItems =
document.querySelectorAll(".portfolio-item");



filterButtons.forEach(button=>{


button.addEventListener("click",()=>{


    const filter =
    button.getAttribute("data-filter");



    filterButtons.forEach(btn=>{

        btn.classList.remove("active");

    });



    button.classList.add("active");



    portfolioItems.forEach(item=>{


        if(filter==="all" ||
        item.classList.contains(filter)){


            item.style.display="block";


        }

        else{


            item.style.display="none";


        }


    });



});


});
/*=====================================================
GALLERY LIGHTBOX
======================================================*/


const galleryImages =
document.querySelectorAll(".gallery-item img");



if(galleryImages.length > 0){



galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


    const overlay =
    document.createElement("div");


    overlay.className="lightbox";


    overlay.innerHTML=`

    <span class="close-lightbox">
    &times;
    </span>

    <img src="${image.src}">

    `;



    document.body.appendChild(overlay);



    const close =
    overlay.querySelector(".close-lightbox");



    close.addEventListener("click",()=>{

        overlay.remove();

    });



    overlay.addEventListener("click",(e)=>{


        if(e.target === overlay){

            overlay.remove();

        }


    });



});


});


}
/*=====================================================
PART 4
FORM VALIDATION
BOOKING | CONTACT | WHATSAPP
======================================================*/


/*=====================================================
EMAIL VALIDATION FUNCTION
======================================================*/

function validateEmail(email){

    const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}
/*=====================================================
BOOKING FORM VALIDATION
======================================================*/


const bookingForm =
document.querySelector("#booking form");


if(bookingForm){


bookingForm.addEventListener("submit",(e)=>{


    e.preventDefault();



    const inputs =
    bookingForm.querySelectorAll("input, select, textarea");



    let valid = true;



    inputs.forEach(input=>{


        if(input.value.trim()===""){


            valid=false;


            input.style.border =
            "2px solid red";


        }

        else{


            input.style.border =
            "1px solid #ddd";


        }


    });



    const email =
    bookingForm.querySelector('input[type="email"]');



    if(email && !validateEmail(email.value)){


        valid=false;

        email.style.border =
        "2px solid red";


        alert("Please enter a valid email address");


        return;


    }



    if(valid){


        alert(
        "Booking submitted successfully! We will contact you soon."
        );


        bookingForm.reset();


    }



});


}
/*=====================================================
CONTACT FORM VALIDATION
======================================================*/


const contactForm =
document.querySelector(".contact-form form");



if(contactForm){


contactForm.addEventListener("submit",(e)=>{


e.preventDefault();



const name =
contactForm.querySelector("input");

const email =
contactForm.querySelector(
'input[type="email"]'
);

const message =
contactForm.querySelector("textarea");



if(name.value.trim()==="" ||
email.value.trim()==="" ||
message.value.trim()===""){


alert(
"Please fill all required fields."
);


return;


}



if(!validateEmail(email.value)){


alert(
"Please enter a correct email address."
);


return;


}



alert(
"Message sent successfully! We will reply shortly."
);



contactForm.reset();



});


}
/*=====================================================
NEWSLETTER FORM
======================================================*/


const newsletterForm =
document.querySelector(".newsletter form");



if(newsletterForm){


newsletterForm.addEventListener("submit",(e)=>{


e.preventDefault();



const email =
newsletterForm.querySelector("input");



if(email.value.trim()===""){


alert(
"Please enter your email address."
);


return;


}



if(!validateEmail(email.value)){


alert(
"Enter a valid email."
);


return;


}



alert(
"You have successfully subscribed!"
);



newsletterForm.reset();



});


}
/*=====================================================
WHATSAPP BUTTON
======================================================*/


const whatsapp =
document.querySelector(".whatsapp");



if(whatsapp){


const phone =
"+254104197211"; 
// Replace with your business WhatsApp number



const message =
"Hello Artbonz Technologies, I would like to know more about your IT services.";



whatsapp.href =
"https://wa.me/"
+ phone
+ "?text="
+ encodeURIComponent(message);



whatsapp.target="_blank";


}
/*=====================================================
BUTTON LOADING EFFECT
======================================================*/


const buttons =
document.querySelectorAll("button, .btn");



buttons.forEach(button=>{


button.addEventListener("click",()=>{


button.style.transform="scale(.95)";


setTimeout(()=>{


button.style.transform="";


},150);



});


});