let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");
function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[n].classList.add("active");
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
showSlide(currentSlide);
setInterval(nextSlide, 5000);


function showSection(sectionName) {
  const sections = document.querySelectorAll(
    ".fifth_section_content > div"
  );
  sections.forEach((section) => {
    if (section.classList.contains(sectionName)) {
      section.style.display = "flex";
    } else {
      section.style.display = "none";
    }
  });
}


const categories = document.querySelectorAll(".category");
const projects = document.querySelectorAll(".projects > div");
categories.forEach((category) => {
  category.addEventListener("click", function () {
    const selectedCategory = this.dataset.category;
    if (selectedCategory === "All") {
      projects.forEach((project) => {
        project.style.display = "flex";
      });
    } else {
      projects.forEach((project) => {
        if (project.dataset.category === selectedCategory) {
          project.style.display = "flex";
        } else {
          project.style.display = "none";
        }
      });
    }
  });
});


document
  .querySelector(".hire_me")
  .addEventListener("click", function () {
    const thirdSection = document.querySelector(".third_section");
    thirdSection.scrollIntoView({ behavior: "smooth" });
  });

function validateUserInput() {
  const userFirstName = document
    .getElementById("userFirstName")
    .value.trim();
  const userEmail = document.getElementById("userEmail").value.trim();
  return (
    userFirstName !== "" &&
    userEmail !== ""
  );
}
function sendMessage() {
  const form = document.getElementById('contact');
  const formData = new FormData(form);
  fetch('https://borjomi.loremipsum.ge/api/send-message', {
    method: 'POST',
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 1) {
    showModal('Thank you for getting in touch! We appreciate you contacting us.');
    } else {
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}