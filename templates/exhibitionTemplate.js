// Data for the exhibitions
const exhibitions = [
  {
    videoSrc: "videos/VID3.mp4",
    title: "Art Through the Ages",
    description:
      "Explore the evolution of art through various ages, capturing the essence of creativity and expression   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam unde doloribus veritatis maiores blanditiis tenetur obcaecati ipsam, ipsa molestiae debitis distinctio deserunt perferendis ratione, quod, cumque quidem animi in quisquam",
  },
  {
    videoSrc: "videos/VID2.mp4",
    title: "Modern Art Movements",
    description:
      "Delve into the bold and daring world of modern art, breaking boundaries and challenging norms    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam unde doloribus veritatis maiores blanditiis tenetur obcaecati ipsam, ipsa molestiae debitis distinctio deserunt perferendis ratione, quod, cumque quidem animi in quisquam.",
  },
  {
    videoSrc: "videos/VID1.mp4",
    title: "Nature in Art",
    description:
      "Discover how nature has been a timeless muse for artists across generations    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam unde doloribus veritatis maiores blanditiis tenetur obcaecati ipsam, ipsa molestiae debitis distinctio deserunt perferendis ratione, quod, cumque quidem animi in quisquam",
  },
];

// Reference to the exhibitions container
const exhibitionsContainer = document.querySelector(".exhibitions");

// Function to create a single exhibition component
function createExhibitionComponent(exhibition) {
  const component = document.createElement("div");
  component.classList.add("component");

  component.innerHTML = `
    <div class="video">
      <video controls>
        <source src="${exhibition.videoSrc}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="details">
      <h2>${exhibition.title}</h2>
      <p>${exhibition.description}</p>
    </div>
  `;

  return component;
}

// Render all exhibition components dynamically
exhibitions.forEach((exhibition) => {
  const exhibitionComponent = createExhibitionComponent(exhibition);
  exhibitionsContainer.appendChild(exhibitionComponent);
});
