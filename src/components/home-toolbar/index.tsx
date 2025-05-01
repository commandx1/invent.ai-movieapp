import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { RootState } from 'store';
import { setMovieType, setReleaseYear } from 'store/filterSlice';
import { TMovieType } from 'types/globalStateTypes';
import generateYearOptions from 'utils/generateYears';

import { Grid } from '@mui/material';
import Card from '@mui/material/Card';

import SearchBar from 'components/searchbar';
import SelectBox from 'components/selectbox';

import styles from './home-toolbar.module.scss';

const HomeToolbar = () => {
    const { releaseYear, movieType } = useSelector((state: RootState) => state.filter);
    const dispatch = useDispatch();

    return (
        <Card className={styles.card}>
            <Grid width='100%' container spacing={2}>
                <Grid size={{ xs: 12, md: 6, lg: 8 }}>
                    <SearchBar />
                </Grid>
                <Grid size={{ xs: 6, md: 3, lg: 2 }}>
                    <SelectBox
                        className={styles.langSelect}
                        options={[
                            { value: 'all_content', label: 'All Content' },
                            { value: 'movie', label: 'Movie' },
                            { value: 'series', label: 'Series' },
                        ]}
                        value={movieType}
                        onChange={(value: string | number) => dispatch(setMovieType(value as TMovieType))}
                    />
                </Grid>
                <Grid size={{ xs: 6, md: 3, lg: 2 }}>
                    <SelectBox
                        className={styles.langSelect}
                        options={generateYearOptions()}
                        placeholder='Select a year'
                        value={releaseYear}
                        allowClear
                        onChange={(value: string | number) => dispatch(setReleaseYear(value))}
                    />
                </Grid>
            </Grid>
        </Card>
    );
};

export default HomeToolbar;
