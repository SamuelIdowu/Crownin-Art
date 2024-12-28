//Catalogue and listing

// Array of artwork objects
const artworks = [
  {
    imageUrl: "images/FB_IMG_1.jpg",
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    date: "1889",
    medium: "Oil on canvas",
    dimensions: "73.7 cm × 92.1 cm (29.0 in × 36.3 in)",
    price: "$100,000,000",
    description:
      "The Starry Night is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an idealized village."
  },
  {
    imageUrl: "images/FB_IMG_2.jpg",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    date: "1503–1506",
    medium: "Oil on poplar panel",
    dimensions: "77 cm × 53 cm (30 in × 21 in)",
    price: "Priceless",
    description:
      "The Mona Lisa is a portrait painting by Italian artist Leonardo da Vinci, famous for the subject's enigmatic expression, the atmospheric landscape background, and the subtle modeling of forms."
  }
];

// Reference to the gallery container
const artContainer = document.getElementById("art-gallery");

// Function to create an art component
function createArtComponent(art) {
  const artElement = document.createElement("div");
  artElement.classList.add("art-description");

  artElement.innerHTML = `
    <img src="${art.imageUrl}" alt="Artwork" class="art-image" />
    <div class="art-details">
      <h1 class="art-title">TITLE : ${art.title}</h1>
      <p class="art-artist">ARTIST : ${art.artist}</p>
      <p class="art-date">DATE : ${art.date}</p>
      <p class="art-medium">MEDIUM : ${art.medium}</p>
      <p class="art-dimensions">DIMENSIONS : ${art.dimensions}</p>
      <p class="art-price">PRICE : ${art.price}</p>
      <p class="description">DESCRIPTION : ${art.description}</p>
    </div>
  `;

  return artElement;
}

// Populate the gallery with all artworks
artworks.forEach((art) => {
  const artComponent = createArtComponent(art);
  artContainer.appendChild(artComponent); // Fixed variable reference
});