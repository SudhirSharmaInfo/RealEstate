function ham() {
    document.getElementById("hamburger-content").style.transform = "translateX(0%)";
    document.getElementById("hamburger-content").style.transition = "transform 0.5s";
}
function hamclose() {
    document.getElementById("hamburger-content").style.transform = "translateX(100%)";
    document.getElementById("hamburger-content").style.transition = "transform 0.5s";
}

function form() {
    document.getElementById("form-section").style.transform = "translateY(0%)";
    document.getElementById("form-section").style.transition = "transform 0.3s";
}
function formclose() {
    document.getElementById("form-section").style.transform = "translateY(100%)";
    document.getElementById("form-section").style.transition = "transform 0.3s";
}


let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})


const slider = document.getElementById("properties-section-box");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

scrollLeftBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -450,
        behavior: "smooth",
    });
});

scrollRightBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: 450,
        behavior: "smooth",
    });
});