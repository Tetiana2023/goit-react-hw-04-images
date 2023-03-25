// import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { getImg } from 'services/getImg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [photo, setPhoto] = useState([]);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [photoOnPage, setPhotoOnPage] = useState(0);

  useEffect(() => {
    if (!inputValue) {
      return;
    }
    const fetchImg = async () => {
      try {
        setIsLoading(true);

        const img = await getImg(inputValue, page);
        console.log(img.totalHits);

        if (img.hits.length === 0) {
          setPhoto([]);
          toast.warning(
            'No results were found for your search, please try something else.'
          );
          return;
        }

        if (page === 1 && img.totalHits !== 0) {
          toast.success(`Hooray! We found ${img.totalHits} images.`);
        }

        setPhoto(prevImg => [...prevImg, ...img.hits]);
        setPhotoOnPage(img.hits.length);

        if (page > img.totalHits / 12) {
          toast.info(
            'Were sorry, but you have reached the end of search results.'
          );
        }
      } catch (error) {
        setError(error);
        toast.error(`Whoops, something went wrong: ${error.message}`)
      } finally {
        setIsLoading(false);
      }
    };
    fetchImg();
  }, [inputValue, page]);

  const formSubmit = inputValue => {
    setInputValue(inputValue);
    setPage(1);
    setPhoto([]);
  };

  const onLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
    setIsLoading(true);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={formSubmit} />

      {photo.length > 0 && <ImageGallery items={photo} />}
      {isLoading && <Loader />}
      {photoOnPage >= 12 && <LoadMoreButton onClick={onLoadMoreClick} />}
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     photo: [],
//     page: 1,
//     inputValue: '',
//     error: '',
//     isLoading: false,
//     photoOnPage: 0,

//   };
//   async componentDidUpdate(_, prevState) {
//     const { page, inputValue } = this.state;

//     if (prevState.inputValue !== inputValue || prevState.page !== page) {
//       this.setState({ isLoading: true });

//       try {
//         this.setState({ isLoading: true });
//         const img = await getImg(inputValue, page);
//         console.log(img.totalHits)

//         if(img.hits.length === 0 ){
//           this.setState({photo: [],})
//           toast.warning(
//             'No results were found for your search, please try something else.'
//           );
//           return
//         }

//         if(this.state.page === 1 && img.totalHits !== 0 ){
//           toast.success(`Hooray! We found ${img.totalHits} images.`);

//         }

//         this.setState(state => ({
//           photo: [...state.photo, ...img.hits],
//           photoOnPage: img.hits.length,
//        }));

//        if(page > img.totalHits / 12){
//         toast.info(
//           'Were sorry, but you have reached the end of search results.'
//         );
//        }

//       } catch (error) {
//         this.setState({ error });
//         toast.error(`Whoops, something went wrong: ${error.message}`);
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     }
//   }

//   formSubmit = inputValue => {
//     this.setState({ inputValue: inputValue, page: 1, photo: [] });
//   };
//   onLoadMoreClick = () => {
//     this.setState(prevState => ({ page: prevState.page + 1, isLoading: true }));
//   };

//   render() {
//     const { photo, isLoading, photoOnPage } = this.state;
//     return (
//       <>
//         <div className={css.app}>
//           <Searchbar onSubmit={this.formSubmit} />

//           { photo.length > 0 && <ImageGallery items={photo} />}
//            {isLoading && <Loader />}
//           {photoOnPage >=12 && <LoadMoreButton onClick={this.onLoadMoreClick} />}
//           <ToastContainer autoClose={3000} theme="colored" pauseOnHover/>
//         </div>
//       </>
//     );
//   }
// }
