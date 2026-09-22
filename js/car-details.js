/* =========================================================
   CARIVO - CAR DETAILS
   File: js/car-details.js
========================================================= */

"use strict";


/* =========================================================
   CONFIGURATION
========================================================= */

const LOGIN_PAGE = "login.html";


/* =========================================================
   CAR DATABASE
========================================================= */

const cars = [

    {
        id: "i20",
        brand: "Hyundai",
        model: "i20",
        name: "Hyundai i20 Asta",
        subtitle: "A stylish premium hatchback for everyday driving",
        price: 725000,
        rating: 4.6,
        reviews: 245,
        year: 2022,
        fuel: "Petrol",
        km: 32000,
        owner: "1st Owner",
        transmission: "Manual",
        location: "Bangalore",
        registration: "KA-01",
        engine: "1197 cc",
        power: "82 bhp",
        color: "White",
        inspection: 92,

        images: [
            "images/cars/i20-1.webp",
            "images/cars/i20-2.webp",
            "images/cars/i20-3.webp",
            "images/cars/i20-4.webp",
            "images/cars/i20-5.webp"
        ],

        features: [
            "Sunroof",
            "Touchscreen Infotainment",
            "Android Auto",
            "Apple CarPlay",
            "Rear Camera",
            "Automatic Climate Control",
            "Cruise Control",
            "Push Button Start"
        ]
    },


    {
        id: "city",
        brand: "Honda",
        model: "City",
        name: "Honda City V",
        subtitle: "Premium sedan with excellent comfort and performance",
        price: 950000,
        rating: 4.7,
        reviews: 189,
        year: 2021,
        fuel: "Petrol",
        km: 28000,
        owner: "1st Owner",
        transmission: "Automatic",
        location: "Bangalore",
        registration: "KA-03",
        engine: "1498 cc",
        power: "119 bhp",
        color: "Silver",
        inspection: 94,

        images: [
            "images/cars/city-1.webp",
            "images/cars/city-2.webp",
            "images/cars/city-3.webp",
            "images/cars/city-4.webp",
            "images/cars/city-5.webp"
        ],

        features: [
            "Sunroof",
            "Leather Seats",
            "Touchscreen Infotainment",
            "Rear Camera",
            "Cruise Control",
            "Automatic Climate Control",
            "Push Button Start",
            "Alloy Wheels"
        ]
    },


    {
        id: "brezza",
        brand: "Maruti Suzuki",
        model: "Brezza",
        name: "Maruti Brezza ZXi",
        subtitle: "Practical SUV with great mileage and comfort",
        price: 810000,
        rating: 4.5,
        reviews: 176,
        year: 2022,
        fuel: "Petrol",
        km: 26000,
        owner: "1st Owner",
        transmission: "Manual",
        location: "Bangalore",
        registration: "KA-05",
        engine: "1462 cc",
        power: "103 bhp",
        color: "Blue",
        inspection: 91,

        images: [
            "images/cars/brezza-1.webp",
            "images/cars/brezza-2.webp",
            "images/cars/brezza-3.webp",
            "images/cars/brezza-4.webp",
            "images/cars/brezza-5.webp"
        ],

        features: [
            "Touchscreen Infotainment",
            "Android Auto",
            "Apple CarPlay",
            "Rear Camera",
            "Cruise Control",
            "Automatic Climate Control",
            "Alloy Wheels",
            "Keyless Entry"
        ]
    },


    {
        id: "nexon",
        brand: "Tata",
        model: "Nexon",
        name: "Tata Nexon XZ+",
        subtitle: "Strong and feature-rich compact SUV",
        price: 875000,
        rating: 4.6,
        reviews: 212,
        year: 2022,
        fuel: "Diesel",
        km: 31000,
        owner: "1st Owner",
        transmission: "Manual",
        location: "Bangalore",
        registration: "KA-04",
        engine: "1497 cc",
        power: "113 bhp",
        color: "Grey",
        inspection: 93,

        images: [
            "images/cars/nexon-1.webp",
            "images/cars/nexon-2.webp",
            "images/cars/nexon-3.webp",
            "images/cars/nexon-4.webp",
            "images/cars/nexon-5.webp"
        ],

        features: [
            "Touchscreen Infotainment",
            "Android Auto",
            "Apple CarPlay",
            "Rear Camera",
            "Cruise Control",
            "Automatic Climate Control",
            "Rain Sensing Wipers",
            "Alloy Wheels"
        ]
    },


    {
        id: "sonet",
        brand: "Kia",
        model: "Sonet",
        name: "Kia Sonet HTK+",
        subtitle: "Compact SUV with modern features",
        price: 795000,
        rating: 4.5,
        reviews: 165,
        year: 2022,
        fuel: "Petrol",
        km: 29000,
        owner: "1st Owner",
        transmission: "Automatic",
        location: "Bangalore",
        registration: "KA-01",
        engine: "1197 cc",
        power: "118 bhp",
        color: "Red",
        inspection: 90,

        images: [
            "images/cars/sonet-1.webp",
            "images/cars/sonet-2.webp",
            "images/cars/sonet-3.webp",
            "images/cars/sonet-4.webp",
            "images/cars/sonet-5.webp"
        ],

        features: [
            "Touchscreen Infotainment",
            "Android Auto",
            "Apple CarPlay",
            "Rear Camera",
            "Wireless Charging",
            "Automatic Climate Control",
            "Cruise Control",
            "Alloy Wheels"
        ]
    },


    {
        id: "creta",
        brand: "Hyundai",
        model: "Creta",
        name: "Hyundai Creta SX",
        subtitle: "Premium SUV offering comfort and performance",
        price: 1120000,
        rating: 4.7,
        reviews: 198,
        year: 2022,
        fuel: "Petrol",
        km: 24000,
        owner: "1st Owner",
        transmission: "Automatic",
        location: "Bangalore",
        registration: "KA-02",
        engine: "1497 cc",
        power: "113 bhp",
        color: "Black",
        inspection: 95,

        images: [
            "images/cars/creta-1.webp",
            "images/cars/creta-2.webp",
            "images/cars/creta-3.webp",
            "images/cars/creta-4.webp",
            "images/cars/creta-5.webp"
        ],

        features: [
            "Panoramic Sunroof",
            "Leather Seats",
            "Touchscreen Infotainment",
            "360 Degree Camera",
            "Cruise Control",
            "Automatic Climate Control",
            "Wireless Charging",
            "Alloy Wheels"
        ]
    },


    {
        id: "punch",
        brand: "Tata",
        model: "Punch",
        name: "Tata Punch Accomplished",
        subtitle: "Compact SUV designed for city adventures",
        price: 710000,
        rating: 4.5,
        reviews: 154,
        year: 2023,
        fuel: "Petrol",
        km: 18000,
        owner: "1st Owner",
        transmission: "Manual",
        location: "Bangalore",
        registration: "KA-02",
        engine: "1199 cc",
        power: "84 bhp",
        color: "White",
        inspection: 93,

        images: [
            "images/cars/punch-1.webp",
            "images/cars/punch-2.webp",
            "images/cars/punch-3.webp",
            "images/cars/punch-4.webp",
            "images/cars/punch-5.webp"
        ],

        features: [
            "Touchscreen Infotainment",
            "Android Auto",
            "Apple CarPlay",
            "Rear Camera",
            "Cruise Control",
            "Automatic Climate Control",
            "Alloy Wheels",
            "Keyless Entry"
        ]
    },


    {
        id: "swift",
        brand: "Maruti Suzuki",
        model: "Swift",
        name: "Maruti Swift ZXi",
        subtitle: "Popular hatchback with excellent city performance",
        price: 685000,
        rating: 4.5,
        reviews: 221,
        year: 2022,
        fuel: "Petrol",
        km: 27000,
        owner: "1st Owner",
        transmission: "Manual",
        location: "Bangalore",
        registration: "KA-03",
        engine: "1197 cc",
        power: "88 bhp",
        color: "Red",
        inspection: 91,

        images: [
            "images/cars/swift-1.webp",
            "images/cars/swift-2.webp",
            "images/cars/swift-3.webp",
            "images/cars/swift-4.webp",
            "images/cars/swift-5.webp"
        ],

        features: [
            "Touchscreen Infotainment",
            "Android Auto",
            "Apple CarPlay",
            "Rear Camera",
            "Keyless Entry",
            "Automatic Climate Control",
            "Alloy Wheels",
            "Steering Controls"
        ]
    },


    {
        id: "glanza",
        brand: "Toyota",
        model: "Glanza",
        name: "Toyota Glanza G",
        subtitle: "Efficient and reliable premium hatchback",
        price: 745000,
        rating: 4.6,
        reviews: 143,
        year: 2022,
        fuel: "Petrol",
        km: 22000,
        owner: "1st Owner",
        transmission: "Manual",
        location: "Bangalore",
        registration: "KA-04",
        engine: "1197 cc",
        power: "88 bhp",
        color: "Blue",
        inspection: 94,

        images: [
            "images/cars/glanza-1.webp",
            "images/cars/glanza-2.webp",
            "images/cars/glanza-3.webp",
            "images/cars/glanza-4.avif",
            //"images/cars/glanza-5.jpg"
        ],

        features: [
            "Touchscreen Infotainment",
            "Android Auto",
            "Apple CarPlay",
            "Rear Camera",
            "Cruise Control",
            "Automatic Climate Control",
            "Alloy Wheels",
            "Keyless Entry"
        ]
    },


    {
        id: "xuv300",
        brand: "Mahindra",
        model: "XUV300",
        name: "Mahindra XUV300 W8",
        subtitle: "Powerful compact SUV with strong road presence",
        price: 920000,
        rating: 4.6,
        reviews: 137,
        year: 2021,
        fuel: "Diesel",
        km: 30000,
        owner: "1st Owner",
        transmission: "Manual",
        location: "Bangalore",
        registration: "KA-05",
        engine: "1497 cc",
        power: "115 bhp",
        color: "Grey",
        inspection: 92,

        images: [
            "images/cars/xuv300-1.avif",
            "images/cars/xuv300-2.webp",
            "images/cars/xuv300-3.webp",
            "images/cars/xuv300-4.webp",
            //"images/cars/xuv300-5.jpg"
        ],

        features: [
            "Touchscreen Infotainment",
            "Android Auto",
            "Apple CarPlay",
            "Sunroof",
            "Rear Camera",
            "Cruise Control",
            "Automatic Climate Control",
            "Alloy Wheels"
        ]
    }

];


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let currentCar = null;
let currentImageIndex = 0;
let fullscreenImageIndex = 0;
let filteredCars = [...cars];


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeModelDropdown();

    renderCarList();

    initializeSearch();

    initializeGallery();

    initializeForms();

    initializeBackButton();

    initializeDetailNavigation();

    initializeMinimumDate();

    initializeURLCar();

});


