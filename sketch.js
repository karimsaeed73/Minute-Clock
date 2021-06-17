

function draw() {
  background(0);
  let currentHour = hour().toString(2);
  while(currentHour.length<5) {
      currentHour = '0'+currentHour;
  }
  currentHour= currentHour.split('');
  let currentMinute = minute().toString(2)
  while(currentMinute.length<6) {
      currentMinute = '0'+currentMinute;
  }
  currentMinute= currentMinute.split('');
  let currentSecond = second().toString(2)
  while(currentSecond.length<6) {
      currentSecond = '0'+currentSecond;
  }
  currentSecond= currentSecond.split('');
  for (i=0; i < currentHour.length; i++) {
      if(currentHour[i]==='0') {
          fill(50);
      }
      else {
          fill(255);
      }
      noStroke();
      ellipse((i+7)*20, (height/2)-(height/4), 10, 10);
  }
  for (i=0; i < currentMinute.length; i++) {
      if(currentMinute[i]==='0') {
          fill(50);
      }
      else {
          fill(255);
      }
      noStroke();
      ellipse((i+7)*20, height/2, 10, 10);
  }
  for (i=0; i < currentSecond.length; i++) {
      if(currentSecond[i]==='0') {
          fill(50);
      }
      else {
          fill(255);
      }
      noStroke();
      ellipse((i+7)*20, (height/2)+(height/4), 10, 10);
  }
};

