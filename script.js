console.log("Modern Portfolio Loaded Successfully");


// Navbar Active Effect
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(nav => nav.classList.remove("active"));

        link.classList.add("active");
    });
});


// Scroll Animation
window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";
        }
    });
});


// Initial Animation
const allSections = document.querySelectorAll("section");

allSections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";
});