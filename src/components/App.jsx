import React, { PureComponent } from 'react';
import styles from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import api from 'services/api';
import Modal from './Modal/Modal';

class App extends PureComponent {
  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
    query: '',
    modalImage: null,
  };

  handleSearch = searchText => {
    this.setState({ query: searchText, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  handleOpenModal = imageUrl => {
    this.setState({ modalImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ modalImage: null });
  };

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.handleCloseModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      const showOnlyNew =
        prevState.query !== this.state.query || this.state.page === 1;

      try {
        const fetchedImages = await api.fetchImages(
          this.state.page,
          this.state.query
        );

        this.setState(prevState => {
          const images = showOnlyNew
            ? fetchedImages
            : [...prevState.images, ...fetchedImages];
          return { images };
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { images, loading, error, modalImage } = this.state;
    return (
      <div className={styles.App}>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <Searchbar onSubmit={this.handleSearch} />
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.handleOpenModal} />
        )}
        <Loader isLoading={loading} />
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {modalImage && (
          <Modal image={modalImage} onClose={this.handleCloseModal}></Modal>
        )}
      </div>
    );
  }
}

export default App;
