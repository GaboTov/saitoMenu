let c = 0;

function updateFuntion (){
    c++;
    if (c >= 3){
     c= 0;
 }
    let img = document.getElementById("fondo");
    
    img.className = `backImg${c}`; 

}





export default updateFuntion;