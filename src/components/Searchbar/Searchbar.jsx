// import { Component } from 'react';
import {FcSearch} from 'react-icons/fc';
import css from './Searchbar.module.css'
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const Searchbar = ({onSubmit})=> {
  const [inputValue, setInputValue] = useState('');

  const hendleInputChange = (event) =>{
     setInputValue(event.currentTarget.value.toLowerCase().trim());
        
    }
  
    const hendleSubmit = (event) => {
      event.preventDefault();
      onSubmit(inputValue);
      if(!inputValue.trim()){
        toast.error('PLease, fill search field.');
        return;
      }
      setInputValue('');
  
    }

  return (
  <header className={css.searchbar}>
    <form className={css.searchForm} onSubmit={hendleSubmit}>
      <button type="submit" className={css.searchFormbutton} >
       <FcSearch style={{marginRight:8, width:"20", height:"20"}}/>
      </button>

      <input
        className={css.searchForminput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={hendleInputChange}
        value={inputValue}
      />
    </form>
  </header>)

}

Searchbar.propTypes = {
      onSubmit: PropTypes.func,
    
}

// export class Searchbar extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func,
//   };

//   state = {
//     inputValue: '',
//   };

  // hendleInputChange = event =>{
  //   this.setState({inputValue: event.currentTarget.value.toLowerCase().trim()});
      
  // }

  // hendleSubmit = event => {
  //   event.preventDefault();
  //   this.props.onSubmit(this.state.inputValue);
  //   if(!this.state.inputValue.trim()){
  //     toast.error('PLease, fill search field.');
  //     return;
  //   }
  //   this.setState({inputValue: ''});

  // }
//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.searchForm} onSubmit={this.hendleSubmit}>
//           <button type="submit" className={css.searchFormbutton} >
//            <FcSearch style={{marginRight:8, width:"20", height:"20"}}/>
//           </button>

//           <input
//             className={css.searchForminput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.hendleInputChange}
//             value={this.state.inputValue}
//           />
//         </form>
//       </header>
//     );
//   }
// }
