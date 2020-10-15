class Game{
    constructor(){

    }

    getGameState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value", (data)=>{
            game_state = data.val();
        })
    }

    updateGameState(state){
        var gameStateref = database.ref("/");
        gameStateref.update({
            gameState: state
        })
    }

    start(){
        if (game_state === 0){
            players = new Players();
            players.getPlayerCount();
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        text("The game has started! Good luck!", 130, 0);
        Players.getAllPlayers();
        if (all_players !== undefined){
            var positionY = 130;
            for (var plr in all_players){
                if (plr === "player" + players.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                text(all_players[plr].name + ": " + all_players[plr].distance, 100, positionY);
                positionY = positionY + 30;
            }
        }

        if (keyIsDown(UP_ARROW) && players.index !== null){
            players.distance = players.distance + 20;
            players.updatePlayerInfo();
        }
    }
}