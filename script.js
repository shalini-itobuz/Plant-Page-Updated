
const imageUrls1 = [
  './images/hero/plant1.png',
  './images/hero/plant2.png',
  './images/hero/plant1.png',
  './images/hero/plant2.png'
];

const carouselImagesFirst = document.querySelector('.carousel-images-first');
const prevBtn1 = document.getElementById('prevBtn1');
const nextBtn1 = document.getElementById('nextBtn1');
const sliderBar = document.querySelector('.slider-bar');
const progressBar = document.querySelector('.progress-bar');

let currentIndex1 = 0;

function renderImagesFirst() {
  carouselImagesFirst.innerHTML = '';
  imageUrls1.forEach((imageUrl1) => {
    const img1 = document.createElement('img');
    img1.src = imageUrl1;
    carouselImagesFirst.appendChild(img1);
  });
}

renderImagesFirst();

function moveToIndex(index) {
  currentIndex1 = index;
  const translateX = -currentIndex1 * 50;
  carouselImagesFirst.style.transition = 'transform 0.3s ease';
  carouselImagesFirst.style.transform = `translateX(${translateX}%)`;
  updateSliderBar();
}

function nextSlide1() {
  if (currentIndex1 < imageUrls1.length - 1) {
    moveToIndex(currentIndex1 + 1);
  } else {
    moveToIndex(0); // Return to the first image
  }
}

function updateSliderBar() {
  const totalImages = imageUrls1.length;
  const barWidth = (currentIndex1 / (totalImages - 1)) * 100;
  progressBar.style.backgroundColor = "green";
  progressBar.style.width = `${barWidth}%`;
}
function prevSlide1() {
  if (currentIndex1 > 0) {
    moveToIndex(currentIndex1 - 1);
  } else {
    moveToIndex(imageUrls1.length - 1); // Move to the last image if at the beginning
  }
}

function automateSlide() {
  if (currentIndex1 < imageUrls1.length - 1) {
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

nextBtn1.addEventListener('click', function () {
  stopAutomatedSlide();
  nextSlide1();
});

prevBtn1.addEventListener('click', function () {
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

const imageUrls = [
  './images/plantsScroll/image1.png',
  './images/plantsScroll/image2.png',
  './images/plantsScroll/image1.png',
  './images/plantsScroll/image2.png',
  './images/plantsScroll/image1.png',
  './images/plantsScroll/image2.png',
  './images/plantsScroll/image1.png',
  './images/plantsScroll/image2.png',
  './images/plantsScroll/image1.png',
  './images/plantsScroll/image2.png',
  './images/plantsScroll/image1.png',
  './images/plantsScroll/image2.png',
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
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const imagesPerPage = 3;

function renderImages() {
  carouselImagesContainer.innerHTML = '';
  const endIndex = Math.min(currentIndex + imagesPerPage, imageUrls.length);
  for (let i = currentIndex; i < endIndex; i++) {
    const plantInfoContainer = document.createElement('div');
    plantInfoContainer.classList.add('plant-info');

    const img = document.createElement('img');
    img.src = imageUrls[i];
    img.alt = `Image ${i + 1}`;
    img.classList.add('plant-image');

    const plantName = document.createElement('div');
    plantName.textContent = plantNames[i];
    plantName.classList.add('plant-name');

    plantInfoContainer.appendChild(img);
    plantInfoContainer.appendChild(plantName);

    carouselImagesContainer.appendChild(plantInfoContainer);
  }
}

function nextSlide() {
  if (currentIndex + imagesPerPage < imageUrls.length) {
    currentIndex++;

  }
  else {
    currentIndex = 0;
  }
  renderImages();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    renderImages();
  }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

renderImages();

//---------------------------------------------------------------------------------------------

// const prevClientBtns = document.querySelectorAll('.prev-client-btn');
// const nextClientBtns = document.querySelectorAll('.next-client-btn');
// const carouselContainerClient = document.querySelector('.clients-say');
// const cards = [];
// const currentIndexClient=0;

// function updateCarouselClient() {
//   const cardWidth = '100vw';
//   const offset = -currentIndexClient * cardWidth;
//   carouselContainerClient.style.transform = `translateX(${offset}%)`;
// }

// function createCard(text, imageUrl, index) {
//   const card = document.createElement('div');
//   card.classList.add('clients-say-card');
//   card.classList.add('position-relative');

//   const img = document.createElement('img');
//   img.classList.add('clients-say-card-img-top');
//   img.classList.add('position-absolute');
//   img.src = imageUrl;
//   card.appendChild(img);

//   const paragraph = document.createElement('p');
//   paragraph.classList.add('card-text');
//   paragraph.textContent = text;
//   card.appendChild(paragraph);

//   if (index % 2 === 0) {
//     card.classList.add('even-card');
//     card.classList.add('text-white');
//   }

//   cards.push(card);

//   const prevBtn = document.createElement('button');
//   prevBtn.classList.add('prev-client-btn');
//   prevBtn.textContent = 'Prev';
//   prevBtn.addEventListener('click', () => {
//     if (currentIndexClient > 0) {
//       currentIndexClient--;
//       updateCarouselClient();
//     }
//   });

//   const nextBtn = document.createElement('button');
//   nextBtn.classList.add('next-client-btn');
//   nextBtn.textContent = 'Next';
//   nextBtn.addEventListener('click', () => {
//     const numCards = cards.length;
//     if (currentIndexClient < numCards - 3) {
//       currentIndexClient++;
//       updateCarouselClient();
//     }
//   });

//   carouselContainerClient.appendChild(prevBtn);
//   carouselContainerClient.appendChild(card);
//   carouselContainerClient.appendChild(nextBtn);
// }

// createCard("It is a long established fact that a reader will be distracted by the readable content of a page.", "./images/client/girl.png", 0);
// createCard("It is a long established fact that a reader will be distracted by the readable content of a page.", "./images/client/girl.png", 1);
// createCard("It is a long established fact that a reader will be distracted by the readable content of a page.", "./images/client/girl.png", 2);


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