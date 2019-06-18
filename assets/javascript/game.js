var Char1 = {
    name: "Kylo Ren",
    hitpoints: 120,
    attackpower: 8,
    counterattackpower: 20 
};
var Char2 = {
    name: "Jango Fett",
    hitpoints: 140,
    attackpower: 12,
    counterattackpower: 30
}
var Char3 = {
    name: "Anakin Skywalker",
    hitpoints: 160,
    attackpower: 16,
    counterattackpower: 35
}
var Char4 = {
    name: "Quigon-jin",
    hitpoints: 180,
    attackpower: 20,
    counterattackpower: 40
}
$(document).ready(function () {
    var taglist = ["#char1", "#char2", "#char3", "#char4"];
    var tags = "";
    tags = tags.concat(taglist[0], ", ", taglist[1], ", ", taglist[2], ", ", taglist[3]);
    console.log(tags);
    playerpicked = false;
    enemypicked = false;
    $(tags).click(function () {
        if (!playerpicked) {  
        $("#yourcharacter").append($(this))
        player = "#"+this.id;
        playerpicked = true;
        for (i = 0; i < taglist.length; i++) {
            if (taglist [i] != player){
                $("#enemies").append($(taglist[i]));
            }
        }
    }
    else if (playerpicked && ("#"+this.id == player)){
        console.log("playeralreadypicked")
    }
    else if (!enemypicked) {
        $("#defender").append(this);
        defender = "#" +this.id;
        enemypicked = true;
    }
});
});