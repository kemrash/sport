(() => {
  function setAttributeBtnText(button) {
    button.setAttribute("data-text", button.textContent.trim());
    button.textContent = "";
  }

  function removeBtnText(button) {
    if (button.textContent.trim() === "" && button.hasAttribute("data-text")) {
      button.textContent = button.getAttribute("data-text");
      button.removeAttribute("data-text");
    }
  }

  function updateButtonText() {
    const menuButton = document.querySelector(".btn_menu");
    const loginButton = document.querySelector(".btn_login");

    if (window.matchMedia("(max-width: 640px)").matches) {
      if (menuButton.textContent.trim() !== "") {
        setAttributeBtnText(menuButton);
      }
      if (loginButton.textContent.trim() !== "") {
        setAttributeBtnText(loginButton);
      }
    } else {
      removeBtnText(menuButton);
      removeBtnText(loginButton);
    }
  }

  updateButtonText();

  window.addEventListener("resize", updateButtonText);
})();
