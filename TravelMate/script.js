// Elements
const signInDiv = document.getElementById('sign-in');
const greetingDiv = document.getElementById('greeting');
const mainContentDiv = document.getElementById('main-content');
const userNameInput = document.getElementById('user-name');
const startButton = document.getElementById('start-button');
const greetingMessage = document.getElementById('greeting-message');
const proceedButton = document.getElementById('proceed-button');
const municipalityList = document.getElementById('municipality-list');
const infoSection = document.getElementById('info-section');
const backButton = document.getElementById('back-button');
const municipalityName = document.getElementById('municipality-name');
const touristSpotsList = document.getElementById('tourist-spots-list');
const hotelsList = document.getElementById('hotels-list');
const restaurantsList = document.getElementById('restaurants-list');

const data = {
  "Adams": {
    touristSpots: ["Anuplig Falls", "Sagad Crystal Spring"],
    hotels: ["Adams Homestay", "Mountain Ridge Inn"],
    restaurants: ["Adams Café"],
    image: "images/adams.jpg"
  },
  "Bacarra": {
    touristSpots: ["Bacarra Church", "Bacarra Bell Tower"],
    hotels: ["Bacarra Lodge", "Villa Bacarra"],
    restaurants: ["Bacarra Bistro"],
    image: "images/bacarra.jpg"
  },
  "Badoc": {
    touristSpots: ["Juan Luna Shrine", "La Virgen Milagrosa Cove"],
    hotels: ["Badoc Beach Resort", "Luna's Resthouse"],
    restaurants: ["Badoc Grill"],
    image: "images/badoc.jpg"
  },
  "Bangui": {
    touristSpots: ["Bangui Windmills", "Bangui View Deck"],
    hotels: ["Bangui Inn", "Windmill Hotel"],
    restaurants: ["Bangui Resto"],
    image: "images/bangui.jpg"
  },
  "Banna": {
    touristSpots: ["Banna Bamboo Grove", "Imelda Park"],
    hotels: ["Banna Staycation", "Imelda's Lodge"],
    restaurants: ["Banna Eats"],
    image: "images/banna.jpg"
  },
  "Batac": {
    touristSpots: ["Marcos Museum", "Empanada Park"],
    hotels: ["Batac Plaza Hotel", "Marcos Inn"],
    restaurants: ["Batac Empanada House"],
    image: "images/batac.jpg"
  },
  "Burgos": {
    touristSpots: ["Kapurpurawan Rock", "Cape Bojeador Lighthouse"],
    hotels: ["Lighthouse Inn", "Rocky Shores Hotel"],
    restaurants: ["Burgos Lighthouse Café"],
    image: "images/burgos.jpg"
  },
  "Carasi": {
    touristSpots: ["Immagamang Falls", "Carasi Green Valley"],
    hotels: ["Carasi Hideaway", "Green Valley Lodge"],
    restaurants: ["Carasi Deli"],
    image: "images/carasi.jpg"
  },
  "Currimao": {
    touristSpots: ["Currimao Beach", "Paoay Sand Dunes"],
    hotels: ["Currimao Beach Resort", "Sand Dunes Lodge"],
    restaurants: ["Currimao Seafood Grill"],
    image: "images/currimao.jpg"
  },
  "Dingras": {
    touristSpots: ["Dingras Church Ruins", "Dingras Dam"],
    hotels: ["Dingras Bed & Breakfast", "Ruins Hotel"],
    restaurants: ["Dingras Grill"],
    image: "images/dingras.jpg"
  },
  "Dumalneg": {
    touristSpots: ["Mount Masadsad", "Dumalneg River"],
    hotels: ["Dumalneg Cabin", "Masadsad Inn"],
    restaurants: ["Dumalneg Café"],
    image: "images/dumalneg.jpg"
  },
 "Laoag": {
  touristSpots: [
    { name: "La Paz Sand Dunes", image: "img/La.jpg", img: "img/sLa.png" },
    { name: "Aurora Park", image: "img/park.jpg", img: "img/sPark.png" },
    { name: "Sinking Bell Tower", image: "img/Bell.jpg", img: "img/sBell.png" },
    { name: "Saint William the Hermit Cathedral", image: "img/Saint.jpg", img: "img/sSaint.png" },
    { name: "Museo Ilocos Norte", image: "img/Museo.jpg", img: "img/sMuseo.png" }
  ],
  hotels: [
    { Name: "Java Hotel", Image: "img/Java.jpg", Img: "img/sJava.png" },
    { Name: "Fort Ilocandia", Image: "img/Fort.jpg", Img: "img/sFort.png" },
    { Name: "Hotel Lourdes", Image: "img/Hotel.jpg", Img: "img/sHotel.png" },
    { Name: "Sienna's Flat and Transient House", Image: "img/Sienna's.jpg", Img: "img/sSienna's.png" },
  ],
  restaurants: [
    { Name: "Ati-atihan", Image: "img/Ati.jpg", Img: "img/sAti.png" },
    { Name: "Cafe Ilocandia", Image: "img/Cafe.jpg", Img: "img/sCafe.png" },
    { Name: "Food Cartel", Image: "img/Food.jpg", Img: "img/sFood.png" }
  ],
  image: "img/download.jpg"
},

  "Marcos": {
    touristSpots: ["Marcos Museum", "Marcos Park"],
    hotels: ["Marcos Lodge", "Heritage Stay"],
    restaurants: ["Marcos Heritage Café"],
    image: "images/marcos.jpg"
  },
  "Nueva Era": {
    touristSpots: ["Nueva Era Eco Park", "Nueva Era Museum"],
    hotels: ["Eco Stay Nueva Era", "Nature's Nest"],
    restaurants: ["Nueva Era Grill"],
    image: "images/nueva_era.jpg"
  },
  "Pagudpud": {
    touristSpots: ["Blue Lagoon", "Kabigan Falls"],
    hotels: ["Pagudpud Blue Lagoon Resort", "Kabigan Inn"],
    restaurants: ["Pagudpud Resto"],
    image: "images/pagudpud.jpg"
  },
  "Paoay": {
    touristSpots: ["Paoay Church", "Malacañang of the North"],
    hotels: ["Paoay Haven", "Heritage Inn"],
    restaurants: ["Paoay Bistro"],
    image: "images/paoay.jpg"
  },
  "Pasuquin": {
    touristSpots: ["Salt-Making Fields", "Pasuquin Beach"],
    hotels: ["Salt Haven Inn", "Beachfront Lodge"],
    restaurants: ["Pasuquin Café"],
    image: "images/pasuquin.jpg"
  },
  "Piddig": {
    touristSpots: ["Piddig Church", "Anuplig Falls"],
    hotels: ["Piddig Lodge", "Nature's Stay"],
    restaurants: ["Piddig Resto"],
    image: "images/piddig.jpg"
  },
  "Pinili": {
    touristSpots: ["Pinili Shrine", "Pasuquin Hills"],
    hotels: ["Pinili Lodge", "Shrine Stay"],
    restaurants: ["Pinili Eats"],
    image: "images/pinili.jpg"
  },
  "San Nicolas": {
    touristSpots: ["San Nicolas Church", "Valdes Town Plaza"],
    hotels: ["San Nicolas Hotel", "Town Plaza Inn"],
    restaurants: ["San Nicolas Bistro"],
    image: "images/san_nicolas.jpg"
  },
  "Sarrat": {
    touristSpots: ["Sarrat Church", "Sarrat River"],
    hotels: ["Sarrat Lodge", "Riverside Stay"],
    restaurants: ["Sarrat Café"],
    image: "images/sarrat.jpg"
  },
  "Solsona": {
    touristSpots: ["Solsona-Apayao Road", "Solsona Peaks"],
    hotels: ["Solsona Inn", "Peak Lodge"],
    restaurants: ["Solsona Grill"],
    image: "images/solsona.jpg"
  },
  "Vintar": {
    touristSpots: ["Vintar Dam", "Mount Vintar"],
    hotels: ["Vintar Stay", "Dam View Inn"],
    restaurants: ["Vintar Eats"],
    image: "images/vintar.jpg"
  }
};

