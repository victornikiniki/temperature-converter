const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp; 

function tempConvert(){
    if(toFahrenheit.checked){ 
        temp = Number(textBox.value); 
        f = (temp * (9/5) + 32);
        result.textContent = `${f} deg fahrenheit`;
        
    }
    else if(toCelsius.checked){ 
        temp = Number(textBox.value); 
        c = (temp - 32) * (5/9);
        result.textContent = `${c} deg celsius`
    }
    else{ 
        result.textContent = "Select a unit"; 
    }
}
