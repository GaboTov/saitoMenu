let c1 = 0;

function updateFuntion (){
    c1++;
    if (c1 >= 3){
     c1= 0;
 }
    let img = document.getElementById("fondo");
    
    img.className = `backImg${c1}`; 

}


var c =0;

function nxtPic(arr,element){
    const img = element;
    const arrl=arr.length - 1;
    c++;
    
    if (c >= arr.length){
        c = 0;
        img.id = arr[c];
        
    }
    else{
        
        
        img.id = arr[c];
        
        
    }
    
}
function prvPic(arr,element){
    
    const img = element;
    c--;
    if (c < 0){
        c = arr.length-1;
        img.id = arr[c];
    }
    else{
        
        
        img.id = arr[c];
        
    }
}

setInterval(updateFuntion,6800);

const imgsRollPollo =['rollPollo0','rollPollo1'];


const imgPollo = document.getElementById("rollPollo0");
const nxtBtnPollo = document.getElementById("nxtBtnPollo");
const prvBtnPollo = document.getElementById("prvBtnPollo");

nxtBtnPollo.onclick=function(){nxtPic(imgsRollPollo,imgPollo)};
prvBtnPollo.onclick=function(){prvPic(imgsRollPollo,imgPollo)};


const imgsRollAguacate = ['rollAguacate0','rollAguacate1'];
const imgAguacate = document.getElementById("rollAguacate0");
const nxtBtnAguacate = document.getElementById("nxtBtnAguacate");
const prvBtnAguacate = document.getElementById("prvBtnAguacate");
nxtBtnAguacate.onclick=function(){nxtPic(imgsRollAguacate,imgAguacate)};
prvBtnAguacate.onclick=function(){prvPic(imgsRollAguacate,imgAguacate)};

const imgsrollCalifornia = ["california0","california1"];
const imgCalifornia = document.getElementById("california0");
const nxtBtnCalifornia = document.getElementById("nxtBtnCalifornia");
const prvBtnCalifornia = document.getElementById("prvBtnCalifornia");
nxtBtnCalifornia.onclick=function(){nxtPic(imgsrollCalifornia,imgCalifornia)};
prvBtnCalifornia.onclick=function(){prvPic(imgsrollCalifornia,imgCalifornia)};

const imgsRollRebozado = ["rebozado0","rebozado1"];
const imgRebozado = document.getElementById("rebozado0");
const nxtBtnRebozado = document.getElementById("nxtBtnRebozado");
const prvBtnRebozado = document.getElementById("prvBtnRebozado");
nxtBtnRebozado.onclick=function(){nxtPic(imgsRollRebozado,imgRebozado)};
prvBtnRebozado.onclick=function(){prvPic(imgsRollRebozado,imgRebozado)};

const imgsRollPincho = ["pincho0","pincho1"];
const imgPincho = document.getElementById("pincho0");
const nxtBtnPincho = document.getElementById("nxtBtnPincho");
const prvBtnPincho = document.getElementById("prvBtnPincho");
nxtBtnPincho.onclick=function(){nxtPic(imgsRollPincho,imgPincho)};
prvBtnPincho.onclick=function(){prvPic(imgsRollPincho,imgPincho)};

const imgsRollSurimi = ["rollSurimi0","rollSurimi1"];
const imgSurimi = document.getElementById("rollSurimi0");
const nxtBtnSurimi = document.getElementById("nxtBtnSurimi");
const prvBtnSurimi = document.getElementById("prvBtnSurimi");
nxtBtnSurimi.onclick=function(){nxtPic(imgsRollSurimi,imgSurimi)};
prvBtnSurimi.onclick=function(){prvPic(imgsRollSurimi,imgSurimi)};

