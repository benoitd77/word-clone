import React from 'react';
import PropTypes from 'prop-types';

const GuessList = ({ guessList }) => {
    return guessList && (
        <div className="guess-results">
            {
                guessList.map((listItem, i) => {
                    return (
                        <p key={i} className="guess">{listItem}</p>
                    );
                })
            }
        </div>
    );
};

GuessList.propTypes = {
    guessList: PropTypes.array.isRequired
};

export default GuessList;