/* =========================================================
   MODEL DROPDOWN
========================================================= */

function initializeModelDropdown() {

    const modelSelect = document.getElementById("modelSelect");

    if (!modelSelect) {
        return;
    }

    const models = [...new Set(
        cars.map(car => car.model)
    )].sort();

    modelSelect.innerHTML =
        `<option value="">All Models</option>`;

    models.forEach(model => {

        const option = document.createElement("option");

        option.value = model;

        option.textContent = model;

        modelSelect.appendChild(option);

    });
}


/* =========================================================
   SEARCH
========================================================= */

function initializeSearch() {

    const searchInput =
        document.getElementById("carSearchInput");

    const modelSelect =
        document.getElementById("modelSelect");

    const fuelSelect =
        document.getElementById("fuelSelect");

    const searchButton =
        document.getElementById("searchButton");

    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    filterCars();
                }

            }
        );

    }

    if (modelSelect) {

        modelSelect.addEventListener(
            "change",
            filterCars
        );

    }

    if (fuelSelect) {

        fuelSelect.addEventListener(
            "change",
            filterCars
        );

    }

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            filterCars
        );

    }
}


/* =========================================================
   FILTER CARS
========================================================= */

function filterCars() {

    const searchInput =
        document.getElementById("carSearchInput");

    const modelSelect =
        document.getElementById("modelSelect");

    const fuelSelect =
        document.getElementById("fuelSelect");

    const searchText =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";

    const selectedModel =
        modelSelect
            ? modelSelect.value
            : "";

    const selectedFuel =
        fuelSelect
            ? fuelSelect.value
            : "";


    filteredCars = cars.filter(car => {

        const searchableText = [

            car.brand,
            car.model,
            car.name,
            car.subtitle

        ].join(" ").toLowerCase();


        const matchesSearch =
            searchText === "" ||
            searchableText.includes(searchText);


        const matchesModel =
            selectedModel === "" ||
            car.model === selectedModel;


        const matchesFuel =
            selectedFuel === "" ||
            car.fuel === selectedFuel;


        return (
            matchesSearch &&
            matchesModel &&
            matchesFuel
        );

    });


    renderCarList();


    const message =
        document.getElementById(
            "searchResultsMessage"
        );

    if (message) {

        if (
            searchText === "" &&
            selectedModel === "" &&
            selectedFuel === ""
        ) {

            message.textContent =
                "Showing all available cars";

        } else {

            message.textContent =
                `Found ${filteredCars.length} car${
                    filteredCars.length === 1
                        ? ""
                        : "s"
                } matching your search`;

        }

    }
}


