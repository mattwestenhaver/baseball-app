const baseUrl = 'https://statsapi.mlb.com';

const mlbId = 1;

export async function fetchMLBGames() {
    const gamesResponse = await fetch(
        `${baseUrl}/api/v1/schedule/games?sportId=${mlbId}`
    );

    return gamesResponse.json();
}

export async function fetchMLBGameById(id) {
    const gameResponse = await fetch(
        `${baseUrl}/api/v1.1/game/663466/feed/live`
    );

    return gameResponse.json();
}
