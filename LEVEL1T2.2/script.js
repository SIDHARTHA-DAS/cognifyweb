function getGreeting() {
    const date = new Date();
    const hour = date.getHours();
  
    let greeting;
    if (hour < 12) {
      greeting = "Good morning!";
    } else if (hour < 17) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }
  
    return greeting;
  }
  
  const message = getGreeting();
  alert(message);
  