/* =========================================================
   CLEAR SEARCH
========================================================= */

function clearCarSearch() {

    const searchInput =
        document.getElementById("carSearchInput");

    const modelSelect =
        document.getElementById("modelSelect");

    const fuelSelect =
        document.getElementById("fuelSelect");


    if (searchInput) {
        searchInput.value = "";
    }

    if (modelSelect) {
        modelSelect.value = "";
    }

    if (fuelSelect) {
        fuelSelect.value = "";
    }


    filteredCars = [...cars];

    renderCarList();


    const message =
        document.getElementById(
            "searchResultsMessage"
        );

    if (message) {
        message.textContent =
            "Showing all available cars";
    }
}


/* =========================================================
   RENDER CAR LIST
========================================================= */

function renderCarList() {

    const container =
        document.getElementById(
            "carListContainer"
        );

    const noResults =
        document.getElementById(
            "noResults"
        );

    const carCount =
        document.getElementById(
            "carCount"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (carCount) {

        carCount.textContent =
            `${filteredCars.length} ${
                filteredCars.length === 1
                    ? "Car"
                    : "Cars"
            }`;

    }


    if (filteredCars.length === 0) {

        if (noResults) {
            noResults.classList.remove("d-none");
        }

        return;

    }


    if (noResults) {
        noResults.classList.add("d-none");
    }


    filteredCars.forEach(car => {

        container.appendChild(
            createCarCard(car)
        );

    });
}


/* =========================================================
   CREATE CAR CARD
========================================================= */

function createCarCard(car) {

    const card =
        document.createElement("article");

    card.className = "car-card";


    const favoriteKey =
        `carivo-favorite-${car.id}`;

    const isFavorite =
        localStorage.getItem(
            favoriteKey
        ) === "true";


    card.innerHTML = `

        <div class="car-card-image-wrapper">

            <img
                class="car-card-image"
                src="${escapeHTML(car.images[0])}"
                alt="${escapeHTML(car.name)}"
                loading="lazy"
                onerror="this.src='https://placehold.co/800x500?text=Carivo+Car';"
            >

            <span class="car-card-badge">
                ${car.year} • ${car.fuel}
            </span>

            <button
                type="button"
                class="car-card-favorite"
                data-favorite-id="${car.id}"
                aria-label="Add to favorites">

                <i class="bi ${
                    isFavorite
                        ? "bi-heart-fill"
                        : "bi-heart"
                }"></i>

            </button>

        </div>


        <div class="car-card-body">

            <h3 class="car-card-title">
                ${escapeHTML(car.name)}
            </h3>

            <p class="car-card-subtitle">
                ${escapeHTML(car.subtitle)}
            </p>


            <div class="car-card-meta">

                <span>
                    ${car.km.toLocaleString("en-IN")} km
                </span>

                <span>
                    ${escapeHTML(car.transmission)}
                </span>

                <span>
                    ${escapeHTML(car.owner)}
                </span>

            </div>


            <div class="car-card-price-row">

                <div>

                    <div class="car-card-price">
                        ${formatPrice(car.price)}
                    </div>

                    <div class="car-card-location">
                        <i class="bi bi-geo-alt"></i>
                        ${escapeHTML(car.location)}
                    </div>

                </div>

                <div class="car-card-view">
                    View Details
                    <i class="bi bi-arrow-right"></i>
                </div>

            </div>

        </div>

    `;


    card.addEventListener(
        "click",
        function () {

            openCarDetails(car.id);

        }
    );


    const favoriteButton =
        card.querySelector(
            ".car-card-favorite"
        );


    if (favoriteButton) {

        favoriteButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                toggleFavorite(car.id);

                const icon =
                    favoriteButton.querySelector("i");

                const nowFavorite =
                    localStorage.getItem(
                        `carivo-favorite-${car.id}`
                    ) === "true";

                icon.className =
                    nowFavorite
                        ? "bi bi-heart-fill"
                        : "bi bi-heart";

            }
        );

    }


    return card;
}


