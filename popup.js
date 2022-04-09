// function updateBlockedSitesList() {
//   alert("nice");
// }

// // add an event listener to the button
// document.querySelector("#submit").addEventListener("click", function () {
//   // get the value from the input box
//   var value = document.querySelector("#input").value;

//   // get the current blockedSites list
//   chrome.storage.sync.get(["blockedSites"], function (result) {
//     // set the value in the chrome storage
//     console.log(result);
//     console.log(value);
//     chrome.storage.sync.set({ blockedSites: [value] }, function () {
//       // show the value in the popup
//     });
//   });

//   updateBlockedSitesList();
// });
