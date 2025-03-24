

//news letter
// document.getElementById('newsletterForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const email = document.getElementById('newsletterEmail').value;

//     // Here you would typically send the email to your server for newsletter signup
//     console.log('Newsletter signup:', email);

//     // Show success message
//     alert('Thank you for subscribing to our newsletter!');

//     // Reset form
//     this.reset();
// });

// About
document.addEventListener("DOMContentLoaded", () => {
  const workLink = document.querySelector(".menu .active");
  workLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Dropdown functionality would go here");
  });

  const backLink = document.querySelector(".back-link");
  backLink.addEventListener("click", (e) => {
    e.preventDefault();
    // Simulating going back in history
    console.log("Going back to all templates");
  });
});

// Post

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("vaccination-form");
  const dropZone = document.getElementById("drop-zone");
  const fileInput = document.getElementById("file-input");
  const fileList = document.getElementById("file-list");
  const browseBtn = document.querySelector(".browse-btn");

  // Handle drag and drop events
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ["dragenter", "dragover"].forEach((eventName) => {
    dropZone.addEventListener(eventName, highlight, false);
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, unhighlight, false);
  });

  function highlight() {
    dropZone.classList.add("dragover");
  }

  function unhighlight() {
    dropZone.classList.remove("dragover");
  }

  // Handle dropped files
  dropZone.addEventListener("drop", handleDrop, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
  }

  // Handle file input change
  fileInput.addEventListener("change", function () {
    handleFiles(this.files);
  });

  // Click browse button to trigger file input
  browseBtn.addEventListener("click", () => {
    fileInput.click();
  });

  function handleFiles(files) {
    fileList.innerHTML = ""; // Clear existing list
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const fileItem = document.createElement("div");
        fileItem.className = "file-item";

        const fileName = document.createElement("span");
        fileName.textContent = file.name;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "×";
        removeBtn.onclick = () => fileItem.remove();

        fileItem.appendChild(fileName);
        fileItem.appendChild(removeBtn);
        fileList.appendChild(fileItem);
      }
    });
  }

  // Phone number formatting
  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function (e) {
    let x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });

  // Form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("Form submitted!");
    const formData = new FormData(form);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Show success message or handle response
    alert("Form submitted successfully!");
    form.reset();
    fileList.innerHTML = "";
  });
});

// Function to handle file input and drop events
function setupFileUpload(dropZoneId, fileInputId, browseBtnId, fileListId) {
  const dropZone = document.getElementById(dropZoneId);
  const fileInput = document.getElementById(fileInputId);
  const browseBtn = document.getElementById(browseBtnId);
  const fileList = document.getElementById(fileListId);

  dropZone.addEventListener("drop", handleDrop, false);

  function handleDrop(e) {
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
  }

  // Handle file input change
  fileInput.addEventListener("change", function () {
    handleFiles(this.files);
  });

  // Click browse button to trigger file input
  browseBtn.addEventListener("click", () => {
    fileInput.click();
  });

  function handleFiles(files) {
    fileList.innerHTML = ""; // Clear existing list
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        const fileItem = document.createElement("div");
        fileItem.className = "file-item";

        const fileName = document.createElement("span");
        fileName.textContent = file.name;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "×";
        removeBtn.onclick = () => fileItem.remove();

        fileItem.appendChild(fileName);
        fileItem.appendChild(removeBtn);
        fileList.appendChild(fileItem);
      }
    });
  }

  // Prevent default drag behaviors
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
}

// Set up file upload for each form
setupFileUpload(
  "catalogue-drop-zone",
  "catalogue-file-input",
  "catalogue-browse-btn",
  "catalogue-file-list"
);
setupFileUpload(
  "listing-drop-zone",
  "listing-file-input",
  "listing-browse-btn",
  "listing-file-list"
);
setupFileUpload(
  "gallery-drop-zone",
  "gallery-file-input",
  "gallery-browse-btn",
  "gallery-file-list"
);
setupFileUpload(
  "exhibition-drop-zone",
  "exhibition-file-input",
  "exhibition-browse-btn",
  "exhibition-file-list"
);

// Phone number formatting
const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", function (e) {
  let x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2]
    ? x[1]
    : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
});

// Form submission
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("Form submitted!");
  const formData = new FormData(form);
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});
