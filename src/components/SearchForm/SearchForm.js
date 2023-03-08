import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button.js';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchString } from '../../redux/store';
import { updateSearchstring } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();

  const searchStringValue = useSelector(getSearchString);

  const [currentSearchString, setCurrentSearchString] =
    useState(searchStringValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch({ type: 'UPDATE_SEARCHSTRING', payload: { currentSearchString } });
    dispatch(updateSearchstring({currentSearchString}))
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput
        placeholder='Search...'
        value={currentSearchString}
        onChange={(e) => setCurrentSearchString(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
