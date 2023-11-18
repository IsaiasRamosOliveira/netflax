export function openModal(container, ComponentModal, submitForm) {
  container.innerHTML += ComponentModal();
  submitForm();
}
