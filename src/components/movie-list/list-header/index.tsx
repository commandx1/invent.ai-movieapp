import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import { setListType } from 'store/movieSlice';

import List from '@mui/icons-material/FormatListBulleted';
import GridView from '@mui/icons-material/GridView';
import { Button, ButtonGroup, Skeleton } from '@mui/material';

import styles from './list-header.module.scss';

const ListHeader = () => {
    const { listType, isListLoading } = useSelector((state: RootState) => state.movies);
    const dispatch = useDispatch<AppDispatch>();

    return isListLoading ? (
        <Skeleton variant='rectangular' height={50} />
    ) : (
        <header className={styles.header}>
            <h3>Movies</h3>
            <div>
                <span>View</span>
                <ButtonGroup variant='contained' color='inherit'>
                    <Button
                        onClick={() => dispatch(setListType('grid'))}
                        className={listType === 'grid' ? styles.active : ''}>
                        <GridView />
                    </Button>
                    <Button
                        onClick={() => dispatch(setListType('list'))}
                        className={listType === 'list' ? styles.active : ''}>
                        <List />
                    </Button>
                </ButtonGroup>
            </div>
        </header>
    );
};

export default ListHeader;
