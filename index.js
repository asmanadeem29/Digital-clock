//setTimeout(callback, delay);
// clearTimeout(timeoutId) = can cancel a timeout before it triggers

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => window.alert('Hello'), 3000);
    console.log("Started");
}

function clearTimer() {
    clearTimer(timeoutId);
    console.log("Cleared");
    
}