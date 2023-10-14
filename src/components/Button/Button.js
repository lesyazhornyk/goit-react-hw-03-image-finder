import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.Button} type="button">
      Load more
    </button>
  );
};

export default Button;
