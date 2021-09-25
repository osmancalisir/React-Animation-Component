// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';

// Utilities
import './styles.scss';

export interface FAnimationProps {
    className?: string;
}

const Animation: React.FC<FAnimationProps> = (props) => {

    const { children, className } = props;

    return (
        <Box className={className}>
            {children}
        </Box>
    )
};

export default Animation;