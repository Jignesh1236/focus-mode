  function isExtensionAlive() {
    return (
      typeof chrome != "undefined" &&
      chrome.runtime &&
      chrome.runtime.id
    );
  }

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



    //DRAWER 3 - AI CHAT

    const drawer3 = document.createElement("div");

    drawer3.innerHTML = `

    <div 
      id="ext-drawer-3"
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
        z-index:999997;
        transition:right 0.3s;
        overflow:visible;
      "
    >

      <button
        id="ext-toggle-3"
        style="
          position:absolute;
          right:100%;
          top:20%;
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
        AI Chat
      </button>

      <div
        id="ext-resizer-3"
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

        <!-- Header -->
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
          display:flex;
          align-items:center;
          gap:8px;
          ">
          <i class="fa-solid fa-robot"></i> AI Assistant
          </div>
        </div>

        <!-- Chat Messages -->
        <div
        id="ext-chat-messages"
        style="
        flex:1;
        overflow:auto;
        padding-right:5px;
        margin-bottom:15px;
        display:flex;
        flex-direction:column;
        gap:12px;
        ">
          <div style="
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding:12px 16px;
          border-radius:18px;
          max-width:85%;
          align-self:flex-start;
          ">
            <div style="
            font-size:11px;
            opacity:0.7;
            margin-bottom:4px;
            font-weight:600;
            font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            ">AI Assistant</div>
            <div style="
            font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size:14px;
            line-height:1.5;
            text-shadow:0 2px 4px rgba(0,0,0,0.3);
            ">Hello! I'm your AI assistant. How can I help you with Focus Mode or productivity today?</div>
          </div>
        </div>

        <!-- Chat Input -->
        <div style="
        background: rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius:26px;
        padding:8px;
        position:relative;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        ">
          <div style="
          background: rgba(255, 255, 255, 0.05);
          border-radius:24px;
          overflow:hidden;
          position:relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
          ">
            <textarea
            id="ext-chat-input"
            placeholder="Message AI Assistant..."
            style="
            width:100%;
            min-height:44px;
            max-height:150px;
            padding:12px 50px 12px 16px;
            border:none;
            background:transparent;
            resize:none;
            outline:none;
            font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size:15px;
            color:white;
            line-height:1.4;
            box-sizing:border-box;
            text-shadow:0 2px 4px rgba(0,0,0,0.3);
            "></textarea>
            <button
            id="ext-chat-send"
            style="
            position:absolute;
            right:8px;
            bottom:8px;
            width:32px;
            height:32px;
            border-radius:50%;
            background: linear-gradient(135deg, #3ea6ff, #6f8cff);
            border:none;
            color:white;
            cursor:pointer;
            display:flex;
            align-items:center;
            justify-content:center;
            transition: all 0.2s ease;
            font-size:14px;
            box-shadow: 0 4px 12px rgba(62,166,255,0.4);
            ">
            <i class="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>

      </div>

    </div>

    `;

    document.body.appendChild(drawer3);

    // Set background image with correct extension URL
    const panel3El = document.getElementById("ext-drawer-3");
    panel3El.style.backgroundImage = "url('" + chrome.runtime.getURL("imgs/aichat-bg.jpg") + "')";

    // Add Font Awesome for icons
    const faLink = document.createElement("link");
    faLink.rel = "stylesheet";
    faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
    document.head.appendChild(faLink);

    // Load marked.js from CDN for markdown rendering
    if (!document.getElementById("ext-marked-script")) {
      const markedScript = document.createElement("script");
      markedScript.id = "ext-marked-script";
      markedScript.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
      markedScript.onload = function () {
        marked.setOptions({ breaks: true, gfm: true });
      };
      document.head.appendChild(markedScript);
    }

    // Markdown styles
    if (!document.getElementById("ext-md-style")) {
      const mdStyle = document.createElement("style");
      mdStyle.id = "ext-md-style";
      mdStyle.textContent = `
        .message-text pre { overflow:auto; white-space:pre-wrap; word-break:break-word; background:rgba(0,0,0,0.4); padding:10px; border-radius:8px; margin:6px 0; }
        .message-text code { background:rgba(255,255,255,0.1); padding:2px 5px; border-radius:5px; font-size:13px; }
        .message-text pre code { background:transparent; padding:0; }
        .message-text ul, .message-text ol { margin:6px 0; padding-left:20px; }
        .message-text li { margin:3px 0; }
        .message-text p { margin:4px 0; }
        .message-text h1,.message-text h2,.message-text h3 { margin:8px 0 4px; font-weight:700; }
        .message-text blockquote { border-left:3px solid rgba(255,255,255,0.3); padding-left:10px; margin:6px 0; opacity:0.8; }
        .message-text a { color:#3ea6ff; text-decoration:underline; }
        .message-text strong { font-weight:700; }
        .message-text em { font-style:italic; }
      `;
      document.head.appendChild(mdStyle);
    }



    //ELEMENTS

    const panel1 = document.getElementById("ext-drawer-1");
    const toggle1 = document.getElementById("ext-toggle-1");
    const resizer1 = document.getElementById("ext-resizer-1");

    const panel2 = document.getElementById("ext-drawer-2");
    const toggle2 = document.getElementById("ext-toggle-2");
    const resizer2 = document.getElementById("ext-resizer-2");

    const panel3 = document.getElementById("ext-drawer-3");
    const toggle3 = document.getElementById("ext-toggle-3");
    const resizer3 = document.getElementById("ext-resizer-3");



    //START POSITION

    panel1.style.right = `-${panel1.offsetWidth}px`;
    panel2.style.right = `-${panel2.offsetWidth}px`;
    panel3.style.right = `-${panel3.offsetWidth}px`;



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

        if (open3) {
          let offset = panel1.offsetWidth;
          if (open2) offset += panel2.offsetWidth;
          panel3.style.right = offset + "px";
        }

      } else {

        panel1.style.right = `-${panel1.offsetWidth}px`;
        toggle1.innerHTML = "Editor";

        if (open2) {
          panel2.style.right = "0px";
        }

        if (open3) {
          let offset = 0;
          if (open2) offset += panel2.offsetWidth;
          panel3.style.right = offset + "px";
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

        if (open3) {
          panel3.style.right = (panel1.offsetWidth + panel2.offsetWidth) + "px";
        }

      } else {

        panel2.style.right = `-${panel2.offsetWidth}px`;
        toggle2.innerHTML = "Notes";

        if (open3) {
          if (open1) {
            panel3.style.right = panel1.offsetWidth + "px";
          } else {
            panel3.style.right = "0px";
          }
        }

      }

    };



    //TOGGLE DRAWER 3

    let open3 = false;

    toggle3.onclick = function () {

      open3 = !open3;

      if (open3) {

        let offset = 0;
        if (open1) offset += panel1.offsetWidth;
        if (open2) offset += panel2.offsetWidth;

        panel3.style.right = offset + "px";
        toggle3.innerHTML = "▶";

      } else {

        panel3.style.right = `-${panel3.offsetWidth}px`;
        toggle3.innerHTML = "AI Chat";

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



    //RESIZE DRAWER 3

    let resizing3 = false;

    resizer3.onmousedown = function () {

      resizing3 = true;
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

          if (open3) {
            let offset = panel1Width;
            if (open2) offset += panel2.offsetWidth;
            panel3.style.right = offset + "px";
          }

        }

      }


      //DRAWER 3 RESIZE

      if (resizing3) {

        let offset = 0;
        if (open1 && panel1) offset += panel1.offsetWidth;
        if (open2 && panel2) offset += panel2.offsetWidth;

        const newWidth = window.innerWidth - e.clientX - offset;

        if (newWidth >= 220) {

          panel3.style.width = newWidth + "px";

        }

      }

    });



    //MOUSE UP

    document.addEventListener("mouseup", function () {

      resizing1 = false;
      resizing2 = false;
      resizing3 = false;

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
      return "0:00";
    }

    const total = Math.floor(video.currentTime);

    const hrs = Math.floor(total / 3600);
    const min = Math.floor((total % 3600) / 60);
    const sec = (total % 60).toString().padStart(2, "0");

    if (hrs > 0) {
      return hrs + ":" + min.toString().padStart(2, "0") + ":" + sec;
    }

    return min + ":" + sec;
  }

  function timeToSeconds(time) {

    const parts = time.split(":");

    if (parts.length === 3) {
      // H:MM:SS
      return (
        Number(parts[0]) * 3600 +
        Number(parts[1]) * 60 +
        Number(parts[2])
      );
    }

    // M:SS
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



  //AI CHAT LOGIC

  const chatInput = document.getElementById("ext-chat-input");
  const chatSendBtn = document.getElementById("ext-chat-send");
  const chatMessages = document.getElementById("ext-chat-messages");

  function getYoutubeContext() {

    const title =
      document.title;

    const url =
      window.location.href;

    const channel =
      getCurrentChannelInfo();

    const video =
      getVideo();

    let currentTime = "0";

    if (video) {
      currentTime =
        Math.floor(video.currentTime);
    }

    return `
  Video Title: ${title}

  Channel: ${channel?.name || "Unknown"}

  URL: ${url}

  Current Time: ${currentTime} seconds
    `;
  }

  // Auto-resize textarea
  chatInput.addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = Math.min(this.scrollHeight, 150) + "px";
  });

  // Send message on Enter (Shift+Enter for new line)
  chatInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  chatSendBtn.onclick = sendMessage;

  async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addChatMessage(message, "user");
    chatInput.value = "";
    chatInput.style.height = "auto";

    // Create empty AI message for streaming
    const aiMessageId = addChatMessage("", "ai", true);
    chatSendBtn.disabled = true;

    try {
      const response = await fetch(
        "https://text.pollinations.ai/openai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "openai",
            stream: true,
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful YouTube assistant. Use provided YouTube context while answering."
              },
              {
                role: "user",
                content:
                  getYoutubeContext() +
                  "\n\nUser Message:\n" +
                  message
              }
            ]
          })
        }
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let fullText = "";

      while (true) {

        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        const chunk = decoder.decode(value);

        const lines = chunk.split("\n");

        lines.forEach(function (line) {

          if (!line.startsWith("data:")) {
            return;
          }

          const data = line.replace("data:", "").trim();

          if (data === "[DONE]") {
            return;
          }

          try {

            const json = JSON.parse(data);

            const content =
              json.choices?.[0]?.delta?.content;

            if (content) {

              fullText += content;

              updateChatMessage(
                aiMessageId,
                fullText,
                false
              );

            }

          } catch (e) {}

        });

      }

      updateChatMessage(
        aiMessageId,
        fullText,
        true
      );

    } catch (error) {
      updateChatMessage(aiMessageId, "Sorry, I couldn't connect to the AI service. Please try again.", true);
    }

    chatSendBtn.disabled = false;
  }

  function addChatMessage(text, sender, isStreaming = false) {
    const messageId =
      "chat-msg-" +
      Date.now() +
      "-" +
      Math.random()
        .toString(36)
        .slice(2);
    const messageDiv = document.createElement("div");
    messageDiv.id = messageId;

    if (sender === "user") {
      messageDiv.style = `
        background: linear-gradient(135deg, #3ea6ff, #6f8cff);
        padding:12px 16px;
        border-radius:18px;
        max-width:85%;
        align-self:flex-end;
        color:white;
        box-shadow: 0 4px 12px rgba(62,166,255,0.3);
      `;
    } else {
      messageDiv.style = `
        background: rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        padding:12px 16px;
        border-radius:18px;
        max-width:85%;
        align-self:flex-start;
        color:white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
      `;
    }

    const senderDiv = document.createElement("div");
    senderDiv.style = `
      font-size:11px;
      opacity:0.7;
      margin-bottom:4px;
      font-weight:600;
      font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      text-shadow:0 2px 4px rgba(0,0,0,0.5);
    `;
    senderDiv.textContent = sender === "user" ? "You" : "AI Assistant";

    const textDiv = document.createElement("div");
    textDiv.className = "message-text";
    textDiv.style = `
      font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size:14px;
      line-height:1.6;
      text-shadow:0 2px 4px rgba(0,0,0,0.3);
      word-break:break-word;
    `;

    // For streaming, start with empty or loading state
    if (isStreaming && !text) {
      textDiv.innerHTML = '<span style="opacity:0.5;">Thinking...</span>';
    } else if (sender === "ai" && typeof marked !== "undefined") {
      textDiv.innerHTML = marked.parse(text);
    } else {
      textDiv.textContent = text;
    }

    messageDiv.appendChild(senderDiv);
    messageDiv.appendChild(textDiv);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return messageId;
  }

  function updateChatMessage(messageId, text) {

    const messageDiv =
      document.getElementById(messageId);

    if (!messageDiv) {
      return;
    }

    const textDiv =
      messageDiv.querySelector(".message-text");

    if (!textDiv) {
      return;
    }

    // AI markdown render
    if (typeof marked !== "undefined") {
      textDiv.innerHTML = marked.parse(text);
    } else {
      textDiv.textContent = text;
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;

  }

  function addChatLoadingIndicator() {
    const loadingId = "chat-loading-" + Date.now();
    const loadingDiv = document.createElement("div");
    loadingDiv.id = loadingId;
    loadingDiv.style = `
      display:flex;
      align-items:center;
      gap:8px;
      padding:12px 16px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius:18px;
      align-self:flex-start;
      color:white;
      font-size:14px;
      font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;
    loadingDiv.innerHTML = `
      <span>AI is thinking</span>
      <div style="display:flex; gap:4px;">
        <div style="width:8px; height:8px; background:white; border-radius:50%; animation:pulse 1.4s infinite;"></div>
        <div style="width:8px; height:8px; background:white; border-radius:50%; animation:pulse 1.4s 0.2s infinite;"></div>
        <div style="width:8px; height:8px; background:white; border-radius:50%; animation:pulse 1.4s 0.4s infinite;"></div>
      </div>
    `;

    // Add pulse animation if not exists
    if (!document.getElementById("chat-pulse-style")) {
      const style = document.createElement("style");
      style.id = "chat-pulse-style";
      style.textContent = `
        @keyframes pulse {
          0%, 80%, 100% { opacity:0.3; transform:scale(0.8); }
          40% { opacity:1; transform:scale(1); }
        }
      `;
      document.head.appendChild(style);
    }

    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return loadingId;
  }

  function removeChatLoadingIndicator(id) {
    const loadingElement = document.getElementById(id);
    if (loadingElement) {
      loadingElement.remove();
    }
  }

  setInterval(function () {

    if (isExtensionAlive()) {
      createMarkers();
    }

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

    if (!isExtensionAlive()) {
      return;
    }

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
    if (!isExtensionAlive()) {
      return;
    }
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
    if (!isExtensionAlive()) {
      return;
    }
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

    if (document.body) {
      observer.observe(document.body, { subtree: true, childList: true });
    }

    // Also check initial page
    trackVideoWatch();
  }

  function startPlayTimer() {
    if (!isExtensionAlive()) {
      return;
    }
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
    if (!isExtensionAlive()) {
      return;
    }
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
  if (isExtensionAlive()) {
    setInterval(function() {
      if (isExtensionAlive()) {
        chrome.storage.local.set({
          lastActiveTime: Date.now()
        });
      }
    }, 30000);
  }

  initSessionTimer();
  monitorVideoPlayback();
  monitorUrlChanges();

  setInterval(function () {

    if (isExtensionAlive()) {
      checkMode();
    }

  }, 1000);




  document.addEventListener("yt-navigate-start", function () {

    if (!isExtensionAlive()) {
      return;
    }

    chrome.storage.local.get(["mode"], function (data) {
      if (data.mode === "hide" && window.location.pathname.startsWith("/shorts/")) {
        window.location.replace("https://www.youtube.com");
      }
    });

  });

  // ===== CHANNEL WHITELIST =====

  function normalizeChannelText(text) {
    if (!text) {
      return "";
    }
    return text
      .toLowerCase()
      .replace(/^https?:\/\/(www\.)?youtube\.com/, "")
      .replace(/^\/(@|channel\/|c\/|user\/)/, "")
      .replace(/\/+$/, "")
      .trim();
  }

  function getChannelLinkElement() {
    var selectors = [
      "ytd-video-owner-renderer a.yt-simple-endpoint[href^='/@']",
      "ytd-video-owner-renderer a[href^='/channel/']",
      "ytd-watch-metadata ytd-channel-name a",
      "ytd-video-owner-renderer #channel-name a",
      "#owner #channel-name a",
      "#upload-info #channel-name a",
      "#channel-name a",
      "#top-row a.yt-simple-endpoint",
      "#above-the-fold a[href^='/@']",
      "#above-the-fold a[href^='/channel/']"
    ];
    for (var i = 0; i < selectors.length; i++) {
      var el = document.querySelector(selectors[i]);
      if (el) {
        return el;
      }
    }
    return null;
  }

  function getOwnerScope() {
    var el = getChannelLinkElement();
    if (el) {
      var owner = el.closest("ytd-video-owner-renderer") || el.closest("#top-row");
      if (owner) {
        return owner;
      }
    }
    return document;
  }

  function getSubscribeContainer() {
    var scopes = [getOwnerScope(), document];
    var selectors = ["#subscribe-button", "ytd-subscribe-button-renderer", "#subscribe-button-shape"];
    for (var s = 0; s < scopes.length; s++) {
      if (!scopes[s]) {
        continue;
      }
      for (var i = 0; i < selectors.length; i++) {
        var el = scopes[s].querySelector(selectors[i]);
        if (el) {
          return el;
        }
      }
    }
    return null;
  }

  function getCurrentChannelInfo() {
    var id = "";
    var name = "";

    // Primary: the player's own getVideoData() API, always available once
    // the player loads and independent of YouTube's DOM/UI structure.
    var player = document.getElementById("movie_player");
    if (player && typeof player.getVideoData === "function") {
      try {
        var videoData = player.getVideoData();
        if (videoData && videoData.author) {
          name = (videoData.author || "").trim();
        }
      } catch (e) {
        // ignore, fall back to DOM
      }
    }

    // Also read the visible channel link for a stable id (handle/URL),
    // and to fill in the name if the player API wasn't ready yet.
    var el = getChannelLinkElement();
    if (el) {
      var href = (el.getAttribute("href") || "").trim();
      var text = (el.textContent || "").trim();
      if (href) {
        id = href;
      }
      if (!name && text) {
        name = text;
      }
    }

    if (!id && !name) {
      return null;
    }
    return { id: id, name: name };
  }

  function isChannelWhitelisted(list, channel) {
    for (var i = 0; i < list.length; i++) {
      var entry = normalizeChannelText(list[i]);
      if (entry === normalizeChannelText(channel.id) || entry === normalizeChannelText(channel.name)) {
        return true;
      }
    }
    return false;
  }

  function showCaptcha(onSuccess) {
    if (document.getElementById("ext-captcha-modal")) return;

    var a = Math.floor(Math.random() * 9) + 1;
    var b = Math.floor(Math.random() * 9) + 1;
    var answer = a + b;

    var modal = document.createElement("div");
    modal.id = "ext-captcha-modal";
    modal.style = "position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.7);z-index:2147483648;display:flex;align-items:center;justify-content:center;font-family:Roboto,Arial,sans-serif;";

    modal.innerHTML =
      "<div style='background:#1a1a2e;border:1px solid rgba(255,255,255,0.15);border-radius:20px;padding:32px 28px;text-align:center;color:#fff;width:280px;box-shadow:0 8px 32px rgba(0,0,0,0.6);'>" +
        "<div style='font-size:13px;opacity:0.6;margin-bottom:6px;letter-spacing:1px;'>CAPTCHA</div>" +
        "<div style='font-size:18px;margin-bottom:20px;'>Prove you're not a bot 🤖</div>" +
        "<div style='font-size:28px;font-weight:700;margin-bottom:20px;letter-spacing:4px;'>" + a + " + " + b + " = ?</div>" +
        "<input id='ext-captcha-input' type='number' placeholder='Answer...' style='width:100%;padding:10px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.08);color:#fff;font-size:18px;text-align:center;outline:none;box-sizing:border-box;margin-bottom:8px;'>" +
        "<div id='ext-captcha-error' style='color:#ff6b6b;font-size:13px;min-height:18px;margin-bottom:12px;'></div>" +
        "<div style='display:flex;gap:10px;'>" +
          "<button id='ext-captcha-confirm' style='flex:1;padding:10px;border:none;border-radius:12px;background:#3ea6ff;color:#fff;font-size:15px;cursor:pointer;'>Confirm</button>" +
          "<button id='ext-captcha-cancel' style='flex:1;padding:10px;border:none;border-radius:12px;background:rgba(255,255,255,0.1);color:#fff;font-size:15px;cursor:pointer;'>Cancel</button>" +
        "</div>" +
      "</div>";

    document.body.appendChild(modal);

    var input = document.getElementById("ext-captcha-input");
    var errorEl = document.getElementById("ext-captcha-error");
    input.focus();

    function confirm() {
      if (parseInt(input.value) === answer) {
        modal.remove();
        onSuccess();
      } else {
        errorEl.textContent = "Wrong answer, try again!";
        input.value = "";
        input.focus();
      }
    }

    document.getElementById("ext-captcha-confirm").onclick = confirm;
    document.getElementById("ext-captcha-cancel").onclick = function () { modal.remove(); };
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") confirm();
      if (e.key === "Escape") modal.remove();
    });
  }

  function toggleCurrentChannelWhitelist(channel) {
    if (!isExtensionAlive()) {
      return;
    }
    chrome.storage.local.get(["whitelistChannels"], function (data) {
      var list = data.whitelistChannels || [];
      var index = -1;
      for (var i = 0; i < list.length; i++) {
        var entry = normalizeChannelText(list[i]);
        if (entry === normalizeChannelText(channel.id) || entry === normalizeChannelText(channel.name)) {
          index = i;
          break;
        }
      }

      if (index >= 0) {
        // Removing — no CAPTCHA needed
        list.splice(index, 1);
        chrome.storage.local.set({ whitelistChannels: list }, function () {
          refreshWhitelistButton(channel);
        });
      } else {
        // Adding — show CAPTCHA first
        showCaptcha(function () {
          list.push(channel.id || channel.name);
          chrome.storage.local.set({ whitelistChannels: list }, function () {
            refreshWhitelistButton(channel);
          });
        });
      }
    });
  }

  function refreshWhitelistButton(channel) {
    if (!isExtensionAlive()) {
      return;
    }
    var btn = document.getElementById("ext-whitelist-toggle");
    if (!btn) {
      return;
    }
    chrome.storage.local.get(["whitelistChannels", "mode"], function (data) {
      // If mode is "show", disable whitelist system
      if (data.mode === "show") {
        removeWhitelistOverlay();
        return;
      }

      var list = data.whitelistChannels || [];
      var allowed = list.length === 0 || isChannelWhitelisted(list, channel);
      if (allowed) {
        btn.textContent = "\u2713 Whitelisted";
        btn.style.background = "#3ea6ff";
        btn.style.color = "#fff";
        btn.style.borderColor = "#3ea6ff";
        removeWhitelistOverlay();
      } else {
        showWhitelistOverlay(channel);
      }
    });
  }

  function showWhitelistOverlay(channel) {
    if (document.getElementById("ext-whitelist-overlay")) {
      return;
    }
    var overlay = document.createElement("div");
    overlay.id = "ext-whitelist-overlay";
    overlay.style = "position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.95);color:#fff;z-index:2147483647;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-family:Roboto,Arial,sans-serif;padding:20px;box-sizing:border-box;";
    overlay.innerHTML =
      "<img src='" + chrome.runtime.getURL("imgs/wa.svg") + "' style='width:300px;margin-bottom:20px;' alt='Warning'>" +
      "<div style='font-size:22px;margin-bottom:10px;'>\u26A0 This channel is not whitelisted</div>" +
      "<div style='font-size:15px;opacity:0.8;margin-bottom:20px;'>" + (channel.name || "") + "</div>" +
      "<div style='display:flex;gap:12px;'>" +
      "<button id='ext-whitelist-overlay-add' style='padding:10px 20px;border:none;border-radius:20px;background:#3ea6ff;color:#fff;cursor:pointer;font-size:14px;'>Add to Whitelist</button>" +
      "<button id='ext-whitelist-overlay-home' style='padding:10px 20px;border:none;border-radius:20px;background:rgba(255,255,255,0.15);color:#fff;cursor:pointer;font-size:14px;'>Back to Home</button>" +
      "</div>";
    document.body.appendChild(overlay);
    document.getElementById("ext-whitelist-overlay-add").onclick = function () {
      toggleCurrentChannelWhitelist(channel);
    };
    document.getElementById("ext-whitelist-overlay-home").onclick = function () {
      window.location.href = "https://www.youtube.com";
    };
  }

  function removeWhitelistOverlay() {
    var overlay = document.getElementById("ext-whitelist-overlay");
    if (overlay) {
      overlay.remove();
    }
  }

  function ensureWhitelistButton() {
    if (!isExtensionAlive()) {
      return;
    }
    // Check if mode is "show" - if so, disable whitelist system
    chrome.storage.local.get(["mode"], function (data) {
      if (data.mode === "show") {
        var existing = document.getElementById("ext-whitelist-toggle");
        if (existing) {
          existing.remove();
        }
        removeWhitelistOverlay();
        return;
      }

      if (window.location.pathname !== "/watch") {
        var existing = document.getElementById("ext-whitelist-toggle");
        if (existing) {
          existing.remove();
        }
        removeWhitelistOverlay();
        return;
      }
      var channel = getCurrentChannelInfo();
      if (!channel) {
        return;
      }
      var btn = document.getElementById("ext-whitelist-toggle");
      if (btn && btn.getAttribute("data-channel") === channel.id) {
        refreshWhitelistButton(channel);
        return;
      }
      if (btn) {
        btn.remove();
      }
      var subscribeContainer = getSubscribeContainer();
      if (!subscribeContainer || !subscribeContainer.parentNode) {
        return;
      }
      btn = document.createElement("button");
      btn.id = "ext-whitelist-toggle";
      btn.setAttribute("data-channel", channel.id);
      btn.style = "margin-left:8px;padding:0 16px;height:36px;border-radius:18px;border:1px solid rgba(0,0,0,0.2);background:#fff;color:#0f0f0f;cursor:pointer;font-size:14px;font-family:Roboto,Arial,sans-serif;flex-shrink:0;";
      subscribeContainer.parentNode.insertBefore(btn, subscribeContainer.nextSibling);
      btn.onclick = function () {
        toggleCurrentChannelWhitelist(channel);
      };
      refreshWhitelistButton(channel);
    });
  }

  setInterval(function () {

    if (isExtensionAlive()) {
      ensureWhitelistButton();
    }

  }, 1500);

  document.addEventListener("yt-navigate-finish", function () {

    ensureWhitelistButton();

  });