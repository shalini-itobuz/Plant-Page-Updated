const imageUrlsHero = [
  './images/hero/cutLeavesPlant.png',
  './images/hero/smallPlant.png',
  './images/hero/cutLeavesPlant.png',
  './images/hero/smallPlant.png',
];

const carouselImagesFirst = document.querySelector('.carousel-images-first');
const prevBtnHero = document.getElementById('prevBtn1');
const nextBtnHero = document.getElementById('nextBtn1');
const sliderBar = document.querySelector('.slider-bar');
const progressBar = document.querySelector('.progress-bar');

let currentIndexHero = 0;

function renderImagesFirst() {
  carouselImagesFirst.innerHTML = '';
  imageUrlsHero.forEach((imageUrl1) => {
    const imgHero = document.createElement('img');
    imgHero.src = imageUrl1;
    carouselImagesFirst.appendChild(imgHero);
  });
}

renderImagesFirst();

function moveToIndex(index) {
  currentIndexHero = index;
  const translateX = -currentIndexHero * 50;
  carouselImagesFirst.style.transition = 'transform 0.3s ease';
  carouselImagesFirst.style.transform = `translateX(${translateX}%)`;
  updateSliderBar();
}

function nextSlide1() {
  if (currentIndexHero < imageUrlsHero.length) {
    moveToIndex(currentIndexHero + 1);
  } else {
    moveToIndex(0);
  }
}

function updateSliderBar() {
  const totalImages = imageUrlsHero.length;
  const barWidth = (currentIndexHero / (totalImages)) * 100;
  progressBar.style.backgroundColor = "green";
  progressBar.style.width = `${barWidth}%`;
}

function prevSlide1() {
  if (currentIndexHero > 0) {
    moveToIndex(currentIndexHero - 1);
  } else {
    moveToIndex(imageUrlsHero.length - 1);
  }
}

function automateSlide() {
  if (currentIndexHero < imageUrlsHero.length - 1) {
    nextSlide1();
  } else {
    moveToIndex(0);
  }
}

let automateInterval;

function startAutomatedSlide() {
  automateInterval = setInterval(automateSlide, 3000);
}

function stopAutomatedSlide() {
  clearInterval(automateInterval);
}

nextBtnHero.addEventListener('click', function () {
  stopAutomatedSlide();
  nextSlide1();
});

prevBtnHero.addEventListener('click', function () {
  stopAutomatedSlide();
  prevSlide1();
});

carouselImagesFirst.addEventListener('mouseover', function () {
  stopAutomatedSlide();
});

carouselImagesFirst.addEventListener('mouseleave', function () {
  startAutomatedSlide();
});

startAutomatedSlide();
//----------------------------------------------------------------------------------

const imageUrlsPlantCollection = [
  './images/plantsScroll/paradise.png',
  './images/plantsScroll/rubber.png',
  './images/plantsScroll/pearl.png',
  './images/plantsScroll/paradise.png',
  './images/plantsScroll/rubber.png',
  './images/plantsScroll/pearl.png',
  './images/plantsScroll/paradise.png',
  './images/plantsScroll/rubber.png',
  './images/plantsScroll/pearl.png',
];

const plantNames = [
  'Bird of Paradise',
  'Rubber Plant',
  'String of Pearls',
  'Bird of Paradise',
  'Rubber Plant',
  'String of Pearls',
  'Bird of Paradise',
  'Rubber Plant',
  'String of Pearls',
  'Bird of Paradise',
  'Rubber Plant',
  'String of Pearls'
];

const carouselImagesContainer = document.querySelector('.carousel-images');
const prevBtnPlantCollection = document.getElementById('prevBtn');
const nextBtnPlantCollection = document.getElementById('nextBtn');

let currentIndexPlantCollection = 0;
const imagesPerPage = 3;

function renderImages() {
  carouselImagesContainer.innerHTML = '';
  const endIndex = Math.min(currentIndexPlantCollection + imagesPerPage, imageUrlsPlantCollection.length);
  for (let i = currentIndexPlantCollection; i < endIndex; i++) {
    const plantInfoContainer = document.createElement('div');
    plantInfoContainer.classList.add('plant-info');

    const imgPlantCollection = document.createElement('img');
    imgPlantCollection.src = imageUrlsPlantCollection[i];
    imgPlantCollection.alt = `Image ${i + 1}`;
    imgPlantCollection.classList.add('plant-image');

    const plantName = document.createElement('div');
    plantName.textContent = plantNames[i];
    plantName.classList.add('plant-name');

    plantInfoContainer.appendChild(imgPlantCollection);
    plantInfoContainer.appendChild(plantName);

    carouselImagesContainer.appendChild(plantInfoContainer);
  }
}

function nextSlide() {
  if (currentIndexPlantCollection + imagesPerPage < imageUrlsPlantCollection.length) {
    currentIndexPlantCollection++;

  }
  else {
    currentIndexPlantCollection = 0;
  }
  renderImages();
}

function prevSlide() {
  if (currentIndexPlantCollection > 0) {
    currentIndexPlantCollection--;
    renderImages();
  }
}

nextBtnPlantCollection.addEventListener('click', nextSlide);
prevBtnPlantCollection.addEventListener('click', prevSlide);

renderImages();

//-------------------------------------------------------------------------------------------------------------
let translate = 20;
const clientsWrapper = document.getElementById("clients-wrapper");

function nextClient() {
  console.log("clicked");
  translate = translate - 65;
  clientsWrapper.style.transform = `translateX(${translate}%)`;
}

function firstClient() {
  console.log("clicked");
  translate = 20;
  clientsWrapper.style.transform = `translateX(${translate}%)`;
}