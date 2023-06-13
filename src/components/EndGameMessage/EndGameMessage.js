import React from 'react';
import PropTypes from 'prop-types';

const EndGameMessage = ({ answer, numOfTryToGuess, resultStatus }) => {
    let resultMsg = '';

    if (resultStatus === 'winner') {
        resultMsg = (
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in <strong>{numOfTryToGuess} guesses</strong>.
                </p>
            </div>
        );
    } else if (resultStatus === 'loser') {
        resultMsg = (
            <div className="sad banner">
                <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            </div>
        );
    }

    return resultStatus ? resultMsg : null;
};

EndGameMessage.propTypes = {
    answer: PropTypes.string.isRequired,
    numOfTryToGuess: PropTypes.number.isRequired,
    resultStatus: PropTypes.string.isRequired
};

export default EndGameMessage;
