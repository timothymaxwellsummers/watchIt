import React from 'react';
import CartierHourHand from './CartierHands/CartierHourHand';
import CartierMinuteHand from './CartierHands/CartierMinuteHand';
import CartierSecondHand from './CartierHands/CartierSecondHand';
import SeamasterHourHand from './SeamasterHands/SeamasterHourHand';
import SeamasterMinuteHand from './SeamasterHands/SeamasterMinuteHand';
import SeamasterSecondHand from './SeamasterHands/SeamasterSecondHand';

const HandsController = ({ secondDegrees, minuteDegrees, hourDegrees, name }) => {
    // Your component logic here

    return (
        <>
            {name === "Cartier" ? (
                <>
                    <CartierHourHand degrees={hourDegrees} />
                    <CartierMinuteHand degrees={minuteDegrees} />
                    <CartierSecondHand degrees={secondDegrees} />
                </>
            ) : (
                <>
                    <SeamasterHourHand degrees={hourDegrees} />
                    <SeamasterMinuteHand degrees={minuteDegrees} />
                    <SeamasterSecondHand degrees={secondDegrees} />
                </>
            )}
        </>
    );
};

export default HandsController;
