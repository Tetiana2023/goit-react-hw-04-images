import css from './LoadMoreButton.module.css';
import PropTypes from 'prop-types';

export const LoadMoreButton = ({onClick})=> {
    return (
        <>
        <button type="button" className={css.button} onClick={onClick} >Load more</button>
        </>
    )
}
LoadMoreButton.propType={
    onClick:PropTypes.func.isRequired,
}