import { getImage } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { gallery } from './js/render-functions';
const form = document.querySelector('.find-form');
form.addEventListener('submit', submitImageFinder);

const loader = document.querySelector('.loader');

function submitImageFinder(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  const searchTerm = event.target.elements.formInput.value.trim();

  if (searchTerm === '') {
    iziToast.error({
      color: 'red',
      message: 'Please,type any text',
      position: 'topCenter',
      title: 'Error',
    });

    gallery.innerHTML = '';
  } else {
    getImage(searchTerm)
      .then(collection => {
        if (collection.hits.length < 1) {
          iziToast.error({
            color: 'red',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topCenter',
            title: 'Oops',
          });
        } else {
          loader.classList.add('show');
          setTimeout(() => {
            loader.classList.remove('show');
            renderGallery(collection.hits);
          }, 1500);
        }
      })
      .catch(err => console.log(err));
  }
}
