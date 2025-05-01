import { Grid, Skeleton } from '@mui/material';

const GridSkeleton = () => Array.from({ length: 10 }, (_, i) => (
    <Grid key={i} size={{ xs: 6, sm: 4, md: 3, lg: 2.4 }}>
        <Skeleton variant='rectangular' height={300} />
    </Grid>
));

export default GridSkeleton;
