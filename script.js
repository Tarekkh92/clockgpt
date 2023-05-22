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
  var spainTime = now.toLocaleString("en-LB", { timeZone: "Europe/Madrid" });
  var italyTime = now.toLocaleString("en-LB", { timeZone: "Europe/Rome" });
  var germanyTime = now.toLocaleString("en-LB", { timeZone: "Europe/Berlin" });

  var moroccoTime = now.toLocaleString("en-LB", { timeZone: "Africa/Casablanca" });
  var australiaTime = now.toLocaleString("en-LB", { timeZone: "Australia/Sydney" });
  var saTime = now.toLocaleString("en-LB", { timeZone: "Africa/Johannesburg" });
  var canadaTime = now.toLocaleString("en-LB", { timeZone: "America/Toronto" });


  var brazilTime = now.toLocaleString("en-LB", { timeZone: "America/Sao_Paulo"});
  var argentinaTime = now.toLocaleString("en-LB", { timeZone: "America/Argentina/Buenos_Aires"});
  var japanTime = now.toLocaleString("en-LB", { timeZone: "Asia/Tokyo"});
  var colombiaTime = now.toLocaleString("en-LB", { timeZone: "America/Bogota"});

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
  document.getElementById("spain-digital-clock").textContent = spainTime;
  document.getElementById("italy-digital-clock").textContent = italyTime;
  document.getElementById("germany-digital-clock").textContent = germanyTime;

  document.getElementById("morocco-digital-clock").textContent = moroccoTime;
  document.getElementById("australia-digital-clock").textContent = australiaTime;
  document.getElementById("sa-digital-clock").textContent = saTime;
  document.getElementById("canada-digital-clock").textContent = canadaTime;
  document.getElementById("brazil-digital-clock").textContent = brazilTime;
  document.getElementById("argentina-digital-clock").textContent = argentinaTime;
  document.getElementById("japan-digital-clock").textContent = japanTime;
  document.getElementById("colombia-digital-clock").textContent = colombiaTime;
  // Update the analog clocks

}



// Update the time every second
setInterval(updateTime, 1000);