/* =========================================================
   OPEN CAR DETAILS
========================================================= */

function openCarDetails(carId) {

    const car =
        cars.find(item => item.id === carId);

    if (!car) {
        return;
    }


    currentCar = car;

    currentImageIndex = 0;


    const listSection =
        document.querySelector(
            ".car-list-section"
        );

    const searchSection =
        document.querySelector(
            ".car-search-section"
        );

    const detailsSection =
        document.getElementById(
            "carDetailsSection"
        );


    if (searchSection) {
        searchSection.classList.add("d-none");
    }

    if (listSection) {
        listSection.classList.add("d-none");
    }

    if (detailsSection) {
        detailsSection.classList.remove("d-none");
    }


    renderCarDetails();


    history.pushState(
        {
            carId: car.id
        },
        "",
        `car-details.html?id=${encodeURIComponent(car.id)}`
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   RENDER DETAILS
========================================================= */

function renderCarDetails() {

    if (!currentCar) {
        return;
    }


    const car = currentCar;


    setText(
        "carTitle",
        car.name
    );

    setText(
        "carSubtitle",
        car.subtitle
    );

    setText(
        "carRating",
        car.rating.toFixed(1)
    );

    setText(
        "carReviews",
        `${car.reviews} Reviews`
    );

    setText(
        "carYear",
        car.year
    );

    setText(
        "carFuel",
        car.fuel
    );

    setText(
        "carKm",
        `${car.km.toLocaleString("en-IN")} km`
    );

    setText(
        "carOwner",
        car.owner
    );

    setText(
        "carTransmission",
        car.transmission
    );

    setText(
        "carRegistration",
        car.registration
    );

    setText(
        "carPrice",
        formatPrice(car.price)
    );

    setText(
        "carLocation",
        car.location
    );


    /* Specifications */

    setText(
        "specYear",
        car.year
    );

    setText(
        "specFuel",
        car.fuel
    );

    setText(
        "specTransmission",
        car.transmission
    );

    setText(
        "specKm",
        `${car.km.toLocaleString("en-IN")} km`
    );

    setText(
        "carEngine",
        car.engine
    );

    setText(
        "carPower",
        car.power
    );

    setText(
        "carColor",
        car.color
    );

    setText(
        "specOwner",
        car.owner
    );

    setText(
        "specRegistration",
        car.registration
    );


    /* Gallery */

    renderGallery();


    /* Features */

    renderFeatures();


    /* Inspection */

    renderInspection();


    /* Similar cars */

    renderSimilarCars();


    /* Reviews */

    renderReviews();


    /* EMI */

    updateEMIPreview();


    /* Favorite */

    updateFavoriteButton();


    /* Page title */

    document.title =
        `${car.name} - Carivo`;

}


/* =========================================================
   GALLERY
========================================================= */

function initializeGallery() {

    const previous =
        document.getElementById(
            "previousImage"
        );

    const next =
        document.getElementById(
            "nextImage"
        );

    const mainImage =
        document.getElementById(
            "mainCarImage"
        );


    if (previous) {

        previous.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                previousImage();

            }
        );

    }


    if (next) {

        next.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                nextImage();

            }
        );

    }


    if (mainImage) {

        mainImage.addEventListener(
            "click",
            function () {

                openFullscreenGallery();

            }
        );

    }

}


/* =========================================================
   RENDER GALLERY
========================================================= */

