// Example JavaScript for interactivity (optional)
document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", function () {
            alert(`You clicked on ${this.querySelector(".project-title").innerText}`);
        });
    });
});
