let servicesBtnDelivery = document.querySelector(".services-btn-delivery");
let servicesBtnGuarantee = document.querySelector(".services-btn-guarantee");
let servicesBtnCredit = document.querySelector(".services-btn-credit");

let servicesContentDelivery = document.querySelector(".services-content-delivery");
let servicesContentGuarantee = document.querySelector(".services-content-guarantee");
let servicesContentCredit = document.querySelector(".services-content-credit");

servicesBtnGuarantee.addEventListener("click", function () {
    servicesBtnGuarantee.classList.add("services-btn--active");
    servicesBtnDelivery.classList.remove("services-btn--active");
    servicesBtnCredit.classList.remove("services-btn--active");

    servicesContentGuarantee.classList.add("services-content-guarantee--active");
    servicesContentDelivery.classList.remove("services-content-delivery--active");
    servicesContentCredit.classList.remove("services-content-credit--active");
});

servicesBtnDelivery.addEventListener("click", function () {
    servicesBtnGuarantee.classList.remove("services-btn--active");
    servicesBtnDelivery.classList.add("services-btn--active");
    servicesBtnCredit.classList.remove("services-btn--active");

    servicesContentGuarantee.classList.remove("services-content-guarantee--active");
    servicesContentDelivery.classList.add("services-content-delivery--active");
    servicesContentCredit.classList.remove("services-content-credit--active");
});

servicesBtnCredit.addEventListener("click", function () {
    servicesBtnGuarantee.classList.remove("services-btn--active");
    servicesBtnDelivery.classList.remove("services-btn--active");
    servicesBtnCredit.classList.add("services-btn--active");

    servicesContentGuarantee.classList.remove("services-content-guarantee--active");
    servicesContentDelivery.classList.remove("services-content-delivery--active");
    servicesContentCredit.classList.add("services-content-credit--active");
});

// Slider

let sliderBtnPrev = document.querySelector(".slider-btn-prev");
let sliderBtnNext = document.querySelector(".slider-btn-next");
let catalogSliderBox = document.querySelectorAll(".catalog-slider-box");

sliderBtnPrev.addEventListener("click", function () {
    catalogSliderBox[0].classList.toggle("catalog-slider-box--active");
    catalogSliderBox[1].classList.toggle("catalog-slider-box--active");
});

sliderBtnNext.addEventListener("click", function () {
    catalogSliderBox[0].classList.toggle("catalog-slider-box--active");
    catalogSliderBox[1].classList.toggle("catalog-slider-box--active");
});

// Modal

let modalBtnOpen = document.querySelector(".contacts-link");
let modalBtnClose = document.querySelector(".modal__close");
let modalContainer = document.querySelector(".modal");

modalBtnOpen.addEventListener("click", function () {
    modalContainer.classList.add("modal--show");
});

modalBtnClose.addEventListener("click", function () {
    modalContainer.classList.remove("modal--show");
})