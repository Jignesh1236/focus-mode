<div align="center">

# BingeBlocker

**Transform your YouTube experience into a productive learning environment**

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green?style=for-the-badge&logo=google-chrome)](https://chrome.google.com/webstore)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.2-orange?style=for-the-badge)](manifest.json)
[![Stars](https://img.shields.io/github/stars/Jignesh1236/focus-mode?style=for-the-badge&logo=github)](https://github.com/Jignesh1236/focus-mode)

</div>

---

## ✨ Features

- 🚫 **Hide Distractions** — Remove related videos, comments, shorts, notifications, and homepage grid
- 📝 **Built-in Notes Panel** — Take timestamped notes while watching videos
- 💾 **Import / Export Notes** — Save and share your notes as JSON files
- 📊 **Session Tracking** — Monitor your watch time and video count
- ⏱️ **Session Timer** — Track total time spent with double-click reset
- 🎨 **Glassmorphism UI** — Beautiful frosted glass design
- 📋 **Channel Whitelist** — Allow specific channels to show all content
- 🔧 **Resizable Panels** — Customize drawer widths to your preference
- 🎬 **Video Markers** — Visual markers on progress bar for your notes
- 🤖 **AI Chat Panel** — Context-aware AI assistant powered by Pollinations AI

---

## 📸 Preview

### Main Popup

<div align="center">
  <img src="imgs/bg.png" alt="Extension Popup" width="400">
</div>

- Session timer with real-time tracking
- Video counter
- Quick toggle for focus mode
- Access to whitelist settings

### Notes Panel

- Timestamped note-taking
- Import / Export functionality
- Beautiful glassmorphism design
- Video markers on progress bar

---

## 🚀 Installation

### For Developers

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jignesh1236/focus-mode.git
   cd focus-mode
   ```

2. **Open Chrome Extensions**
   - Navigate to `chrome://extensions/`
   - Enable **Developer Mode** (top right corner)

3. **Load the Extension**
   - Click **Load Unpacked**
   - Select the project folder
   - Extension is now active!

4. **Reload after changes**
   - Click the reload button on the extension card after making changes

### For End Users

> Coming soon to Chrome Web Store!

---

## 📖 Usage

### Toggle Focus Mode
- Click the extension icon to open the popup
- Click **Hide** to enable focus mode
- Click **Show** to disable focus mode

### Taking Notes
1. Enable focus mode
2. Click the **Notes** tab on the right side of YouTube
3. Type your note and click **Add Note**
4. Notes are automatically timestamped
5. Click on a timestamp to jump to that moment in the video

### Managing Notes
| Action | How |
|--------|-----|
| **Import Notes** | Click the import icon to load notes from a JSON file |
| **Export Notes** | Click the export icon to save your notes |
| **Clear All** | Click Clear to remove all notes for the current video |

### Session Tracking
- **Session Time** — Shows total time spent watching *(double-click to reset)*
- **Videos Watched** — Counts unique videos viewed *(double-click to reset)*

### Channel Whitelist
1. Click **Whitelist** in the popup
2. Add channels you want to allow full access
3. Whitelisted channels show all content even in focus mode
4. A CAPTCHA challenge is shown before adding — to prevent accidental whitelisting

### AI Chat
1. Click the **AI Chat** tab on the right side of YouTube
2. Ask any question — the AI automatically knows the video title, channel, and current timestamp
3. Responses stream in real-time with markdown formatting

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5 / CSS3** | Structure and glassmorphism styling |
| **JavaScript (ES6+)** | All extension logic |
| **Chrome Extension API (MV3)** | Storage, content scripts, background worker |
| **Pollinations AI** | Streaming AI chat (no API key needed) |
| **marked.js** | Markdown rendering in AI responses |
| **Font Awesome 6** | Icons throughout the UI |
| **Varela Round** | Typography |

---

## 📂 Project Structure

```
hide/
├── 📄 manifest.json        # Extension configuration (Manifest V3)
├── 🎨 popup.html           # Extension popup UI
├── ⚡ popup.js             # Popup functionality & session timer
├── 🎬 js.js               # Content script injected into YouTube
├── 🔧 background.js        # Background service worker
├── 📋 whitelist.html       # Whitelist management UI
├── 📝 whitelist.js         # Whitelist functionality
├── 🖼️ imgs/                # Images and assets
│   ├── bg.png              # Main background
│   ├── notes-bg.jpg        # Notes panel background
│   ├── aichat-bg.jpg       # AI chat panel background
│   └── wa.svg              # Whitelist warning illustration
└── 🌐 landing/             # Landing page assets
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new features
- 🔀 Submit pull requests

---

## 👨‍💻 Author

**Jignesh**

- [GitHub](https://github.com/jignesh1236)
- [Project Repository](https://github.com/Jignesh1236/focus-mode)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ for productive learning**

[⬆ Back to Top](#-bingeblocker)

</div>
