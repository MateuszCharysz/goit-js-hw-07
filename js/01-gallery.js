import { galleryItems } from './gallery-items.js';
// Change code below this line
//help
const log = console.log;
log(galleryItems);

//DOM elements
const gallery = document.querySelector('.gallery');
log(gallery);

//callback/functions
const drawGallery = () => {
  let protoGallery = '';
  let protoGalleryItem = '';
  galleryItems.forEach(image => {
    protoGalleryItem = `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`;
    protoGallery += protoGalleryItem;
  });
  gallery.insertAdjacentHTML('beforeend', protoGallery);
};

drawGallery();

//Events
gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  log(event.target);
  basicLightbox
    .create(
      `
		<img alt="${event.target.getAttribute('alt')}" src="${event.target.getAttribute(
        'data-source',
      )}">
	`,
    )
    .show();
});
