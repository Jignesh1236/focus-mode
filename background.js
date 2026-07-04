// Function to update the extension icon based on mode
function updateIcon(mode) {
  console.log("Updating icon for mode:", mode);
  const iconPath = mode === "hide" ? "imgs/ico-on.svg" : "imgs/ico-off.svg";
  
  try {
    chrome.action.setIcon({
      path: iconPath
    }, () => {
      if (chrome.runtime.lastError) {
        console.error("Error setting icon:", chrome.runtime.lastError);
      }
    });
  } catch (e) {
    console.error("Exception setting icon:", e);
  }
}

// Listen for storage changes
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.mode) {
    console.log("Mode changed:", changes.mode.newValue);
    updateIcon(changes.mode.newValue);
  }
});

// Initialize on extension install/update
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed/updated");
  chrome.storage.local.get(["mode"], function (data) {
    const initialMode = data.mode || "show";
    console.log("Initial mode:", initialMode);
    updateIcon(initialMode);
  });
});

// Initialize when service worker starts
chrome.runtime.onStartup.addListener(() => {
  console.log("Service worker started");
  chrome.storage.local.get(["mode"], function (data) {
    updateIcon(data.mode || "show");
  });
});

// Also initialize immediately when service worker loads
console.log("Background script loaded");
chrome.storage.local.get(["mode"], function (data) {
  console.log("Initializing with mode:", data.mode || "show");
  updateIcon(data.mode || "show");
});
