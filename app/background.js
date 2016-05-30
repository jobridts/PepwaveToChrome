//if requested: get last updmessage from localStorage
chrome.runtime.onConnectExternal.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    if (msg.request == "location"){
      chrome.storage.local.get('pepwaveMessage', function(res){
        port.postMessage({"answer":res.pepwaveMessage});
      });
    }
  });
});




function ab2str(buf) {
  var decoder = new TextDecoder();
  var decodedString = decoder.decode(buf);
  return decodedString;
}

var socketId;
// Handle the "onReceive" event.
//store last received udp-message in local storage
var onReceive = function(info) {
  if (info.socketId !== socketId)
    return;
    var UDPMessage = ab2str(info.data);
    chrome.storage.local.set({'pepwaveMessage': UDPMessage});
};



// Create the Socket
chrome.sockets.udp.create({}, function(socketInfo) {
  socketId = socketInfo.socketId;
  // Setup event handler and bind socket.
  chrome.sockets.udp.onReceive.addListener(onReceive);
  chrome.sockets.udp.bind(socketId,
    "0.0.0.0", 60660, function(result) {
      if (result < 0) {
        console.log("Error binding socket.");
        return;
      }
  });
});
