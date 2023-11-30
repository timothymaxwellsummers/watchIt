import React from 'react';
import dateStyles from '../styles/date.module.css';

export default function DateDisplay() {
    // Get the current date
    const currentDate = new Date();

    // Get the number of the current date
    const dateNumber = currentDate.getDate();

    return (
        <div className={dateStyles.dateContainer}>
            <div style={{transform: "scale(1, 2)", marginTop:"-5px"}}>{dateNumber}</div>
        </div>
    );
}
