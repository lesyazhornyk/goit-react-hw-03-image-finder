import styles from './Searchbar.module.css';
import { Formik, Form, Field } from 'formik';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={values => {
          onSubmit(values.search);
        }}
      >
        <Form className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <Field
            className={styles.SearchFormInput}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};

export default Searchbar;
