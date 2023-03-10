import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createPhotoGallery(items) {
    return items.map(item =>
        `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join('');
};

const divPhotos = document.querySelector('.gallery');
const addPhotoGallery = createPhotoGallery(galleryItems);

divPhotos.insertAdjacentHTML("afterbegin", addPhotoGallery);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt", 
    captionDelay: 250,
});