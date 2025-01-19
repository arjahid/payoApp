document.getElementById('btn-add-money').addEventListener('click', (event) => {
    event.preventDefault();
    const addMoney = document.getElementById('add-money').value;
    const pinNumber = document.getElementById('pin').value;
    if(isNaN(addMoney)){
        alert("fail to added money")
        return;
    }
    if (pinNumber === '25800') {
        const balance = document.getElementById('balance').innerText;
        const addMoneyNumber = parseInt(addMoney);
        const balanceNumber = parseInt(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById('balance').innerText = newBalance;
        const p=document.createElement('p');
        p.innerText=`Added ${addMoney} Tk.New Balance:${newBalance}`
        document.getElementById('transaction-container').appendChild(p);


       
    } else {
        alert("please try again");
    }
 });
 