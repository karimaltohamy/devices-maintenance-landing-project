const btnOpenModal = document.querySelector(".btn_open");
const btnClose = document.querySelector(".btn_close_modal");
const modal = document.querySelector(".report_modal");

btnOpenModal.addEventListener("click", () => {
  modal.classList.add("open");
});

btnClose.addEventListener("click", () => {
  modal.classList.remove("open");
});
