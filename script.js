const PROJECT_LINK = "https://www.onlinegdb.com/login";
const WHATSAPP_NUMBER = "8607957739";

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => observer.observe(item));

const projectLink = document.getElementById("projectLink");
projectLink.href = PROJECT_LINK;
projectLink.addEventListener("click", (event) => {
  if (!PROJECT_LINK || PROJECT_LINK === "#") {
    event.preventDefault();
    alert("Please add your project link in script.js first.");
  }
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!WHATSAPP_NUMBER) {
    alert("Please add your WhatsApp number in script.js first.");
    return;
  }

  const text = `Hello Khushpreet, my name is ${name}. ${message}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank", "noopener");
});
