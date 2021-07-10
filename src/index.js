import './sass/main.scss';
import Swal from 'sweetalert2';

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
  let dateSelected = new Date(selectedDate);
  // console.log(now3);
  let dateSelectedUnix = dateSelected.getTime();
  // console.log(now1);
  let dateNow = new Date();
  let dateCurrentUnix = dateNow.getTime();
  // console.log(now);
  // let dateNow = Date.parse(new Date());
  if ((selectedDate) && (dateSelectedUnix < dateCurrentUnix) ){
    startCountdown.setAttribute('disabled', 'disabled');
    Swal.fire("Please choose a date in the future")
  }
  
  else {
    startCountdown.removeAttribute('disabled', 'disabled');
   
    // console.log(now1);
  }
}

let timerId = null;

function onCountDownStart() {
  let selectedDate = dateSelect.value;
  let dateNow = Date.parse(new Date());
  
       timerId = setInterval(() => {
          let selectedDate = dateSelect.value;
      let dateNow = Date.parse(new Date());
      let dateFinish = new Date(selectedDate);
      dateFinish.setHours(0);
      
        //  console.log(dateFinish);
       
         
         
      const deltaTime = dateFinish - dateNow;
      // console.log(deltaTime);
         if (deltaTime === 0) {
           clearInterval(timerId);
         }
  
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
 


