var database;
var game_state = 0;
var player_count = 0;
var form, game, players;
var all_players;

function setup(){
    createCanvas(400,400);

    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){
    if (player_count === 2){
        game.updateGameState(1);
    }

    if (game_state === 1){
        clear();
        game.play();
    }
}