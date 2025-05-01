/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from 'store';
import { setSearchTerm } from 'store/filterSlice';

import Search from '@mui/icons-material/Search';
import { debounce } from '@mui/material';

import styles from './searchbar.module.scss';

const SearchBar = () => {
    const [text, setText] = useState('Pokemon');
    const dispatch = useDispatch<AppDispatch>();

    const setGlobalSearchTerm = (text: string) => dispatch(setSearchTerm(text));

    const debouncedSearch = useCallback(debounce(setGlobalSearchTerm, 750), []);

    useEffect(() => {
        debouncedSearch(text);
    }, [text]);

    return (
        <div className={styles.searchbox}>
            <Search />
            <input value={text} onChange={e => setText(e.target.value)} />
        </div>
    );
};

export default SearchBar;