function renderGallery() {

    if (!currentCar) {
        return;
    }


    const mainImage =
        document.getElementById(
            "mainCarImage"
        );

    const thumbnails =
        document.getElementById(
            "galleryThumbnails"
        );

    const counter =
        document.getElementById(
            "imageCounter"
        );


    if (!mainImage) {
        return;
    }


    const image =
        currentCar.images[currentImageIndex];


    mainImage.src = image;

    mainImage.alt =
        currentCar.name;


    mainImage.onerror =
        function () {

            this.src =
                "https://placehold.co/1200x750?text=Carivo+Car";

        };


    if (counter) {

        counter.textContent =
            `${currentImageIndex + 1} / ${currentCar.images.length}`;

    }


    if (!thumbnails) {
        return;
    }


    thumbnails.innerHTML = "";


    currentCar.images.forEach(
        function (imagePath, index) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                `gallery-thumbnail ${
                    index === currentImageIndex
                        ? "active"
                        : ""
                }`;


            button.innerHTML = `

                <img
                    src="${escapeHTML(imagePath)}"
                    alt="${escapeHTML(currentCar.name)} image ${index + 1}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/400x250?text=Car';"
                >

            `;


            button.addEventListener(
                "click",
                function () {

                    currentImageIndex =
                        index;

                    renderGallery();

                }
            );


            thumbnails.appendChild(button);

        }
    );

}


/* =========================================================
   NEXT IMAGE
========================================================= */

function nextImage() {

    if (!currentCar) {
        return;
    }


    currentImageIndex =
        (
            currentImageIndex + 1
        ) % currentCar.images.length;


    renderGallery();

}


/* =========================================================
   PREVIOUS IMAGE
========================================================= */

function previousImage() {

    if (!currentCar) {
        return;
    }


    currentImageIndex =
        (
            currentImageIndex -
            1 +
            currentCar.images.length
        ) %
        currentCar.images.length;


    renderGallery();

}


/* =========================================================
   FULLSCREEN GALLERY
========================================================= */

function openFullscreenGallery() {

    if (!currentCar) {
        return;
    }


    fullscreenImageIndex =
        currentImageIndex;


    updateFullscreenImage();


    const modalElement =
        document.getElementById(
            "fullscreenGalleryModal"
        );


    if (modalElement) {

        const modal =
            bootstrap.Modal.getOrCreateInstance(
                modalElement
            );

        modal.show();

    }

}


/* =========================================================
   FULLSCREEN IMAGE CHANGE
========================================================= */

function changeFullscreenImage(direction) {

    if (!currentCar) {
        return;
    }


    fullscreenImageIndex =
        (
            fullscreenImageIndex +
            direction +
            currentCar.images.length
        ) %
        currentCar.images.length;


    updateFullscreenImage();

}


/* =========================================================
   UPDATE FULLSCREEN IMAGE
========================================================= */

function updateFullscreenImage() {

    if (!currentCar) {
        return;
    }


    const image =
        document.getElementById(
            "fullscreenGalleryImage"
        );


    if (!image) {
        return;
    }


    image.src =
        currentCar.images[
            fullscreenImageIndex
        ];

    image.alt =
        currentCar.name;


    image.onerror =
        function () {

            this.src =
                "https://placehold.co/1200x750?text=Carivo+Car";

        };

}


/* =========================================================
   FEATURES
========================================================= */

