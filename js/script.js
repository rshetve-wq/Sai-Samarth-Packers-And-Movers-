/* ==================================================
   Shri Sai Samarth Packers & Movers
   Premium Website
   script.js
================================================== */

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Navbar shadow on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    header.style.background = "#ffffff";
  } else {
    header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
  }
});

// Counter Animation
const counters = document.querySelectorAll(".stat-box h2");

const runCounter = (counter) => {

  const text = counter.innerText;

  const target = parseInt(text.replace(/\D/g, ""));

  let count = 0;

  const speed = target / 100;

  const update = () => {

    count += speed;

    if (count < target) {

      counter.innerText = Math.floor(count) + "+";

      requestAnimationFrame(update);

    } else {

      counter.innerText = text;

    }

  };

  update();

};

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      runCounter(entry.target);

      observer.unobserve(entry.target);

    }

  });

});

counters.forEach(counter => observer.observe(counter));

// Fade-in Animation
const sections = document.querySelectorAll(
".service-card,.why-card,.review-card,.step,.about,.gallery img");

const animationObserver = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";

      entry.target.style.transform = "translateY(0)";

    }

  });

},{
  threshold:0.15
});

sections.forEach(item=>{

  item.style.opacity="0";

  item.style.transform="translateY(50px)";

  item.style.transition="all .8s ease";

  animationObserver.observe(item);

});

// Gallery Image Popup
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img=>{

  img.addEventListener("click",()=>{

    const popup=document.createElement("div");

    popup.style.position="fixed";
    popup.style.left="0";
    popup.style.top="0";
    popup.style.width="100%";
    popup.style.height="100%";
    popup.style.background="rgba(0,0,0,.9)";
    popup.style.display="flex";
    popup.style.justifyContent="center";
    popup.style.alignItems="center";
    popup.style.zIndex="9999";

    const image=document.createElement("img");

    image.src=img.src;

    image.style.maxWidth="90%";
    image.style.maxHeight="90%";
    image.style.borderRadius="10px";

    popup.appendChild(image);

    popup.onclick=()=>popup.remove();

    document.body.appendChild(popup);

  });

});

// Contact Form
const form = document.getElementById("quoteForm");

if (form) {

form.addEventListener("submit", function (e) {

e.preventDefault();

const button = form.querySelector("button");

button.disabled = true;
button.innerHTML = "Sending...";

emailjs.sendForm(
"service_hg84qb8",
"template_xtykeli",
this
)
.then(function () {

alert("✅ Thank you! Your enquiry has been sent successfully.");

form.reset();

button.disabled = false;
button.innerHTML = "Get Free Quote";

})
.catch(function (error) {

console.log(error);

alert("❌ Failed to send enquiry. Please try again.");

button.disabled = false;
button.innerHTML = "Get Free Quote";

});

});

}

console.log("Shri Sai Samarth Packers & Movers Website Loaded Successfully.");
