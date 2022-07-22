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

type CurrentPlay = {
    matchup: {
        batter: {
            fullName: string;
        };
        pitcher: {
            fullName: string;
        };
    };
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
        balls: number;
        outs: number;
        strikes: number;
    };
    plays: {
        currentPlay: CurrentPlay;
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
