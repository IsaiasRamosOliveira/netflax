const openPartyModal = document.querySelectorAll(".cards__card");
const partyModal = document.querySelector("#partyModal");
const fade = document.querySelector("#fade");

const toggleFunction = () => {
  partyModal.classList.toggle("hidden");
  fade.classList.toggle("hidden");
};

openPartyModal.forEach((opener) => {
  opener.addEventListener("click", () => {
    const openerMovieImg = opener.querySelector(".top__movieCover").getAttribute("src")
    const openerUser1 = opener.querySelector(".watchTogether__watcher-1").getAttribute("src")
    const openerUser2 = opener.querySelector(".watchTogether__watcher-2").getAttribute("src")
    const openerUser3 = opener.querySelector(".watchTogether__watcher-3").getAttribute("src")
    const openerTitle = opener.querySelector(".bottom__title").innerHTML
    const openerDescription = opener.querySelector(".bottom__description").innerHTML

    partyModal.innerHTML = 

    `<a href="#" class="partyModal__modal">
      <button id="partyModalCloseBtn">X</button>
      <div class="modal__top">
        <img
        src="${openerMovieImg}"
        alt="Miniatura do Filme"
        class="top__movieCover"
        id="movieCover"
        />
      </div> 
      <div class="modal__bottom">
        <div class="bottom__description bottom__description--modal">
          <h2 class="description__title modal__title">${openerTitle}</h2>
          <p class="description__text modal__description">
          ${openerDescription}
          </p>
        </div>
          <picture class="bottom__watchTogether">
          <img
            src="${openerUser1}"
            alt="Usuario1"
            class="watchTogether__watcher watchTogether__watcher-1 modalWatcher"
          />
          <img
            src="${openerUser2}"
            alt="Usuario2"
            class="watchTogether__watcher watchTogether__watcher-2 modalWatcher"
          />
          <img
            src="${openerUser3}"
            alt="Usuario3"
            class="watchTogether__watcher watchTogether__watcher-3 modalWatcher"
          />
        </picture>
      </div>
    </a>`
  const closeBtn = document.querySelector("#partyModalCloseBtn")
  closeBtn.addEventListener("click", (e) => toggleFunction())
  });
});

const closeBtn = document.querySelector("#partyModalCloseBtn")
const togglers = document.querySelectorAll(".cards__card, #fade", closeBtn);

togglers.forEach((toggler) => {
  toggler.addEventListener("click", () => toggleFunction());
});






