document.getElementById('btn-cash-out').addEventListener('click',(event)=>{
    event.preventDefault();
    const cashOut=document.getElementById('cash-out').value
    const pin=document.getElementById('pin-cash').value
    if(isNaN(cashOut)){
        alert("fail to added money")
        return;
    }
    if(pin ==='25800'){
        let balance=document.getElementById('balance').innerText
        // if(cashOut > balance){
        //     alert("you do not have money")
        //     return;
        // }
        let cashInNumber=parseInt(cashOut);
        let balanceInNumber=parseInt(balance);
        let newBalance=balanceInNumber-cashInNumber;
        document.getElementById('balance').innerText=newBalance;
        const div=document.createElement('div');
        div.innerHTML=`
        <h5>Cash Out</h5>
        <p>${cashOut} withdraw.New balance ${newBalance}</p>`
        document.getElementById('transaction-container').appendChild(div)
        
        
    }else{
        alert("please try again later")

    }
})