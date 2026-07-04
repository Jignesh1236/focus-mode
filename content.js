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

  // document.querySelectorAll("ytd-rich-grid-renderer").forEach(function (el) {
  //   el.style.display = "none";
  // });

setInterval(function () {

  const allowedChannels = [
    "CodeWithHarry",
    "Apna College"
  ];

  document
  .querySelectorAll("ytd-rich-item-renderer")
  .forEach(function (video) {

    const channel =
      video.querySelector(
        "ytd-channel-name"
      );

    if (!channel) {
      return;
    }

    const name =
      channel.innerText.trim();

    if (
      !allowedChannels.includes(name)
    ) {
      video.style.display = "none";
    }

  });

}, 1000);
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
      background:#18181b;
      z-index:999998;
      transition:right 0.3s;
      box-shadow:-2px 0 10px rgba(0,0,0,.3);
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

    <div style="padding:10px;color:white;">

  <div style="
  font-size:18px;
  font-weight:bold;
  margin-bottom:10px;
  ">
  Notes
  </div>

  <textarea
  id="yt-note-input"
  placeholder="Write note..."
  style="
  width:100%;
  height:100px;
  background:#27272a;
  color:white;
  border:none;
  outline:none;
  padding:10px;
  resize:none;
  border-radius:8px;
  box-sizing:border-box;
  "></textarea>

  <div style="
  display:flex;
  gap:10px;
  margin-top:10px;
  ">

    <button
    id="yt-add-note"
    style="
    flex:1;
    height:40px;
    border:none;
    border-radius:8px;
    background:#2563eb;
    color:white;
    cursor:pointer;
    ">
    Add Note
    </button>

    <button
    id="yt-clear-notes"
    style="
    width:100px;
    border:none;
    border-radius:8px;
    background:#dc2626;
    color:white;
    cursor:pointer;
    ">
    Clear
    </button>

  </div>

  <div
  id="yt-notes-list"
  style="
  margin-top:15px;
  max-height:70vh;
  overflow:auto;
  ">
  </div>


  </div>

  <div
  id="yt-notes-list"
  style="
  margin-top:15px;
  max-height:70vh;
  overflow:auto;
  ">
  </div>
    </div>

  </div>

  `;

  document.body.appendChild(drawer2);



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
      width:7px;
      height:110%;
      background:#00ff99;
      z-index:9999;
      border-radius:2px;
      cursor:pointer;
      box-shadow:0 0 10px #00ff99;
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
    background:#27272a;
    padding:10px;
    border-radius:10px;
    margin-bottom:10px;
    `;

    item.innerHTML = `

    <div class="yt-note-time"
    style="
    color:#60a5fa;
    cursor:pointer;
    font-size:14px;
    ">
    ${note.time}
    </div>

    <div style="
    margin-top:6px;
    word-break:break-word;
    ">
    ${note.text}
    </div>

    <button class="yt-delete-note"
    style="
    margin-top:10px;
    background:#ef4444;
    border:none;
    color:white;
    padding:5px 10px;
    border-radius:6px;
    cursor:pointer;
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




setInterval(function () {

  checkMode();

}, 1000);




document.addEventListener("yt-navigate-start", function () {

  if (window.location.pathname.startsWith("/shorts/")) {
    window.location.replace("https://www.youtube.com");
  }

});