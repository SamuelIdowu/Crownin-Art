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

// Function to preload images remains the same
function preloadImages(images) {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }
  
  // Modified updateImage function to use dynamic images
  function updateImage(index, images) {
    const imgElement = document.getElementById("imgg");
    
    imgElement.classList.add("fade-out");
    setTimeout(() => {
      imgElement.src = images[index].src;
      imgElement.alt = images[index].alt;
      imgElement.classList.remove("fade-out");
    }, 1000);
  }
  
  // Initialize when page loads
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      // Fetch images from your API endpoint
      const response = await fetch('/api/gallery');
      const galleryItems = await response.json();

      const carouselImages = galleryItems.map(item => ({
        src: item.imagePath, 
        alt: item.description || "Gallery Image"
      }));
  
      preloadImages(carouselImages);
      
      updateImage(0, carouselImages);
  
      let currentIndex = 0;
      setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        updateImage(currentIndex, carouselImages);
      }, 5000);
  
    } catch (error) {
      console.error('Error loading gallery:', error);
    }
  });