// import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { useEffect } from 'react';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ id, largeImageURL, tags, closeModel, }) => {

  useEffect(() => {    
    const hendleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModel();
    }
  };
    window.addEventListener('keydown', hendleKeyDown);
    return ()=> window.removeEventListener('keydown', hendleKeyDown);

    
  },[closeModel]
  );

  const hendleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModel();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={hendleBackdropClick}>
      <div className={css.modal} id={id}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
};
Modal.propTypes = {
  id: PropTypes.number,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

// export class Modal extends Component {
//   static propTypes = {
//     id: PropTypes.number,
//     largeImageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//     onClose: PropTypes.func
//   }
//   componentDidMount() {
//     window.addEventListener('keydown', this.hendleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.hendleKeyDown);
//   }
//   hendleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   hendleBackdropClick = event => {
//     if ( event.currentTarget === event.target){
//         this.props.onClose()
//     }

//   }

//   render() {
//     return createPortal(
//       <div className={css.overlay} onClose={this.hendleBackdropClick}>
//         <div className={css.modal} id={this.props.id}>
//           <img src={this.props.largeImageURL } alt={this.props.tags} />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
