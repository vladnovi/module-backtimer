const dom = {
    year: document.getElementById('year'),
    countdown: document.getElementById('countdown'),
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
}

//Получаем актуальные данные и делаем расчеты
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCounter() {
    const curretTime = new Date();
    const diff = nextYear - curretTime;
    
    //Переводим в секунды / минуты / часы / дни и округляем в меньшую сторону с помощью Math.floor
    //Перевод в дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    //Перевод в часы + возвращяем остаток от дней
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    //Перевод в минуты + возвращяем остаток от часов
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    //Перевод в секунды + возвращяем остаток от минут
    const secondsLeft = Math.floor(diff / 1000) % 60;
    
    
    dom.year.innerText = currentYear;
    dom.days.innerText = daysLeft;
    dom.hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    dom.minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    dom.seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

setInterval(updateCounter, 1000);
