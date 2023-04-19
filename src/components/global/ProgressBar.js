import React, { useEffect, useState } from 'react';
import classes from './progressBar.module.css';

function ProgressBar({ percentage }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(percentage);
    }, [percentage]);

    return (
        <div className={classes.progressBar}>
            <div className={classes.fill} style={{ width: `${width}%` }} />
        </div>
    );
}

export default ProgressBar;
