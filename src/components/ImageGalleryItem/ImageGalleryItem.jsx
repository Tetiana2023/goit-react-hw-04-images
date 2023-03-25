// import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  hendleBackdropClick,
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModel = () => {
    setShowModal(true);
  };
  const closeModel = () => {
    setShowModal(false);
  };

  // const hendleBackdropClick = event => {
  //   if (event.target === event.currentTarget) {
  //     closeModel();
  //   }
  // };

  return (
    <li className={css.imageGalleryItem} key={id} onClick={openModel}>
      <img className={css.image} src={webformatURL} alt={tags} />
      {showModal && (
        <Modal
          closeModel={closeModel}
          closeBackdrop={hendleBackdropClick}
          id={id}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      )}
    </li>
  );
};

// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     return (
//       <li
//         className={css.imageGalleryItem}
//         key={this.props.id}
//         onClick={this.toggleModal}
//       >
//         <img className={css.image} src={this.props.webformatURL} alt={this.props.tags} />
//         {this.state.showModal && (
//           <Modal
//             onClose={this.toggleModal}
//             id={this.props.id}
//             tags={this.props.tags}
//             largeImageURL={this.props.largeImageURL}
//           />
//         )}
//       </li>
//     );
//   }
// }
// {this.state.showModal && (
//     <Modal  onClose={this.toggleModal}
//     id={this.props.id}
//     tag={this.props.tag}
//     modalPhoto={this.props.largeImageURL}/>
// )}
