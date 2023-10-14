import React, { PureComponent } from 'react';
import styles from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import api from 'services/api';

class App extends PureComponent {
  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
    query: '',
  };

  handleSearch = searchText => {
    this.setState({ query: searchText, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });

      try {
        const images = await api.fetchImages(this.state.page, this.state.query);

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...images],
          };
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { images, loading, error } = this.state;
    return (
      <div className={styles.App}>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <Searchbar onSubmit={this.handleSearch} />
        {images.length > 0 && <ImageGallery images={images} />}
        <Loader isLoading={loading} />
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default App;
