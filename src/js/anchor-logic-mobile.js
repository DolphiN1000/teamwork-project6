function closeMobileMenu() {
    const refs = {
        menu: document.querySelector('[data-menu]')
     };
    refs.menu.classList.remove('is-open');
};