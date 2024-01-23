const choices =document.querySelectorAll(".choice");
let display =document.getElementById('dis');
let usescore=document.getElementById('user-score');
let comscore=document.getElementById('comp-score');
let use=0;
let com=0;

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})

const playgame=(userchoice)=>{
    console.log("user=",userchoice);
    const getchoice=compchoice();
    console.log("comp=",getchoice);

    if(userchoice === getchoice)
    {
        draw();
    }
    else{
        let userwin=true;
        if(userchoice === "st")
        {
            userwin = getchoice ==="pa" ? false : true;
        }
        else if(userchoice ==="sc"){
            userwin = getchoice ==="st" ? false : true;
        }
        else{
            userwin = getchoice ==="sc" ? false: true;
        }
        win(userwin,getchoice);
    }
    
}
const draw=()=>{
    console.log("match draw!!!");
    display.innerHTML=`Match Draw !!!!!`
    display.style.color='black';
}
const win=(userwin,getchoice)=>{
    if(userwin){
        console.log("you win!!!");
        use++;
        usescore.innerHTML=`${use}`;
        display.innerHTML=`You win !!!!`
        display.style.color='green';
    }
    else
    {
        console.log("computer win !!!");
        com++;
        comscore.innerHTML=`${com}`;
        display.innerHTML=`Computer win !!!!`
        display.style.color='red';
    }
}
const compchoice=()=>{
    const opt=["st","pa","sc"];
    const index=Math.floor(Math.random()*3);
    return opt[index];
}