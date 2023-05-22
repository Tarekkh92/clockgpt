function updateTime() {
  // Get current times
  var now = new Date();
  
  var londonTime = now.toLocaleString("en-GB", { timeZone: "Europe/London" });
  var usaTime = now.toLocaleString("en-US", { timeZone: "America/New_York" });
  var palestineTime = now.toLocaleString("en-GB", { timeZone: "Asia/Gaza" });
  var indiaTime = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  var pakistanTime = now.toLocaleString("en-PK", { timeZone: "Asia/Karachi" });
  var jordanTime = now.toLocaleString("en-JO", { timeZone: "Asia/Amman" });
  var egyptTime = now.toLocaleString("en-EG", { timeZone: "Africa/Cairo" });
  var syriaTime = now.toLocaleString("en-SY", { timeZone: "Asia/Damascus" });
  var lebanonTime = now.toLocaleString("en-LB", { timeZone: "Asia/Beirut" });

  // Update the digital clocks
  document.getElementById("london-digital-clock").textContent = londonTime;
  document.getElementById("usa-digital-clock").textContent = usaTime;
  document.getElementById("palestine-digital-clock").textContent = palestineTime;
  document.getElementById("india-digital-clock").textContent = indiaTime;
  document.getElementById("pakistan-digital-clock").textContent = pakistanTime;
  document.getElementById("jordan-digital-clock").textContent = jordanTime;
  document.getElementById("egypt-digital-clock").textContent = egyptTime;
  document.getElementById("syria-digital-clock").textContent = syriaTime;
  document.getElementById("lebanon-digital-clock").textContent = lebanonTime;

  // Update the analog clocks
  updateAnalogClock("london-analog-clock", now, "Europe/London");
  updateAnalogClock("usa-analog-clock", now, "America/New_York");
  updateAnalogClock("palestine-analog-clock", now, "Asia/Gaza");
  updateAnalogClock("india-analog-clock", now, "Asia/Kolkata");
  updateAnalogClock("pakistan-analog-clock", now, "Asia/Karachi");
  updateAnalogClock("jordan-analog-clock", now, "Asia/Amman");
  updateAnalogClock("egypt-analog-clock", now, "Africa/Cairo");
  updateAnalogClock("syria-analog-clock", now, "Asia/Damascus");
  updateAnalogClock("lebanon-analog-clock", now, "Asia/Beirut");
}



// Update the time every second
setInterval(updateTime, 1000);
