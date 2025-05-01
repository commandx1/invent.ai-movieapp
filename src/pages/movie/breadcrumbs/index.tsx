import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { Typography } from '@mui/material';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

import styles from './breadcrumbs.module.scss';

const Breadcrumbs = () => {
    const location = useLocation();
    const [search] = useSearchParams();
    const Season = search.get('Season');
    const Episode = search.get('Episode');

    const isSeason = !!Season;
    const isEpisode = !!Episode;
    const title = search.get('movieTitle');

    return (
        <MuiBreadcrumbs separator='›' aria-label='breadcrumb' className={styles.breadcrumbs}>
            <Link color='inherit' to='/'>
                Home
            </Link>
            {isEpisode ? (
                [
                    <Link key={1} color='inherit' to={`${location.pathname}?movieTitle=${title}`}>
                        {title}
                    </Link>,
                    <Link key={2} color='inherit' to={`${location.pathname}?movieTitle=${title}&Season=${Season}`}>
                        Season {Season}
                    </Link>,
                    <Typography key={3} sx={{ color: 'text.primary' }}>
                        Episode {Episode}
                    </Typography>,
                ]
            ) : isSeason ? (
                [
                    <Link key={4} color='inherit' to={`${location.pathname}?movieTitle=${title}`}>
                        {title}
                    </Link>,
                    <Typography key={5} sx={{ color: 'text.primary' }}>
                        Season {Season}
                    </Typography>,
                ]
            ) : (
                <Typography sx={{ color: 'text.primary' }}>{title}</Typography>
            )}
        </MuiBreadcrumbs>
    );
};

export default Breadcrumbs;
