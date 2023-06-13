import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import EndGameMessage from '../EndGameMessage';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guessList, setGuessList] = useState([]);
    const [isGameOverMan, setIsGameOverMan] = useState(false);
    const [resultStatus, setResultStatus] = useState('');
    const [numOfTryToGuess, setNumOfTryToGuess] = useState(0);

    const addGuess = guess => {
        setGuessList([
            ...guessList,
            guess
        ]);
    };

    return (
        <>
            <GuessResults
                guessList={guessList}
                answer={answer}
                setIsGameOverMan={setIsGameOverMan}
                setResultStatus={setResultStatus}
                setNumOfTryToGuess={setNumOfTryToGuess}
            />
            <GuessInput
                onAddingGuess={addGuess}
                guessList={guessList}
                isGameOverMan={isGameOverMan}
            />
            <EndGameMessage
                answer={answer}
                resultStatus={resultStatus}
                numOfTryToGuess={numOfTryToGuess}
            />
        </>
    );
}

export default Game;
