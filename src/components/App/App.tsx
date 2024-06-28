import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar'
import {fetchPhotosByQuery} from '../../../gallery-api'
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast';
import ImageModal from '../ImageModal/ImageModal';
import './App.module.css';
import { AppState, SearchParams, Image } from './App.types';
import { Photo } from '../../../gallery-api.types';

// const App = () => {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [totalPages, setTotalPages] = useState(1);
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [modalImageSrc, setModalImageSrc] = useState('');
//   const [modalImageAlt, setModalImageAlt] = useState('');

//   useEffect(() => {
//     if (!searchQuery) {
//       return;
//     }
//     async function fetchPhotos() {
//       setError(null);
//       setLoading(true);
//       try {
//         const { results, total_pages } = await fetchPhotosByQuery(
//           searchQuery,
//           page
//         );
//         if (total_pages === 0) {
//           throw new Error(
//             'Sorry, there are no images matching your search query'
//           );
//         }
//         setTotalPages(total_pages);
//         setPhotos(prevPhotos => {
//           return [...prevPhotos, ...results];
//         });
//       } catch (error) {
//         setError(`${error.message}. Please try again!`);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchPhotos();
//   }, [page, searchQuery]);

//   const handleSearch = query => {
//     setPhotos([]);
//     setSearchQuery(query);
//     setPage(1);
//     setTotalPages(1);
//   };

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   // =============modal==============

//   function openModal(imgUrl, alt) {
//     setIsOpen(true);
//     setModalImageSrc(imgUrl);
//     setModalImageAlt(alt);
//   }

//   function closeModal() {
//     setIsOpen(false);
//     setModalImageSrc('');
//     setModalImageAlt('');
//   }

//   return (
//     <div>
//       <SearchBar onSubmit={handleSearch} />
//       {photos.length > 0 && <ImageGallery items={photos} onClick={openModal} />}
//       {loading && <Loader />}
//       {error && !loading && <ErrorMessage>{error}</ErrorMessage>}
//       {page === totalPages && photos.length > 0 && (
//         <p
//           style={{
//             fontSize: 'medium',
//             marginBottom: 12,
//             textAlign: 'center',
//           }}
//         >
//           We`re sorry, there are no more images to load!
//         </p>
//       )}
//       {page < totalPages && !loading && photos.length > 0 && (
//         <LoadMoreBtn onClick={handleLoadMore} />
//       )}
//       <ImageModal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         modalImageUrl={modalImageSrc}
//         modalImageAlt={modalImageAlt}
//       />
//       <Toaster />
//     </div>
//   );
// };

// export default App;

class App extends Component<{}, AppState> {
  state: AppState = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
  };

  fetchImages = async ({ query, page }: SearchParams): Promise<void> => {
    this.setState({ isLoading: true });

    try {
      const data = await fetchPhotosByQuery(query, page);
      const mappedImages: Image[] = data.results.map((photo: Photo) => ({
        id: photo.id,
        webformatURL: photo.urls.small,
        largeImageURL: photo.urls.full,
      }));
      this.setState((prevState) => ({
        images: [...prevState.images, ...mappedImages],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: (error as Error).message, isLoading: false });
    }
  };

  handleSearch = (query: string) => {
    this.setState({ query, images: [], page: 1 }, () => {
      this.fetchImages({ query, page: 1 });
    });
  };

  handleLoadMore = () => {
    const { query, page } = this.state;
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => {
        this.fetchImages({ query, page: page + 1 });
      }
    );
  };

  openModal = (largeImageURL: string) => {
    this.setState({ showModal: true, largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { images, isLoading, error, showModal, largeImageURL } = this.state;
    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        {error && <ErrorMessage message={error} />}
        <ImageGallery images={images} onImageClick={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <LoadMoreBtn onClick={this.handleLoadMore} />}
        {showModal && <ImageModal largeImageURL={largeImageURL} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;