// we have 4 id's - billTotalInput, tipInput, numberOfPeople, perPersontotal 
//we have 3 functions - calculateBill(), increasePeople() , decreasePeople()

const bill = document.getElementById('billTotalInput')
const tip = document.getElementById('tipInput')
const people = document.getElementById('numberOfPeople')
const perperson = document.getElementById('perPersontotal')

let totalPeople = Number(people.innerText)

function calculateBill () {
    const total = Number(bill.value) +                    (((Number(tip.value))/100)*Number(bill.value))
  const perpersonTotal = total/totalPeople
  perperson.innerText=`${perpersonTotal.toFixed(2)}`
}
function increasePeople () {
  totalPeople+=1
  people.innerText=totalPeople
  calculateBill()
}
function decreasePeople () {
  if (totalPeople<=1){
    return
  }
  totalPeople-=1
  people.innerText=totalPeople
  calculateBill()
}



