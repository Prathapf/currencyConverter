const curr=document.querySelectorAll(".currency-select");
const button=document.querySelector(".convert-btn");
const currs=document.querySelector(".currency1");
const err=document.querySelector(".err");
fetch('https://api.frankfurter.app/currencies')
.then(res =>res.json())
.then(res => displayDropDown(res))

function displayDropDown(res){
    const currency=Object.entries(res);
    for(i=0;i<currency.length;i++){
        let option=`<option value=${currency[i][0]}>${currency[i][0]}</option>`;
        curr[0].innerHTML += option;
        curr[1].innerHTML +=option;
        
    }
}
button.addEventListener("click",() => {
    let value1=curr[0].value ;
    let value2=curr[1].value ;    
    let currsvalue=currs.value ;
    if(value1 === value2){
        err.textContent="Choose different Currencies";
        err.style.display="block";
    }
    else{
        convert(value1,value2,currsvalue);
    }
}
)

function convert(value1,value2,currsvalue){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${currsvalue}&from=${value1}&to=${value2}`)
    .then(resp => resp.json())
    .then((data) => {
    document.querySelector(".currency2").value= Object.values(data.rates)[0];
  });
}

