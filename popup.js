var button = document.getElementById("hide");
var timerDisplay = document.getElementById("sessionTimer");
var videoCountDisplay = document.getElementById("videoCount");
var timerInterval;

chrome.storage.local.get(["mode"], function (data) {

  if (data.mode == "hide") {
    button.innerText = "Show";
  } else {
    button.innerText = "Hide";
  }

});

button.onclick = function () {

  if (button.innerText == "Hide") {

    chrome.storage.local.set({
      mode: "hide"
    });

    button.innerText = "Show";

  } else {

    chrome.storage.local.set({
      mode: "show"
    });

    button.innerText = "Hide";

  }

};

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateTimer() {
  chrome.storage.local.get(["totalPlayTimeMs"], function(data) {
    const totalMs = data.totalPlayTimeMs || 0;
    timerDisplay.textContent = formatTime(totalMs);
  });
}

function updateVideoCount() {
  chrome.storage.local.get(["videoCount"], function(data) {
    videoCountDisplay.textContent = data.videoCount || 0;
  });
}

// Double-click to reset timer
timerDisplay.addEventListener("dblclick", function() {
  if (confirm("Reset session timer?")) {
    chrome.storage.local.set({
      totalPlayTimeMs: 0,
      sessionStartTime: Date.now(),
      lastPlayStart: null
    }, function() {
      updateTimer();
    });
  }
});

// Double-click to reset video count
videoCountDisplay.addEventListener("dblclick", function() {
  if (confirm("Reset video count?")) {
    chrome.storage.local.set({
      videoCount: 0,
      watchedVideoIds: []
    }, function() {
      updateVideoCount();
    });
  }
});

// Make video count interactive too
videoCountDisplay.style.cursor = "pointer";
videoCountDisplay.style.transition = "transform 0.2s ease";
videoCountDisplay.addEventListener("mouseenter", function() {
  videoCountDisplay.style.transform = "scale(1.05)";
});
videoCountDisplay.addEventListener("mouseleave", function() {
  videoCountDisplay.style.transform = "scale(1)";
});

// Start timers
updateTimer();
updateVideoCount();
timerInterval = setInterval(updateTimer, 1000);