function showDetails(municipality) {
  const { touristSpots, hotels, restaurants, image } = data[municipality];
  municipalityName.textContent = municipality;

  // Display tourist spots with images
  touristSpotsList.innerHTML = touristSpots
    .map(spot => `
      <li>
        <div>
          <img src="${spot.image}" alt="${spot.name}" style="width: 400px; height: 400px; object-fit: cover;">
          <img src="${spot.img}" alt="${spot.name}" style="width: 400px; height: 400px; object-fit: cover;">
          <span>${spot.name}</span>
        </div>
      </li>`)
    .join('');

  // Display hotels with images
  hotelsList.innerHTML = hotels
    .map(spot => `
      <li>
        <div>
          <img src="${spot.Image}" alt="${spot.Name}" style="width: 400px; height: 400px; object-fit: cover;">
          <img src="${spot.Img}" alt="${spot.Name}" style="width: 400px; height: 400px; object-fit: cover;">
          <span>${spot.Name}</span>
        </div>
      </li>`)
    .join('');

  // Display restaurants with images
  restaurantsList.innerHTML = restaurants
    .map(spot => `
      <li>
        <div>
          <img src="${spot.Image}" alt="${spot.Name}" style="width: 400px; height: 400px; object-fit: cover;">
          <img src="${spot.Img}" alt="${spot.Name}" style="width: 400px; height: 400px; object-fit: cover;">
          <span>${spot.Name}</span>
        </div>
      </li>`)
    .join('');

  // Municipality image
  const imageElement = document.createElement('img');
  imageElement.src = image;
  imageElement.alt = `${municipality} image`;
  imageElement.style.width = "50%";

  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = '';
  imageContainer.appendChild(imageElement);

  // Show the details section
  municipalityList.style.display = 'none';
  infoSection.style.display = 'block';
}









// Handle Start Button
startButton.addEventListener('click', () => {
  const userName = userNameInput.value.trim();
  if (userName) {
    signInDiv.style.display = 'none';
    greetingDiv.style.display = 'flex';
    greetingMessage.textContent = `Good day, ${userName}! Ready to make TravelMate the ultimate Ilocos Norte guide?`;
  } else {
    alert("Please enter your name to continue!");
  }
});

// Handle Proceed Button
proceedButton.addEventListener('click', () => {
  greetingDiv.style.display = 'none';
  mainContentDiv.style.display = 'flex';
  generateMunicipalityList();
});

// Generate Municipality List
function generateMunicipalityList() {
  municipalityList.innerHTML = ''; // Clear existing list
  for (const municipality in data) {
    const li = document.createElement('li');
    li.textContent = municipality;
    li.onclick = () => showDetails(municipality);
    municipalityList.appendChild(li);
  }
}



// Back Button to Municipality List
backButton.onclick = () => {
  infoSection.style.display = 'none';
  municipalityList.style.display = 'grid';
};
