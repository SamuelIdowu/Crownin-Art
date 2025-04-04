// Get the current page URL
const currentPage = window.location.pathname;

// Select all navigation links
const links = document.querySelectorAll("a");

const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.getElementById("sidebar");
const overlay = document.createElement("div");

// Add the active class to the matching link
links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// alert(currentPage);


// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  sidebar.classList.toggle('visible');

  menuIcon.classList.toggle('open');
  
  // Add slide-out animation
  if (sidebar.classList.contains('hidden')) {
    sidebar.style.animation = 'slideOut 0.5s forwards';
  } else {
    sidebar.style.animation = 'slideIn 0.5s forwards';
  }
});
