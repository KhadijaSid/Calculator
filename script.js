let input = document.querySelector("#inputBox");

let clear = document.querySelector("#clear");

let equal = document.querySelector("#equal");

let button = document.querySelectorAll("button");


clear.addEventListener("click", ()=> {
    input.value = "";
});

let ans;
button.forEach((btn) =>{
    btn.addEventListener("click", (event)=>{
        if(event.target.innerText != '=' && event.target.innerText !='C' && event.target.innerText !='⌫' ){
          input.value = input.value + event.target.innerText;
        }
        else if(event.target.innerText === 'C'){
            input.value ="";
        }
        else if(event.target.innerText === '⌫'){
            const currentValue = input.value;
            input.value = currentValue.slice(0, -1);
        }
        else if(event.target.innerText === '=' && input.value !=""  )
        {
            let exp = input.value;
            ans = eval(exp);
            input.value = ans;
            console.log(ans);
        }
        else {
            console.log("write sth first");
        }
    })
})







