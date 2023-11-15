import { handleChangeBanner } from "../../assets/js/banner.js";
import { closeModal } from "../../utils/closeModal.js";
import { openModal } from "../../utils/openModal.js";

const banner = document.querySelector("#banner");
const data = [];

banner.addEventListener("click", (e) => {
  const btn = e.target.getAttribute("class");
  if (btn == "banner__add") {
    openModal(banner, ComponentModal, submitFormOfBanner);
  }
  if (btn == "newBanner__close") {
    const modal = banner.querySelector(".modalBanner__newBanner");
    closeModal(modal);
    handleChangeBanner();
  }
});

function ComponentModal() {
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

function submitFormOfBanner() {
  const modal = document.querySelector(".modalBanner");
  const modalBanner = banner.querySelector(".modalBanner__newBanner");

  const formBanner = document.querySelector(".form__submitBanner");
  formBanner.addEventListener("click", (e) => {
    e.preventDefault();
    const urlBanner = modal.querySelector("#urlBanner").value;
    const name = modal.querySelector("#name").value;
    data.push({ urlBanner, name });
    data.forEach((post) => {
      const banner = document.querySelector(".banner__list");
      banner.innerHTML += ComponentBanner(post.urlBanner, post.name);
      closeModal(modalBanner);
      handleChangeBanner();
    });
    data.pop();
  });
}