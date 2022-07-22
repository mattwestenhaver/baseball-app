type GamesTeam = {
    score: number;
    team: {
        name;
    };
};

type GamesTeams = {
    home: GamesTeam;
    away: GamesTeam;
};

export type GamesArray = Array<{
    gamePk: number;
    teams: GamesTeams;
    status: {
        abstractGameState: string;
    };
}>;

export type Games = {
    dates: Array<{
        date: string;
        games: GamesArray;
    }>;
};
