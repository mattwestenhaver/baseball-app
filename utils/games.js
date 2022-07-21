export const getTeamNames = (gameData) => {
    const {
        teams: {
            away: { shortName: awayName },
            home: { shortName: homeName },
        },
    } = gameData;

    return { awayName, homeName };
};
