import React from 'react';
import PropTypes from 'prop-types';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Guess from '../Guess';

const GuessResults = ({
    answer,
    guessList,
    setIsGameOverMan,
    setNumOfTryToGuess,
    setResultStatus
}) => {
    return (
        <div className="guess-results">
            {
                range(NUM_OF_GUESSES_ALLOWED).map((_, i) => {
                    return (
                        <Guess
                            answer={answer}
                            key={i}
                            linePosition={i}
                            guess={guessList[i] || ''}
                            setIsGameOverMan={setIsGameOverMan}
                            setNumOfTryToGuess={setNumOfTryToGuess}
                            setResultStatus={setResultStatus}
                        />
                    );
                })
            }
        </div>
    );
};

GuessResults.propTypes = {
    guessList: PropTypes.array.isRequired,
    setIsGameOverMan: PropTypes.func.isRequired,
    setNumOfTryToGuess: PropTypes.func.isRequired,
    setResultStatus: PropTypes.func.isRequired
};

export default GuessResults;
