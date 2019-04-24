var now = new Date()
var currentHour = now.getHours()
currentHour = 23
if(currentHour >= 6 && currentHour <12){
  alert('Buna Dimineata')
} else if(currentHour <17){
  alert("Buna Ziua")
} else if (currentHour <22){
  alert("Buna Seara")
} else {
  alert ("Noapte Buna")
}
