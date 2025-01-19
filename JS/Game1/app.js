let boxes=document.querySelectorAll(".box");
let reset=document.querySelector('#reset');

let turno=true; // to know whose turn

const win=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        console.log("event occur");
        if(turno)
        {
            box.innerText="x";
            turno=false;
            
        }else
        {
            box.innerText="o";
            turno=true;

        }
        checkwinner();
    });

});

reset.addEventListener("click", () =>
{
    resetgame();
    console.log("hlo");
});

const resetgame=()=>
    {
        turno=true; // to know whose turn
        enablebtn();

    } ;

enablebtn=()=>
{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
}

disablebtn=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

checkwinner=()=>
{
   for(let pattern of win)
   {
     let pos1 = boxes[pattern[0]].innerText;
     let pos2 = boxes[pattern[1]].innerText;
     let pos3 = boxes[pattern[2]].innerText;

     if(pos1!="" && pos2!="" && pos3!="")
     {
        if(pos1===pos2 && pos2===pos3)
        {
            console.log("winner is =",pos1);
            document.getElementById("winner").textContent = "The winner is:"+pos1;
            disablebtn();
        }
     }
   }
};
// Set the winner's name to "Om"