function renderFeatures() {

    if (!currentCar) {
        return;
    }


    const container =
        document.getElementById(
            "featuresContainer"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    currentCar.features.forEach(
        function (feature) {

            const item =
                document.createElement("div");

            item.className =
                "feature-item";


            item.innerHTML = `

                <i class="bi bi-check-circle-fill"></i>

                <span>
                    ${escapeHTML(feature)}
                </span>

            `;


            container.appendChild(item);

        }
    );

}


/* =========================================================
   INSPECTION
========================================================= */

function renderInspection() {

    if (!currentCar) {
        return;
    }


    const score =
        currentCar.inspection;


    const exterior =
        score;

    const interior =
        Math.min(100, score + 1);

    const engine =
        Math.min(100, score + 2);

    const tyres =
        Math.max(80, score - 2);

    const electrical =
        Math.min(100, score + 1);


    setText(
        "inspectionScore",
        `${score} / 100`
    );


    setText(
        "inspectionExterior",
        `${exterior}%`
    );

    setText(
        "inspectionInterior",
        `${interior}%`
    );

    setText(
        "inspectionEngine",
        `${engine}%`
    );

    setText(
        "inspectionTyres",
        `${tyres}%`
    );

    setText(
        "inspectionElectrical",
        `${electrical}%`
    );


    updateProgress(
        "inspectionExteriorBar",
        exterior
    );

    updateProgress(
        "inspectionInteriorBar",
        interior
    );

    updateProgress(
        "inspectionEngineBar",
        engine
    );

    updateProgress(
        "inspectionTyresBar",
        tyres
    );

    updateProgress(
        "inspectionElectricalBar",
        electrical
    );


    setText(
        "inspectionExteriorText",
        getInspectionText(exterior, "Exterior")
    );

    setText(
        "inspectionInteriorText",
        getInspectionText(interior, "Interior")
    );

    setText(
        "inspectionEngineText",
        getInspectionText(engine, "Engine")
    );

    setText(
        "inspectionTyresText",
        getInspectionText(tyres, "Tyres")
    );

    setText(
        "inspectionElectricalText",
        getInspectionText(electrical, "Electrical")
    );

}


/* =========================================================
   INSPECTION TEXT
========================================================= */

function getInspectionText(
    score,
    section
) {

    if (score >= 95) {

        return `${section} condition is excellent.`;

    }

    if (score >= 90) {

        return `${section} condition is very good.`;

    }

    if (score >= 80) {

        return `${section} condition is good.`;

    }

    return `${section} requires attention.`;

}


/* =========================================================
   UPDATE PROGRESS
========================================================= */

function updateProgress(
    id,
    value
) {

    const element =
        document.getElementById(id);


    if (element) {

        element.style.width =
            `${value}%`;

    }

}


/* =========================================================
   SIMILAR CARS
========================================================= */

function renderSimilarCars() {

    if (!currentCar) {
        return;
    }


    const container =
        document.getElementById(
            "similarCarsContainer"
        );


    if (!container) {
        return;
    }


    const similarCars =
        cars
            .filter(
                car =>
                    car.id !== currentCar.id
            )
            .sort(
                (a, b) =>
                    Math.abs(
                        a.price -
                        currentCar.price
                    ) -
                    Math.abs(
                        b.price -
                        currentCar.price
                    )
            )
            .slice(0, 3);


    container.innerHTML = "";


    similarCars.forEach(
        function (car) {

            const card =
                document.createElement("article");

            card.className =
                "similar-car-card";


            card.innerHTML = `

                <img
                    class="similar-car-image"
                    src="${escapeHTML(car.images[0])}"
                    alt="${escapeHTML(car.name)}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/600x400?text=Carivo+Car';"
                >


                <div class="similar-car-body">

                    <div class="similar-car-title">
                        ${escapeHTML(car.name)}
                    </div>

                    <div class="similar-car-meta">

                        ${car.year}
                        •
                        ${escapeHTML(car.fuel)}
                        •
                        ${car.km.toLocaleString("en-IN")} km

                    </div>

                    <div class="similar-car-price">
                        ${formatPrice(car.price)}
                    </div>

                </div>

            `;


            card.addEventListener(
                "click",
                function () {

                    openCarDetails(car.id);

                }
            );


            container.appendChild(card);

        }
    );

}


/* =========================================================
   REVIEWS
========================================================= */

function renderReviews() {

    if (!currentCar) {
        return;
    }


    setText(
        "reviewScore",
        currentCar.rating.toFixed(1)
    );


    const container =
        document.getElementById(
            "reviewList"
        );


    if (!container) {
        return;
    }


    const reviews = [

        {
            name: "Rahul",
            date: "2 weeks ago",
            rating: 5,
            text:
                "The car was in very good condition. " +
                "The overall buying experience was smooth."
        },

        {
            name: "Arun",
            date: "1 month ago",
            rating: 5,
            text:
                "Vehicle inspection details were helpful " +
                "and the car looked exactly as expected."
        },

        {
            name: "Priya",
            date: "2 months ago",
            rating: 4,
            text:
                "Good experience. The car was clean and " +
                "the documentation process was simple."
        }

    ];


    container.innerHTML = "";


    reviews.forEach(
        function (review) {

            const item =
                document.createElement("div");

            item.className =
                "review-item";


            const stars =
                "★".repeat(review.rating) +
                "☆".repeat(5 - review.rating);


            item.innerHTML = `

                <div class="review-user">

                    <div class="review-avatar">
                        ${escapeHTML(
                            review.name.charAt(0)
                        )}
                    </div>

                    <div>

                        <div class="review-user-name">
                            ${escapeHTML(review.name)}
                        </div>

                        <div class="review-date">
                            ${escapeHTML(review.date)}
                        </div>

                    </div>

                </div>


                <div class="review-stars">
                    ${stars}
                </div>


                <p class="review-text">
                    ${escapeHTML(review.text)}
                </p>

            `;


            container.appendChild(item);

        }
    );

}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(carId) {

    const key =
        `carivo-favorite-${carId}`;


    const current =
        localStorage.getItem(key) === "true";


    localStorage.setItem(
        key,
        String(!current)
    );


    if (
        currentCar &&
        currentCar.id === carId
    ) {

        updateFavoriteButton();

    }

}


/* =========================================================
   UPDATE FAVORITE BUTTON
========================================================= */

function updateFavoriteButton() {

    if (!currentCar) {
        return;
    }


    const button =
        document.getElementById(
            "favoriteButton"
        );


    if (!button) {
        return;
    }


    const isFavorite =
        localStorage.getItem(
            `carivo-favorite-${currentCar.id}`
        ) === "true";


    const icon =
        button.querySelector("i");


    if (icon) {

        icon.className =
            isFavorite
                ? "bi bi-heart-fill"
                : "bi bi-heart";

    }


    button.title =
        isFavorite
            ? "Remove from favorites"
            : "Add to favorites";


    button.onclick =
        function () {

            toggleFavorite(currentCar.id);

        };

}


/* =========================================================
   TEST DRIVE
========================================================= */

function handleTestDrive() {

    const isLoggedIn =
        localStorage.getItem(
            "isLoggedIn"
        ) === "true";


    if (!isLoggedIn) {

        const modalElement =
            document.getElementById(
                "loginRequiredModal"
            );


        if (modalElement) {

            const modal =
                bootstrap.Modal.getOrCreateInstance(
                    modalElement
                );

            modal.show();

        }

        return;
    }


    const form =
        document.getElementById(
            "testDriveForm"
        );


    if (form) {
        form.reset();
    }


    const success =
        document.getElementById(
            "testDriveSuccess"
        );


    if (success) {
        success.classList.add("d-none");
    }


    const modalElement =
        document.getElementById(
            "testDriveModal"
        );


    if (modalElement) {

        const modal =
            bootstrap.Modal.getOrCreateInstance(
                modalElement
            );

        modal.show();

    }

}


/* =========================================================
   TEST DRIVE FORM
========================================================= */

function initializeForms() {

    const testDriveForm =
        document.getElementById(
            "testDriveForm"
        );


    if (testDriveForm) {

        testDriveForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const success =
                    document.getElementById(
                        "testDriveSuccess"
                    );


                if (success) {

                    success.classList.remove(
                        "d-none"
                    );

                }


                setTimeout(
                    function () {

                        const modalElement =
                            document.getElementById(
                                "testDriveModal"
                            );


                        if (modalElement) {

                            const modal =
                                bootstrap.Modal.getInstance(
                                    modalElement
                                );

                            if (modal) {
                                modal.hide();
                            }

                        }

                    },
                    1800
                );

            }
        );

    }


    const offerForm =
        document.getElementById(
            "offerForm"
        );


    if (offerForm) {

        offerForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const success =
                    document.getElementById(
                        "offerSuccess"
                    );


                if (success) {

                    success.classList.remove(
                        "d-none"
                    );

                }


                setTimeout(
                    function () {

                        const modalElement =
                            document.getElementById(
                                "offerModal"
                            );


                        if (modalElement) {

                            const modal =
                                bootstrap.Modal.getInstance(
                                    modalElement
                                );

                            if (modal) {
                                modal.hide();
                            }

                        }

                    },
                    1800
                );

            }
        );

    }

}


