
const btns = document.querySelectorAll(".container-img");
const parrafos = document.querySelectorAll(".parrafo");

const reset = () => {
    btns.forEach(btn => {
        btn.classList.remove("active");
    });
    parrafos.forEach(parrafo => {
        parrafo.classList.remove("active");
    });
};

document.addEventListener("DOMContentLoaded", () => {
    btns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            reset();
            btn.classList.add("active");
            parrafos[index].classList.add("active");
        });
    });
});