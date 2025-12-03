let boxes =  document.querySelectorAll('.box');
let resetBtn = document.getElementById('reset');
let newGameBtn = document.getElementById('new-game');
let turn0 = true;

const  winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],        
    [3,4,5],
    [6,7,8],
];

let resetGame = () => {
    boxes.forEach((box) => {
        turn0 = true;
        box.innerText = "";
        box.disabled = false;
    });

}
resetBtn.addEventListener("click",resetGame);

let newGame = () => {
    resetGame();
}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    console.log("clicked");
    if(turn0) {
        box.innerText = "0";
        turn0 = false;
    }else{
        box.innerText = "X";
        turn0 = true;   
    }
    box.disabled = true;  
    checkWin(); 
})
});

const checkWin = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]],
        //     boxes[pattern[1]],
        //     boxes[pattern[2]]
        // );

    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    
    if(pos1 != "" && pos2 != "" && pos3 ){
        if(pos1 == pos2 && pos2 == pos3){
            alert(`Congratulation ${pos1} has won the game!`);
            boxes.forEach((box) => {
                box.disabled = true;
            });
        }
    }
    }
}
