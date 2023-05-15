// ---------------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Team Stats Project
// ---------------------------------------------------------------------------

const team = {
    _players: [
      {firstName: "John", lastName: "Miracle", age: 25},
      {firstName: "William", lastName: "Denver", age: 24},
      {firstName: "Marcus", lastName: "Pebble", age: 26}
    ],
    _games: [
      {opponent: "Chicago", teamPoints: 3, opponentPoints: 2},
      {opponent: "New York", teamPoints: 1, opponentPoints: 4},
      {opponent: "Los Angeles", teamPoints: 2, opponentPoints: 0}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge)
    {
      this.players.push({
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      })
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints)
    {
      this.games.push({
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints 
      })
    }
  };
  
// Adds a new player to the team
  
team.addPlayer("Bugs", "Bunny", 76);
  
// Adds a new game to games
  
team.addGame("Titans", 100, 98);