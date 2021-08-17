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



export {prvPic,nxtPic};
