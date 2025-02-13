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

window.openModalProduct = openModalProduct;
window.closeModalProduct = closeModalProduct;
window.onSubmitFormProduct = onSubmitFormProduct;
