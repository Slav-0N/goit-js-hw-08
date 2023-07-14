
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line



console.log(galleryItems);



const galleryElem = document.querySelector(".gallery");

const imageListArr = galleryItems.map(item => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        
        alt="${item.description}"
      />
    </a>
  </li>`
});


const template = imageListArr.join('');
galleryElem.insertAdjacentHTML("afterbegin", template);

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: "alt",
//   captionDelay: 250,
// });

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});
