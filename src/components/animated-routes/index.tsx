// components/animated-routes.tsx
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';
import fadeVariants from 'utils/fadeVariants';

const HomePage = lazy(() => import('pages/home'));
const MoviePage = lazy(() => import('pages/movie'));

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <Suspense>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path='/'
                        element={
                            <motion.div
                                variants={fadeVariants}
                                initial='initial'
                                animate='animate'
                                exit='exit'
                                transition={{ duration: 0.4 }}>
                                <HomePage />
                            </motion.div>
                        }
                    />
                    <Route
                        path='/popular'
                        element={
                            <motion.div
                                variants={fadeVariants}
                                initial='initial'
                                animate='animate'
                                exit='exit'
                                transition={{ duration: 0.4 }}>
                                popular
                            </motion.div>
                        }
                    />
                    <Route
                        path='/new-releases'
                        element={
                            <motion.div
                                variants={fadeVariants}
                                initial='initial'
                                animate='animate'
                                exit='exit'
                                transition={{ duration: 0.4 }}>
                                new-releases
                            </motion.div>
                        }
                    />
                    <Route
                        path='/:imdbId'
                        element={
                            <motion.div
                                variants={fadeVariants}
                                initial='initial'
                                animate='animate'
                                exit='exit'
                                transition={{ duration: 0.4 }}>
                                <MoviePage />
                            </motion.div>
                        }
                    />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </AnimatePresence>
        </Suspense>
    );
};

export default AnimatedRoutes;
