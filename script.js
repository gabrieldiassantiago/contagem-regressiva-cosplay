var now = new Date();
var theevent = new Date("Dec 04 2022 00:00:01");
var seconds = (theevent - now) / 1000;
var minutes = seconds / 60;
var hours = minutes / 60;
var input = document.getElementById('days')
var days = hours / 24;
ID = window.setTimeout("update();", 1000);
input.style.display = 'block'

if (now == "Dec 03 2022") {
  document.contagemregressiva.days.value = 'Faltam poucas horas'
  if (now <= "Dec 02 2022"  ){
    document.contagemregressiva.days.value = document.contagemregressiva.days.value
  }
}

function update() {
  now = new Date();
  seconds = (theevent - now) / 1000;
  seconds = Math.round(seconds);
  minutes = seconds / 60;
  minutes = Math.round(minutes);
  hours = minutes / 60;
  hours = Math.round(hours);
  days = hours / 24;
  days = Math.round(days);
  document.contagemregressiva.days.value = 'Em apenas ' + days + ' dias';

  ID = window.setTimeout("update();", 1000);
}