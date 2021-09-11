let pomodoro_timer_minute = document.getElementById("pomodoro_minute");
let pomodoro_timer_second = document.getElementById("pomodoro_second");
let status = document.getElementById("status");
let pomodoroCount = document.getElementById("pomodoro-count");
let buttons = document.getElementById("StartAndStop");

let pomodoro_second = "00";
let pomodoro_minute = 25;

let pomodoro_count = 0;
let break_active = true;

let startControl = false;

function Start() {
  startControl = !startControl;
  console.log(startControl);

  if (startControl) {
    console.log("start fonksiyonu çalıştı");

    if (pomodoro_second == "00" && pomodoro_minute == 25) {
      console.log("koşul çalıştı");
      pomodoro_timer_second.className = 0;
    }

    forSecond = setInterval(Downloader, 1000);
  } else {
    console.log("else");
    Stop();
  }
}

function Stop() {
  console.log("durdu");
  clearInterval(forSecond);
}

function Restart() {
  Stop();

  pomodoro_second = "00";
  pomodoro_minute = 25;
  pomodoro_timer_minute.innerHTML = pomodoro_minute;
  pomodoro_timer_second.innerHTML = "00";
}

function Downloader() {
  if (pomodoro_second == 0) {
    pomodoro_second = 59;
    pomodoro_minute -= 1;
  } else {
    pomodoro_second -= 1;
  }

  if (pomodoro_second >= 0 && pomodoro_second <= 9) {
    pomodoro_timer_second.innerHTML = "0" + pomodoro_second;
  } else {
    pomodoro_timer_second.innerHTML = pomodoro_second;
  }

  pomodoro_timer_minute.innerHTML = pomodoro_minute;

  if (pomodoro_second == 0 && pomodoro_minute == 0) {
    Finish();
  }
}

function Finish() {
  if (!break_active) {
    status.innerHTML = "Çalışma Zamanı";
    break_active = true;
    pomodoro_second = "00";
    pomodoro_minute = 25;
    pomodoro_timer_minute.style.color = "black";
    pomodoro_timer_second.style.color = "black";
  } else {
    pomodoro_count += 1;
    pomodoroCount.innerHTML = pomodoro_count;
    break_active = false;

    countControl = pomodoro_count % 4;

    if (countControl == 0) {
      console.log("uzun ara koşuluna girdi");
      status.innerHTML = "Uzun Mola Zamanı";
      pomodoro_minute = 15;
      breakDzyn();
    } else {
      status.innerHTML = "Mola Zamanı";
      pomodoro_minute = 5;
      breakDzyn();
    }
  }
}

function breakDzyn() {
  pomodoro_timer_minute.style.color = "white";
  pomodoro_timer_second.style.color = "white";
}
