import React from 'react'

const ProgressBar = ({ value, min, max }) => {
    const percent = Math.floor((value - min) / (max - min) * 100);
    return (
        <div className='progress-container'>
            <div className="progress-label">{percent}%</div>
            <div role='progressbar' aria-valuenow={percent} aria-valuemin={min} aria-valuemax={max} className="progress-bar" style={{ width: `${percent}%` }}>
            </div>
        </div>
    )
}

export default ProgressBar
