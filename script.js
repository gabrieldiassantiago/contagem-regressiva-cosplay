var now = new Date();
var theevent = new Date("Dec 12 2022 15:00:00");
var seconds = (theevent - now) / 1000;
var minutes = seconds / 60;
var hours = minutes / 60;
var input = document.getElementById('days')
var days = hours / 24;
ID = window.setTimeout("update();", 1000);
input.style.display = 'block'

if (now < theevent) {
  document.contagemregressiva.days.value = 'O evento acontece hoje, fique ligado!';
}
if (now > theevent) {
  document.contagemregressiva.days.value = 'O evento já aconteceu!';
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

  ID = window.setTimeout("update();", 1000);
}