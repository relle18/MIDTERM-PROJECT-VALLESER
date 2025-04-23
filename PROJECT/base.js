document.addEventListener("DOMContentLoaded", () => {
    const hobbyDivs = document.querySelectorAll(".text-center");
  
    hobbyDivs.forEach(div => {
      // Hover effect
      div.addEventListener("mouseenter", () => {
        div.style.transform = "scale(1.05)";
        div.style.transition = "transform 0.3s ease";
      });
  
      div.addEventListener("mouseleave", () => {
        div.style.transform = "scale(1)";
      });
  
      // Click interaction
      div.addEventListener("click", () => {
        const label = div.querySelector("div").innerText;
        alert(`You clicked on: ${label}`);
      });
    });
  });