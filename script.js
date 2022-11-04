var now = new Date();
var theevent = new Date("Dec 05 2022 00:00:01");
var seconds = (theevent - now) / 1000;
var minutes = seconds / 60;
var hours = minutes / 60;
var days = hours / 24;
ID = window.setTimeout("update();", 1000);

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
  document.contagemregressiva.hours.value = hours + ' Horas';
  document.contagemregressiva.minutes.value = minutes +' Minutos';
  document.contagemregressiva.seconds.value = seconds;
  ID = window.setTimeout("update();", 1000);
}