let count = 0;

let value = document.getElementById("value")

// console.log(value);

// get all button
let btns = document.querySelectorAll(".btn")

// console.log(btns);

// add listener to button 
btns.forEach((item)=>{
    item.addEventListener("click", (val)=>{
       let style = val.currentTarget.classList
        // increase number
       if (style.contains("increment")) {
            count++  
        // Decrease number
       }else if (style.contains("decrement")) {
        count--
        // reset number 
       }else{
        count = 0
       }
       if (count>0) {
        value.style.color = "green"
       }else if (count<0) {
        value.style.color = "red"
       }
       value.textContent = count;
    })
})