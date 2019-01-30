
// start game with X
let player="X";
numberOfPlay = 0; 
numberOfWin = 0;
$("#message").html(player +" gets to start!");
$("#topicMessage").html(" Tic Tac Toe / Two player");
$("#numOfWin").html( "X Win: "+ numberOfWin);


function palyerGame(event){
    if ($(event.target).text() === ''){
        // add player to html
        $(event.target).text(player);
     
        
        // find winner of game
        // change turn
        if (player === 'X') {
            player = 'O'
            
        }else{
            player = 'X'
        }
        $("#message").html(player +" turn");
    } else {
        alert("Already clicked, choose another box")
    }
            findWinner()

}
function reste(){
    $(".tic").text("");
    numberOfPlay = 0;
    
}

function findWinner(){
    let box1 = $('.box1').text()
    let box2 = $('.box2').text()
    let box3 = $('.box3').text()
    let box4 = $('.box4').text()
    let box5 = $('.box5').text()
    let box6 = $('.box6').text()
    let box7 = $('.box7').text()
    let box8 = $('.box8').text()
    let box9 = $('.box9').text()  
     numberOfPlay ++
     
   
    
    if (
    box1 == box2 && box2 == box3 && box3 !== ''||
    box4 == box5 && box5 == box6 && box6 !== ''||
    box7 == box8 && box8 == box9 && box9 !== ''||
    box7 == box5 && box5 == box3 && box3 !== ''||
    box1 == box5 && box5 == box9 && box9 !== ''||
    box1 == box4 && box4 == box7 && box7 !== ''||
    box2 == box5 && box5 == box8 && box8 !== ''||
    box3 == box6 && box6 == box9 && box9 !== ''   ){
        $(".tic").text("");
        if(player === "O"){
            numberOfWin ++
        // alert("Congratulations X is won.");
        
        }else if(player === "X"){
            alert("Congratulations O is won.")
        }
        numberOfPlay = 0;
        
        
     }  
     if(numberOfPlay === 9){
        $(".tic").text("");
        alert("oh, it's a draw")
        numberOfPlay = 0;
       
     }
}
$("button").on("click", reste)

$(".tic").on("click" , palyerGame)


