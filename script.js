
// back to top btn
document.addEventListener("DOMContentLoaded", () => {
const topBtn = document.getElementById("topBtn");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
    // Change 300 to your desired scroll position
    topBtn.classList.add("show");
} else {
    topBtn.classList.remove("show");
}
});

// Smooth scroll to top when the button is clicked
topBtn.addEventListener("click", () => {
window.scrollTo({
    top: 0,
    behavior: "smooth",
});
});
});

