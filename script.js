const modal = document.querySelector("#modal");
const avatar = document.querySelector("#avatar");
const avatarBtn = document.querySelector("#avatar-btn");
const modalBtn = document.querySelector("#modal-btn");
const container = document.querySelector("#container")

avatarBtn.addEventListener("click", (e) => {
    container.classList.add("open");
});

modalBtn.addEventListener("click", () => {
    container.classList.remove("open");
});