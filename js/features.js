document.getElementById('btn-show-cashout').addEventListener('click',()=>{
    document.getElementById('cash-out-form').classList.remove('hidden')
    document.getElementById("add-money-form").classList.add('hidden')
})
document.getElementById('btn-show-addmoney').addEventListener('click',()=>{
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById("add-money-form").classList.remove('hidden')
})