(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const closeMenuBtn = document.querySelector("[data-close-menu-button]");

    const toggleMenu = () => {
        document.querySelector("[data-menu]").classList.toggle("is-open");
        document.querySelector("body").classList.toggle("menu-opened");
    };

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
            
        menuBtnRef.classList.toggle("is-open");
        document.querySelector('body').classList.toggle("menu-opened");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        toggleMenu();
    });

    closeMenuBtn.addEventListener("click", toggleMenu);
})();
