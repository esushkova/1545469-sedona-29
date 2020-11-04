const searchButton = document.querySelector(".search_button");
const popUp = document.querySelector(".popup");
const searchForm = popUp.querySelector(".search-form");

popUp.classList.add("popup-hide");

searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUp.classList.toggle("popup-hide");
    popUp.classList.toggle("popup-show");
});
