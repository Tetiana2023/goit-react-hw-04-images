import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ items }) => {
  return (
    
    <ul className={css.imageGallery}>
      {items.map(({ id, tags, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};
ImageGallery.propType ={
  items:PropTypes.array.isRequired,
}