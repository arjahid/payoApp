document.getElementById('btn').addEventListener('click',(event)=>{
    event.preventDefault();
    const phone=document.getElementById('phone-number').value
    console.log(phone)
    const pin=document.getElementById('pin-number').value
    console.log(pin)
    if(phone === '01782885378' && pin==='Jahid@12'){
        window.location.href ='/home.html'
    }else{
        alert("wrong phone or password")
    }
})