let loader = document.querySelector(".loader");
if (loader) {
  window.addEventListener("load", () => {
    loader.remove();
  });
}
