document.getElementById('btn-cash-out').addEventListener('click',(event)=>{
    event.preventDefault();
    const cashOut=document.getElementById('cash-out').value
    const pin=document.getElementById('pin-cash').value
    if(pin ==='25800'){
        let balance=document.getElementById('balance').innerText
        let cashInNumber=parseInt(cashOut);
        let balanceInNumber=parseInt(balance);
        let newBalance=balanceInNumber-cashInNumber;
        document.getElementById('balance').innerText=newBalance
        
        
    }else{
        alert("please try again later")

    }
})