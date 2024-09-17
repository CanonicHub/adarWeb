function updateTimer() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let targetDate = new Date(currentYear, 8, 14); // September 14th (month is 0-based)
    
    // If September 14th has already passed, target next year
    if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 8, 14);
    }

    const remainingTime = targetDate - now;

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('timer').innerHTML =
        days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";

    // Check if the target date has been reached
    if (remainingTime < 0) {
        document.getElementById('timer').innerHTML = "HAPPY ADAR DAY!";
    }
}

// Update the timer every second
setInterval(updateTimer, 1000);