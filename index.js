let dayInput = document.getElementById('dayInput')
let monthInput = document.getElementById('monthInput')
let yearInput = document.getElementById('yearInput')
const dayRes = document.getElementById('dayRes')
const monthRes = document.getElementById('monthRes')
const yearRes = document.getElementById('yearRes')
const submit = document.querySelector('button')
const err1 = document.querySelectorAll('.err1')
 

let currentDate = new Date()
let currentDay = currentDate.getDate() 
let currentMonth = currentDate.getMonth()
let currentYear = currentDate.getFullYear() 

let customDate = new Date()


dayInput.addEventListener('input', function() {
    customDate.setDate(dayInput.value)
    
})
monthInput.addEventListener('input', function() {
    customDate.setMonth(monthInput.value - 1)
})
yearInput.addEventListener('input', function() {
    customDate.setFullYear(yearInput.value)
})
let age;
function calc() {
   /*age = currentDate.getTime() - customDate.getTime
   yearRes.innerHTML = age.getFullYear
   monthRes.innerHTML = age.getMonth
   dayRes.innerHTML = age.getDate
   console.log(age)*/
   yearRes.innerHTML = currentDate.getFullYear() - customDate.getFullYear()
   monthv = currentDate.getMonth() - customDate.getMonth()
   monthRes.innerHTML = 
   if (customDate.getMonth() > currentDate.getMonth)
   
   dayRes.innerHTML = currentDate.getDay() - customDate.getDay()
}
submit.onclick = calc
console.log('us')
