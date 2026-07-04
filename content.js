function hideStuff() {

  document.querySelectorAll("#related").forEach(function (el) {
    el.style.display = "none";
  });

  document.querySelectorAll("#comments").forEach(function (el) {
    el.style.display = "none";
  });

  document.querySelectorAll('a[href^="/shorts/"]').forEach(function (el) {
    el.style.display = "none";
  });

  document.querySelectorAll('button[aria-label*="Notifications"]').forEach(function (el) {
    el.style.display = "none";
  });

  document.querySelectorAll("ytd-rich-grid-renderer").forEach(function (el) {
    el.style.display = "none";
  });

  //check

  if (document.getElementById("ext-drawer-1")) {
    return;
  }


  //DRAWER 1

  const drawer1 = document.createElement("div");

  drawer1.innerHTML = `

  <div 
    id="ext-drawer-1"
    style="
      position:fixed;
      top:0;
      right:-320px;
      width:320px;
      min-width:220px;
      max-width:90vw;
      height:100vh;
      background:#18181b;
      z-index:999999;
      transition:right 0.3s;
      box-shadow:-2px 0 10px rgba(0,0,0,.3);
      overflow:visible;
    "
  >

    <button
      id="ext-toggle-1"
      style="
        position:absolute;
        right:100%;
        top:50%;
        transform:translateY(-50%);
        height:80px;
        border:none;
        background:#18181b;
        color:white;
        cursor:pointer;
        border-radius:9px 0 0 9px;
        font-size:15px;
        padding:0 5px;
        white-space:nowrap;
        writing-mode:vertical-lr;
      "
    >
      Editor
    </button>

    <div
      id="ext-resizer-1"
      style="
        position:absolute;
        left:0;
        top:0;
        width:6px;
        height:100%;
        cursor:ew-resize;
      "
    ></div>

    <iframe
      src="https://html-viewer-lovat.vercel.app/"
      width="100%"
      height="100%"
      style="border:none;"
    ></iframe>

  </div>

  `;

  document.body.appendChild(drawer1);



  //DRAWER 2

  const drawer2 = document.createElement("div");

  drawer2.innerHTML = `

  <div 
    id="ext-drawer-2"
    style="
      position:fixed;
      top:0;
      right:-320px;
      width:320px;
      min-width:220px;
      max-width:90vw;
      height:100vh;
      background-position: bottom;
      background-repeat: no-repeat;
      background-size: cover;
      z-index:999998;
      transition:right 0.3s;
      overflow:visible;
    "
  >

    <button
      id="ext-toggle-2"
      style="
        position:absolute;
        right:100%;
        top:35%;
        transform:translateY(-50%);
        height:80px;
        border:none;
        background: rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        color:white;
        cursor:pointer;
        border-radius:12px 0 0 12px;
        font-size:15px;
        font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        padding:0 10px;
        white-space:nowrap;
        writing-mode:vertical-lr;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-right: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
      "
    >
      Notes
    </button>

    <div
      id="ext-resizer-2"
      style="
        position:absolute;
        left:0;
        top:0;
        width:6px;
        height:100%;
        cursor:ew-resize;
      "
    ></div>

    <div style="padding:15px;color:white; height:100%; box-sizing:border-box; display:flex; flex-direction:column;">

      <!-- Header: Notes + Import/Export Icons -->
      <div style="
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:15px;
      ">
        <div style="
        font-size:20px;
        font-weight:bold;
        text-shadow:0 2px 6px rgba(0,0,0,0.5);
        font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        ">
        Notes
        </div>
        <div style="display:flex; gap:10px;">
          <button
          id="yt-import-notes"
          style="
          width:40px;
          height:40px;
          border:none;
          border-radius:12px;
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          color:white;
          cursor:pointer;
          border:1px solid rgba(255,255,255,0.15);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:18px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
          "
          title="Import Notes">
          <i class="fa-solid fa-file-import"></i>
          </button>
          <button
          id="yt-export-notes"
          style="
          width:40px;
          height:40px;
          border:none;
          border-radius:12px;
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          color:white;
          cursor:pointer;
          border:1px solid rgba(255,255,255,0.15);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:18px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
          "
          title="Export Notes">
          <i class="fa-solid fa-file-export"></i>
          </button>
        </div>
      </div>

      <!-- Textarea Section -->
      <div style="
      background: rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
      border:1px solid rgba(255, 255, 255, 0.15);
      border-radius:20px;
      padding:15px;
      margin-bottom:15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
      ">
        <textarea
        id="yt-note-input"
        placeholder="Write note..."
        style="
        width:100%;
        height:100px;
        background: transparent;
        color:white;
        border:none;
        outline:none;
        padding:0;
        resize:none;
        box-sizing:border-box;
        font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size:14px;
        text-shadow:0 2px 4px rgba(0,0,0,0.3);
        "></textarea>
      </div>

      <!-- Buttons: Add Note | Clear -->
      <div style="
      display:flex;
      gap:15px;
      margin-bottom:15px;
      ">
        <button
        id="yt-add-note"
        style="
        flex:1;
        height:45px;
        border:none;
        border-radius:20px;
        background: rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        color:white;
        cursor:pointer;
        font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size:15px;
        transition: all 0.3s ease;
        border:1px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        ">
        Add Note
        </button>
        <button
        id="yt-clear-notes"
        style="
        flex:1;
        height:45px;
        border:none;
        border-radius:20px;
        background: rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        color:white;
        cursor:pointer;
        font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size:15px;
        transition: all 0.3s ease;
        border:1px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        ">
        Clear
        </button>
      </div>

      <!-- Notes List -->
      <div
      id="yt-notes-list"
      style="
      flex:1;
      overflow:auto;
      padding-right:5px;
      ">
      </div>

      <input type="file" id="yt-import-file" accept=".json" style="display:none;">

    </div>

  </div>

  `;

  document.body.appendChild(drawer2);

  // Set background image with correct extension URL
  const panel2El = document.getElementById("ext-drawer-2");
  panel2El.style.backgroundImage = "url('" + chrome.runtime.getURL("imgs/notes-bg.jpg") + "')";

  // Add Font Awesome for icons
  const faLink = document.createElement("link");
  faLink.rel = "stylesheet";
  faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
  document.head.appendChild(faLink);



  //ELEMENTS

  const panel1 = document.getElementById("ext-drawer-1");
  const toggle1 = document.getElementById("ext-toggle-1");
  const resizer1 = document.getElementById("ext-resizer-1");

  const panel2 = document.getElementById("ext-drawer-2");
  const toggle2 = document.getElementById("ext-toggle-2");
  const resizer2 = document.getElementById("ext-resizer-2");



  //START POSITION

  panel1.style.right = `-${panel1.offsetWidth}px`;
  panel2.style.right = `-${panel2.offsetWidth}px`;



  //TOGGLE DRAWER 1

  let open1 = false;

  toggle1.onclick = function () {

    open1 = !open1;

    if (open1) {

      panel1.style.right = "0px";
      toggle1.innerHTML = "▶";

      if (open2) {
        panel2.style.right = panel1.offsetWidth + "px";
      }

    } else {

      panel1.style.right = `-${panel1.offsetWidth}px`;
      toggle1.innerHTML = "Editor";

      if (open2) {
        panel2.style.right = "0px";
      }

    }

  };



  //TOGGLE DRAWER 2

  let open2 = false;

  toggle2.onclick = function () {

    open2 = !open2;

    if (open2) {

      if (open1) {

        panel2.style.right = panel1.offsetWidth + "px";

      } else {

        panel2.style.right = "0px";

      }

      toggle2.innerHTML = "▶";

    } else {

      panel2.style.right = `-${panel2.offsetWidth}px`;
      toggle2.innerHTML = "Notes";

    }

  };



  //RESIZE DRAWER 1

  let resizing1 = false;

  resizer1.onmousedown = function () {

    resizing1 = true;
    document.body.style.userSelect = "none";

  };



  //RESIZE DRAWER 2

  let resizing2 = false;

  resizer2.onmousedown = function () {

    resizing2 = true;
    document.body.style.userSelect = "none";

  };



  //MOUSE MOVE

  document.addEventListener("mousemove", function (e) {

    //DRAWER 1 RESIZE

    if (resizing1) {

      const newWidth = window.innerWidth - e.clientX;

      if (newWidth >= 220) {

        panel1.style.width = newWidth + "px";

        if (open2 && open1) {
          panel2.style.right = panel1.offsetWidth + "px";
        }

      }

    }


    //DRAWER 2 RESIZE

    if (resizing2) {

      let panel1Width = 0;

      if (open1 && panel1) {
        panel1Width = panel1.offsetWidth;
      }

      const newWidth = window.innerWidth - e.clientX - panel1Width;

      if (newWidth >= 220) {

        panel2.style.width = newWidth + "px";

      }

    }

  });



  //MOUSE UP

  document.addEventListener("mouseup", function () {

    resizing1 = false;
    resizing2 = false;

    document.body.style.userSelect = "";

  });

//notes logic
function getVideoId() {

  const url =
    new URL(window.location.href);

  return url.searchParams.get("v") || "home";

}

function getNotesKey() {

  return (
    "yt-notes-" +
    getVideoId()
  );

}


const input =
  document.getElementById("yt-note-input");

const addBtn =
  document.getElementById("yt-add-note");

const clearBtn =
  document.getElementById("yt-clear-notes");
const exportBtn =
  document.getElementById("yt-export-notes");
const importBtn =
  document.getElementById("yt-import-notes");
const importFile =
  document.getElementById("yt-import-file");

const list =
  document.getElementById("yt-notes-list");

function getVideo() {
  return document.querySelector("video");
}

function getTime() {

  const video = getVideo();

  if (!video) {
    return "00:00";
  }

  const total =
    Math.floor(video.currentTime);

  const min =
    Math.floor(total / 60)
    .toString()
    .padStart(2, "0");

  const sec =
    (total % 60)
    .toString()
    .padStart(2, "0");

  return min + ":" + sec;
}

function timeToSeconds(time) {

  const parts =
    time.split(":");

  return (
    Number(parts[0]) * 60 +
    Number(parts[1])
  );
}

function createMarkers() {

  const progress =
    document.querySelector(
      ".ytp-progress-bar"
    );

  const video =
    getVideo();

  if (!progress || !video) {
    return;
  }

  document
    .querySelectorAll(".yt-note-marker")
    .forEach(function (el) {
      el.remove();
    });

const notes =
  JSON.parse(
    localStorage.getItem(
      getNotesKey()
    ) || "[]"
  );

  notes.forEach(function (note) {

    const seconds =
      timeToSeconds(note.time);

    const percent =
      (seconds / video.duration) * 100;

    const marker =
      document.createElement("div");

    marker.className =
      "yt-note-marker";

    marker.style = `
      position:absolute;
      left:${percent}%;
      top:0;
      width:4px;
      height:100%;
      background: linear-gradient(to top, rgba(96, 165, 250, 0.4), rgba(96, 165, 250, 1));
      z-index:9999;
      border-radius:4px;
      cursor:pointer;
      box-shadow: 0 0 12px rgba(96, 165, 250, 0.7), 0 0 2px rgba(255, 255, 255, 0.3) inset;
    `;

    marker.title =
      note.time + " - " + note.text;

    marker.onclick = function (e) {

      e.stopPropagation();

      video.currentTime =
        seconds;

      video.play();
    };

    progress.appendChild(marker);

  });

}

function loadNotes() {

  list.innerHTML = "";

  const notes =
    JSON.parse(
      localStorage.getItem(
        getNotesKey()
      ) || "[]"
    );

  notes.forEach(function (note, index) {

    const item =
      document.createElement("div");

    item.style = `
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding:15px;
    border-radius:20px;
    margin-bottom:15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    `;

    item.innerHTML = `

    <div class="yt-note-time"
    style="
    color:#60a5fa;
    cursor:pointer;
    font-size:14px;
    font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    text-shadow:0 2px 6px rgba(0,0,0,0.5);
    ">
    ${note.time}
    </div>

    <div style="
    margin-top:10px;
    word-break:break-word;
    font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size:14px;
    line-height:1.6;
    color: white;
    text-shadow:0 2px 4px rgba(0,0,0,0.3);
    ">
    ${note.text}
    </div>

    <button class="yt-delete-note"
    style="
    margin-top:12px;
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border:1px solid rgba(255, 255, 255, 0.15);
    color:white;
    padding:8px 20px;
    border-radius:20px;
    cursor:pointer;
    font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size:13px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    ">
    Delete
    </button>
    `;

    const timeEl =
      item.querySelector(".yt-note-time");

    timeEl.onclick = function () {

      const video =
        getVideo();

      if (!video) {
        return;
      }

      video.currentTime =
        timeToSeconds(note.time);

      video.play();
    };

    const delBtn =
      item.querySelector(".yt-delete-note");

    delBtn.onclick = function () {

      const notes =
        JSON.parse(
          localStorage.getItem(
            getNotesKey()
          ) || "[]"
        );

      notes.splice(index, 1);

      localStorage.setItem(
        getNotesKey(),
        JSON.stringify(notes)
      );

      loadNotes();

      createMarkers();
    };

    list.appendChild(item);

  });

}

addBtn.onclick = function () {

  const text =
    input.value.trim();

  if (!text) {
    return;
  }

  const notes =
    JSON.parse(
      localStorage.getItem(
        getNotesKey()
      ) || "[]"
    );

  notes.unshift({
    time: getTime(),
    text: text
  });

  localStorage.setItem(
    getNotesKey(),
    JSON.stringify(notes)
  );

  input.value = "";

  loadNotes();

  createMarkers();
};

clearBtn.onclick = function () {

  localStorage.removeItem(
    getNotesKey()
  );

  loadNotes();

  createMarkers();
};

// Export functionality
exportBtn.onclick = function () {
  const notes = JSON.parse(localStorage.getItem(getNotesKey()) || "[]");
  const videoId = getVideoId();
  const dataStr = JSON.stringify({
    videoId: videoId,
    exportDate: new Date().toISOString(),
    notes: notes
  }, null, 2);
  const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
  const exportFileDefaultName = `yt-notes-${videoId}.json`;

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};

// Import functionality
importBtn.onclick = function () {
  importFile.click();
};

importFile.onchange = function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    try {
      const importedData = JSON.parse(event.target.result);
      if (importedData.notes && Array.isArray(importedData.notes)) {
        // Merge with existing notes? Or replace? Let's replace for now
        localStorage.setItem(getNotesKey(), JSON.stringify(importedData.notes));
        loadNotes();
        createMarkers();
        alert('Notes imported successfully!');
      } else {
        alert('Invalid notes file!');
      }
    } catch (error) {
      alert('Error importing notes: ' + error.message);
    }
  };
  reader.readAsText(file);
  importFile.value = ''; // Reset the file input
};

