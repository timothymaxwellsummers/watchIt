import React from 'react';
import dateStyles from '../styles/date.module.css';

export default function DateDisplay({ name }) {
    // Get the current date
    const currentDate = new Date();

    // Get the number of the current date
    const dateNumber = currentDate.getDate();

    return (
        <>
        { name === "Cartier" ?
            <div className={dateStyles.dateContainerCartier}>
                <div style={{transform: "scale(1, 2)", marginTop:"-5px"}}>{dateNumber}</div>
            </div>
            :
            <div className={dateStyles.dateContainerSeamaster}>
                <div style={{transform: "scale(1, 2)", marginTop:"-2px"}}>{dateNumber}</div>
            </div>
        }
        </>
    );
}
