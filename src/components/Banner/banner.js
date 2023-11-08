const containerBanner = document.querySelector("#container");
const dataBanner = [];

function ComponentModalBanner() {
  return `
    <div class="modalBanner">
      <div class="modalBanner__newBanner">
        <button class="newBanner__close" onclick="closeModalBanner()">X</button>
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
  containerBanner.innerHTML += ComponentModalBanner();
  submitFormOfBanner();
}

function closeModalBanner() {
  const modalBanner = containerBanner.querySelector(".modalBanner__newBanner");
  modalBanner.parentElement.remove();
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
    });
  });
}