document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-drop-down-button]");
  if (!isDropdownButton && e.target.closest("[data-drop-down]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-drop-down]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-drop-down].active").forEach((dropdown) => {
    if (dropdown == currentDropdown) return;
    dropdown.classList.remnove("active");
  });
});
