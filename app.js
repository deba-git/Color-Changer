

const btn = document.getElementById("button");
const randomColor = () =>{
    let value = "0123456789ABCDEF";
    let constant = "#" ;
    for(let i=0; i<6 ;i++){
        constant = constant + value[Math.floor(Math.random() * 16)]
    }
    return constant;
} 
function changecolor (){
    document.getElementById("canvas").style.backgroundColor = randomColor();
}
btn.addEventListener("click",changecolor);