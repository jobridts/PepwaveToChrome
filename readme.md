To get data from udp-port in a website in Chrom we need an app and and extensions because:

 A Chrome app can access udp-sockets, but can't access the same localStorage as our website
 an extensions can acces the same localStorage as our website but can't access udp sockets

 We tried some different ways to get data from the app to a website, localStorage seemed to work the best.
