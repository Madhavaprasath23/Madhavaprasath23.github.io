const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-item a");
console.log(navLi);
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop-150) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    console.log(li.classList);
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

