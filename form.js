class Form{
    constructor(){
        this.title = createElement("h2");
        this.inputBox = createInput("Name: ");
        this.submitButton = createButton("Start Now!!");
        this.greeting = createElement("h4");
    }

    display(){
        this.title.position(130,0);
        this.title.html("Racing Rodeo!!");

        this.inputBox.position(130,160);

        this.submitButton.position(250,200);

        this.submitButton.mousePressed(()=>{
            this.inputBox.hide();
            this.submitButton.hide();
            players.name = this.inputBox.value();
            player_count = player_count + 1;
            players.index = player_count;
            players.updatePlayerCount(player_count);
            players.updatePlayerInfo();
            this.greeting.position(130,160);
            this.greeting.html("Welcome to the game," + players.name + "!! Please wait for the other players to join.");
        })
    }

    hide(){
        this.inputBox.hide();
        this.greeting.hide();
        this.submitButton.hide();
        this.title.hide();
    }
}