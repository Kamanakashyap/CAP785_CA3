document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Rhythm Dance Studio!");
  });


if("serviceWorker"in navigator){navigator.serviceWorker.register("/service-worker.js").then(e=>console.log("Service Worker registered:",e)).catch(e=>console.log("Registration failed:",e))}
  