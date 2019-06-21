var Char = []

Char[0] = {

    name: "Kylo Ren",

    hitpoints: 120,

    attackpower: 8,

    counterattackpower: 20,

    tag: "#char1"

};

Char[1] = {

    name: "Jango Fett",

    hitpoints: 140,

    attackpower: 12,

    counterattackpower: 20,

    tag: "#char2"

}

Char[2] = {

    name: "Anakin Skywalker",

    hitpoints: 160,

    attackpower: 16,

    counterattackpower: 15,

    tag: "#char3"

}

Char[3] = {

    name: "Quigon-jin",

    hitpoints: 180,

    attackpower: 20,

    counterattackpower: 10,

    tag: "#char4"

}

var taglist = ["#char1", "#char2", "#char3", "#char4"];

var tags = "";

var playerpicked;

var enemypicked;

var pindex;

var dindex;

var player;

var defender;

var gameover;

var attackpts;

var defendpts;

var wins;

var soundbyte;



function gameinit() {

    $("#char1_name").text(Char[0].name);

    $("#char2_name").text(Char[1].name);

    $("#char3_name").text(Char[2].name);

    $("#char4_name").text(Char[3].name);

    $("#char1_hp").text(Char[0].hitpoints);

    $("#char2_hp").text(Char[1].hitpoints);

    $("#char3_hp").text(Char[2].hitpoints);

    $("#char4_hp").text(Char[3].hitpoints);



    tags = tags.concat(taglist[0], ", ", taglist[1], ", ", taglist[2], ", ", taglist[3]);



    playerpicked = false;

    enemypicked = false;

    gameover = false;

    wins = 0;

}

gameinit();



$(tags).click(function () {



    if (!playerpicked) {

        $("#yourcharacter").append($(this))

        var p = "#" + this.id;

        pindex = p.slice(-1) - 1;

        player = Char[pindex];

        playerpicked = true;

        attackpts = player.attackpower;

        for (var i = 0; i < taglist.length; i++) {

            if (taglist[i] != p) {

                $("#enemies").append($(taglist[i]));

            }

        }

    }

    else if (playerpicked && ("#" + this.id == player)) {

        console.log("playeralreadypicked")

    }

    else if (!enemypicked) {

        $("#defender").append(this);

        var d = "#" + this.id;

        dindex = d.slice(-1) - 1;

        defender = Char[dindex];

        defendpts = defender.counterattackpower;

        enemypicked = true;

    }

});

$("#attack").click(function () {



    if (playerpicked && enemypicked && !gameover) {

        defender.hitpoints -= attackpts;

        attackpts += player.attackpower;

        console.log(defender.tag + "_hp");

        $(defender.tag + "_hp").text(defender.hitpoints);



        player.hitpoints -= defender.counterattackpower;

        console.log(player.tag + "_hp");

        $(player.tag + "_hp").text(player.hitpoints);

    }

    if (player.hitpoints < 1) {
        console.log("you lost");
        $(".message").text("You Lost The Game!")

        location.reload(true);

    }

    if (defender.hitpoints < 1) {
        document.getElementById('winnersound').play();
        console.log("you won this battle");
        $(".message").text("You Won The Battle!")
        wins += 1;

        $(defender.tag).empty();

        enemypicked = false;

    }

    if (wins == 3) {
        console.log("you won the game");
        $(".message").text("You Won The Game!")

        location.reload(true);


    }



})