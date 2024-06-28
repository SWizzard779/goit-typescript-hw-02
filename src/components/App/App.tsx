import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar'
import {fetchPhotosByQuery} from '../../../gallery-api'
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import styles from './App.module.css';
import { AppState, SearchParams, Image } from './App.types';
import { Photo } from '../../../gallery-api.types';
import { Toaster, toast } from 'react-hot-toast'

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
      if (data.results.length === 0) {
        toast.error('No results found for your query', {
          duration: 5000,
          position: 'top-right',
          style: {
            color: 'blue',
            backgroundColor: 'white',
          },
        });
      }
      const mappedImages: Image[] = data.results.map((photo) => ({
        id: photo.id,
        webformatURL: photo.urls.small,
        largeImageURL: photo.urls.full,
        description: photo.description || photo.alt_description || '',
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
      <div className={styles.container}>
        <SearchBar onSubmit={this.handleSearch} />
        {error && <ErrorMessage message={error} />}
        <ImageGallery images={images} onImageClick={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <LoadMoreBtn onClick={this.handleLoadMore} />}
        <ImageModal largeImageURL={largeImageURL} onClose={this.closeModal} />
        <Toaster />
      </div>
    );
  }
}

export default App;