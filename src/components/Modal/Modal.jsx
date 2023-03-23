import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  static propTypes = {
    id: PropTypes.number,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func
  }
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }
  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  hendleBackdropClick = event => {
    if ( event.currentTarget === event.target){
        this.props.onClose()
    }

  }

  render() {
    return createPortal(
      <div className={css.overlay} onClose={this.hendleBackdropClick}>
        <div className={css.modal} id={this.props.id}>
          <img src={this.props.largeImageURL } alt={this.props.tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
