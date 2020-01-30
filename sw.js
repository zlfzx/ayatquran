importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.precaching.precacheAndRoute([
        {url: '/index.html', revision: '3'},
        {url: '/icon.png', revision: '1'},
        {url: '/manifest.json', revision: '1'},
        {url: '/assets/css/bootstrap.min.css', revision: '1'},
        {url: '/assets/css/style.css', revision: '2'},
        {url: '/assets/img/quran.svg', revision: '1'},
        {url: '/assets/js/bootstrap.min.js', revision: '1'},
        {url: '/assets/js/jquery-3.3.1.min.js', revision: '1'},
        {url: '/assets/js/pace.min.js', revision: '1'},
        {url: '/assets/js/popper.min.js', revision: '1'},
        {url: '/assets/js/script.js', revision: '1'}
    ]);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}