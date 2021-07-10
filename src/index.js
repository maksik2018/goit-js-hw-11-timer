import './sass/main.scss';
import Swal from 'sweetalert2';

// message();

// function message(event) { 
//   event.preventDefault();
//   Swal.fire("Please choose a date in the future")
// };

// Swal.fire("Please choose a date in the future")

const dateSelect= document.querySelector('#date-selector');
const startCountdown = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startCountdown.addEventListener('click', onCountDownStart);

dateSelect.addEventListener('change', onSelectDate);
onSelectDate();

function onSelectDate(event) {
  let selectedDate = dateSelect.value;
  // event.preventDefault();
  // Swal.fire("Please choose a date in the future")
  
  console.log(selectedDate);
}

let timerId = null;

function onCountDownStart() {
  let selectedDate = dateSelect.value;
  let dateNow = Date.parse(new Date());
  if (selectedDate !== dateNow) {
    startCountdown.setAttribute('disabled', 'disabled');
    Swal.fire("Please choose a date in the future")
  } else {
    startCountdown.removeAttribute('disabled', 'disabled');
   
 
    timerId = setInterval(() => {
      //     let selectedDate = dateSelect.value;
      // let dateNow = Date.parse(new Date());
      // let dateNow = Date.parse(new Date());
      // console.log(dateNow);
      // let selectedDate = dateSelect.value;
      let dateFinish = new Date(selectedDate);
      dateFinish.setHours(0);
   
    
   
      // console.log(selectedDate);
      // let date2 = new Date("July 28, 2021");
      // let dateFinish = new Date(selectedDate);
      // dateFinish.setHours(0);
    
   
      const deltaTime = dateFinish - dateNow;
 
  
      const time = convertMs(deltaTime);
      //  console.log(time);
      // display();
      const daysExcellent = time.days.toString().padStart(2, "0");
      const hoursExcellent = (time.hours.toString().padStart(2, "0"));
      const minutesExcellent = time.minutes.toString().padStart(2, "0");
      const secondsExcellent = time.seconds.toString().padStart(2, "0");

      daysEl.innerHTML = `${daysExcellent}`;
      hoursEl.innerHTML = `${hoursExcellent}`;
      minutesEl.innerHTML = `${minutesExcellent}`;
      secondsEl.innerHTML = `${secondsExcellent}`;
    }, 1000);
  }
}
 


// let date1 = Date.parse(new Date());
// console.log(date1);

// timerId = setInterval(() => {
//    let date1 = Date.parse(new Date());
// // console.log(date1);
//   let date2 = new Date("July 12, 2022");
//   //  const date2 = Date.now();

//   const deltaTime = date2 - date1;
//   // console.log(date2);
//   //  let deadLine = new Date(date1 + date2)
  
//   const time = convertMs(deltaTime);
//   //  console.log(time);
//   // display();
//   const daysExcellent = time.days.toString().padStart(2, "0");
//   const hoursExcellent = time.hours.toString().padStart(2, "0");
//   const minutesExcellent = time.minutes.toString().padStart(2, "0");
//   const secondsExcellent = time.seconds.toString().padStart(2, "0");

//   daysEl.innerHTML = `${daysExcellent}`;
//   hoursEl.innerHTML = `${hoursExcellent}`;
//   minutesEl.innerHTML = `${minutesExcellent}`;
//   secondsEl.innerHTML = `${secondsExcellent}`;
// }, 1000);
 
// function display (){
//   daysEl.innerHTML = `${time.days}`;
//   hoursEl.innerHTML = `${time.hours}`;
//   minutesEl.innerHTML = `${time.minutes}`;
//   secondsEl.innerHTML = `${time.seconds}`;
// }

      
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
  
}

  
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); //{days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}

