import React from 'react';

import { motion } from 'framer-motion';
import fadeVariants from 'utils/fadeVariants';

const AnimatedDiv: React.FC<{ children: React.ReactNode; key: string }> = ({ children, key }) => (
    <motion.div
        key={key}
        variants={fadeVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.4 }}>
        {children}
    </motion.div>
);

export default AnimatedDiv;
