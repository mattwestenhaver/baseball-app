import type { GameData, LiveGameData } from '../types/game';

export const getTeamNames = (
    gameData: GameData
): { awayName: string; homeName: string } => {
    const {
        teams: {
            away: { teamName: awayName },
            home: { teamName: homeName },
        },
    } = gameData;

    return { awayName, homeName };
};

export const getGameInningString = (data: LiveGameData): string => {
    const {
        linescore: { inningState, currentInningOrdinal },
    } = data;

    return `${inningState} of the ${currentInningOrdinal}`;
};

export const getCurrentCountDisplay = (count: {
    balls: number;
    outs: number;
    strikes: number;
}): string => {
    const { balls, strikes, outs } = count;
    return `${balls}-${strikes}, ${outs} outs`;
};