/* =========================================================
   OFFER MODAL
========================================================= */

function openOfferModal() {

    const form =
        document.getElementById(
            "offerForm"
        );


    if (form) {
        form.reset();
    }


    const success =
        document.getElementById(
            "offerSuccess"
        );


    if (success) {
        success.classList.add("d-none");
    }


    const modalElement =
        document.getElementById(
            "offerModal"
        );


    if (modalElement) {

        const modal =
            bootstrap.Modal.getOrCreateInstance(
                modalElement
            );

        modal.show();

    }

}


/* =========================================================
   EMI MODAL
========================================================= */

function openEMIModal() {

    if (!currentCar) {
        return;
    }


    setText(
        "emiCarPrice",
        formatPrice(currentCar.price)
    );


    const downPayment =
        document.getElementById(
            "emiDownPayment"
        );

    const interest =
        document.getElementById(
            "emiInterest"
        );

    const tenure =
        document.getElementById(
            "emiTenure"
        );


    if (downPayment) {
        downPayment.value = 20;
    }

    if (interest) {
        interest.value = 10.99;
    }

    if (tenure) {
        tenure.value = 60;
    }


    calculateEMI();


    const modalElement =
        document.getElementById(
            "emiModal"
        );


    if (modalElement) {

        const modal =
            bootstrap.Modal.getOrCreateInstance(
                modalElement
            );

        modal.show();

    }

}


/* =========================================================
   CALCULATE EMI
========================================================= */

function calculateEMI() {

    if (!currentCar) {
        return;
    }


    const downPaymentInput =
        document.getElementById(
            "emiDownPayment"
        );

    const interestInput =
        document.getElementById(
            "emiInterest"
        );

    const tenureInput =
        document.getElementById(
            "emiTenure"
        );


    const downPaymentPercent =
        Number(
            downPaymentInput
                ? downPaymentInput.value
                : 20
        );


    const annualInterest =
        Number(
            interestInput
                ? interestInput.value
                : 10.99
        );


    const months =
        Number(
            tenureInput
                ? tenureInput.value
                : 60
        );


    const downPayment =
        currentCar.price *
        downPaymentPercent /
        100;


    const loanAmount =
        currentCar.price -
        downPayment;


    const monthlyRate =
        annualInterest /
        12 /
        100;


    let emi;


    if (monthlyRate === 0) {

        emi =
            loanAmount /
            months;

    } else {

        const power =
            Math.pow(
                1 + monthlyRate,
                months
            );


        emi =
            loanAmount *
            monthlyRate *
            power /
            (power - 1);

    }


    const totalAmount =
        emi * months;


    const totalInterest =
        totalAmount -
        loanAmount;


    setText(
        "monthlyEMI",
        formatRupees(emi)
    );

    setText(
        "loanAmount",
        formatRupees(loanAmount)
    );

    setText(
        "totalInterest",
        formatRupees(totalInterest)
    );

    setText(
        "totalAmount",
        formatRupees(totalAmount)
    );

}


/* =========================================================
   UPDATE EMI PREVIEW
========================================================= */

function updateEMIPreview() {

    if (!currentCar) {
        return;
    }


    const downPayment =
        currentCar.price * 0.20;


    const loanAmount =
        currentCar.price -
        downPayment;


    const annualInterest =
        10.99;


    const months =
        60;


    const monthlyRate =
        annualInterest /
        12 /
        100;


    const power =
        Math.pow(
            1 + monthlyRate,
            months
        );


    const emi =
        loanAmount *
        monthlyRate *
        power /
        (power - 1);


    setText(
        "emiCardValue",
        `${formatRupees(emi)} / month`
    );


    setText(
        "emiLoanAmount",
        formatRupees(loanAmount)
    );

}


/* =========================================================
   FINANCE LOGIN
========================================================= */

function openFinanceLogin() {

    const isLoggedIn =
        localStorage.getItem(
            "isLoggedIn"
        ) === "true";


    if (isLoggedIn) {

        openEMIModal();

        return;

    }


    const modalElement =
        document.getElementById(
            "financeLoginModal"
        );


    if (modalElement) {

        const modal =
            bootstrap.Modal.getOrCreateInstance(
                modalElement
            );

        modal.show();

    }

}


