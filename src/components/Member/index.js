const openbtn = document.querySelector(".item__add");
const closebtn = document.querySelector(".newMember__close")
const modal = document.querySelector(".modalMember");
const submit = document.querySelector(".form__submit");

const toggleModal = () => {
  modal.classList.toggle("modalMember__hide");
};

[openbtn, closebtn].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

const member = document.querySelector(".members__groupList");
const data = [];

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const url = document.querySelector("#url").value;
  data.push({ url });
  data.forEach((post) => {  
    member.innerHTML += `
    <li class="groupList__item">
        <a href="/" class="item__listLink">
          <picture class="listLink__pictures">
            <img
              class="pictures__profile"
              src="${post.url}"
              alt="profile picture"
            />
          </picture>
        </a>
      </li>
  `;
  });
});