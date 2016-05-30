To get data from udp-port in a website in Chrome we need an app and and extensions because:

 A Chrome app can access udp-sockets, but can't access the same localStorage as our website
 an extensions can acces the same localStorage as our website but can't access udp sockets

 We tried some different ways to get data from the app to a website, localStorage seemed to work the best.

 To use the extensions open chrome://extensions and drag the two .crx files in the window

 in the we'll put the udp-messages in the localStorage of on the location key

 In our website we should sanitize the input from the localStorage.
