let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue ='';
let box = document.getElementById('box');
box.addEventListener('mousemove', runEvent);
function runEvent(e){
       document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;

        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;  //to take as many times input
            screen.value = screenValue; 
        }
        else if(buttonText == 'C'){
             
             screenValue = "";  
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue) //eval is a js function
        }
        else{
            screenValue += buttonText;  
            screen.value = screenValue;
        }


    })
}