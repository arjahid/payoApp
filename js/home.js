document.getElementById('btn-add-money').addEventListener('click', (event) => {
    event.preventDefault();
    const addMoney = document.getElementById('add-money').value;
    const pinNumber = document.getElementById('pin').value;
    if (pinNumber === '25800') {
        const balance = document.getElementById('balance').innerText;
        const addMoneyNumber = parseInt(addMoney);
        const balanceNumber = parseInt(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById('balance').innerText = newBalance;
       
    } else {
        alert("please try again");
    }
 });
 