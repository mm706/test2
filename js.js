const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll(".bottom-img");
arrowBtns = document.querySelectorAll(".wrapper-btn");

let firstImgWidth = firstImg.clientWidth +50;

arrowBtns.forEach( icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? firstImgWidth : firstImgWidth;
    });
});