const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    console.log("menu clicked");
    navClose.classList.remove("hide");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    console.log("close clicked");
    navClose.classList.add("hide");
  });
}
const navLink = document.querySelectorAll(".nav__link");
function Action() {
  navMenu.classList.remove("show-menu");
  navClose.classList.add("hide");
}
navLink.forEach((n) => {
  n.addEventListener("click", Action);
});

const headers = document.querySelectorAll(".skills__header");
const containers = document.getElementsByClassName("skills__content");

function toggleSkill() {
  const parentContainer = this.parentNode;
  const isOpen = parentContainer.classList.contains("open");

  // Close all containers
  for (let i = 0; i < containers.length; i++) {
    containers[i].classList.add("close");
    containers[i].classList.remove("open");
    console.log("closing all");
  }

  // If the clicked container was closed, open it
  if (!isOpen) {
    parentContainer.classList.remove("close");
    parentContainer.classList.add("open");
    console.log("toggling open");
  }
}

headers.forEach((header) => {
  header.addEventListener("click", toggleSkill);
});

const tabs = document.querySelectorAll("[data-target]"),
  tabCont = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const ele = document.querySelector(tab.dataset.target);
    tabCont.forEach((tabContent) => {
      tabContent.classList.remove("qactive");
    });

    ele.classList.add("qactive");
    tabs.forEach((tab) => {
      tab.classList.remove("qactive");
    });
    tab.classList.add("qactive");
  });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
