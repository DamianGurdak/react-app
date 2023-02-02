import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button.js';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput placeholder='Search...' />
      <Button>
        <span className='fa fa-search' />
      </Button>
      {/* <Button text='Search' /> */}
      {/* <Button props.children='Search' /> */}
      {/* <Button children='Search' /> */}
      {/* <Button>Search</Button> */}

      {/* <TextInput placeholder='Add new column' /> */}
      {/* <Button text='Create' /> */}
    </form>
  );
};

export default SearchForm;
