const splash : HTMLDivElement | null= document.querySelector("#splash");
const mainContent = document.getElementById("main-content");

window.addEventListener("load", () => {
  setTimeout(() => {
    if (splash) {
      splash.style.display = "none";
    }
    if (mainContent) {
      mainContent.style.display = "block";
    }
  }, 2000);
});
