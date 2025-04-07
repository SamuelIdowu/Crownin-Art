// // Define an array of image objects with paths relative to the HTML file's location
// const carauselimages = [
//     { src: "../images/FB_IMG_1.jpg", alt: "First Image" },
//     { src: "../images/FB_IMG_2.jpg", alt: "Second Image" },
//     { src: "../images/FB_IMG_3.jpg", alt: "Third Image" },
//     { src: "../images/FB_IMG_4.jpg", alt: "Fourth Image" },
//     { src: "../images/FB_IMG_5.jpg", alt: "Fifth Image" },
//     { src: "../images/FB_IMG_6.jpg", alt: "Sixth Image" },
//     { src: "../images/FB_IMG_7.jpg", alt: "Seventh Image" },
//   ];

//   // Preload carousel images
//   function preloadImages(images) {
//     images.forEach((image) => {
//       const img = new Image();
//       img.src = image.src;
//     });
//   }

//   // Function to update the image with a fade effect
//   function updateImage(index) {
//     const imgElement = document.getElementById("imgg");

//     imgElement.classList.add("fade-out");
//     setTimeout(() => {
//       imgElement.src = carauselimages[index].src;
//       imgElement.alt = carauselimages[index].alt;
//       imgElement.classList.remove("fade-out");
//     }, 1000);
//   }

//   // Set the initial image when the page loads
//   document.addEventListener("DOMContentLoaded", () => {
//     preloadImages(carauselimages);
//     updateImage(0);
//   });

//   // Change image every 5 seconds
//   let currentIndex = 0;
//   setInterval(() => {
//     currentIndex = (currentIndex + 1) % carauselimages.length;
//     updateImage(currentIndex);
//   }, 5000);










// Remove the hardcoded carauselimages array

document.addEventListener("DOMContentLoaded", () => {
  const galleryData = document.getElementById("gallery-data");
  if (!galleryData) {
    console.error("Gallery data element not found");
    return;
  }

  const images = JSON.parse(galleryData.textContent);
  if (!images || images.length === 0) {
    console.error("No images found for the carousel.");
    return;
  }

  const imgElement = document.getElementById("imgg");
  if (!imgElement) {
    console.error("Image element not found");
    return;
  }

  // Set initial image
  imgElement.src = images[0].src;
  imgElement.alt = images[0].alt;

  let currentIndex = 0;
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.classList.add("fade-out");
    
    setTimeout(() => {
      imgElement.src = images[currentIndex].src;
      imgElement.alt = images[currentIndex].alt;
      imgElement.classList.remove("fade-out");
    }, 1000);
  }, 5000);
});