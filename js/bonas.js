document.getElementById('bonas-button').addEventListener('click',()=>{
    let bonasValue=document.getElementById('bonas-feild').value ;
    if(bonasValue==='iloveyou'){
        alert("Congratulation you got 100 TK Bonas")
        let balance=document.getElementById('balance').innerText;
        let balanceNumber=parseInt(balance);
        let bonas=100;
        let newBalance=balanceNumber +bonas;
        document.getElementById('balance').innerText=newBalance;
        let p=document.createElement('p');
        p.innerText=`Added Bonas ${bonas} Tk.New Balance:${newBalance}`
        document.getElementById('transaction-container').appendChild(p);
    }else{
        alert("Try again later")
    }
})