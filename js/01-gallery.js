import { galleryItems } from './gallery-items.js';
// Change code below this line
//help
const log = console.log
log(galleryItems);

//DOM elements
const gallery = document.querySelector(".gallery")
log(gallery)

//callback/functions
const drawGallery = () => {
    let protoGallery = ""
    let protoGalleryItem =""
    galleryItems.forEach((image) =>{
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
protoGallery +=protoGalleryItem
    })
    gallery.insertAdjacentHTML('beforeend', protoGallery)
}

drawGallery()
//Events



// {/* <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>; */}
