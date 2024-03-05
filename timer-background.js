chrome.alarms.create("pomodoroTimer", {
  periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "pomodoroTimer") {
      chrome.storage.local.get(["timer", "isRunning", "timeOption"], (res) => {
        if (res.isRunning) {
          let timer = res.timer + 1
          console.log(timer)
          console.log(res.timeOption)
          let isRunning = true
          if (timer === 60*res.timeOption) {
            this.registration.showNotification("Pomodoro Timer", {
              body: `${res.timeOption} minutes has passed!`,
              icon: "images/mini_Billy.jpg",
            })
            timer = 0
            isRunning = false
          }
          chrome.storage.local.set({
              timer, 
              isRunning,
          })
        }
      })
  }
})

chrome.storage.local.get(["timer", "isRunning", "timeOption"], (res) => {
  chrome.storage.local.set({
    timer: "timer" in res ? res.timer : 0,
    timeOption: "timeOption" in res ? res.timeOption : 25,
    isRunning: "isRunning" in res ? res.isRunning : false,
  })
})

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.message === 'shopping_website_detected') {
    // Open the popup
    chrome.windows.create({
      url: 'timer-popup.html',
      type: 'popup',
      width: 350,
      height: 400
    });
  }
});