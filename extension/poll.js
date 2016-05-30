/* Ask the focus app every second for our location & put it in localStorage*/
window.setInterval(getLocation, 1000);

function getLocation() {
  var focusAppId = "iecjejdfkbdeomklchnioeeppmcombfj";
  var port = chrome.runtime.connect(focusAppId);
  port.postMessage({
    "request": "location"
  });
  port.onMessage.addListener(function(msg) {
    localStorage.setItem("location", msg.answer);
  });
}
