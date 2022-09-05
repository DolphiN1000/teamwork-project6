function closeMobileMenu() {
    const refs = {
        menu: document.querySelector('[data-menu]')
     };
    refs.menu.classList.remove('is-open');
};

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-buy-now-open]'),
    closeModalBtn: document.querySelector('[data-modal-buy-now-close]'),
    modal: document.querySelector('[data-modal-buy-now]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();