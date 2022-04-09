const renderBlockedSites = (blockedSites) => {
  const blockedSitesList = document.getElementById("blocked");
  blockedSitesList.innerHTML = "";
  if (blockedSites) {
    blockedSites.forEach((site) => {
      const li = document.createElement("li");
      li.innerHTML = `<li><a href="${site}">${site}</a></li>`;
      blockedSitesList.appendChild(li);
    });
  }
};

const resetBlockedSites = () => {
  chrome.storage.sync.set({ blockedSites: [] });
};

// initially set the blockedSites array to an empty array
chrome.storage.sync.get(["blockedSites"], function (result) {
  if (!result.blockedSites) {
    resetBlockedSites();
  }
  renderBlockedSites(!!result.blockedSites ? result.blockedSites : []);
});

document.querySelector("#submit").addEventListener("click", function () {
  // get the value from the input box
  var value = document.querySelector("#input").value;

  if (!value) return;
  // check if value contains "."
  if (value.indexOf(".") === -1) return;

  // get the current blockedSites list
  chrome.storage.sync.get(["blockedSites"], (result) => {
    // set the value in the chrome storage
    const newBlockedSites = !!result.blockedSites
      ? [...result.blockedSites, value]
      : [value];
    // filter duplicates without a set
    const uniqueBlockedSites = [...new Set(newBlockedSites)];

    chrome.storage.sync.set({ blockedSites: uniqueBlockedSites }, () =>
      renderBlockedSites(uniqueBlockedSites)
    );
  });
});

document.querySelector("#clear").addEventListener("click", () => {
  resetBlockedSites();
  renderBlockedSites([]);
});