loadNotes();

setInterval(function () {

  createMarkers();

}, 2000);

document.addEventListener(
  "yt-navigate-finish",
  function () {

    loadNotes();

    createMarkers();

  }
);

}




function showStuff() {

  document.querySelectorAll("#related").forEach(function (el) {
    el.style.display = "";
  });

  document.querySelectorAll("#comments").forEach(function (el) {
    el.style.display = "";
  });

  document.querySelectorAll('a[href^="/shorts/"]').forEach(function (el) {
    el.style.display = "";
  });

  document.querySelectorAll('button[aria-label*="Notifications"]').forEach(function (el) {
    el.style.display = "";
  });

  document.querySelectorAll("ytd-rich-grid-renderer").forEach(function (el) {
    el.style.display = "";
  });

}




function checkMode() {

  try {

    chrome.storage.local.get(["mode"], function (data) {

      if (data.mode == "hide") {

        hideStuff();

      } else {

        showStuff();

      }

    });

  } catch (e) {

    console.log(e);

  }

}




checkMode();

// Session timer tracking
let isTimerRunning = false;
let timerUpdateInterval;
let lastWatchedVideoId = null;

function initSessionTimer() {
  chrome.storage.local.get(["sessionStartTime", "totalPlayTimeMs", "lastActiveTime", "watchedVideoIds", "videoCount"], function(data) {
    const now = Date.now();
    
    // If no start time or last active was more than 30 mins ago, start new session
    if (!data.sessionStartTime || (now - data.lastActiveTime) > 1800000) {
      chrome.storage.local.set({
        sessionStartTime: now,
        lastActiveTime: now,
        totalPlayTimeMs: 0,
        watchedVideoIds: [],
        videoCount: 0
      });
    } else {
      // Just update last active time
      chrome.storage.local.set({
        lastActiveTime: now
      });
    }
  });
}

