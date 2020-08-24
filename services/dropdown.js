export class Dropdown {
  constructor() {

    const dropdowns = document.querySelectorAll(".sidebar-dropdown > a");
    const closeSidebar = document.querySelector("#close-sidebar");
    const showSidebar = document.querySelector("#show-sidebar");

    dropdowns.forEach(item => {
      item.addEventListener('click', this.handleClick.bind(this, item))
    });

    closeSidebar.addEventListener('click', () => document.querySelector(".page-wrapper").classList.remove('toggled'))
    showSidebar.addEventListener('click', () => document.querySelector(".page-wrapper").classList.add('toggled'))
  }

  handleClick(item) {
    this.slideUp();
    if (item.parentNode.classList.contains("active")) {
      const active = document.querySelector(".sidebar-dropdown.active");
      if (active) {
        active.classList.remove("active");
      }
    } else {
      const active = document.querySelector(".sidebar-dropdown.active");
      if (active) {
        active.classList.remove("active");
      }
      item.nextElementSibling.style.display = 'block'
      item.parentNode.classList.add("active");
    }
  }

  slideUp() {
    const subMenu = document.querySelectorAll(".sidebar-submenu");
    subMenu.forEach(item => (item.style.display = 'none'))
  }
}
