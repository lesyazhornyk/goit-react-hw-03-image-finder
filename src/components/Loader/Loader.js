import { ColorRing } from 'react-loader-spinner';

const Loader = ({ isLoading }) => {
  return (
    <ColorRing
      visible={isLoading}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        margin: "0 auto"
      }}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
};

export default Loader;
