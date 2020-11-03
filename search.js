const searchButton = document.querySelector(".search_button");
const popUp = document.querySelector(".popup");
const searchForm = popUp.querySelector(".search-form");

searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUp.classList.toggle("popup-hide");
});