/* =========================================================
   GO TO LOGIN
========================================================= */

function goToLogin() {

    sessionStorage.setItem(
        "returnAfterLogin",
        window.location.href
    );


    window.location.href =
        LOGIN_PAGE;

}


/* =========================================================
   BACK BUTTON
========================================================= */

function initializeBackButton() {

    const button =
        document.getElementById(
            "backToCars"
        );


    if (button) {

        button.addEventListener(
            "click",
            function () {

                closeCarDetails();

            }
        );

    }

}


/* =========================================================
   CLOSE DETAILS
========================================================= */

function closeCarDetails() {

    currentCar = null;


    const details =
        document.getElementById(
            "carDetailsSection"
        );

    const list =
        document.querySelector(
            ".car-list-section"
        );

    const search =
        document.querySelector(
            ".car-search-section"
        );


    if (details) {
        details.classList.add("d-none");
    }

    if (list) {
        list.classList.remove("d-none");
    }

    if (search) {
        search.classList.remove("d-none");
    }


    history.pushState(
        {},
        "",
        "car-details.html"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   DETAIL NAVIGATION
========================================================= */

function initializeDetailNavigation() {

    const links =
        document.querySelectorAll(
            ".detail-navigation a"
        );


    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    links.forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                    link.classList.add(
                        "active"
                    );

                }
            );

        }
    );

}


/* =========================================================
   MINIMUM TEST DRIVE DATE
========================================================= */

function initializeMinimumDate() {

    const dateInput =
        document.getElementById(
            "testDriveDate"
        );


    if (!dateInput) {
        return;
    }


    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    dateInput.min =
        `${year}-${month}-${day}`;

}


/* =========================================================
   URL CAR
========================================================= */

function initializeURLCar() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const carId =
        params.get("id");


    if (!carId) {
        return;
    }


    const car =
        cars.find(
            item =>
                item.id === carId
        );


    if (car) {

        openCarDetailsFromURL(
            car.id
        );

    }

}


/* =========================================================
   OPEN CAR FROM URL
========================================================= */

function openCarDetailsFromURL(carId) {

    const car =
        cars.find(
            item =>
                item.id === carId
        );


    if (!car) {
        return;
    }


    currentCar = car;

    currentImageIndex = 0;


    const searchSection =
        document.querySelector(
            ".car-search-section"
        );

    const listSection =
        document.querySelector(
            ".car-list-section"
        );

    const detailsSection =
        document.getElementById(
            "carDetailsSection"
        );


    if (searchSection) {
        searchSection.classList.add("d-none");
    }

    if (listSection) {
        listSection.classList.add("d-none");
    }

    if (detailsSection) {
        detailsSection.classList.remove("d-none");
    }


    renderCarDetails();


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

}


/* =========================================================
   BROWSER BACK / FORWARD
========================================================= */

window.addEventListener(
    "popstate",
    function () {

        const params =
            new URLSearchParams(
                window.location.search
            );


        const carId =
            params.get("id");


        if (carId) {

            openCarDetailsFromURL(
                carId
            );

        } else {

            closeCarDetailsWithoutHistory();

        }

    }
);


/* =========================================================
   CLOSE WITHOUT HISTORY
========================================================= */

function closeCarDetailsWithoutHistory() {

    currentCar = null;


    const details =
        document.getElementById(
            "carDetailsSection"
        );

    const list =
        document.querySelector(
            ".car-list-section"
        );

    const search =
        document.querySelector(
            ".car-search-section"
        );


    if (details) {
        details.classList.add("d-none");
    }

    if (list) {
        list.classList.remove("d-none");
    }

    if (search) {
        search.classList.remove("d-none");
    }


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

}


/* =========================================================
   HELPER - SET TEXT
========================================================= */

function setText(
    elementId,
    value
) {

    const element =
        document.getElementById(
            elementId
        );


    if (element) {
        element.textContent = value;
    }

}


/* =========================================================
   FORMAT PRICE
========================================================= */

function formatPrice(price) {

    if (price >= 100000) {

        const lakh =
            price / 100000;


        return `₹${lakh.toFixed(2)} Lakh`;

    }


    return formatRupees(price);

}


/* =========================================================
   FORMAT RUPEES
========================================================= */

function formatRupees(amount) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(amount);

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   KEYBOARD GALLERY CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (!currentCar) {
            return;
        }


        const fullscreenModal =
            document.getElementById(
                "fullscreenGalleryModal"
            );


        if (
            fullscreenModal &&
            fullscreenModal.classList.contains("show")
        ) {

            if (event.key === "ArrowRight") {

                changeFullscreenImage(1);

            }

            if (event.key === "ArrowLeft") {

                changeFullscreenImage(-1);

            }

        }

    }
);


/* =========================================================
   EXPOSE FUNCTIONS
========================================================= */

window.openCarDetails =
    openCarDetails;

window.clearCarSearch =
    clearCarSearch;

window.handleTestDrive =
    handleTestDrive;

window.goToLogin =
    goToLogin;

window.openOfferModal =
    openOfferModal;

window.openEMIModal =
    openEMIModal;

window.calculateEMI =
    calculateEMI;

window.openFinanceLogin =
    openFinanceLogin;

window.changeFullscreenImage =
    changeFullscreenImage;

window.nextImage =
    nextImage;

window.previousImage =
    previousImage;