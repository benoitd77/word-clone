import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const Guess = ({
    answer,
    guess,
    linePosition,
    setIsGameOverMan,
    setNumOfTryToGuess,
    setResultStatus
}) => {
    const [validatedGuess, setValidatedGuess] = useState([]);

    useEffect(() => {
        if (guess) {
            const checkedGuess = checkGuess(guess, answer);
            setValidatedGuess(checkedGuess);

            let hasAllCorrectLetters = checkedGuess.every(letter => letter.status === 'correct');

            if (hasAllCorrectLetters) {
                setIsGameOverMan(true);
                setResultStatus('winner');
                setNumOfTryToGuess(linePosition + 1);
            } else if (linePosition === NUM_OF_GUESSES_ALLOWED - 1) {
                setIsGameOverMan(true);
                setResultStatus('loser');
            }
        }
    }, [answer, guess, linePosition, setIsGameOverMan, setNumOfTryToGuess, setResultStatus]);

    return (
        <p className="guess">
            {
                range(NUM_OF_LETTERS).map((_, i) => {
                    return (
                        <span key={i} className={`cell ${validatedGuess.length > 0 ? validatedGuess[i].status : ''}`}>
                            {guess && guess[i]}
                        </span>
                    );
                })
            }
        </p>
    );
};

Guess.propTypes = {
    answer: PropTypes.string.isRequired,
    guess: PropTypes.string.isRequired,
    linePosition: PropTypes.number.isRequired,
    setIsGameOverMan: PropTypes.func.isRequired,
    setNumOfTryToGuess: PropTypes.func.isRequired,
    setResultStatus: PropTypes.func.isRequired
};

export default Guess;
