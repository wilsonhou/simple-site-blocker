const blockPage = () => {
  const body = document.querySelector("body");

  // add a div to the body that covers the whole page
  const cover = document.createElement("div");
  cover.style.position = "fixed";
  cover.style.top = "0";
  cover.style.left = "0";
  cover.style.width = "100%";
  cover.style.height = "100%";
  cover.style.backgroundColor = "rgba(0,0,0,1)";
  cover.style.zIndex = "9999";
  cover.style.display = "flex";
  cover.style.justifyContent = "center";
  cover.style.alignItems = "center";

  // add a div to the cover that will contain the text
  const text = document.createElement("div");
  text.style.position = "absolute";
  text.style.top = "50%";
  text.style.left = "50%";
  text.style.transform = "translate(-50%, -50%)";
  text.style.color = "white";
  text.style.fontSize = "40px";
  text.style.fontFamily = "sans-serif";
  text.style.textAlign = "center";
  text.style.width = "100%";
  text.style.height = "100%";
  text.style.lineHeight = "1.5em";
  text.style.zIndex = "10000";
  text.style.display = "flex";
  text.style.justifyContent = "center";
  text.style.alignItems = "center";
  text.innerText = "🚫 You've blocked this site. Probably for good reason. 🚫";

  // append the text to the cover
  cover.appendChild(text);

  // append the div to the body
  body.appendChild(cover);
};

// check if url contains substring any of the blocked sites
chrome.storage.sync.get(["blockedSites"], (result) => {
  const url = window.location.href;
  for (let i = 0; i < result.blockedSites.length; i++) {
    if (url.includes(result.blockedSites[i])) {
      blockPage();
    }
  }
});
