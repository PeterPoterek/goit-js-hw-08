// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const galleryItemArr = [];

const handleImageRender = () => {
  galleryItems.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.setAttribute('class', 'gallery__item ');

    const image = document.createElement('img');
    image.setAttribute('class', 'gallery__image');
    image.setAttribute('data-source', item.original);
    image.src = item.preview;
    image.alt = item.description;

    const link = document.createElement('a');
    link.setAttribute('href', item.original);
    link.setAttribute('class', 'gallery__link');

    link.append(image);

    galleryItem.append(link);
    galleryItemArr.push(galleryItem);
  });

  gallery.append(...galleryItemArr);
};

handleImageRender();

const simpleLightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'outside',
});
