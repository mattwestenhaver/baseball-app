import React from 'react';

const GameContainer = ({ data }) => {
    const {
        gameData: { teams },
    } = data;

    return (
        <div>
            <div>
                {teams.away.shortName} vs. {teams.home.shortName}
            </div>
        </div>
    );
};

export default GameContainer;
