document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  // Sample data
  const artworks = [
    {
      id: 1,
      image: "../public/images/FB_IMG_1.jpg",
      title: "The Starry Night",
      artist: "Vincent van Gogh",
      price: "$100",
    },
    {
      id: 2,
      image: "../public/images/FB_IMG_2.jpg",
      title: "Mona Lisa",
      artist: "Leonardo da Vinci",
      price: "$100",
    },
  ];

  const exhibitions = [
    {
      id: 1,
      image: "../public/images/FB_IMG_7.jpg",
      title: "Art Through the Ages",
      description: "Explore the evolution of art through various ages...",
    },
  ];

  const galleryImages = [
    { id: 1, image: "../public/images/FB_IMG_3.jpg", alt: "Gallery Image 1" },
    { id: 2, image: "../public/images/FB_IMG_4.jpg", alt: "Gallery Image 2" },
    { id: 3, image: "../public/images/FB_IMG_5.jpg", alt: "Gallery Image 3" },
    { id: 4, image: "../public/images/FB_IMG_6.jpg", alt: "Gallery Image 4" },
  ];

  // Tab switching functionality
  tabLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const tabId = this.getAttribute("data-tab");

      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      tabLinks.forEach((link) => {
        link.classList.remove("active");
      });

      document.getElementById(tabId).classList.add("active");
      this.classList.add("active");
    });
  });

  // Render artworks
  function renderArtworks() {
    const tableBody = document.getElementById("artworks-table-body");
    tableBody.innerHTML = "";

    artworks.forEach((artwork) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td><img src="${artwork.image}" alt="${artwork.title}"></td>
                <td>${artwork.title}</td>
                <td>${artwork.artist}</td>
                <td>${artwork.price}</td>
                <td>
                    <button class="action-btn edit-btn" data-id="${artwork.id}">Edit</button>
                    <button class="action-btn delete-btn" data-id="${artwork.id}">Delete</button>
                </td>
            `;
      tableBody.appendChild(row);
    });
  }

  // Render exhibitions
  function renderExhibitions() {
    const tableBody = document.getElementById("exhibitions-table-body");
    tableBody.innerHTML = "";

    exhibitions.forEach((exhibition) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td><img src="${exhibition.image}" alt="${exhibition.title}"></td>
                <td>${exhibition.title}</td>
                <td>${exhibition.description}</td>
                <td>
                    <button class="action-btn edit-btn" data-id="${exhibition.id}">Edit</button>
                    <button class="action-btn delete-btn" data-id="${exhibition.id}">Delete</button>
                </td>
            `;
      tableBody.appendChild(row);
    });
  }

  // Render gallery
  function renderGallery() {
    const galleryGrid = document.getElementById("gallery-grid");
    galleryGrid.innerHTML = "";

    galleryImages.forEach((image) => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      galleryItem.innerHTML = `
                <img src="${image.image}" alt="${image.alt}">
                <div class="overlay">
                    <button class="action-btn edit-btn" data-id="${image.id}">Edit</button>
                    <button class="action-btn delete-btn" data-id="${image.id}">Delete</button>
                </div>
            `;
      galleryGrid.appendChild(galleryItem);
    });
  }

  // Initial render
  renderArtworks();
  renderExhibitions();
  renderGallery();

  // Add event listeners for add buttons
  document.getElementById("add-artwork").addEventListener("click", function () {
    alert("Add artwork functionality to be implemented");
    window.location.href = "../admin/post.html";
  });

  document
    .getElementById("add-exhibition")
    .addEventListener("click", function () {
      alert("Add exhibition functionality to be implemented");
      window.location.href = "../admin/post.html";
    });

  document.getElementById("add-image").addEventListener("click", function () {
    alert("Add image functionality to be implemented");
    window.location.href = "../admin/post.html";
  });

  // Add event listeners for edit and delete buttons
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-btn")) {
      const id = e.target.getAttribute("data-id");
      alert(`Edit functionality to be implemented for item with ID: ${id}`);
    } else if (e.target.classList.contains("delete-btn")) {
      const id = e.target.getAttribute("data-id");
      alert(`Delete functionality to be implemented for item with ID: ${id}`);
    }
  });
});
