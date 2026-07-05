var input = document.getElementById("channelInput");
var addBtn = document.getElementById("addBtn");
var list = document.getElementById("channelList");
var emptyNote = document.getElementById("emptyNote");

function loadList() {
  chrome.storage.local.get(["whitelistChannels"], function (data) {
    renderList(data.whitelistChannels || []);
  });
}

function renderList(channels) {
  list.innerHTML = "";

  if (channels.length === 0) {
    emptyNote.style.display = "block";
  } else {
    emptyNote.style.display = "none";
  }

  for (var i = 0; i < channels.length; i++) {
    var item = document.createElement("li");
    item.className = "channel-item";

    var span = document.createElement("span");
    span.textContent = channels[i];

    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.setAttribute("data-index", i);

    item.appendChild(span);
    item.appendChild(removeBtn);
    list.appendChild(item);
  }
}

function addChannel() {
  var value = input.value.trim();

  if (!value) {
    return;
  }

  chrome.storage.local.get(["whitelistChannels"], function (data) {
    var channels = data.whitelistChannels || [];
    channels.push(value);

    chrome.storage.local.set({ whitelistChannels: channels }, function () {
      input.value = "";
      loadList();
    });
  });
}

addBtn.onclick = function () {
  addChannel();
};

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addChannel();
  }
});

list.onclick = function (e) {
  if (!e.target.classList.contains("remove-btn")) {
    return;
  }

  var index = Number(e.target.getAttribute("data-index"));

  chrome.storage.local.get(["whitelistChannels"], function (data) {
    var channels = data.whitelistChannels || [];
    channels.splice(index, 1);

    chrome.storage.local.set({ whitelistChannels: channels }, function () {
      loadList();
    });
  });
};

loadList();
