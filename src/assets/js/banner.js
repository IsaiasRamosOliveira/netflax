export function handleChangeBanner() {
  const btns = document.querySelectorAll(".banner__list .banner__mimg");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("clicou");
      let banner = document.querySelector("#banner");
      let title = document.querySelector(".banner__movie");
      const img = btn.getAttribute("src");
      const text = btn.getAttribute("alt");
      banner.style.backgroundImage = `url(${img})`;
      title.textContent = text;
    });
  });
}
