type Team = {
    score: number;
    shortName: string;
};

type Teams = {
    away: Team;
    home: Team;
};

export type Games = {
    dates: Array<{
        date: string;
        games: Array<{
            gamePk: number;
            seriesDescription: string;
            teams: Teams;
        }>;
    }>;
};

export type GameData = {
    gameData: {
        teams: Teams;
    };
    liveData: {
        linescore: {
            teams: {
                away: {
                    runs: number;
                };
                home: {
                    runs: number;
                };
            };
        };
    };
};
