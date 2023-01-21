import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const RefGalleryContainer = document.querySelector('.gallery');
const cardsGallery = createCardsGallery(galleryItems);

RefGalleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

RefGalleryContainer.addEventListener('click', onCardGalleryClick);

const lightbox = new SimpleLightbox('.gallery__item a', { /* options */ });


function createCardsGallery(galleryItems){
  return galleryItems.map(({preview, original, description}) => 
    { return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `
}).join('')};

function onCardGalleryClick(e) {
  e.preventDefault();
  if(!e.target.classList.contains('gallery__image')){
    return;
  };
}
