const openModalCreate = () => {
  document.getElementById("modal-create").style.display = "flex";
};

const closeModalCreate = () => {
  document.getElementById("modal-create").style.display = "none";
  document.getElementById("testFormContainer").innerHTML = "";
};

const onCreateForm = () => {
  closeModalCreate();
};

window.openModalCreate = openModalCreate;
window.closeModalCreate = closeModalCreate;
window.onCreateForm = onCreateForm;