// Get current YouTube video ID
function getCurrentVideoId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('v');
}

// Track video watch
function trackVideoWatch() {
  const videoId = getCurrentVideoId();
  if (!videoId || videoId === lastWatchedVideoId) return;
  
  lastWatchedVideoId = videoId;
  
  chrome.storage.local.get(["watchedVideoIds", "videoCount"], function(data) {
    const watchedIds = data.watchedVideoIds || [];
    if (!watchedIds.includes(videoId)) {
      watchedIds.push(videoId);
      chrome.storage.local.set({
        watchedVideoIds: watchedIds,
        videoCount: (data.videoCount || 0) + 1
      });
    }
  });
}

// Monitor URL changes to detect new videos
function monitorUrlChanges() {
  let lastUrl = location.href;
  
  const observer = new MutationObserver(function() {
    const newUrl = location.href;
    if (newUrl !== lastUrl) {
      lastUrl = newUrl;
      trackVideoWatch();
    }
  });
  
  observer.observe(document.body, { subtree: true, childList: true });
  
  // Also check initial page
  trackVideoWatch();
}

function startPlayTimer() {
  if (isTimerRunning) return;
  isTimerRunning = true;
  
  // Record start time when video starts playing
  chrome.storage.local.get(["lastPlayStart"], function(data) {
    if (!data.lastPlayStart) {
      chrome.storage.local.set({
        lastPlayStart: Date.now()
      });
    }
  });
  
  // Update total play time every second while playing
  timerUpdateInterval = setInterval(function() {
    chrome.storage.local.get(["lastPlayStart", "totalPlayTimeMs"], function(data) {
      const now = Date.now();
      const lastStart = data.lastPlayStart || now;
      const elapsedThisSession = now - lastStart;
      
      chrome.storage.local.set({
        totalPlayTimeMs: (data.totalPlayTimeMs || 0) + 1000, // Add 1 second
        lastPlayStart: now, // Reset start time for next update
        lastActiveTime: now
      });
    });
  }, 1000);
}

