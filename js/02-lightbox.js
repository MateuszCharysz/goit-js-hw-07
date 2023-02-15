import { galleryItems } from './gallery-items.js';
// Change code below this line
//help
const log = console.log;
// log(galleryItems);

//DOM elements
const gallery = document.querySelector('.gallery');
// log(gallery);

//callback/functions
const drawGallery = () => {
  let protoGallery = '';
  let protoGalleryItem = '';
  galleryItems.forEach(image => {
    protoGalleryItem = `
    <a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
`;
    protoGallery += protoGalleryItem;
  });
  gallery.insertAdjacentHTML('beforeend', protoGallery);
};

drawGallery();
//Events
gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  // log(event.target);
  
});
