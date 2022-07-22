type Team = {
    score: number;
    shortName: string;
    name: string;
    teamName: string;
};

type Teams = {
    away: Team;
    home: Team;
};

export type LiveGameData = {
    linescore: {
        currentInningOrdinal: string;
        inningState: string;
        teams: {
            away: {
                runs: number;
            };
            home: {
                runs: number;
            };
        };
    };
    plays: {
        currentPlay: {
            count: {
                balls: number;
                outs: number;
                strikes: number;
            };
        };
    };
};

export type GameData = {
    teams: Teams;
    status: {
        abstractGameState: string;
    };
};

export type SpecificGameData = {
    gameData: GameData;
    liveData: LiveGameData;
};