function stopPlayTimer() {
  if (!isTimerRunning) return;
  isTimerRunning = false;
  
  if (timerUpdateInterval) {
    clearInterval(timerUpdateInterval);
  }
  
  // Final update for current play period
  chrome.storage.local.get(["lastPlayStart", "totalPlayTimeMs"], function(data) {
    const now = Date.now();
    const lastStart = data.lastPlayStart || now;
    const elapsedThisSession = now - lastStart;
    
    chrome.storage.local.set({
      totalPlayTimeMs: (data.totalPlayTimeMs || 0) + elapsedThisSession,
      lastPlayStart: null,
      lastActiveTime: now
    });
  });
}

// Monitor video play/pause
function monitorVideoPlayback() {
  const video = document.querySelector("video");
  if (!video) {
    // Try again in 1 second if video not found
    setTimeout(monitorVideoPlayback, 1000);
    return;
  }
  
  video.addEventListener("play", function() {
    startPlayTimer();
  });
  
  video.addEventListener("pause", function() {
    stopPlayTimer();
  });
  
  video.addEventListener("ended", function() {
    stopPlayTimer();
  });
  
  // Check initial state
  if (!video.paused && !video.ended) {
    startPlayTimer();
  }
}

// Update last active time every 30 seconds
setInterval(function() {
  chrome.storage.local.set({
    lastActiveTime: Date.now()
  });
}, 30000);

initSessionTimer();
monitorVideoPlayback();
monitorUrlChanges();

setInterval(function () {

  checkMode();

}, 1000);


 

document.addEventListener("yt-navigate-start", function () {

  if (window.location.pathname.startsWith("/shorts/")) {
    window.location.replace("https://www.youtube.com");
  }

});