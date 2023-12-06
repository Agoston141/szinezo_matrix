const container = document.querySelector(".container");
for (let i = 1; i < 10; i++){  
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);  
    container.innerHTML += `<div class="box" id="${i}">${i}</div>`;
    const boxId = document.getElementById(`${i}`);
    boxId.style.backgroundColor = `rgb(${r},${g},${b})`;
}
// 1. négyzet manipulálása:***************************************
const box1 = document.getElementById("1");
//let isBlurred = false;
const blurry = (event)=>{
    event.target.classList.toggle("blur");
    /*
    isBlurred = !isBlurred;
    if (isBlurred){
        event.target.classList.add("blur");        
    }else{
        event.target.classList.remove("blur");        
    }
    */
}
box1.addEventListener("click", blurry);
// 2. négyzet manipulálása:***************************************
const box2 = document.getElementById("2");
const reduce1 = (event) => {
    // Ternary operator egyszerű if-else kiváltására:
    event.target.style.scale = event.target.style.scale === "0.4" ? "1" : "0.4";
    /*
    if ( event.target.style.scale === "0.4"){
        event.target.style.scale = "1";
    }else{
        event.target.style.scale = "0.4";
    }
    */

}
box2.addEventListener("mouseover", reduce1);
// 3. négyzet manipulálása:***************************************
const box3 = document.getElementById("3");
const randomizeNum = (event) =>{
    let rnd = Math.floor(Math.random()*100);
    event.target.innerText = rnd;
}
box3.addEventListener("dblclick", randomizeNum);

// 4. négyzet manipulálása:***************************************
const box4 = document.getElementById("4");

const visibilityBox = () => {
    box4.style.visibility = "visible";
}

const disappear = (event) =>{
    // Az eljárás itt eltünteti azt az elemet, amelyen az esemény bekövetkezett:
    event.target.style.visibility = "hidden";
    const el = event.target;
    // A setTimeout beépített eljárásnak először adni kell egy eljárást/függvényt, amely itt láthatóvá teszi újra az elemet, utána vesszővel meg kell adni, (1000-ed sec) mennyi idő múlva hívja meg az előtte álló visibilityBox nevű eljárást. A meghívandó eljárást most nem a setTimeout-ban deklaráltam. Így az is jobban látszódhat, hogy a visibilityBox a setTimeout eljárásban, CALLBACK függvény/eljárás-ként hívódik meg. 
    // Ez azt jelenti, hogy nem teszem ki a neve után járó () zárójeleket, mert akkor a visibilityBox azonnal meghívódna, és nem várná meg az időzítés lejártát! 
    // Tehát a visibilityBox-ot a setTimeout eljárás hívja meg, futtatja akkor, amikor a mögötte látható időzítés lejár.
    setTimeout(visibilityBox,1000);
}

box4.addEventListener("click", disappear);

const box5 = document.getElementById("5")


const kerekités = ()=>{
    const boxes=document.querySelectorAll(".box")
    for(box of boxes){
        box.style.borderRadius=box.style.borderRadius==="50%" ? box.style.borderRadius="" : box.style.borderRadius="50%";
    }
}
box5.addEventListener("click",kerekités);

const box6=document.getElementById("6");
document.addEventListener("mousemove", (event)=>{
    let x = event.clientX;
    let y = event.clientY;
    box6.style.fontSize="1.7rem"
    box6.innerHTML = `x:${x} <br>y:${y}`
})

const box7 =document.getElementById("7")
const input7 = document.querySelector(".container2 .seven input")
const button7 = document.querySelector(".container2 .seven button")

const szambeiras=()=>{
    box7.innerText=`${input7.value}`;
}


button7.addEventListener("click", szambeiras)


const box8 = document.getElementById("8");
const input8 = document.querySelector(".container2 .eight input");
input8.addEventListener("keydown",(event) =>{
    box8.innerText=event.key
})

//BOX 9: Mini kalkulátor:
const calc = document.querySelector(".nine button");

const calculate = ()=>{
    const box9 = document.getElementById("9")
    let result = Number(document.getElementById("9").innerText);
    const operator = document.querySelector(".nine select").value;
    const operandus = document.querySelector(".nine input").value;

    switch(operator){
        case "add" :
            result += Number(operandus);
            break;

        case "sub" :
            result -=Number(operandus)
            break;

        case "multiply" :
            result*=Number(operandus);
            break;

        case "div" :
            result /=Number(operandus)
            break;

        default:
            break;
    }
    box9.innerText = operandus ? result : "-";
    if(!operandus) {
        setTimeout(()=>{
            box9.innerText = "9"
            result = 9
        },1000);
    }
}



calc.addEventListener("click", calculate);