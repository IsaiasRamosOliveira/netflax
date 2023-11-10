import { handleChangeBanner } from "../../assets/js/banner.js";

const banner = document.querySelector("#banner");
const dataBanner = [];

banner.addEventListener("click", (e) => {
  const btn = e.target.getAttribute("class");
  if (btn == "banner__add") {
    openModalBanner();
  }
  if (btn == "newBanner__close") {
    closeModalBanner();
  }
});

function ComponentModalBanner() {
  return `
    <div class="modalBanner">
      <div class="modalBanner__newBanner">
        <button class="newBanner__close">X</button>
        <div class="newBanner__movie">
          <form class="movie__form">
            <label class="form__input">
              <input class="input__img" type="text" name="urlBanner" id="urlBanner" placeholder="Enter URL Movie" required />
              <input class="input__name" type="text" name="name" id="name" placeholder="Name Of Movie" required />
            </label>
            <button class="form__submitBanner" type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  `;
}

function ComponentBanner(urlBanner, name) {
  return `
    <img
      class="banner__mimg banner__mimg--border"
      src="${urlBanner}"
      alt="${name}"
    />
  `;
}

function openModalBanner() {
  banner.innerHTML += ComponentModalBanner();
  submitFormOfBanner();
}

function closeModalBanner() {
  const modalBanner = banner.querySelector(".modalBanner__newBanner");
  modalBanner.parentElement.remove();
  handleChangeBanner();
}

function submitFormOfBanner() {
  const modalBanner = document.querySelector(".modalBanner");
  const formBanner = document.querySelector(".form__submitBanner");
  formBanner.addEventListener("click", (e) => {
    e.preventDefault();
    const urlBanner = modalBanner.querySelector("#urlBanner").value;
    const name = modalBanner.querySelector("#name").value;
    dataBanner.push({ urlBanner, name });
    dataBanner.forEach((post) => {
      const banner = document.querySelector(".banner__list");
      banner.innerHTML += ComponentBanner(post.urlBanner, post.name);
      closeModalBanner();
      handleChangeBanner();
    });
  });
}
