let music = new Audio("bgm.mp3");
let audioTurn = new Audio("game_touch.wav");
let gameover = new Audio("gameover.wav");
let game = 'ON';
let turn = "X";
 
const changeTurn = () => {
     return turn === "X"?"0":"X" ;
}
  
function checkwin(){
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],

  ]
  wins.forEach(e=> {
      if((boxtext[e[0]].innerText==boxtext[e[1]].innerText) && (boxtext[e[1]].innerText==boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !=='') )
     { document.getElementById("info").innerText =(boxtext[e[0]].innerText + " is the WINNER");
      game = 'OFF';
      document.getElementById('img').style.height='30vh';
      document.getElementById('img').style.width='25vw';
      gameover.play();

    }
      })
}
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach ( element => {
    let boxtext = element.querySelector('.boxtext');
    
    element.addEventListener('click', ()=> {
        audioTurn.play();
        if(boxtext.innerText == '' && game=='ON' ){
             boxtext.innerText = turn;
             turn = changeTurn();
            checkwin();
            if(game=='ON')
         document.getElementById('info').innerText = ("Turn for "+ turn );
        }

    })

})

let reset =document.getElementById('reset');
reset.addEventListener('click', () =>{
    let boxtext = document.getElementsByClassName("boxtext");
    // Array.from(boxtext).forEach(element =>
    //     {
    //         element.innerText="";
    //     })
    for(let element of boxtext){
        element.innerText="";
    }
    document.getElementById('img').style.height='0';
    document.getElementById('img').style.width='0';
})