const openModalProduct = () => {
  document.getElementById("modalFormProduct").style.display = "flex";
};

const closeModalProduct = () => {
  document.getElementById("modalFormProduct").style.display = "none";
  document.getElementById("testFormContainer").innerHTML = "";
};

const onSubmitFormProduct = () => {
  closeModalProduct();
};

const openModalConfirmDelete = (deleteCallback) => {
  window.deleteCallback = deleteCallback;
  document.getElementById("modalConfirmDelete").style.display = "flex";
};

const closeModalConfirmDelete = () => {
  document.getElementById("modalConfirmDelete").style.display = "none";
};

const confirmDelete = () => {
  if (typeof window.deleteCallback === "function") {
    window.deleteCallback();
  }
  closeModalConfirmDelete();
};

window.openModalProduct = openModalProduct;
window.closeModalProduct = closeModalProduct;
window.onSubmitFormProduct = onSubmitFormProduct;
window.openModalConfirmDelete = openModalConfirmDelete;
window.closeModalConfirmDelete = closeModalConfirmDelete;
window.confirmDelete = confirmDelete;
