// an arry of some color from w3 schools
let colorCodes =['#ff8000','#ffbf00','#ffff00','#bfff00','#80ff00','#40ff00','#00ff00','#00ff40','#00ff80',
'#00ffbf','#00ffff','#00bfff','#0080ff','#0040ff','#0000ff','#4000ff','#8000ff', '#bf00ff',
'#ff00ff','#ff00bf','#ff0080','#ff0040','#ff0000'];

// globar variables-----------
const btn = document.getElementById("btn");
const colorCodeHeading =document.getElementById("color");

// event listeners-------------------
btn.addEventListener("click" , colorChanger);


// fucntions------------------- 

// first function to chnage the backgroundColor of the body 
function colorChanger(){
    // random number within the lenght of our color code arrry
    const randomnumberGenarator= Math.floor(Math.random()* colorCodes.length);
    //targetting the body style to change it 
    document.body.style.backgroundColor = colorCodes[randomnumberGenarator];

    // changing the heading with the specif color code 
    colorCodeHeading.innerHTML=`  ${colorCodes[randomnumberGenarator]}`
    
}

 

