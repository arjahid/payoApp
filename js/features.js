document.getElementById("btn-show-cashout").addEventListener("click", () => {
  document.getElementById("cash-out-form").classList.remove("hidden");
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("trnsaction-section").classList.add("hidden");
  document.getElementById('bonas-container').classList.add('hidden')
});
document.getElementById("btn-show-addmoney").addEventListener("click", () => {
  document.getElementById("add-money-form").classList.remove("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");

  document.getElementById("trnsaction-section").classList.add("hidden");
  document.getElementById('bonas-container').classList.add('hidden')
});
document.getElementById("transaction-button").addEventListener("click", () => {
  document.getElementById("trnsaction-section").classList.remove("hidden");
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById('bonas-container').classList.add('hidden')
});

document.getElementById('Bonaus-button').addEventListener('click',()=>{
  document.getElementById('bonas-container').classList.remove('hidden')
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("trnsaction-section").classList.add("hidden");


})
