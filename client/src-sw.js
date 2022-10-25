// TODO: Create a service worker that caches static assets:
window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then((reg) => {
        console.log('We found your service worker file!', reg);
        });
    }
});