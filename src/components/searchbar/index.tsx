/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import { setSearchTerm } from 'store/filterSlice';

import Search from '@mui/icons-material/Search';
import { debounce } from '@mui/material';

import styles from './searchbar.module.scss';

const SearchBar = () => {
    const { searchTerm } = useSelector((state: RootState) => state.filter);
    const [text, setText] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const isMounted = useRef(false);

    const setGlobalSearchTerm = (text: string) => dispatch(setSearchTerm(text));

    const debouncedSearch = useCallback(debounce(setGlobalSearchTerm, 750), []);

    useEffect(() => {
        if (!isMounted.current) {
            setText(searchTerm);
        } else {
            debouncedSearch(text);
        }

        isMounted.current = true;
    }, [text]);

    return (
        <div className={styles.searchbox}>
            <Search />
            <input value={text} onChange={e => setText(e.target.value)} />
        </div>
    );
};

export default SearchBar;
