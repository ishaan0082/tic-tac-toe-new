var chance = 0,mode = false;
//----------------------------------------------Turning On the Game--------------------------------------------

$(".game_text").click(function () { 
    if(mode == false){
    mode = true;
    $(".block").html("");
    $(".game-over").text("");
    $(".game_text").text("Player 1");
    }
});

$(".game-over").click(function () { 
    if(mode == false){
    mode = true;
    $(".block").html("");
    $(".game-over").text("");
    $(".game_text").text("Player 1");
    }
});

//-------------------------------------------Adding Image when clicked------------------------------------------


$(".block").click(function () {

if(chance % 2 === 0){
    if(mode && (this.innerHTML === "")){
        console.log(this.innerHTML);
   $(".game_text").text("Player 2");
    this.innerHTML = "<img src='./x.png'>";
    chance++;
    }
}
else{
    if(mode && (this.innerHTML === "")){
    $(".game_text").text("Player 1");
    this.innerHTML = "<img src='./o.png'>";
    chance++;
    }
}
// -------------------------------------- Checking for full block-----------------------------------------------
if(chance === 9){
    $(".game_text").text("No One Wins");
    reset();
}


// ------------------------------------------Checking For winner------------------------------------------------

var _1x1 = $("._1x1 img").attr("src");
var _1x2 = $("._1x2 img").attr("src");
var _1x3 = $("._1x3 img").attr("src");
var _2x1 = $("._2x1 img").attr("src");
var _2x2 = $("._2x2 img").attr("src");
var _2x3 = $("._2x3 img").attr("src");
var _3x1 = $("._3x1 img").attr("src");
var _3x2 = $("._3x2 img").attr("src");
var _3x3 = $("._3x3 img").attr("src");


    if(mode == true){

// ------------------------------------------Horizontal Rows --------------------------------------------------

if( ((_1x1 === "./x.png")&&(_1x2 === "./x.png")&&(_1x3 === "./x.png")) || ((_1x1 === "./o.png")&&(_1x2 === "./o.png")&&(_1x3 === "./o.png"))){
    
    if(chance % 2 !== 0){
        $(".game_text").text("🚩Player 1 Wins 🚩");
        console.log("Player 1 Wins");
    }
    else{
        $(".game_text").text("🚩Player 2 Wins 🚩");
        console.log("Player 2 Wins");
    }
    reset();
}
else if( ((_2x1 === "./x.png")&&(_2x2 === "./x.png")&&(_2x3 === "./x.png")) || ((_2x1 === "./o.png")&&(_2x2 === "./o.png")&&(_2x3 === "./o.png"))){
    if(chance % 2 !== 0){
        $(".game_text").text("🚩Player 1 Wins 🚩");
        console.log("Player 1 Wins");
    }
    else{
        $(".game_text").text("🚩Player 2 Wins 🚩");
        console.log("Player 2 Wins");
    }
    reset();
}
else if( ((_3x1 === "./x.png")&&(_3x2 === "./x.png")&&(_3x3 === "./x.png")) || ((_3x1 === "./o.png")&&(_3x2 === "./o.png")&&(_3x3 === "./o.png"))){

    if(chance % 2 !== 0){
        $(".game_text").text("🚩Player 1 Wins 🚩");
        console.log("Player 1 Wins");
    }
    else{
        $(".game_text").text("🚩Player 2 Wins 🚩");
        console.log("Player 2 Wins");
    }
    reset();
}
//----------------------------------------Columns------------------------------------------------------------

else if( ((_1x1 === "./x.png")&&(_2x1 === "./x.png")&&(_3x1 === "./x.png")) || ((_1x1 === "./o.png")&&(_2x1 === "./o.png")&&(_3x1 === "./o.png")) ){

    if(chance % 2 !== 0){
        $(".game_text").text("🚩Player 1 Wins 🚩");
        console.log("Player 1 Wins");
    }
    else{
        $(".game_text").text("🚩Player 2 Wins 🚩");
        console.log("Player 2 Wins");
    }
    reset();
}
else if( ((_1x2 === "./x.png")&&(_2x2 === "./x.png")&&(_3x2 === "./x.png")) || ((_1x2 === "./o.png")&&(_2x2 === "./o.png")&&(_3x2 === "./o.png"))){

    if(chance % 2 !== 0){
        $(".game_text").text("🚩Player 1 Wins 🚩");
        console.log("Player 1 Wins");
    }
    else{
        $(".game_text").text("🚩Player 2 Wins 🚩");
        console.log("Player 2 Wins");
    }
    reset();
}
else if( ((_1x3 === "./x.png")&&(_2x3 === "./x.png")&&(_3x3 === "./x.png")) || ((_1x3 === "./o.png")&&(_2x3 === "./o.png")&&(_3x3 === "./o.png"))){

    if(chance % 2 !== 0){
        $(".game_text").text("🚩Player 1 Wins 🚩");
        console.log("Player 1 Wins");
    }
    else{
        $(".game_text").text("🚩Player 2 Wins 🚩");
        console.log("Player 2 Wins");
    }
    reset();
}
// -----------------------------------------Diagonals ------------------------------------------------------

else if( ((_1x1 === "./x.png")&&(_2x2 === "./x.png")&&(_3x3 === "./x.png")) || ((_1x1 === "./o.png")&&(_2x2 === "./o.png")&&(_3x3 === "./o.png"))){
    
    if(chance % 2 !== 0){
        $(".game_text").text("🚩Player 1 Wins 🚩");
        console.log("Player 1 Wins");
    }
    else{
        $(".game_text").text("🚩Player 2 Wins 🚩");
        console.log("Player 2 Wins");
    }
    reset();
}
else if( ((_1x3 === "./x.png")&&(_2x2 === "./x.png")&&(_3x1 === "./x.png")) || ((_1x3 === "./o.png")&&(_2x2 === "./o.png")&&(_3x1 === "./o.png"))){

    if(chance % 2 !== 0){
        $(".game_text").text("🚩Player 1 Wins 🚩");
        console.log("Player 1 Wins");
    }
    else{
        $(".game_text").text("🚩Player 2 Wins 🚩");
        console.log("Player 2 Wins");
    }
    reset();
}
}});


//-----------------------------------Function to restart---------------------------------------------------

function reset(){
    chance = 0;
    mode = false;
    $(".game-over").text("Click to Restart Game");
}
