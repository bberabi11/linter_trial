function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(747); 
document.getElementById("demo2").innerHTML = toCelsius(87);