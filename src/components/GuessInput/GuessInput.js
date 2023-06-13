import React, { useState } from 'react';
import PropTypes from 'prop-types';

import GuessList from '../GuessList';

const GuessInput = ({ onAddingGuess, guessList, isGameOverMan }) => {
    const [guess, setGuess] = useState('');

    const handleOnSubmit = e => {
        e.preventDefault();
        onAddingGuess(guess);
        setGuess('');
    };

    return (
        <>
            <form className="guess-input-wrapper" onSubmit={e => handleOnSubmit(e)}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input
                    type="text"
                    id="guess-input"
                    minLength={5}
                    maxLength={5}
                    pattern="[a-zA-Z]{5}"
                    value={guess}
                    onChange={e => setGuess(e.target.value.toUpperCase())}
                    disabled={isGameOverMan}
                />
            </form>
            <GuessList guessList={guessList} />
        </>
    );
};

GuessInput.propTypes = {
    onAddingGuess: PropTypes.func.isRequired,
    guessList: PropTypes.array.isRequired,
    isGameOverMan: PropTypes.bool.isRequired
};

export default GuessInput;
