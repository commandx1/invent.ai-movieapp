import { useSelector } from 'react-redux';

import { AnimatePresence } from 'framer-motion';
import { RootState } from 'store';

import AnimatedDiv from './animated-div';
import GridView from './grid-view';
import TableView from './table-view';

const ListContent = () => {
    const { listType } = useSelector((state: RootState) => state.movies);

    return (
        <AnimatePresence mode='wait'>
            {listType === 'grid' ? (
                <AnimatedDiv key='grid'>
                    <GridView />
                </AnimatedDiv>
            ) : (
                <AnimatedDiv key='table'>
                    <TableView />
                </AnimatedDiv>
            )}
        </AnimatePresence>
    );
};

export default ListContent;
