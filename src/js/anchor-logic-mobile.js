function closeMobileMenu() {
    const refs = {
        menu: document.querySelector('[data-menu]')
     };
    refs.menu.classList.remove('is-open');
};

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-bno]'),
    closeModalBtn: document.querySelector('[data-modal-buy-now-close]'),
    modal: document.querySelector('[data-modal-buy-now]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtnMobile: document.querySelector('[mobile-modal-buy-now-open]'),
    modal: document.querySelector('[data-modal-buy-now]'),
    menuMob: document.querySelector('[data-menu]')
  };

  refs.openModalBtnMobile.addEventListener('click', openModal);

  function openModal() {
    refs.modal.classList.remove('is-hidden');
    refs.modal.classList.add('is-open');
    refs.menuMob.classList.remove('is-open');
  }
})();