document.addEventListener("DOMContentLoaded", () => {
  // Array of image objects

  const images = [
    { src: "images/FB_IMG_1.jpg", alt: "First Image" },
    { src: "images/FB_IMG_2.jpg", alt: "Second Image" },
    { src: "images/FB_IMG_3.jpg", alt: "Third Image" },
    { src: "images/FB_IMG_4.jpg", alt: "Fourth Image" },
    { src: "images/FB_IMG_5.jpg", alt: "Fifth Image" },
    { src: "images/FB_IMG_7.jpg", alt: "Seventh Image" },
    { src: "images/FB_IMG_6.jpg", alt: "Sixth Image" },
  ];

  // Select the gallery container and the template image
  const galleryContainer = document.getElementById("imageGallery");
  const templateImg = document.getElementById("templateImg");

  // Iterate over the images array and create image elements
  images.forEach((image) => {
    const newImg = templateImg.cloneNode(true); // Clone the template image
    newImg.src = image.src; // Set the image source
    newImg.alt = image.alt; // Set the image alt text
    newImg.style.display = "block"; // Make the image visible
    galleryContainer.appendChild(newImg); // Append the image to the gallery
  });

  alert("hello")
});





