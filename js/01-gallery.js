import { galleryItems } from './gallery-items.js';
// Change code below this line
//help
const log = console.log;
// log(galleryItems);

//DOM elements
const gallery = document.querySelector('.gallery');
// log(gallery);

//callback/functions
//FIRST SOLUTION - IMPERATIVE
// const drawGallery = () => {
//   let protoGallery = '';
//   let protoGalleryItem = '';
//   galleryItems.forEach(image => {
//     protoGalleryItem = `<div class="gallery__item">
//   <a class="gallery__link" href="${image.original}">
//     <img
//       class="gallery__image"
//       src="${image.preview}"
//       data-source="${image.original}"
//       alt="${image.description}"
//     />
//   </a>
// </div>`;
//     protoGallery += protoGalleryItem;
//   });
//   gallery.insertAdjacentHTML('beforeend', protoGallery);
// };
// drawGallery()
//SECOND SOLUTION - DECLARATIVE
const createItem = item => {
  let itemMarkup =
  `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
return itemMarkup
};

const drawGallery = galleryItems.map(item => createItem(item)).join("");
gallery.innerHTML = drawGallery;

//Events
gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  // log(event.target);
  basicLightbox
    .create(
      `
		<img alt="${event.target.getAttribute('alt')}" src="${event.target.getAttribute(
        'data-source',
      )}">
	`,
      {
        onShow: instance => {
          document.addEventListener('keydown', event => {
            if (event.key == 'Escape') log('works'), instance.close();
          });
        },
        onClose: instance =>
          document.removeEventListener('keydown', event => {
            if (event.key == 'Escape') log('works'), instance.close();
          }),
      },
    )
    .show();
});
