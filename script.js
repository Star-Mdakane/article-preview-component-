const modal = document.querySelector("#modal");
const avatar = document.querySelector("#avatar");
const avatarBtn = document.querySelector("#avatar-btn");
const modalBtn = document.querySelector("#modal-btn");
const container = document.querySelector("#container")

avatarBtn.addEventListener("click", (e) => {
    if (!container.classList.contains("open")) {
        container.classList.add("open");
    } else {
        container.classList.remove("open");
    }
});

modalBtn.addEventListener("click", () => {
    container.classList.remove("open");
});